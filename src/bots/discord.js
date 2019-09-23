// import goodMorningJob from '../jobs/good-morning';
const Discord = require('discord.js');
const client = new Discord.Client();
const GetSafe = require ('get-safe');

//Ice-Bot_id: '501914119952138250'
//discordthur: 426072245538914307
//msg.reply
//msg.channel.send

const isDiscordBot = (msg) => {
    let firstMentionId = GetSafe('mentions.members.first().id', msg, 'nope')

    return (firstMentionId === '501914119952138250')
};

exports.run = () => {
    client.on('ready', () => {
        console.log(`Building Discord Bot!`);
    });

    //COMMANDOS
    client.on('message', (msg) => {
        if (!isDiscordBot(msg))  { return }

        // if (msg.content.match(/\bping\b/i)) {
        //      msg.channel.send('Pong! Command!');
        // }
    });

    //MEMESSAGES
    client.on('message', (msg) => {
        if (msg.author.id === '501914119952138250') { return }

        // if (msg.content.match(/\bping\b/i)) {
        //      msg.channel.send('Pong! Message!');
        // }

        if (msg.content.match(/\bmundo da voltas\b/i)) {
            msg.channel.send('https://imgur.com/a/nWQhHAZ');
            return
        }

        if (msg.content.match(/\bjogo virou\b/i)) {
            msg.channel.send('https://imgur.com/a/GamGTH8');
            return
        }

        if (msg.content.match(/\bpikachuo\b/i)) {
            msg.channel.send('https://imgur.com/a/qWmxO4M');
            return

        }

        if (msg.content.match(/\b(sad|triste|tururu)\b/i)) {
            msg.channel.send('https://www.youtube.com/watch?v=wEWF2xh5E8s');
            return
        }

        if (msg.content.match(/\bpare\b/i)) {
            msg.channel.send('https://imgur.com/a/KTywwYA');
            return
        }

        if (msg.content.match(/\bgloria\b/i)) {
            msg.channel.send('Gloria a DEUXXSSSS');
            return
        }

        if (msg.content.match(/\b(tá safe|ta safe|é safe|eh safe)\b/i)) {
            msg.channel.send('ta safe neh? https://i.imgur.com/54IxgZb.png');
            return
        }

        if (msg.content.match(/\b(marrapais|marrapas|marrapaz|marrapaiz)\b/i)) {
            msg.channel.send('http://i.imgur.com/rF2HBBz.png');
            return
        }

        if (msg.content.match(/\b(plantão|plantao)\b/i)) {
            msg.channel.send('https://www.youtube.com/watch?v=7DYomde2YEc');
            return
        }

        if (msg.content.match(/\bhacker\b/i)) {
            msg.channel.send('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQebfDHU5W9dp59HyP8A9lTV7mcQKstZ5UZy_Zf-IM8bhCtsDnQ2Q');
            return
        }

        if (msg.content.match(/\bhackerman\b/i)) {
            msg.channel.send('https://i.kym-cdn.com/photos/images/newsfeed/001/176/251/4d7.png');
            return
        }

        if (msg.content.match(/\bhackerman\b/i)) {
            msg.channel.send('https://i.kym-cdn.com/photos/images/newsfeed/001/176/251/4d7.png');
            return
        }

        if (msg.content.match(/\b(minion|minions|bolsominion|bolsominions)\b/i)) {
            if (msg.channel.id != '426072245538914307') { return }

            msg.channel.send('https://i.ibb.co/dDNSMvr/image.png');
            return
        }

        if (msg.content.match(/\b(já morreu|ja morreu)\b/i)) {
            msg.channel.send('http://i.imgur.com/kn6bR1U.png');
            return
        }

        if (msg.content.match(/\bvai da merda\b/i)) {
            msg.channel.send('https://youtu.be/c5ZRjdlLMEM');
            return
        }

        if (msg.content.match(/\b(84 anos|já fazem|ja fazem)\b/i)) {
            msg.channel.send('https://youtu.be/c5ZRjdlLMEM');
            return
        }

        if (msg.content.match(/\b(briguem|se matem)\b/i)) {
            msg.channel.send('https://youtu.be/c5ZRjdlLMEM');
            return
        }

        if (msg.content.match(/\b(sou bonito|como eu sou bonito)\b/i)) {
            msg.channel.send('https://www.youtube.com/watch?v=lL_c7AZLxgM');
            return
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

// module.exports = { run };

    // message(contains: textAnySize("mundo da voltas")) do |event|
    //   event.respond "https://imgur.com/a/nWQhHAZ"
    // end

    // message(contains: textAnySize("jogo virou")) do |event|
    //   event.respond "https://imgur.com/a/GamGTH8"
    // end

    // message(contains: textAnySize("pikachuo")) do |event|
    //   event.respond "https://imgur.com/a/qWmxO4M"
    // end

    // message(contains: textAnySize("triste")) do |event|
    //   event.respond "https://www.youtube.com/watch?v=wEWF2xh5E8s"
    // end

    // message(contains: textAnySize(" sad ")) do |event|
    //   event.respond "https://www.youtube.com/watch?v=wEWF2xh5E8s"
    // end

    // message(contains: textAnySize("tururu")) do |event|
    //   event.respond "https://www.youtube.com/watch?v=wEWF2xh5E8s"
    // end

    // message(contains: textAnySize("pare")) do |event|
    //   event.respond "https://imgur.com/a/KTywwYA"
    // end

    // message(contains: textAnySize("gloria")) do |event|
    //   event.respond "Gloria a DEUXXSSSS"
    // end

    // message(contains: textAnySize("kkk")) do |event|
    //   event.respond "eae man kkk"
    // end

    // message(contains: textAnySize("eomegalule")) do |event|
    //   event.respond "https://i.imgur.com/jYtfRix.jpg"
    // end

    // message(contains: textAnySize("um momento")) do |event|
    //   event.respond "https://imgur.com/a/pRBvmkR"
    // end

    // message(contains: textAnySize("ta safe")) do |event|
    //   event.respond "ta safe neh? https://i.imgur.com/54IxgZb.png"
    // end

    // message(contains: textAnySize("marrapais")) do |event|
    //   event.respond "http://i.imgur.com/rF2HBBz.png"
    // end

    // message(contains: textAnySize("plantão")) do |event|
    //   event.respond "https://www.youtube.com/watch?v=7DYomde2YEc"
    // end

    // message(contains: textAnySize("plantao")) do |event|
    //   event.respond "https://www.youtube.com/watch?v=7DYomde2YEc"
    // end

    // message(contains: textAnySize("hacker")) do |event|
    //   event.respond "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQebfDHU5W9dp59HyP8A9lTV7mcQKstZ5UZy_Zf-IM8bhCtsDnQ2Q"
    // end

    // message(contains: textAnySize("hackerman")) do |event|
    //   event.respond "https://i.kym-cdn.com/photos/images/newsfeed/001/176/251/4d7.png"
    // end

    // message(contains: textAnySize("já morreu")) do |event|
    //   event.respond "http://i.imgur.com/kn6bR1U.png"
    // end

    // message(contains: textAnySize("ja morreu")) do |event|
    //   event.respond "http://i.imgur.com/kn6bR1U.png"
    // end

    // message(contains: textAnySize("vai da merda")) do |event|
    //   event.respond "https://youtu.be/c5ZRjdlLMEM"
    // end

    // message(contains: textAnySize("84 anos")) do |event|
    //   event.respond "https://imgur.com/a/KEPiJ4N"
    // end

    // message(contains: textAnySize("já fazem")) do |event|
    //   event.respond "https://imgur.com/a/KEPiJ4N"
    // end

    // message(contains: textAnySize("briguem")) do |event|
    //   event.respond "https://imgur.com/a/KbZRKds"
    // end

    // message(contains: textAnySize("como eu sou bonito")) do |event|
    //   event.respond "https://www.youtube.com/watch?v=lL_c7AZLxgM"
    //   event.respond "Meus deus todo poderoso, como eu sou bonito, como sou forte."
    //   event.respond "Sim mais do que qualquer outra coisa da terra, a lua, as estrelas o sol brilhante, sao insignificantes diantes de mim."
    //   event.respond " Nada eh mais bonito que eu."
    // end
