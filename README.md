# Steem-Discord-Witnesses-upvotes-with-Javascript
This is a script to capture all witnesses upvotes given by a specified users and write the output on a specific Discord Channel

What is the script:

This script use Discord to query steem blockchain using api.This script :

- Use discord to capture text
- Use steem to query a specified user for witnesees upvotes given to users
- Don't need steem priv key
- Need bot token and Discord channel ID


The sintax:

$witness steem username
Example: $witness yanosh01


Result:

List of Witnesses upvote given by yanosh01
bhuz,davinci.witness,enginewitty,neoxian,puncakbukit,sircork,vesteem,yanosh01


Requirements:

1- Node Js
2- NPM
3- Steem Api
4- discord Js libraries

How to install:

create a folder and copy the file called witnessinfo.js on it. Then

1- sudo apt-get install nodejs
2- sudo apt-get install npm
3- npm install steem --save
4- npm install discord.js
5- npm install pm2

How to execute the script:

node witnessinfo.js (instant execution)
pm2 start witnessinfo.js (permanent execution)






