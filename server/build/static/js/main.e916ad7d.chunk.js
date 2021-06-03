(this["webpackJsonpnames-cards"]=this["webpackJsonpnames-cards"]||[]).push([[0],{106:function(e,t,c){},254:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(107),r=c.n(a),i=c(29),s=c(4),o=c(2),l=c(49),d=c.n(l),u=c(1),j=d()("http://127.0.0.1:4001"),b=(d()(),Object(n.createContext)()),m=function(e){var t=Object(n.useState)(j),c=Object(o.a)(t,1)[0];return Object(u.jsx)(b.Provider,{value:c,children:e.children})},h=function(e){var t=e.response,c=Object(n.useContext)(b);return Object(u.jsx)("button",{type:"button",id:"startButton",onClick:function(){c.emit("start")},disabled:t,children:"START"})},O=function(e){var t=e.response,c=Object(n.useContext)(b);return Object(u.jsxs)("div",{className:"navbar_points",children:["Score limit:",Object(u.jsxs)("select",{id:"pointsInput",defaultValue:"5",children:[Object(u.jsx)("option",{value:"1",children:"1"}),Object(u.jsx)("option",{value:"2",children:"2"}),Object(u.jsx)("option",{value:"3",children:"3"}),Object(u.jsx)("option",{value:"4",children:"4"}),Object(u.jsx)("option",{value:"5",children:"5"}),Object(u.jsx)("option",{value:"6",children:"6"}),Object(u.jsx)("option",{value:"7",children:"7"}),Object(u.jsx)("option",{value:"8",children:"8"}),Object(u.jsx)("option",{value:"9",children:"9"}),Object(u.jsx)("option",{value:"10",children:"10"})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"button",id:"pointsButton",onClick:function(){var e,t=(null===(e=document.getElementById("pointsInput"))||void 0===e?void 0:e.value)||5;t&&c.emit("setPoints",t)},disabled:t,children:"Select"})})]})},x=c(3),p=function(e){var t=e.response,c=Object(n.useContext)(b),a=Object(n.useState)([]),r=Object(o.a)(a,2),i=r[0],s=r[1];return Object(n.useEffect)((function(){c.on("recieveCategories",(function(e){for(var t=[],c=0;c<e.length;c++)t.push({deck:e[c],checked:!0});s([].concat(t))}))}),[c]),Object(u.jsxs)("div",{className:"navbar_decks",children:[Object(u.jsx)("button",{id:"deckButton",onClick:function(){for(var e=[],t=0;t<i.length;t++)i[t].checked&&e.push(i[t].deck.id);c.emit("setDecks",e)},disabled:0===i.length||t,children:"Decks select"}),Object(u.jsx)("div",{className:"navbar_decks_content",id:"catplace",children:0!==i.length?i.map((function(e){return Object(u.jsxs)("span",{children:[Object(u.jsx)("input",{type:"checkbox",className:"deck",value:e.deck.id,checked:e.checked,onChange:function(e){return function(e){for(var t=e.value,c=e.checked,n=Object(x.a)(i),a=0;a<n.length;a++)if(parseFloat(String(n[a].deck.id))===parseFloat(t)){n[a].checked=c;break}s(Object(x.a)(n))}(e.target)}}),Object(u.jsx)("label",{htmlFor:String(e.deck.id),children:e.deck.name}),Object(u.jsx)("br",{})]},e.deck.id)})):Object(u.jsx)("span",{children:"Sometimes it takes a while for the API/server to start. If you can't see any decks, please reload the page after a few minutes"})})]})},v=Object(n.createContext)([!1,void 0]),f=function(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),a=c[0],r=c[1];return Object(u.jsx)(v.Provider,{value:[a,r],children:e.children})},g=function(){var e=Object(n.useContext)(v),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(u.jsx)("div",{className:"navbar_decks",children:Object(u.jsxs)("button",{onClick:function(){return a((function(e){return!e}))},children:["Drag cards ",c?"ON":"OFF"]})})},y=function(){var e=Object(n.useContext)(b),t=Object(n.useState)(!1),c=Object(o.a)(t,2),a=c[0],r=c[1];return Object(n.useEffect)((function(){e.on("startEnable",(function(e){r(!1)})),e.on("startDisable",(function(e){r(!0)}))}),[e]),Object(u.jsxs)("div",{className:"navbar",id:"player",children:[Object(u.jsx)(h,{response:a}),Object(u.jsx)(O,{response:a}),Object(u.jsx)(p,{response:a}),Object(u.jsx)(g,{})]})},C=Object(n.createContext)(0),k=function(e){var t=Object(n.useContext)(b),c=Object(n.useState)(0),a=Object(o.a)(c,2),r=a[0],i=a[1];return Object(n.useEffect)((function(){t.on("blackCard",(function(e){i(e.type)}))}),[t]),Object(u.jsx)(C.Provider,{value:r,children:e.children})};var N=Object(n.createContext)([[]]),w=function(e){var t=Object(n.useContext)(b),c=Object(n.useContext)(C),a=Object(n.useState)([]),r=Object(o.a)(a,2),i=r[0],s=r[1],l=Object(n.useState)([]),d=Object(o.a)(l,2),j=d[0],m=d[1];return Object(n.useEffect)((function(){s(Object(x.a)(j))}),[j]),Object(n.useEffect)((function(){t.off("highlightCard").on("highlightCard",(function(e,t){return function(e,t,c,n,a,r){if(console.log("highlight1",c),0!==c.length){var i={id:"unknown",name:"unknown"},s=[];switch(r){case 0:if(c===Array()){for(var o=0;o<c.length;o++)if(c[o].matchid===e){i={id:c[o].player,name:t[c[o].player].name};break}for(var l=0;l<c.length;l++)s.push({card:c[l].card,matchid:c[l].matchid,player:c[l].player,playerName:t[c[l].player].name,chosen:c[l].player!==i.id,revealed:!0});a([].concat(s))}break;case 2:case 3:if(c===Array()){for(var d=0;d<c.length;d++)for(var u=0;u<c[d].length;u++)if(c[d][u].matchid===e){i={id:c[d][u].player,name:t[c[d][u].player].name};break}for(var j=[],b=0;b<c.length;b++){for(var m=0;m<c[b].length;m++)j.push({card:c[b][m].card,matchid:c[b][m].matchid,player:c[b][m].player,playerName:t[c[b][m].player].name,chosen:c[b][m].player!==i.id,revealed:!0});s.push(j),j=[]}a([].concat(s))}}}}(e,t,i,0,m,c)}))}),[i]),Object(n.useEffect)((function(){t.on("playedCards",(function(e,t){return function(e,t,c,n,a,r){if(console.log("played",c,e.length,t),0!==e.length)switch(t){case 0:a(Object(x.a)(e));break;case 2:case 3:var i=e;!function(e){for(var t=e.length,c=1;c<t;c++){for(var n=e[c],a=c-1;a>-1&&n.player<e[a].player;)e[a+1]=e[a],a--;e[a+1]=n}}(i);for(var s=[i[0]],o=[],l=1;l<i.length;l++)i[l].player===i[l-1].player?s.push(i[l]):(o.push(s),s=[i[l]]);o.push(s),a([].concat(o))}else a([])}(e,t,i,0,m)}))}),[]),Object(u.jsx)(N.Provider,{value:[i,s],children:e.children})},S=function(){var e=Object(n.useContext)(b),t=Object(n.useState)({id:0,text:"Questions will appear here, answer with one (or more) of your cards",type:0}),c=Object(o.a)(t,2),a=c[0],r=c[1];return Object(n.useEffect)((function(){e.on("blackCard",(function(e){r({id:e.id,text:e.text,type:e.type})}))}),[e]),Object(u.jsx)("div",{id:"blackCard",children:Object(u.jsx)("div",{className:"biggerCard blackCard",children:a.text})})},_=function(){var e=Object(n.useContext)(b),t=Object(n.useState)([]),c=Object(o.a)(t,2),a=c[0],r=c[1],i=Object(n.useState)(0),s=Object(o.a)(i,2),l=s[0],d=s[1];return Object(n.useEffect)((function(){r(0!==l?[].concat(Object(x.a)(a),[l]):[])}),[l]),Object(n.useEffect)((function(){e.on("playedCardsHidden",(function(){d((function(e){return e+1}))})),e.on("playedCards",(function(e,t){d(0)})),e.on("highlightCard",(function(e,t){d(0)}))}),[e]),Object(u.jsx)(u.Fragment,{children:a.length>0?a.map((function(e){return Object(u.jsx)("div",{className:"biggerCard hidden"},e)})):Object(u.jsx)(u.Fragment,{})})},E=function(e){var t=e.card,c=(e.player,e.playerName),a=e.chosen,r=e.revealed,i=Object(n.useContext)(b),s=function(e){r||i.emit("tzarPicked",e)};return 0===t.card.type||2===t.card.type?Object(u.jsxs)("div",{className:"biggerCard",onClick:function(){return s(t.matchid)},style:{opacity:a?"1":"0.5"},children:[t.card.text," ",r?"[".concat(c,"]"):""]},t.matchid):1===t.card.type?Object(u.jsx)("div",{className:"biggerCard",onClick:function(){return s(t.matchid)},style:{backgroundImage:"url(".concat(t.card.text,")"),opacity:a?"1":"0.5"},children:r?"[".concat(c,"]"):""},t.matchid):Object(u.jsx)(u.Fragment,{})},F=function(){var e=Object(n.useContext)(N),t=Object(o.a)(e,1)[0],c=Object(n.useContext)(C);return Object(u.jsxs)("div",{id:"cards",children:[Object(u.jsx)(_,{}),0===t.length?Object(u.jsx)(u.Fragment,{}):t.map((function(e){switch(c){case 0:if(!Array.isArray(e))return Object(u.jsx)(E,{card:e,chosen:!e.chosen,revealed:e.revealed||!1,playerName:"jhg",player:e.player||"unknown"},e.matchid);break;case 2:case 3:var t=0;if(Array.isArray(e))return Object(u.jsx)("div",{className:"box",children:e.map((function(e){return Object(u.jsx)(E,{card:e,chosen:!e.chosen,revealed:e.revealed||!1,playerName:"jhg",player:e.player||"unknown"},"".concat(e.matchid).concat(t++))}))},"".concat(t++,"box"))}return Object(u.jsx)(u.Fragment,{})}))]})},I=function(){return Object(u.jsxs)("div",{className:"mainArea",children:[Object(u.jsx)(S,{}),Object(u.jsx)("div",{children:Object(u.jsx)(w,{children:Object(u.jsx)(F,{})})})]})},T=c(256),A=Object(n.createContext)([]),B=function(e){var t=Object(n.useContext)(C),c=Object(n.useContext)(b),a=Object(n.useState)([]),r=Object(o.a)(a,2),i=r[0],s=r[1],l=Object(n.useState)(null),d=Object(o.a)(l,2),j=d[0],m=d[1],h=Object(n.useState)(!1),O=Object(o.a)(h,2),p=O[0],v=O[1],f=Object(n.useState)({canCommit:!0,commitCount:0}),g=Object(o.a)(f,2),y=g[0],k=g[1],N=Object(n.useState)({card:{cardid:-1,matchid:-1},sauce:{id:-1,text:"Example Card",type:0}}),w=Object(o.a)(N,2),S=w[0],_=w[1];return Object(n.useEffect)((function(){-1!==S.card.matchid&&s([].concat(Object(x.a)(i),[S]))}),[S]),Object(n.useEffect)((function(){c.on("recieveWhite",(function(e,t,c){_({card:t,sauce:c})})),c.on("loadloader",(function(e){v(!0)})),c.on("unloadloader",(function(e){v(!1)})),c.on("tzarTurn",(function(){m("You are the tzar, pick a card"),k({canCommit:!1,commitCount:y.commitCount})})),c.on("playerWait",(function(){m("Tzar is picking a card"),k({canCommit:!1,commitCount:y.commitCount})})),c.on("blockTzar",(function(e){m("You are the tzar"),k({canCommit:!1,commitCount:y.commitCount})})),c.on("enableCards",(function(){m(null),k({canCommit:!0,commitCount:0})})),c.on("clearBoard",(function(){s([])})),c.on("startDisable",(function(e){k({canCommit:!0,commitCount:0})}))}),[c]),Object(u.jsx)(A.Provider,{value:[i,s,p,j,function(e,n){var a=Object(x.a)(i);if(0!==a.length&&y.canCommit){switch(t){case 0:y.commitCount>=0?k({canCommit:!1,commitCount:y.commitCount}):k({canCommit:y.canCommit,commitCount:y.commitCount+1});break;case 2:y.commitCount>=1?k({canCommit:!1,commitCount:y.commitCount}):k({canCommit:y.canCommit,commitCount:y.commitCount+1});break;case 3:y.commitCount>=2?k({canCommit:!1,commitCount:y.commitCount}):k({canCommit:y.canCommit,commitCount:y.commitCount+1})}for(var r=0;r<a.length;r++)void 0!==a[r].card?e===a[r].card.matchid&&a.splice(r,1):a.splice(r,1);s(Object(x.a)(a)),c.emit("cardCommited",e,n)}}],children:e.children})},z=function(){return Object(u.jsx)("div",{className:"loaderWrapper",children:Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)("div",{className:"dot dot1"}),Object(u.jsx)("div",{className:"dot dot2"}),Object(u.jsx)("div",{className:"dot dot3"}),Object(u.jsx)("div",{className:"dot dot4"}),Object(u.jsx)("div",{className:"dot dot5"}),Object(u.jsx)("div",{className:"dot dot6"}),Object(u.jsx)("div",{className:"dot dot7"}),Object(u.jsx)("div",{className:"dot dot8"}),Object(u.jsx)("div",{className:"dot dot9"}),Object(u.jsx)("div",{className:"dot dot10"}),Object(u.jsx)("div",{className:"dot dot11"})]})})},P={hidden:{x:100,opacity:0},visible:{x:0,opacity:1}},L=function(e){var t=e.card,c=e.commitFunction,a=Object(n.useContext)(v),r=Object(o.a)(a,1)[0];return void 0===t.sauce||void 0===t.card?Object(u.jsx)(u.Fragment,{}):Object(u.jsx)(T.a.div,{drag:!!r,layout:!0,className:"card",variants:P,whileHover:{scale:1.1},onClick:function(){return c(t.card.matchid,t.sauce.id)},style:{backgroundImage:1===t.sauce.type?"url(".concat(t.sauce.text,")"):""},children:0===t.sauce.type||2===t.sauce.type?"".concat(t.sauce.text," [").concat(t.card.matchid,"]"):""})},D=function(e){var t=e.message;return Object(u.jsx)("div",{id:"blocker",children:Object(u.jsx)("h2",{children:t})})},M={transition:{ease:"easeIn",duration:1}},H=function(){var e=Object(n.useContext)(A),t=Object(o.a)(e,5),c=t[0],a=t[2],r=t[3],i=t[4];return console.log("render"),Object(u.jsxs)(T.a.div,{layout:!0,id:"yourCards",initial:"hidden",animate:"visible",variants:M,children:[a&&Object(u.jsx)(z,{}),null!==r&&Object(u.jsx)(D,{message:r}),null===c||void 0===c?void 0:c.map((function(e){var t;return Object(u.jsx)(L,{card:e,commitFunction:i},(null===e||void 0===e||null===(t=e.card)||void 0===t?void 0:t.matchid)||"temp")}))]})},V=c.p+"static/media/github.abc68d50.svg",W=c.p+"static/media/twitter.5d0a19d6.svg",R=c.p+"static/media/gmail.69f6dc21.svg",Y=function(){return Object(u.jsxs)("div",{className:"contact",children:[Object(u.jsx)("a",{href:"https://github.com/NamesRunOut",target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)("img",{src:V,className:"contactImage",alt:"github"})}),Object(u.jsx)("a",{href:"https://twitter.com/NamesRunOut",target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)("img",{src:W,className:"contactImage",alt:"twitter"})}),Object(u.jsx)(i.b,{to:"/contact",children:Object(u.jsx)("img",{src:R,className:"contactImage",alt:"mail"})})]})},J=function(){var e=Object(n.useContext)(b),t=Object(n.useState)(!0),c=Object(o.a)(t,2),a=c[0],r=c[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"info_actions_action",children:[Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"button",onClick:function(){e.emit("reroll")},children:"Reroll cards"})}),Object(u.jsx)("div",{children:"Once per game you can reroll all your cards (it has to be on your turn and you can't be the tzar)"})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"info_actions_action",children:[Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"button",onClick:function(){e.emit("vote")},children:"Points to all!"})}),Object(u.jsx)("div",{children:"(Usable on tzar turn) If everybody in the lobby presses this button (tzar included), everyone who commited a card will be given a point"})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"info_actions_action",children:[Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"button",onClick:function(){a&&(r(!1),e.emit("skipBlack"),setTimeout((function(){r(!0)}),3e4))},id:"skipButton",children:"Skip black"})}),Object(u.jsx)("div",{children:"Skip the current black card (30s cooldown per person)"})]})]})},U=function(){var e=Object(n.useContext)(b),t=Object(n.useState)([]),c=Object(o.a)(t,2),a=c[0],r=c[1],i="not";return Object(n.useEffect)((function(){e.on("sessionid",(function(e){i=e})),e.on("state",(function(e,t){var c;for(var n in c=[],e){var a=t[e[n]],s=a.name;a.id===i&&(s+=" (you)");var o="";a.tzar?o="tzar":a.played||(o="playing..."),c.push({name:s,status:o,points:a.points,id:e[n]})}r(Object(x.a)(c))}))}),[e]),Object(u.jsx)("div",{id:"scoreboard",children:0===a.length?Object(u.jsx)(u.Fragment,{}):a.map((function(e){return Object(u.jsxs)("span",{children:[Object(u.jsx)("div",{className:"playerScore",children:Object(u.jsxs)("div",{children:[e.name," ",e.status,Object(u.jsx)("br",{}),"Points: ",e.points,Object(u.jsxs)("span",{style:{opacity:"0.2",marginLeft:"0.25em"},children:["[",e.id,"]"]})]})}),Object(u.jsx)("hr",{})]},"".concat(e.id,"1"))}))})},Q=function(){var e=document.getElementById("chatLog");null!==e&&(e.scrollTop=e.scrollHeight)};function q(e){var t=document.createElement("p");t.innerHTML=e.date+" "+e.author+": "+e.sauce;var c=document.getElementById("chatLog");null!==c&&c.appendChild(t),Q()}var G=function(){var e=Object(n.useContext)(b);document.addEventListener("keydown",(function(e){13===e.keyCode&&t()}));var t=function(){var t;null!==(t=document.getElementById("chatInput"))&&(e.emit("message",t.value),t.value="")};return Object(n.useEffect)((function(){e.on("message",(function(e){q(e)})),e.on("recieveWhite",(function(t,c,n){if(2===n.type){var a=document.createElement("div");a.className="info_chat_input";var r=document.createElement("input");r.id="customInput",r.setAttribute("placeholder","Tu wpisz tekst customowej karty"),r.setAttribute("aria-label","Tu wpisz tekst customowej karty");var i=document.createElement("button");i.setAttribute("type","button"),i.innerHTML="Send",i.onclick=function(){return function(){var t,c=(null===(t=document.getElementById("customInput"))||void 0===t?void 0:t.value)||"";e.emit("writeCustom",c)}()},a.appendChild(r),a.appendChild(i),function(e){var t=document.getElementById("chatLog");null!==t&&t.appendChild(e),Q()}(a)}q({date:"",author:"white card",sauce:"["+c.matchid+"] "+n.text})}))}),[e]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{children:Object(u.jsx)("div",{id:"chatLog"})}),Object(u.jsxs)("div",{className:"info_chat_input",children:[Object(u.jsx)("input",{id:"chatInput",placeholder:"Chat","aria-label":"Chat"}),Object(u.jsx)("button",{type:"button",onClick:t,children:"Send"})]})]})},K=function(){return Object(u.jsxs)("div",{className:"info",children:[Object(u.jsxs)("div",{className:"info_score",children:[Object(u.jsxs)("div",{className:"title",children:["Scoreboard",Object(u.jsx)("hr",{})]}),Object(u.jsx)(U,{})]}),Object(u.jsx)("div",{className:"info_chat",children:Object(u.jsx)(G,{})}),Object(u.jsxs)("div",{className:"info_actions",children:[Object(u.jsx)("div",{className:"title",children:"Actions"}),Object(u.jsx)("hr",{}),Object(u.jsx)(J,{}),Object(u.jsx)("hr",{}),Object(u.jsx)(Y,{})]})]})},X="unknown";var Z=function(){var e=Object(n.useContext)(b);return window.onload=function(){e.emit("new player"),function(){var t=function(e){for(var t=e+"=",c=document.cookie.split(";"),n=0;n<c.length;n++){for(var a=c[n];" "===a.charAt(0);)a=a.substring(1);if(0===a.indexOf(t))return a.substring(t.length,a.length)}return""}("username");""!==t?(e.emit("updateName",t),X=t):(t=prompt("Please enter your nickname","")||"unknown",e.emit("updateName",t),""!==t&&null!==t&&void 0!==t&&function(e,t,c){var n=new Date;n.setTime(n.getTime()+24*c*60*60*1e3);var a="expires="+n.toUTCString();document.cookie=e+"="+t+";"+a+";path=/"}("username",t,1))}()},window.onbeforeunload=function(){var t=new Date,c={date:"["+String(t.getHours()).padStart(2,"0")+":"+String(t.getMinutes()).padStart(2,"0")+":"+String(t.getSeconds()).padStart(2,"0")+"]",author:X,sauce:"leaves the game"};return e.emit("disconnect"),e.emit("message",c),e.emit("leaverTrigger"),null},Object(u.jsx)("div",{id:"wrapper",children:Object(u.jsxs)(f,{children:[Object(u.jsx)(y,{}),Object(u.jsxs)(k,{children:[Object(u.jsx)(I,{}),Object(u.jsx)(B,{children:Object(u.jsx)(H,{})})]}),Object(u.jsx)(K,{})]})})},$=c(26),ee=c(53),te=c(30),ce=c(39),ne=function(e){var t=e.label,c=Object(ee.a)(e,["label"]),n=Object(te.c)(c),a=Object(o.a)(n,2),r=a[0],i=a[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("label",{htmlFor:c.id||c.name,children:t}),Object(u.jsx)("input",Object($.a)(Object($.a)({},r),c)),i.touched&&i.error?Object(u.jsx)("div",{className:"form_error",children:i.error}):null]})},ae=function(e){var t=e.label,c=Object(ee.a)(e,["label"]),n=Object(te.c)(c),a=Object(o.a)(n,2),r=a[0],i=a[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("label",{htmlFor:c.id||c.name,children:t}),Object(u.jsx)("input",Object($.a)(Object($.a)({},r),c)),i.touched&&i.error?Object(u.jsx)("div",{className:"form_error",children:i.error}):null]})},re=function(e){var t=e.label,c=Object(ee.a)(e,["label"]),n=Object(te.c)(c),a=Object(o.a)(n,2),r=a[0],i=a[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("label",{htmlFor:c.id||c.name,children:t}),Object(u.jsx)("textarea",Object($.a)(Object($.a)({},r),c)),i.touched&&i.error?Object(u.jsx)("div",{className:"form_error",children:i.error}):null]})},ie=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(i.b,{to:"/",children:Object(u.jsx)("button",{className:"form_back",children:"Back"})}),Object(u.jsx)(te.b,{initialValues:{email:"",title:"",message:""},validationSchema:ce.a({email:ce.b().email("Invalid email address").nullable("Value is empty"),title:ce.b().min(3,"The title must have at least 3 characters").max(35,"The title is too long").nullable("Value is empty"),message:ce.b().min(3,"Must have at least 3 characters").max(500,"The message cant be longer than 500 characters").nullable("Value is empty")}),onSubmit:function(e,t){var c=t.setSubmitting,n=t.resetForm,a={sender:e.email,title:e.title,message:e.message};fetch("https://mysterious-caverns-api.herokuapp.com/mailboxes",{method:"post",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then(c(!1)).then(n()).then(alert("Message successfully submitted!"))},children:function(e){return Object(u.jsx)("div",{className:"wrapper_form",children:Object(u.jsxs)(te.a,{className:"form",children:[Object(u.jsx)("h1",{children:"Contact form"}),Object(u.jsx)(ne,{className:"form_input",label:"Your email",name:"email",type:"email",placeholder:"your@email.com"}),Object(u.jsx)(ae,{className:"form_input",label:"Title",name:"title",type:"text",placeholder:"Your title"}),Object(u.jsx)(re,{className:"form_input--textarea",label:"Message",name:"message",placeholder:"Write something here!"}),Object(u.jsx)("button",{className:"form_submit",type:"submit",children:e.isSubmitting?"Sending message...":"Submit"})]})})}})]})},se=function(){return void 0!==typeof window&&(window.location="/"),null};c(106);var oe=function(){return Object(u.jsx)(m,{children:Object(u.jsx)(i.a,{children:Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{exact:!0,path:"/",component:Z}),Object(u.jsx)(s.a,{exact:!0,path:"/contact",component:ie}),Object(u.jsx)(s.a,{component:se})]})})})};r.a.render(Object(u.jsx)(n.StrictMode,{children:Object(u.jsx)(oe,{})}),document.getElementById("root"))}},[[254,1,2]]]);
//# sourceMappingURL=main.e916ad7d.chunk.js.map