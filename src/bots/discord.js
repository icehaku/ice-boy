// import goodMorningJob from '../jobs/good-morning';
const Discord = require('discord.js');
const client = new Discord.Client();
const GetSafe = require ('get-safe');
const randomItem = require('random-item');

//Ice-Bot_id: '501914119952138250'
//discordthur: 426072245538914307
//msg.reply
//msg.channel.send
//IceDomain: 469482024642674688

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

    //MEMESSAGES SHARED
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
    //MEMESSAGES SHARED END

    //MEMESSAGES DISCORDTHUR
    client.on('message', (msg) => {
        if (msg.author.id === '501914119952138250') { return }
        if (msg.channel.id != '581125008781213732') { return }

        // if (msg.content.match(/\bping\b/i)) {
        //      msg.channel.send('Pong! Message!');g
        // }

        if (msg.content.match(/\b(minion|minions|bolsominion|bolsominions|bozo|bolso|bolsonaro)\b/i)) {
            msg.channel.send('https://i.ibb.co/dDNSMvr/image.png');
            let passa_pano= randomItem([
                'Deixa o homen trabalhar!!!',
                'Não foi isso que ele quis dizer!!!',
                'Revolução Militar, não golpe!!!',
                'Culpa das ONGs!!!',
                'Você por acaso já leu algo Pr.Olavo?',
                'Não é nepotismo é mérito!',
                'Liberal na economia, conservador nos costumes!',
                'E o Lula? e o PT! https://media.tenor.com/images/57d33351336138309605d34778e77590/tenor.gif'
            ]);
            msg.channel.send(passa_pano);
            return
        }

        if (msg.content.match(/\b(xora bixão|chora bixão|chora bixao|chora bixaum|chora bichão|chora bixao)\b/i)) {
            msg.channel.send('Eu sei que tu chora, chora ai :clap: :clap: :clap:');
            return
        }

        if (msg.content.match(/\bDa pra fazer\b/i)) {
            msg.channel.send('Dá demais!');
            return
        }

        if (msg.content.match(/\bTop Secret\b/i)) {
            msg.channel.send('Isso é top secret cara, conta pra ninguém não!');
            return
        }

        if (msg.content.match(/\b(Cidadão|cidadao)\b/i)) {
            msg.channel.send('Olha ai Karlos o Cidadão!');
            return
        }

        if (msg.content.match(/\b(teste|testa)\b/i)) {
            msg.channel.send('Testa ai agora!');
            return
        }

        if (msg.content.match(/\btchau\b/i)) {
            msg.channel.send('tchaupatau!');
            return
        }

        if (msg.content.match(/\bskills\b/i)) {
            msg.channel.send('tá duvidando das minhas skills?');
        }

        if (msg.content.match(/\bGanhei\b/i)) {
            msg.channel.send('Eu ganhei foi???');
            return
        }

        if (msg.content.match(/\bTosco\b/i)) {
            msg.channel.send('Olha ai Karlos que tosco');
            return
        }

        if (msg.content.match(/\bIPS\b/i)) {
            msg.channel.send('Karlos é que nem um laser, ele mira e atira.');
            return
        }

        if (msg.content.match(/\b(xuas punk|punk)\b/i)) {
            msg.channel.send('Ele é punk mesmo');
            return
        }

        if (msg.content.match(/\bStephen\b/i)) {
            msg.channel.send('Ei o Stephen é bom mesmo?');
            return
        }

        if (msg.content.match(/\bapelido\b/i)) {
            msg.channel.send('Ei vocês sabiam que apelido dele é piroca?');
            return
        }

        if (msg.content.match(/\bLow Level\b/i)) {
            msg.channel.send('Isso é coisa de low level ein');
            return
        }

        if (msg.content.match(/\brachar\b/i)) {
            msg.channel.send('Ei mah vamo rachar?');
            return
        }

        if (msg.content.match(/\brepost\b/i)) {
            msg.channel.send('https://www.youtube.com/watch?v=2F46tGehnfo');
            return
        }

        if (msg.content.match(/\bindireta\b/i)) {
            msg.channel.send('peixonauta é uma indireta');
            return
        }

        if (msg.content.match(/\bhots\b/i)) {
            msg.channel.send('Pfii que jogo tosco');
            return
        }
    });
    //MEMESSAGES DISCORDTHUR END

    //MEMESSAGES MIGUXOS
    client.on('message', (msg) => {
        if (msg.author.id === '501914119952138250') { return }
        if (msg.channel.id != '111701169704841216') { return }

        // if (msg.content.match(/\bping\b/i)) {
        //      msg.channel.send('Pong! Message!');
        // }

    });
    //MEMESSAGES MIGUXOS END

    client.login(process.env.DISCORD_BOT_TOKEN)
        .then((result) => {
            console.info('Discord Bot is alive! (•̀ᴗ•́)و');
        })
        .catch((error) => {
            console.error('Discord Bot could not be arised. Its so sad... =[');
        });
}

// command(:fortcoming) do |event|
//   return unless event.channel.id == 551048576277545000
//   url = "https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get"
//   result = HTTParty.get(url).body
//   result = JSON.parse(result)

//   if result["error"].present?
//     event.respond result["errorMessage"]
//   else
//     begin
//       result["items"].each do |item|
//         event.respond item["item"]["images"]["information"]
//       end
//     rescue Exception => erro
//       event.respond "EEEEETA PORRA, deu erro aqui, avisa ao mestre ice o erro é esse: "+erro.message
//     end
//   end
// end  #end command fortcoming


// #fortnite store channel: 551048576277545000
// #bot-debug : 503762979112615937
// command(:fortstore) do |event|
//   return unless event.channel.id == 551048576277545000
//   url = "https://fortnite-public-api.theapinetwork.com/prod09/store/get?language=en"
//   result = HTTParty.get(url).body
//   result = JSON.parse(result)

//   if result["error"].present?
//     event.respond result["errorMessage"]
//   else
//     event.respond "PREPARA A CARTEIRA ARROMBADO!!!11"
//     result["items"].each do |item|
//       # VIA SEND IMAGE
//       # image_url  = item["item"]["images"]["information"] rescue nil
//       # image_name = "#{item["name"]}.png" rescue "temp.png"
//       # if image_url.present?
//       #   open(image_name, 'wb') do |local_file|
//       #     local_file << open(image_url).read
//       #     $bot.send_file(event.channel.id, File.open(local_file.path,'r'))
//       #     File.delete(local_file.path) if File.exist?(local_file.path)
//       #   end
//       # end

//       #VIA URL SECA
//       begin
//         images = ""
//         images += item["item"]["images"]["information"]+"\n" if item["item"]["images"]["information"].present?
//         images += item["youtube"]+"\n" if item["youtube"].present?
//         event.respond images
//       rescue; end
//     end
//     event.respond "POR HOJE É SÓ MIA JOIA!"
//   end
// end #end command fortstore
