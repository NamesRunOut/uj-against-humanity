(this.webpackJsonpcardgame=this.webpackJsonpcardgame||[]).push([[0],{101:function(e,t,a){e.exports=a.p+"static/media/github.96f4c70d.svg"},102:function(e,t,a){e.exports=a.p+"static/media/twitter.8b423d11.svg"},103:function(e,t,a){e.exports=a.p+"static/media/gmail.98442520.svg"},108:function(e,t,a){e.exports=a(150)},142:function(e,t){},150:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(100),l=a.n(r),o=a(36),i=a(4),m=a(2),u=a(58),s=a.n(u),d=a(101),b=a.n(d),p=a(102),f=a.n(p),v=a(103),h=a.n(v),E=function(){return c.a.createElement("div",{className:"contact"},c.a.createElement("a",{href:"https://github.com/NamesRunOut",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{src:b.a,className:"contactImage",alt:"github"})),c.a.createElement("a",{href:"https://twitter.com/NamesRunOut",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{src:f.a,className:"contactImage",alt:"twitter"})),c.a.createElement(o.b,{to:"/contact"},c.a.createElement("img",{src:h.a,className:"contactImage",alt:"mail"})))},g=function(){var e=Object(n.useContext)(w),t=Object(n.useState)(!0),a=Object(m.a)(t,2),r=a[0],l=a[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"info_actions_action"},c.a.createElement("div",null,c.a.createElement("button",{type:"button",onClick:function(){e.emit("reroll")}},"Reroll cards")),c.a.createElement("div",null,"Once per game you can reroll all your cards (it has to be on your turn and you can't be the tzar)")),c.a.createElement("hr",null),c.a.createElement("div",{className:"info_actions_action"},c.a.createElement("div",null,c.a.createElement("button",{type:"button",onClick:function(){e.emit("vote")}},"Points to all!")),c.a.createElement("div",null,"(Usable on tzar turn) If everybody in the lobby presses this button (tzar included), everyone who commited a card will be given a point")),c.a.createElement("hr",null),c.a.createElement("div",{className:"info_actions_action"},c.a.createElement("div",null,c.a.createElement("button",{type:"button",onClick:function(){r&&(l(!1),e.emit("skipBlack"),setTimeout((function(){l(!0)}),3e4))},id:"skipButton"},"Skip black")),c.a.createElement("div",null,"Skip the current black card (30s cooldown per person)")))},y=function(){var e=Object(n.useContext)(w),t=Object(n.useState)([]),a=Object(m.a)(t,2),r=a[0],l=a[1],o="not";return Object(n.useEffect)((function(){e.on("sessionid",(function(e){o=e})),e.on("state",(function(e,t){var a=[];for(var n in e){var c=t[e[n]],r=c.name;c.id===o&&(r+=" (you)");var i="";c.tzar?i="tzar":c.played||(i="playing..."),a.push({name:r,status:i,points:c.points,id:e[n]})}l([].concat(a))}))}),[e]),c.a.createElement("div",{id:"scoreboard"},0===r.length?c.a.createElement(c.a.Fragment,null):r.map((function(e){return c.a.createElement("span",{key:"".concat(e.id,"1")},c.a.createElement("div",{className:"playerScore"},c.a.createElement("div",null,e.name," ",e.status,c.a.createElement("br",null),"Points: ",e.points,c.a.createElement("span",{style:{opacity:"0.2",marginLeft:"0.25em"}},"[",e.id,"]"))),c.a.createElement("hr",null))})))},C=function(){var e=document.getElementById("chatLog");e.scrollTop=e.scrollHeight};function O(e){var t=document.createElement("p");t.innerHTML=e.date+" "+e.author+": "+e.sauce,document.getElementById("chatLog").appendChild(t),C()}var j=function(){var e=Object(n.useContext)(w);document.addEventListener("keydown",(function(e){13===e.keyCode&&t()}));var t=function(){e.emit("message",document.getElementById("chatInput").value),document.getElementById("chatInput").value=""};return Object(n.useEffect)((function(){e.on("message",(function(e){O(e)})),e.on("recieveWhite",(function(t,a,n){if(2===n.type){var c=document.createElement("div");c.className="info_chat_input";var r=document.createElement("input");r.id="customInput",r.setAttribute("placeholder","Tu wpisz tekst customowej karty"),r.setAttribute("aria-label","Tu wpisz tekst customowej karty");var l=document.createElement("button");l.setAttribute("type","button"),l.innerHTML="Send",l.onclick=function(){return function(){var t,a=(null===(t=document.getElementById("customInput"))||void 0===t?void 0:t.value)||"";e.emit("writeCustom",a)}()},c.appendChild(r),c.appendChild(l),o=c,document.getElementById("chatLog").appendChild(o),C()}var o;O({date:"",author:"white card",sauce:"["+a.matchid+"] "+n.text})}))}),[e]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("div",{id:"chatLog"})),c.a.createElement("div",{className:"info_chat_input"},c.a.createElement("input",{id:"chatInput",placeholder:"Chat","aria-label":"Chat"}),c.a.createElement("button",{type:"button",onClick:t},"Send")))},k=function(){return c.a.createElement("div",{className:"info"},c.a.createElement("div",{className:"info_score"},c.a.createElement("div",{className:"title"},"Scoreboard",c.a.createElement("hr",null)),c.a.createElement(y,null)),c.a.createElement("div",{className:"info_chat"},c.a.createElement(j,null)),c.a.createElement("div",{className:"info_actions"},c.a.createElement("div",{className:"title"},"Actions"),c.a.createElement("hr",null),c.a.createElement(g,null),c.a.createElement("hr",null),c.a.createElement(E,null)))},N=(s()("http://127.0.0.1:4001"),s()()),w=Object(n.createContext)(),x=function(e){var t=Object(n.useState)(N),a=Object(m.a)(t,1)[0];return c.a.createElement(w.Provider,{value:a},e.children)},S=function(e){var t=e.response,a=Object(n.useContext)(w);return c.a.createElement("button",{type:"button",id:"startButton",onClick:function(){a.emit("start")},disabled:t},"START")},_=function(e){var t=e.response,a=Object(n.useContext)(w);return c.a.createElement("div",{className:"navbar_points"},"Score limit:",c.a.createElement("select",{id:"pointsInput",defaultValue:"5"},c.a.createElement("option",{value:"1"},"1"),c.a.createElement("option",{value:"2"},"2"),c.a.createElement("option",{value:"3"},"3"),c.a.createElement("option",{value:"4"},"4"),c.a.createElement("option",{value:"5"},"5"),c.a.createElement("option",{value:"6"},"6"),c.a.createElement("option",{value:"7"},"7"),c.a.createElement("option",{value:"8"},"8"),c.a.createElement("option",{value:"9"},"9"),c.a.createElement("option",{value:"10"},"10")),c.a.createElement("div",null,c.a.createElement("button",{type:"button",id:"pointsButton",onClick:function(){var e=document.getElementById("pointsInput").value;e&&a.emit("setPoints",e)},disabled:t},"Select")))},I=a(12),T=function(e){var t=e.response,a=Object(n.useContext)(w),r=Object(n.useState)([]),l=Object(m.a)(r,2),o=l[0],i=l[1];return Object(n.useEffect)((function(){a.on("recieveCategories",(function(e){for(var t=[],a=0;a<e.length;a++)t.push({deck:e[a],checked:!0});i([].concat(t))}))}),[a]),c.a.createElement("div",{className:"navbar_decks"},c.a.createElement("button",{id:"deckButton",onClick:function(){for(var e=[],t=0;t<o.length;t++)o[t].checked&&e.push(o[t].deck.id);a.emit("setDecks",e)},disabled:0===o.length||t},"Decks select"),c.a.createElement("div",{className:"navbar_decks_content",id:"catplace"},0!==o.length?o.map((function(e){return c.a.createElement("span",{key:e.deck.id},c.a.createElement("input",{type:"checkbox",className:"deck",value:e.deck.id,checked:e.checked,onChange:function(e){return function(e){for(var t=e.value,a=e.checked,n=Object(I.a)(o),c=0;c<n.length;c++)if(parseFloat(n[c].deck.id)===parseFloat(t)){n[c].checked=a;break}i(Object(I.a)(n))}(e.target)}}),c.a.createElement("label",{htmlFor:e.deck.id},e.deck.name),c.a.createElement("br",null))})):c.a.createElement("span",null,"Sometimes it takes a while for the API/server to start. If you can't see any decks, please reload the page after a few minutes")))},F=Object(n.createContext)(),B=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],l=a[1];return c.a.createElement(F.Provider,{value:[r,l]},e.children)},z=function(){var e=Object(n.useContext)(F),t=Object(m.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{className:"navbar_decks"},c.a.createElement("button",{onClick:function(){return r((function(e){return!e}))}},"Drag cards ",a?"ON":"OFF"))},P=function(){var e=Object(n.useContext)(w),t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){e.on("startEnable",(function(e){l(!1)})),e.on("startDisable",(function(e){l(!0)}))}),[e]),c.a.createElement("div",{className:"navbar",id:"player"},c.a.createElement(S,{response:r}),c.a.createElement(_,{response:r}),c.a.createElement(T,{response:r}),c.a.createElement(z,null))},A=Object(n.createContext)(),L=function(e){var t=Object(n.useContext)(w),a=Object(n.useState)(0),r=Object(m.a)(a,2),l=r[0],o=r[1];return Object(n.useEffect)((function(){t.on("blackCard",(function(e){o(e.type)}))}),[t]),c.a.createElement(A.Provider,{value:l},e.children)};var D=Object(n.createContext)(),M=function(e){var t=Object(n.useContext)(w),a=Object(n.useContext)(A),r=Object(n.useState)([]),l=Object(m.a)(r,2),o=l[0],i=l[1],u=Object(n.useState)([]),s=Object(m.a)(u,2),d=s[0],b=s[1];return Object(n.useEffect)((function(){i(Object(I.a)(d))}),[d]),Object(n.useEffect)((function(){t.off("highlightCard").on("highlightCard",(function(e,t){return function(e,t,a,n,c,r){if(console.log("highlight1",a),0!==a.length){var l={id:"unknown",name:"unknown"},o=[];switch(r){case 0:for(var i=0;i<a.length;i++)if(a[i].matchid===e){l={id:a[i].player,name:t[a[i].player].name};break}for(var m=0;m<a.length;m++)o.push({card:a[m].card,matchid:a[m].matchid,player:a[m].player,playerName:t[a[m].player].name,chosen:a[m].player!==l.id,revealed:!0});c([].concat(o));break;case 2:case 3:for(var u=0;u<a.length;u++)for(var s=0;s<a[u].length;s++)if(a[u][s].matchid===e){l={id:a[u][s].player,name:t[a[u][s].player].name};break}for(var d=[],b=0;b<a.length;b++){for(var p=0;p<a[b].length;p++)d.push({card:a[b][p].card,matchid:a[b][p].matchid,player:a[b][p].player,playerName:t[a[b][p].player].name,chosen:a[b][p].player!==l.id,revealed:!0});o.push(d),d=[]}c([].concat(o))}}}(e,t,o,0,b,a)}))}),[o]),Object(n.useEffect)((function(){t.on("playedCards",(function(e,t){return function(e,t,a,n,c,r){if(console.log("played",a,e.length,t),0!==e.length)switch(t){case 0:c(Object(I.a)(e));break;case 2:case 3:var l=e;!function(e){for(var t=e.length,a=1;a<t;a++){for(var n=e[a],c=a-1;c>-1&&n.player<e[c].player;)e[c+1]=e[c],c--;e[c+1]=n}}(l);for(var o=[l[0]],i=[],m=1;m<l.length;m++)l[m].player===l[m-1].player?o.push(l[m]):(i.push(o),o=[l[m]]);i.push(o),c([].concat(i))}else c([])}(e,t,o,0,b)}))}),[]),c.a.createElement(D.Provider,{value:[o,i]},e.children)},W=function(){var e=Object(n.useContext)(w),t=Object(n.useState)(null),a=Object(m.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){e.on("blackCard",(function(e){l(e)}))}),[e]),c.a.createElement("div",{id:"blackCard"},c.a.createElement("div",{className:"biggerCard blackCard"},null===r?"Questions will appear here, answer with one (or more) of your cards":r.text))},H=function(){var e=Object(n.useContext)(w),t=Object(n.useState)([]),a=Object(m.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(0),i=Object(m.a)(o,2),u=i[0],s=i[1];return Object(n.useEffect)((function(){l(0!==u?[].concat(Object(I.a)(r),[u]):[])}),[u]),Object(n.useEffect)((function(){e.on("playedCardsHidden",(function(){s((function(e){return e+1}))})),e.on("playedCards",(function(e,t){s(0)})),e.on("highlightCard",(function(e,t){s(0)}))}),[e]),c.a.createElement(c.a.Fragment,null,r.length>0?r.map((function(e){return c.a.createElement("div",{key:e,className:"biggerCard hidden"})})):c.a.createElement(c.a.Fragment,null))},V=function(e){var t=e.card,a=(e.player,e.playerName),r=e.chosen,l=e.revealed,o=Object(n.useContext)(w),i=function(e){l||o.emit("tzarPicked",e)};return 0===t.card.type||2===t.card.type?c.a.createElement("div",{key:t.matchid,className:"biggerCard",onClick:function(){return i(t.matchid)},style:{opacity:r?"1":"0.5"}},t.card.text," ",l?"[".concat(a,"]"):""):1===t.card.type?c.a.createElement("div",{key:t.matchid,className:"biggerCard",onClick:function(){return i(t.matchid)},style:{backgroundImage:"url(".concat(t.card.text,")"),opacity:r?"1":"0.5"}},l?"[".concat(a,"]"):""):c.a.createElement(c.a.Fragment,null)},R=function(){var e=Object(n.useContext)(D),t=Object(m.a)(e,1)[0],a=Object(n.useContext)(A);return c.a.createElement("div",{id:"cards"},c.a.createElement(H,null),0===t.length?c.a.createElement(c.a.Fragment,null):t.map((function(e){switch(a){case 0:return c.a.createElement(V,{key:e.matchid,card:e,chosen:!e.chosen,revealed:e.revealed||!1,playerName:"jhg",player:e.player||"unknown"});case 2:case 3:var t=0;return c.a.createElement("div",{key:"".concat(t++,"box"),className:"box"},e.map((function(e){return c.a.createElement(V,{key:"".concat(e.matchid).concat(t++),card:e,chosen:!e.chosen,revealed:e.revealed||!1,playerName:"jhg",player:e.player||"unknown"})})))}})))},Y=function(){return c.a.createElement("div",{className:"mainArea"},c.a.createElement(W,null),c.a.createElement("div",null,c.a.createElement(M,null,c.a.createElement(R,null))))},J=a(152),U=Object(n.createContext)(),Q=function(e){var t=Object(n.useContext)(A),a=Object(n.useContext)(w),r=Object(n.useState)([]),l=Object(m.a)(r,2),o=l[0],i=l[1],u=Object(n.useState)(null),s=Object(m.a)(u,2),d=s[0],b=s[1],p=Object(n.useState)(!1),f=Object(m.a)(p,2),v=f[0],h=f[1],E=Object(n.useState)({canCommit:!0,commitCount:0}),g=Object(m.a)(E,2),y=g[0],C=g[1],O=Object(n.useState)([]),j=Object(m.a)(O,2),k=j[0],N=j[1];return Object(n.useEffect)((function(){k!==[]&&i([].concat(Object(I.a)(o),[k]))}),[k]),Object(n.useEffect)((function(){a.on("recieveWhite",(function(e,t,a){N({card:t,sauce:a})})),a.on("loadloader",(function(e){h(!0)})),a.on("unloadloader",(function(e){h(!1)})),a.on("tzarTurn",(function(){b("You are the tzar, pick a card"),C({canCommit:!1,commitCount:y.commitCount})})),a.on("playerWait",(function(){b("Tzar is picking a card"),C({canCommit:!1,commitCount:y.commitCount})})),a.on("blockTzar",(function(e){b("You are the tzar"),C({canCommit:!1,commitCount:y.commitCount})})),a.on("enableCards",(function(){b(null),C({canCommit:!0,commitCount:0})})),a.on("clearBoard",(function(){i([])})),a.on("startDisable",(function(e){C({canCommit:!0,commitCount:0})}))}),[a]),c.a.createElement(U.Provider,{value:[o,i,v,d,function(e,n){var c=Object(I.a)(o);if(0!==c.length&&y.canCommit){switch(t){case 0:y.commitCount>=0?C({canCommit:!1,commitCount:y.commitCount}):C({canCommit:y.canCommit,commitCount:y.commitCount+1});break;case 2:y.commitCount>=1?C({canCommit:!1,commitCount:y.commitCount}):C({canCommit:y.canCommit,commitCount:y.commitCount+1});break;case 3:y.commitCount>=2?C({canCommit:!1,commitCount:y.commitCount}):C({canCommit:y.canCommit,commitCount:y.commitCount+1})}for(var r=0;r<c.length;r++)void 0!==c[r].card?e===c[r].card.matchid&&c.splice(r,1):c.splice(r,1);i(Object(I.a)(c)),a.emit("cardCommited",e,n)}}]},e.children)},$=function(){return c.a.createElement("div",{className:"loaderWrapper"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"dot dot1"}),c.a.createElement("div",{className:"dot dot2"}),c.a.createElement("div",{className:"dot dot3"}),c.a.createElement("div",{className:"dot dot4"}),c.a.createElement("div",{className:"dot dot5"}),c.a.createElement("div",{className:"dot dot6"}),c.a.createElement("div",{className:"dot dot7"}),c.a.createElement("div",{className:"dot dot8"}),c.a.createElement("div",{className:"dot dot9"}),c.a.createElement("div",{className:"dot dot10"}),c.a.createElement("div",{className:"dot dot11"})))},q={hidden:{x:100,opacity:0},visible:{x:0,opacity:1}},G=function(e){var t=e.card,a=e.commitFunction,r=Object(n.useContext)(F),l=Object(m.a)(r,1)[0];return void 0===t.sauce||void 0===t.card?c.a.createElement(c.a.Fragment,null):c.a.createElement(J.a.div,{drag:!!l,layout:!0,className:"card",variants:q,whileHover:{scale:1.1},whileTap:{scale:.8},onClick:function(){return a(t.card.matchid,t.sauce.id)},style:{backgroundImage:1===t.sauce.type?"url(".concat(t.sauce.text,")"):""}},0===t.sauce.type||2===t.sauce.type?"".concat(t.sauce.text," [").concat(t.card.matchid,"]"):"")},K=function(e){var t=e.message;return c.a.createElement("div",{id:"blocker"},c.a.createElement("h2",null,t))},X={transition:{ease:"easeIn",duration:1}},Z=function(){var e=Object(n.useContext)(U),t=Object(m.a)(e,5),a=t[0],r=t[2],l=t[3],o=t[4];return console.log("render"),c.a.createElement(J.a.div,{layout:!0,id:"yourCards",initial:"hidden",animate:"visible",variants:X},r&&c.a.createElement($,null),null!==l&&c.a.createElement(K,{message:l}),null===a||void 0===a?void 0:a.map((function(e){var t;return c.a.createElement(G,{key:(null===e||void 0===e||null===(t=e.card)||void 0===t?void 0:t.matchid)||"temp",card:e,commitFunction:o})})))},ee="unknown";var te=function(){var e=Object(n.useContext)(w);return window.onload=function(){e.emit("new player"),function(){var t=function(e){for(var t=e+"=",a=document.cookie.split(";"),n=0;n<a.length;n++){for(var c=a[n];" "===c.charAt(0);)c=c.substring(1);if(0===c.indexOf(t))return c.substring(t.length,c.length)}return""}("username");""!==t?(e.emit("updateName",t),ee=t):(t=prompt("Please enter your nickname",""),e.emit("updateName",t),""!==t&&null!==t&&void 0!==t&&function(e,t,a){var n=new Date;n.setTime(n.getTime()+24*a*60*60*1e3);var c="expires="+n.toUTCString();document.cookie=e+"="+t+";"+c+";path=/"}("username",t,1))}()},window.onbeforeunload=function(){var t=new Date,a={date:"["+String(t.getHours()).padStart(2,"0")+":"+String(t.getMinutes()).padStart(2,"0")+":"+String(t.getSeconds()).padStart(2,"0")+"]",author:ee,sauce:"leaves the game"};return e.emit("disconnect"),e.emit("message",a),e.emit("leaverTrigger"),null},c.a.createElement("div",{id:"wrapper"},c.a.createElement(B,null,c.a.createElement(P,null),c.a.createElement(L,null,c.a.createElement(Y,null),c.a.createElement(Q,null,c.a.createElement(Z,null))),c.a.createElement(k,null)))},ae=a(70),ne=a(49),ce=a(54),re=function(e){var t=e.label,a=Object(ae.a)(e,["label"]),n=Object(ne.c)(a),r=Object(m.a)(n,2),l=r[0],o=r[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("label",{htmlform:a.id||a.name},t),c.a.createElement("input",Object.assign({},l,a)),o.touched&&o.error?c.a.createElement("div",{className:"form_error"},o.error):null)},le=function(e){var t=e.label,a=Object(ae.a)(e,["label"]),n=Object(ne.c)(a),r=Object(m.a)(n,2),l=r[0],o=r[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("label",{htmlform:a.id||a.name},t),c.a.createElement("input",Object.assign({},l,a)),o.touched&&o.error?c.a.createElement("div",{className:"form_error"},o.error):null)},oe=function(e){var t=e.label,a=Object(ae.a)(e,["label"]),n=Object(ne.c)(a),r=Object(m.a)(n,2),l=r[0],o=r[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("label",{htmlform:a.id||a.name},t),c.a.createElement("textarea",Object.assign({},l,a)),o.touched&&o.error?c.a.createElement("div",{className:"form_error"},o.error):null)},ie=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.b,{to:"/"},c.a.createElement("button",{className:"form_back"},"Back")),c.a.createElement(ne.b,{initialValues:{email:"",title:"",message:""},validationSchema:ce.a({email:ce.b().email("Invalid email address").nullable("Value is empty"),title:ce.b().min(3,"The title must have at least 3 characters").max(35,"The title is too long").nullable("Value is empty"),message:ce.b().min(3,"Must have at least 3 characters").max(500,"The message cant be longer than 500 characters").nullable("Value is empty")}),onSubmit:function(e,t){var a=t.setSubmitting,n=t.resetForm,c={sender:e.email,title:e.title,message:e.message};fetch("https://mysterious-caverns-api.herokuapp.com/mailboxes",{method:"post",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then(a(!1)).then(n()).then(alert("Message successfully submitted!"))}},(function(e){return c.a.createElement("div",{className:"wrapper_form"},c.a.createElement(ne.a,{className:"form"},c.a.createElement("h1",null,"Contact form"),c.a.createElement(re,{className:"form_input",label:"Your email",name:"email",type:"email",placeholder:"your@email.com"}),c.a.createElement(le,{className:"form_input",label:"Title",name:"title",type:"text",placeholder:"Your title"}),c.a.createElement(oe,{className:"form_input--textarea",label:"Message",name:"message",placeholder:"Write something here!"}),c.a.createElement("button",{className:"form_submit",type:"submit"},e.isSubmitting?"Sending message...":"Submit")))})))},me=function(){return void 0!=typeof window&&(window.location="/"),null};a(99);var ue=function(){return c.a.createElement(x,null,c.a.createElement(o.a,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:te}),c.a.createElement(i.a,{exact:!0,path:"/contact",component:ie}),c.a.createElement(i.a,{component:me}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},99:function(e,t,a){}},[[108,1,2]]]);
//# sourceMappingURL=main.80ef314e.chunk.js.map