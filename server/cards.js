const fetch = require('node-fetch').default;

let white = [];
let black = [];

const generateWhite = async () => {
	console.log("Fetching white cards...");
	white.splice(0, white.length);
  	let res = await fetch('https://mysterious-caverns-api.herokuapp.com/messages')
    let json = await res.json();
  			for (let i=0;i<json.length;i++){
  				white[i]={
  					id: i,
  					text: json[i].sauce,
				  }
			  }
}

const generateBlack = async () => {
	console.log("Fetching black cards...");
    black.splice(0, black.length);
  	let res = await fetch('https://mysterious-caverns-api.herokuapp.com/posts')
	let json = await res.json();
  			for (let i=0;i<json.length;i++){
  				black[i]={
  					id: i,
  					text: json[i].title
				  }
			  }
}

module.exports = {
  white: white,
  black: black,
  generateWhite: generateWhite,
  generateBlack: generateBlack
};
