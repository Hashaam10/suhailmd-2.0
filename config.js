const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSISUHAIL_14_18_12_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNixcbiAgICAgICAgNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMyLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDcwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDM5LFxuICAgICAgICAxODgsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNyxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjksXG4gICAgICAgIDc0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDksXG4gICAgICAgIDc0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2MixcbiAgICAgICAgNTQsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAxLFxuICAgICAgICA4MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyLFxuICAgICAgICA2LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDgwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDQsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNyxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MixcbiAgICAgICAgMzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImxrdW9LdTIyQVg1YllTaklRYy9lUlFqVFk4cC9QWm9UeUVETmdhczFzcHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkNlWnpXNFozUkJTV0xVbkE4TGVzTmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDI5NjIxM2MtMTE3MC00YWYxLTlkNDEtN2ViNjJkMzcwMjA4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMyxcbiAgICAgIDE4NixcbiAgICAgIDIsXG4gICAgICA2LFxuICAgICAgMSxcbiAgICAgIDIyNSxcbiAgICAgIDc1LFxuICAgICAgOSxcbiAgICAgIDE1NixcbiAgICAgIDI0NixcbiAgICAgIDEzNixcbiAgICAgIDI3LFxuICAgICAgMTA0LFxuICAgICAgNzMsXG4gICAgICA1MSxcbiAgICAgIDIwMCxcbiAgICAgIDI0NCxcbiAgICAgIDEsXG4gICAgICAxMTcsXG4gICAgICAyMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkyLFxuICAgICAgMTEyLFxuICAgICAgODQsXG4gICAgICAxNDIsXG4gICAgICAyNDQsXG4gICAgICAxMDgsXG4gICAgICA5MSxcbiAgICAgIDg1LFxuICAgICAgMjA5LFxuICAgICAgMjAwLFxuICAgICAgMTc4LFxuICAgICAgOTcsXG4gICAgICAxMDIsXG4gICAgICAyMTMsXG4gICAgICAxMDQsXG4gICAgICAxMTcsXG4gICAgICAxNzksXG4gICAgICAxMDQsXG4gICAgICAwLFxuICAgICAgMTcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk0yNVpDUTFaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNzUyMDU3NDA6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTaGFtaXNoYWhcIixcbiAgICBcImxpZFwiOiBcIjE5NTQ2MDA4NjEwODI0NToyOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQcWgwNk1FRUpXeTBib0dHQXdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlljdWpUTFMyb0hkVllsR3RDYkppNzgvbXBEOHM5cE5HeHRVOGVJTWVFSHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOVNwMHJxOG9uM1o0Zm5hK1hIVS8yNHUwQ3c3Rk1FOUpRZVRzdTFoRzg2ZWRvWUdvc054UUVFeGdOc0NIaGNPbjQwVFg0QkRDUjJuVzhnTGVTeUxXQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiemMyckE0UUI3eWtSd0kvVUZBTWw0RnIyOWlBTGNtNEtsZFJwUHF6WnNvTTdOdjh3THA1TE1McWRXUTIzOGc1dGFaMGwwbUN2V0hKMVlJekhXWStTQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjc1MjA1NzQwOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzU4MTA4MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUl5Y1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXljLmpzb24iOiAie1wia2V5RGF0YVwiOlwid3RpQmdoRDhtVGxySFJHVzdVMFcrdTBLdkZFMmtUbXpWTllZNlVDdm4wOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTQ4NTA2MzYyLFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==ON_ID = process.env.SESSION_ID  || ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
