import Telegraf from 'telegraf';
import { TELEGRAM_TOKEN } from '../configuration/keys';
// import goodMorningJob from '../jobs/good-morning';


const prodSettings = { token: process.env.TELEGRAM_BOT_TOKEN, config: { username: 'IceBoy', telegram: { webhookReply: true } } };
const bot = new Telegraf(prodSettings.token, prodSettings.config);

export const run = (): void => {
    console.log(`Building Telegram Bot!`);
    bot.hears('ping', (ctx) => ctx.reply('🏓'));

    bot.launch()
        .then(result => {
            console.info('Telegram Bot is alive! ᕙ(⇀‸↼‶)ᕗ');
        })
        .catch(error => {
            console.error('Telegram Bot could not be arised. Its so sad... =[');
        });

    goodMorningJob.run(bot);
};

export default { run };
