// Setando as variaveis de ambiente
require('dotenv').config({path:__dirname+'/../.env'});

import startDiscordBot from './bots/discord';

startDiscordBot.run();
console.log('done');
