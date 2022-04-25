require('dotenv').config;
const bodyparser = require("body-parser")
const { Client, Collection,Intents } = require('discord.js');
const { Client as Unbbot } = require('unb-api')
const unbclient = new Unbbot('')
const guildID = '878772061814804562';

const PORT = process.env.PORT || 4040

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4040

app.use(bodyParser.json())

app.post('/', (req, res) => {
  const { body } = req;
  statuscheck(body);
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})


const token = "";
const client = new Client({ intents: [Intents.FLAGS.GUILDS] },{fetchAllMembers : true});
client.once('ready', () => {
console.log('Ready for discord !');
});
console.log(token);
client.login(token);


function statuscheck(req){
if(req.type=='post.status_changed' && req.object.status=='under review') {
discordsend(scraper(req.object.details));
}
}

function scraper(str){
    const regex = /\w+#\d+/gm;
    let m;

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        // The result can be accessed through the `m`-variable.
        return m[0];
    }}



function discordsend(usern)
{
arr=usern.split("#");
const channel = client.channels.cache.get('946932969359179786');
guild = client.guilds.cache.get('878772061814804562');
guild.members.fetch({query : arr[0],limit : 100})
.then(function(collection){
const m=collection.find(m => m.user.discriminator === arr[1]);
userid=m.user.id;
unbclient.editUserBalance(guildID, userID, { cash: +1, bank: 0 });
})
.catch(console.error)
}
