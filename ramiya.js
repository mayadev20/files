// -----------------------------------------------------------------------------------------------------------------------------
//  ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ----
// -----------------------------------------------------------------------------------------------------------------------------

const fs = require('fs');
if (fs.existsSync('ramiya.env')) require('dotenv').hatzu({ path: './ramiya.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
// -----------------------------------------------------------------------------------------------------------------------------
//  ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ----
// -----------------------------------------------------------------------------------------------------------------------------

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);
// -----------------------------------------------------------------------------------------------------------------------------
//           API උස්සන්න ද ආවෙ, ලැජ්ජා වෙයන් තනියම හදාගන්න බැරි එක ගැන. Owner ට ගරු කරලා Apikey මාරු කරලා ගනින් උස්සනවා නම් !
// -----------------------------------------------------------------------------------------------------------------------------
module.exports = {
  VERSION: 'v2.2.0',
  BOT: '🦹‍♂️ *AZURE v2.2*',
//----------------------------------------------------|-SITES-|-------------------------
  SITE1: 'https://api.dapuhy.xyz/api/', 
  SITE2: 'https://api.dapuhy.xyz/api/',
  SITE3: 'https://zenzapi.xyz/downloader/',
  SITE4: 'https://api-senku.herokuapp.com/api/',
  SITE5: 'https://api.chipa.xyz/api/',
  SITE6: 'https://api.zeks.me/api/',
  SITE7: 'https://rei-api.herokuapp.com/api/',
  SITE8: 'https://bx-hunter.herokuapp.com/api/',
  SITE9: 'https://hardianto-chan.herokuapp.com/api/',
  SITE10: 'https://zenzapi.xyz/api/',
  SITE11: 'https://dhnjing.xyz/api/',
  SITE12: 'https://yuzzu-api.herokuapp.com/api/',
  SITE13: 'https://flamingtext.com/net-fu/proxy_form.cgi',
  SITE14: 'https://tyz-api.herokuapp.com/randomimg/akaneko?param=',
  SITE15: 'https://api.lolhuman.xyz/api/',

//---------------------------------------------------|-SUB-URL-|-----------------------
  FBS2: 'snapsave?url',
  YTX1: 'ytmp4v2?url',
  YTX2: 'ytplaymp4v2?query',
  S10XMP3Q: 'playmp3?query=',
  DOWN: 'downloader/',
  FB: 'facebook',
  IG: 'instagram',
  BASE1: 'base32',
  BASE2: 'base64',
  
//-------------------------------------------------------------------------------------
//     Owner ට ගරු කරලා Apikey මාරු කරලා ගනින් උස්සනවා නම් ! පහල APIKEY උස්සන්න එපා.
//-------------------------------------------------------------------------------------
  S1API: 'OSuDZukzPWE49ro',
  S2API: 'azure01',
  S3API: 'azure1',
  S4API: 'SenkuApi',
  S5API: '2NU5TC8GIGZNPL5NU357KJZF',  
  S6API: 'azurebot1',
  S7API: '0',
  S8API: 'Ikyy69', // NOT ANYMORE
  S9API: 'hardianto',
  S11API: '266396231e5074bc19fc',
//-------------------------------------------------------------------------
  ADMIN: process.env.ADMIN === undefined ?'RAMIYA' : process.env.ADMIN,
  ADMIN1: process.env.ADMIN1 === undefined ?'RAMIYA' : process.env.ADMIN1,
    
// -----------------------------------------------------------------------------------------------------------------------------
//  ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ----
// -----------------------------------------------------------------------------------------------------------------------------
 };
