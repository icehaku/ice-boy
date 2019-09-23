// Setando as variaveis de ambiente
require('dotenv').config({path:__dirname+'/../.env'});

const discordBot = require('./bots/discord');

discordBot.run();

//  pkill -f ice-boy
