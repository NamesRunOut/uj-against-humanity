// Dependencies

var cards = require('./cards.js');

const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, ({
  allowEIO3: true // false by default
})
);
const port = process.env.PORT || 4001;
var cors = require('cors')

app.use(express.static(path.join(__dirname, './build')));
app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}))

app.options('*', cors())

app.get('/', (req, res, next) => res.sendFile(__dirname + './index.html'));

// Routing

app.get('/build', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(port, function() {
  console.log('Starting server on port '+port);
});

var players = {};
var playerList = [];
var noPlayers = 0;
const playersMax = 10;

var winningPoints = 5;

var whiteQueue = [];
var whitei = 0;
var whitePerPerson = 10;

var blackQueue = [];
var blacki = 0;

var cardsPlayed = [];
var cardsPlayedi = 0;

var tzarTag = 0;
var tzarID;

var acceptCards = false;
var acceptTzar = false;

var gameStarted = false;
var prevBlack;

var mostpickedcards = [];

var pressed = false;

io.on('connect', function(client){
  io.to(client.id).emit('sessionid', client.id);
  io.to(client.id).emit('recieveCategories', cards.getCat);
  players[client.id] = {
    id: client.id,
    name: "unknown",
    points: 0,
    tzar: false,
    played: false,
    tag: noPlayers,
    pick: false,
    amountPicked: 0,
    rerolled: false,
    voted: false
  };
});

io.on('connection', (client) => {
  client.on('new player', function(){
    noPlayers++;
    playerList.push(client.id);
    console.log(playerList);
    io.sockets.emit('message', message("unknown", "joins the lobby"));
    io.sockets.emit('state', playerList, players);
    if (gameStarted==true){
           for (let i=0;i<whitePerPerson;i++){
                console.log("white sent: ", client.id, whiteQueue[0].matchid, cards.white[whiteQueue[0].cardid].text );
                io.to(client.id).emit('recieveWhite', client.id, whiteQueue[0], cards.white[whiteQueue[0].cardid]);
                whiteQueue.shift();
                if (whiteQueue.length===0) shuffleWhite();

           }
           io.to(client.id).emit('blackCard', prevBlack);
           if (acceptCards==true) {
               players[client.id].pick=true;
               emitEmptyWhite();
           }
    }
    io.sockets.emit('state', playerList, players);
  });
  client.on('disconnect', function() {
    if (noPlayers==1 || gameStarted==false) {
      for (let id in playerList) {
          if (players[playerList[id]].id==client.id) {
            playerList.splice(id, 1);
            //delete players[id];
            noPlayers--;
          }
      }

      pressed=false;
      gameStarted=false;

      let playername = "user";
      if (players[client.id]!=undefined) playername=players[client.id].name;
      io.sockets.emit('message', message("server", playername+" disconnected from the server "+"["+client.id+"]"));
      io.sockets.emit('state', playerList, players);
      console.log('user disconnected', playerList);

      return;
    }
    for (let id in playerList) {
      if (playerList[id]==client.id) {
           // remove commited cards of that person
           for (let id2 in cardsPlayed){
               if (cardsPlayed[id2].player==client.id) {
                   cardsPlayed.splice(id2, 1);
                   cardsPlayedi--;
               }
           }
        emitEmptyWhite();
        if (players[playerList[id]].tzar==true) {
        // appoint new tzar
            tzarTag++;
            if (tzarTag>=playerList.length) tzarTag=0;
            players[playerList[tzarTag]].tzar=true;
            players[playerList[tzarTag]].pick=false;
            players[playerList[tzarTag]].amountPicked=0;
            if (acceptCards==true) io.to(playerList[tzarTag]).emit('blockTzar');
        // remove played cards of new tzar
            for (let id2 in cardsPlayed){
                     if (cardsPlayed[id2].player==players[playerList[tzarTag]].id) {
                         cardsPlayed.splice(id2, 1);
                         cardsPlayedi--;
                     }
            }
            emitEmptyWhite();
        }

        //console.log(noPlayers, cardsPlayed.length, "sdikjfbnsdihfjswbfiuyshdgbusi");
        if (noPlayers-2<=cardsPlayed.length) {
            acceptCards=false;
            acceptTzar=true;
        }
        if (acceptTzar==true) {
            shufflePlayed();
            players[playerList[tzarTag]].pick=true;
            io.sockets.emit('playedCards', cardsPlayed, 0);
            io.sockets.emit('enableCards');
            for (let i in playerList){
              if (playerList[tzarTag]!=playerList[i]) io.to(playerList[i]).emit('playerWait');
            }
            io.to(playerList[tzarTag]).emit('tzarTurn');
        }

        playerList.splice(id, 1);
        noPlayers--;

        if (tzarTag<0) tzarTag=playerList.length-1;
        else if (tzarTag>=noPlayers) tzarTag=0;

        io.sockets.emit('state', playerList, players);
        break;
      }
    }
      let playername = "user";
      if (players[client.id]!=undefined) playername=players[client.id].name;
        io.sockets.emit('message', message("server", playername+" disconnected from the server "+"["+client.id+"]"));
        io.sockets.emit('state', playerList, players);
        console.log('user disconnected', playerList);
        if (noPlayers==0) {
            pressed=false;
            gameStarted=false;
        }
  });
  client.on('updateName', function(nickname) {
      if (players[client.id]!=undefined && nickname!="" && nickname!=null && nickname!=undefined) players[client.id].name = nickname;
      console.log("updateName", playerList);
      io.sockets.emit('message', message(nickname, "is in the game"));
      io.sockets.emit('state', playerList, players);
  });
  client.on('setPoints', function(number){
    if(number=="Points to win") return;
    winningPoints=number;
    console.log("Points to win set: ", winningPoints);
    io.sockets.emit('pointsToWin', winningPoints);
    io.sockets.emit('message', message("server", "Points now required to win: "+winningPoints));
    io.sockets.emit('state', playerList, players);
  });
  client.on('skipBlack', function(){
    if (acceptTzar || !gameStarted) return;
    console.log("black card: ", cards.black[blackQueue[0]]);
    io.sockets.emit('blackCard', cards.black[blackQueue[0]]);
    io.sockets.emit('message', message("Black Card", cards.black[blackQueue[0]].text));
    prevBlack = cards.black[blackQueue[0]];
    blackQueue.shift();
    if (blackQueue.length===0) shuffleBlack();
    io.sockets.emit('state', playerList, players);
    blackSkip=0;
  });
  client.on('reroll', function(){
    if(!gameStarted) return;
    if(players[client.id].reroll) return;
    if(players[client.id].tzar || acceptTzar) return;
    if(!gameStarted) return;
    players[client.id].reroll = true;

    io.to(client.id).emit('clearBoard');
    for (let i=0;i<whitePerPerson;i++){
        console.log("white sent: ", client.id, whiteQueue[0].matchid, cards.white[whiteQueue[0].cardid].text);
        io.to(client.id).emit('recieveWhite', client.id, whiteQueue[0], cards.white[whiteQueue[0].cardid]);
        whiteQueue.shift();
        if (whiteQueue.length===0) shuffleWhite();
    }

    io.sockets.emit('message', message("server", players[client.id].name+" rerolled their cards"));
  });
  client.on('cardCommited', function(matchCardID, cardID) { // matchCardID
      // emit to client card disabling signal
      if (acceptCards==false || players[client.id].pick==false) return;
      players[client.id].amountPicked++;
             players[client.id].played=true;
             players[client.id].pick=false;
             io.sockets.emit('playedCardsHidden');
             io.sockets.emit('state', playerList, players);
             io.to(client.id).emit('recieveWhite', client.id, whiteQueue[0], cards.white[whiteQueue[0].cardid]);
             io.sockets.emit('disableCards', client.id);
             whiteQueue.shift();
             if (whiteQueue.length===0) shuffleWhite();
             cardsPlayed[cardsPlayedi++] = {
               player: client.id,
               matchid: matchCardID,
               card: cards.white[cardID]
             }
             console.log(cardsPlayedi, cardsPlayed, cardID);
             if (cardsPlayedi>=noPlayers-1){
               acceptCards=false;
               acceptTzar=true;
               players[playerList[tzarTag]].pick=true;
               console.log("Tzar turn", tzarTag);
               shufflePlayed();
               io.sockets.emit('playedCards', cardsPlayed, 0);
               io.sockets.emit('state', playerList, players);
               io.sockets.emit('enableCards');

               for (let i in playerList){
                 if (playerList[tzarTag]!=playerList[i]) io.to(playerList[i]).emit('playerWait');
               }
               io.to(playerList[tzarTag]).emit('tzarTurn');
               
             }        
  });
  client.on('tzarPicked', function(cardID) {
      // emit to client card disabling signal
      if (acceptTzar==false || players[client.id].tzar==false) return;
      acceptTzar=false;
      for (let id in cardsPlayed) {
        if (cardsPlayed[id].matchid==cardID) {
          if (players[cardsPlayed[id].player]!=undefined) players[cardsPlayed[id].player].points++;
          mostpickedcards.push(cardsPlayed[id].card.id);
          //console.log(mostpickedcards)
          io.sockets.emit('highlightCard', cardID, players);
          io.sockets.emit('state', playerList, players);
          io.sockets.emit('message', message(players[cardsPlayed[id].player].name, "wins this round with: "+cardsPlayed[id].card.text+"; Next round starting in 5s..."));
        }
        if (players[cardsPlayed[id].player].points>=winningPoints) {
          io.sockets.emit('message', message(players[cardsPlayed[id].player].name, "wins!"));
          gameStarted=false;
          pressed=false;
          io.sockets.emit('startEnable');
          io.sockets.emit('pointsEnable');
          return;
        }
      }
      setUpTurn();
  });
  client.on('start', async function() {
    // doesnt check if there is enough cards
      if (pressed) return;
      pressed=true;
      gameStarted = true;
      io.sockets.emit('pointsDisable');
      io.sockets.emit('startDisable');
      io.sockets.emit('playedCards', [], 0);
      io.sockets.emit('clearBoard');
      whiteQueue.splice(0, whiteQueue.length);
      blackQueue.splice(0, blackQueue.length);
      cardsPlayed.splice(0, cardsPlayed.length);
      whitei=0;
      cardsPlayedi=0;
      blacki=0;
      blackSkip=0;

      io.sockets.emit('loadloader');
      io.sockets.emit('message', message("server", "Fetching white cards..."))
      await cards.generateWhite();
      io.sockets.emit('message', message("server", "Fetching black cards..."))
      await cards.generateBlack();

      let tmp = (whitePerPerson*2)+(noPlayers*winningPoints);
      tmp = tmp * noPlayers;
      tmp = Math.ceil(tmp/cards.white.length);
      for (let i=0;i<tmp;i++){
        shuffleWhite();
      }
      for (let i=0;i<Math.ceil((noPlayers*winningPoints)/cards.black.length);i++){
        shuffleBlack();
      }

      console.log("White cards prepped: ", whiteQueue.length);
      console.log("Black cards prepped: ", blackQueue.length);
      io.sockets.emit('unloadloader');

      console.log("black card: ", cards.black[blackQueue[0]]);
      acceptCards = true;
      acceptTzar = false;

      for (let id in playerList) {
        for (let i=0;i<whitePerPerson;i++){
          console.log("white sent: ", playerList[id], whiteQueue[0].matchid, cards.white[whiteQueue[0].cardid].text);
          io.to(playerList[id]).emit('recieveWhite', playerList[id], whiteQueue[0], cards.white[whiteQueue[0].cardid]);
          whiteQueue.shift();
          if (whiteQueue.length===0) shuffleWhite();
        }
      }

      io.sockets.emit('state', playerList, players);
      io.sockets.emit('blackCard', cards.black[blackQueue[0]]);
      io.sockets.emit('message', message("Black Card", cards.black[blackQueue[0]].text));
      prevBlack = cards.black[blackQueue[0]];
      blackQueue.shift();
      if (blackQueue.length===0) shuffleBlack();

      for (let id in players) {
        players[id].points=0;
        players[id].tzar=false;
        players[id].played=false;
        players[id].pick=true;
        players[id].amountPicked=0;
        players[id].reroll=false;
        players[id].voted=false;
      }

      tzarTag=0;
      players[playerList[tzarTag]].tzar=true;
      players[playerList[tzarTag]].pick=false;
      players[playerList[tzarTag]].amountPicked=0;

      io.sockets.emit('state', playerList, players);
      io.to(playerList[tzarTag]).emit('blockTzar');
      io.sockets.emit('startTurn');
      pressed=false;
  });
  client.on('message', async function(msg) {
    let date = new Date();
    let input = {
      date: "["+String(date.getHours()).padStart(2,"0")+":"
      +String(date.getMinutes()).padStart(2,"0")+":"
      +String(date.getSeconds()).padStart(2,"0")+"]",
      author: players[client.id].name,
      sauce: msg
    }
    console.log(input.date," ",players[client.id].name," : ", input.sauce);
    io.sockets.emit('message', input);
  });
});

function message(author, input){
  let date = new Date();
  let msg = {
    date: "["+String(date.getHours()).padStart(2,"0")+":"
    +String(date.getMinutes()).padStart(2,"0")+":"
    +String(date.getSeconds()).padStart(2,"0")+"]",
    author: author,
    sauce: input
  }
  return msg;
}

function setUpTurn(){
      setTimeout(function(){
        cardsPlayed.splice(0, cardsPlayed.length);
        cardsPlayedi=0;
        io.sockets.emit('playedCards', [], 0);
        io.sockets.emit('message', message("Black Card", cards.black[blackQueue[0]].text));
        io.sockets.emit('blackCard', cards.black[blackQueue[0]]);
        prevBlack = cards.black[blackQueue[0]];
        blackQueue.shift();
        if (blackQueue.length===0) shuffleBlack();
        blackSkip=0;

        acceptCards=true;
        acceptTzar=false;
        for (let id in players){
          players[id].tzar=false;
          players[id].played=false;
          players[id].pick=true;
          players[id].amountPicked=0;
          players[id].voted=false;
        }
        tzarTag++;
        if (tzarTag>=playerList.length) tzarTag=0;
        players[playerList[tzarTag]].tzar=true;
        players[playerList[tzarTag]].pick=false;
        players[playerList[tzarTag]].amountPicked=0;
        io.sockets.emit('state', playerList, players);
        acceptCards=true;
        io.sockets.emit('enableCards');
        io.to(playerList[tzarTag]).emit('blockTzar');
      }, 5000)
}

function shuffleWhite(){
    let nums = [];
    for (let k=0;k<cards.white.length;k++){
      nums[k]=k;
    }
    let i = cards.white.length;
    let j = 0;

  while (i--) {
      j = Math.floor(Math.random() * (i+1));
      whiteQueue.push({
        cardid: nums[j],
        matchid: whitei++
      });
      nums.splice(j,1);
  }
  //console.log(whiteQueue);
}

function shuffleBlack(){
    let nums = [];
    for (let k=0;k<cards.black.length;k++){
      nums[k]=k;
    }
    let i = cards.black.length;
    let j = 0;

  while (i--) {
      j = Math.floor(Math.random() * (i+1));
      blackQueue.push(nums[j]);
      nums.splice(j,1);
  }
 //console.log(blackQueue);
}

function shufflePlayed(){
    let nums = [];
    for (let k=0;k<cardsPlayed.length;k++){
      nums[k]=k;
    }
    let i = cardsPlayed.length;
    let j = 0;
    let playedQueue = [];

  while (i--) {
      j = Math.floor(Math.random() * (i+1));
      playedQueue.push(cardsPlayed[j]);
      cardsPlayed.splice(j,1);
  }
  cardsPlayed = playedQueue;
}

function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1;
            while ((j > -1) && (current.amount < inputArr[j].amount)) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}

function emitEmptyWhite(){
  io.sockets.emit('playedCards', [], 0);
  for (let i=0;i<cardsPlayed.length;i++){
    io.sockets.emit('playedCardsHidden');
  }
}