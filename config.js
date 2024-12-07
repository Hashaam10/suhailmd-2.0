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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_45_12_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODYsXG4gICAgICAgIDk5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDcxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzksXG4gICAgICAgIDg5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTczLFxuICAgICAgICA3MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA5NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU3LFxuICAgICAgICA3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwLFxuICAgICAgICAzNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMzLFxuICAgICAgICA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDcxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY1LFxuICAgICAgICA3MixcbiAgICAgICAgMTc1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE3LFxuICAgICAgICA3NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMTcwLFxuICAgICAgICA4MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNixcbiAgICAgICAgMzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDcwLFxuICAgICAgICA0OSxcbiAgICAgICAgODksXG4gICAgICAgIDI3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNixcbiAgICAgICAgMjEyLFxuICAgICAgICA1OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwLFxuICAgICAgICAyNixcbiAgICAgICAgMTg5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkpLbTRCUzcrejR2ZWlncVg4M3dBbXZxOXVJRUNpQmxDdjFjbkRoM2JhSEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInB5SElWTGt6UVRTcG10TkNsX3YyVVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2UxNDMxYzQtZDA1OS00N2E2LWI4NzAtMmIzNmM1ZWRmNGU1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM1LFxuICAgICAgNDgsXG4gICAgICAxNCxcbiAgICAgIDE3NyxcbiAgICAgIDE1NCxcbiAgICAgIDEzMixcbiAgICAgIDE3MCxcbiAgICAgIDE5OCxcbiAgICAgIDExNixcbiAgICAgIDY3LFxuICAgICAgMjQwLFxuICAgICAgMzUsXG4gICAgICAxMyxcbiAgICAgIDEzOSxcbiAgICAgIDE1LFxuICAgICAgMjI2LFxuICAgICAgMTI1LFxuICAgICAgMTMwLFxuICAgICAgMTc2LFxuICAgICAgNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2LFxuICAgICAgMjQ1LFxuICAgICAgODIsXG4gICAgICAxNzYsXG4gICAgICAxODUsXG4gICAgICAxNDYsXG4gICAgICAxNyxcbiAgICAgIDE0NyxcbiAgICAgIDIwMSxcbiAgICAgIDQ4LFxuICAgICAgMTIxLFxuICAgICAgMTksXG4gICAgICA3NixcbiAgICAgIDU4LFxuICAgICAgMjIwLFxuICAgICAgNjYsXG4gICAgICAxOTksXG4gICAgICA4MSxcbiAgICAgIDkzLFxuICAgICAgMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQcWgwNk1FRUpHeTBMb0dHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlljdWpUTFMyb0hkVllsR3RDYkppNzgvbXBEOHM5cE5HeHRVOGVJTWVFSHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOTdUc1N1cWkwNXRaZXdoeXZrdUJpS29tcTJLZ29hd1Back5BbkxIckx3VFgrRlo3bDlWdzJaQzBWa3J1MzVtSXEyeTZWdllUU3Nhc3cxNGhENitRQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVnIyWWZZS2JOUGNjQ3JnTzNZY09XSm1iaXlQQVNSbG9LczRGZ2cwOTJqdFo0VytBL3UwbzBWZUt4OFFsREh0Zlo4TUxrbWM2VlRGWXB6c3dWVnE1Z2c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNzUyMDU3NDA6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTaGFtaXNoYWhcIixcbiAgICBcImxpZFwiOiBcIjE5NTQ2MDA4NjEwODI0NToyMkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI3NTIwNTc0MDoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM1NjQ2OTZcbn0iCn0="  // PUT your SESSION_ID 


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
