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


global.SESSION_ID = process.env.SESSION_ID  || ""SUHAIL_02_54_12_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTIsXG4gICAgICAgIDEzLFxuICAgICAgICA3NixcbiAgICAgICAgNTcsXG4gICAgICAgIDI5LFxuICAgICAgICA4NixcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxODEsXG4gICAgICAgIDUzLFxuICAgICAgICA3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3MixcbiAgICAgICAgMTAxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDkzLFxuICAgICAgICA1NixcbiAgICAgICAgMTk1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI3LFxuICAgICAgICA2MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNzIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg1LFxuICAgICAgICA1NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM1LFxuICAgICAgICAxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ3LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NixcbiAgICAgICAgNzQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjU0LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDc2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDI5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDcwLFxuICAgICAgICA5MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2MixcbiAgICAgICAgMjEwLFxuICAgICAgICA5NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3OCxcbiAgICAgICAgNDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDczLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA4OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDc1LFxuICAgICAgICA2NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDc1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInVlMGRuQXNERkVCUmJmdk80dHV4dUt4OEJ0cnRadkVvY3B4WlVPd0xkWWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpOQVV5ZnZyUXF1UHFjcE9tTUxJRGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTY1YjM5YzYtOGVjNi00ZTVkLThlM2UtYjNlYmYyMzhkNjM4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQyLFxuICAgICAgMTU0LFxuICAgICAgMTUsXG4gICAgICAyNDMsXG4gICAgICAyMzQsXG4gICAgICAxNDEsXG4gICAgICAxNjcsXG4gICAgICAxMjksXG4gICAgICAxMDYsXG4gICAgICA0NyxcbiAgICAgIDE3MyxcbiAgICAgIDU1LFxuICAgICAgNjIsXG4gICAgICAxMDMsXG4gICAgICAyMTMsXG4gICAgICAyMjQsXG4gICAgICA3LFxuICAgICAgNDcsXG4gICAgICAxMDMsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDYsXG4gICAgICA4NyxcbiAgICAgIDE1OSxcbiAgICAgIDEyMSxcbiAgICAgIDgwLFxuICAgICAgMTM1LFxuICAgICAgMTMzLFxuICAgICAgMTAwLFxuICAgICAgMTQ3LFxuICAgICAgMTkwLFxuICAgICAgMTU2LFxuICAgICAgNTAsXG4gICAgICAxNCxcbiAgICAgIDMxLFxuICAgICAgMjE3LFxuICAgICAgNDksXG4gICAgICAyMyxcbiAgICAgIDE1MixcbiAgICAgIDEyMSxcbiAgICAgIDM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFMTkg1UkJTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNzUyMDU3NDA6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTaGFtaXNoYWhcIixcbiAgICBcImxpZFwiOiBcIjE5NTQ2MDA4NjEwODI0NToyMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQcWgwNk1FRU8zeHpyb0dHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlljdWpUTFMyb0hkVllsR3RDYkppNzgvbXBEOHM5cE5HeHRVOGVJTWVFSHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibC9wMVVXZ2wzQlExZUFBVmpiL2tNNkZWcVFqck9kUmtCZzEwbFNpM04xTTljZ01pN3ZUYjA5WWRKeG5JTFVRbWNVVkh2NFc3dGQrWFkzNWRvNytoQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS2ZselFqQitnZ2hUVWI0Zm04U0NZMG9iT3ZtRTh5LzF3R0FBOHpmWHp2Rjg0eWZxSk00V0xtaUV4YS8vTythVlo2c25DeDBQN1BWMVlNYmh1RDlRQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjc1MjA1NzQwOjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzU0MDA4MFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=  // PUT your SESSION_ID 


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
