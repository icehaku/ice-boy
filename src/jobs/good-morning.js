import cron from 'node-cron';


const EVERY_MINUTE = '* * * * *';

const run = (telegramBot) => {
    cron.schedule(EVERY_MINUTE, () => {
        console.log('Everyday Releases, This runs every minute')
    });
}

export default { run };



