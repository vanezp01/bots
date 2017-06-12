console.log('the bot is starting');

var Twit = require('twit');
var config = require('./config');
//console.log(config);
var T = new Twit(config);

// ** GET Tweets **
var params = {q: 'pride', count: 2}
T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
}

// ** SET Interval **

// tweetIt();
// setInterval(tweetIt, 1000*140);
//
// function tweetIt() {
//   var r = Math.floor(Math.random()*100);
//
// 	var tweet = {
// 	  status: 'random number ' + r + ' #randomthings'
// 	}
//
//   T.post('statuses/update', tweet, tweeted);
//
//   function tweeted(err, data, response) {
//     if (err){
//       console.log("Something went wrong!");
//     } else {
//       console.log("It Worked!");
//     }
//   }
// }

// // Setting up a user stream
// var stream = T.stream('user');
//
// // Anytime someone follows me
// stream.on('follow', followed);
//
// function followed(eventMsg) {
//   console.log("Follow event!");
//   var name = eventMsg.source.name;
//   var screenName = eventMsg.source.screen_name;
//   tweetIt('.@' + screenName + ' do you like rainbows?');
// }
//
//
// function tweetIt(txt) {
//
// 	var tweet = {
// 	  status: txt
// 	}
//
// 	T.post('statuses/update', tweet, tweeted);
//
// 	function tweeted(err, data, response) {
// 	  if (err) {
// 	  	console.log("Something went wwrong!");
// 	  } else {
// 	    console.log("It worked!");
// 	  }
// 	}
// }
