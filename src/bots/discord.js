// import goodMorningJob from '../jobs/good-morning';

const Discord = require('discord.js');
const client = new Discord.Client();
const TurndownService = require('turndown')
const turndownService = new TurndownService()

//implementação de checar se tem o mention
const isDiscordBot = (message) => {
  // console.log(message.mentions.users.first().id);

  return true
};

export const run = (): void => {
    client.on('ready', () => {
        console.log(`Building Discord Bot!`);
    });

    client.on('message', (msg) => {
        if (msg.content === 'ping') {
             msg.reply('Pong!');
        }
    });

    client.login(process.env.DISCORD_BOT_TOKEN)
        .then((result) => {
            console.info('Discord Bot is alive! (•̀ᴗ•́)و');
        })
        .catch((error) => {
            console.error('Discord Bot could not be arised. Its so sad... =[');
        });
}

export default { run };

