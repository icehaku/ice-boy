import axios from 'axios';
var _ = require('lodash');

// Promisify Native node8+
const redis = require('redis');
const client = redis.createClient();

const { promisify } = require('util');
const redisReadPromise = promisify(client.get).bind(client);
const redisSetPromise = promisify(client.set).bind(client);

// export const getNextReleases = async (start, end, supportedPlatforms)=> {
//     const redisResult = await redisReadPromise(`releases:${start}-${end}`)

//     if (!_.isEmpty(redisResult)) {
//         console.log(`used releases:${start}-${end} cache`);
//         return JSON.parse(redisResult);
//     };

//     console.log(`key releases:${start}-${end} don't exist`);

//     const apiResponse = await axios({
//         url: "https://api-v3.igdb.com/games",
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'user-key': IGDB_TOKEN
//         },
//         data: `
//         fields id, name, release_dates.date, release_dates.platform.name;
//         sort release_dates.date desc;
//         limit 20;
//         where release_dates.date > ${start} & release_dates.date < ${end}
//         & release_dates.platform = (${supportedPlatforms.join(',')});
//     `
//     });

//     const setResponse = await redisSetPromise(`releases:${start}-${end}`, JSON.stringify(apiResponse.data))
//     console.log(`releases:${start}-${end} cached`, setResponse);

//     return apiResponse.data;
// }
