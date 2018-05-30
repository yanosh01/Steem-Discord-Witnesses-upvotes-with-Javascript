var steem = require("steem");
var Discord = require('discord.js');
var client = new Discord.Client();


var regex = /(\$)+(witness)+( [^ ]+)*$/; 
var regex1 = /(\W|^)witness /; 


client.on('message', msg => {
if (msg.content.match (regex)) {
var channel = client.channels.get('DISCORD CHANNEL ID');

        var aut = msg.content.match(regex)[0];
        var author = aut.replace(regex1,'');



steem.api.getAccounts([author], function (err, result) {
    if (err) {
channel.send("Witness query failed");

 }
  else {
var output = result[0].witness_votes;
var output2 = output.toString();

channel.send({embed: {
  color: 2447002,
  title: "List of Witnesses upvote given by "+author,
  description: output2

}});
 }

})
  }
});


client.login('DISCORD BOT TOKEN');




