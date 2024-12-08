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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_40_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA3NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NixcbiAgICAgICAgMTg0LFxuICAgICAgICAzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM0LFxuICAgICAgICA4MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODcsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICA1OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA5OCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDQzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICAzNixcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDkzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTksXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyLFxuICAgICAgICA3NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgODYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDc0LFxuICAgICAgICAxODQsXG4gICAgICAgIDk4LFxuICAgICAgICA4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDk5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR2NjTXFqUGRxajhwN2E3Yms1VkM5N2NXRmF1enhCU3Zyeis5OElmRjVlUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwickRxNjVlRnhRRFNCak5EQ2hkUzF5d1wiLFxuICBcInBob25lSWRcIjogXCI3NzA4OTAxMi1iMmZkLTRkNTItYjVhYi0yZGIzNDhiMjQ2MmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDUsXG4gICAgICAyNCxcbiAgICAgIDM1LFxuICAgICAgNzgsXG4gICAgICAxODIsXG4gICAgICAxMjgsXG4gICAgICAxNzQsXG4gICAgICAyMjIsXG4gICAgICAxNDEsXG4gICAgICAyMjYsXG4gICAgICAyNDcsXG4gICAgICAyNTUsXG4gICAgICAxODksXG4gICAgICAxMjksXG4gICAgICAyMTYsXG4gICAgICAyMTEsXG4gICAgICAxMTMsXG4gICAgICAyMjAsXG4gICAgICAyNTQsXG4gICAgICAxNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg4LFxuICAgICAgMTc2LFxuICAgICAgMzAsXG4gICAgICAyNDUsXG4gICAgICAzOCxcbiAgICAgIDksXG4gICAgICAxMzYsXG4gICAgICAyNTAsXG4gICAgICAxNTgsXG4gICAgICAxODYsXG4gICAgICAyMjIsXG4gICAgICAxMzUsXG4gICAgICAxNTEsXG4gICAgICAxMzYsXG4gICAgICAyMjQsXG4gICAgICA3LFxuICAgICAgMTc1LFxuICAgICAgMjM5LFxuICAgICAgOTMsXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUEFXNExXRldcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI3NTIwNTc0MDozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNoYW1pc2hhaFwiLFxuICAgIFwibGlkXCI6IFwiMTk1NDYwMDg2MTA4MjQ1OjM2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BxaDA2TUVFSy9EMXJvR0dCUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWWN1alRMUzJvSGRWWWxHdENiSmk3OC9tcEQ4czlwTkd4dFU4ZUlNZUVIdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxeVBRdWVwWjg1cmE4MHlzU2RpanpEY1NTRm1EcE1ncTcyeWRCa29CeUVWSGJ1ajJnWnNzcGJFR1htREZiREl5cVNmaWlEUDQ1WjNGY2N0WmpSeFlDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkTm41N1BxVTM5Q1VnQU1FMWxLdDkwL1Zmb3BxZkZFYzJNTFJrMm9KeFltU2Y1ZTdsR1E5UGhUc3lMYXg0YlRycmN0K3pWQWl3SitHNGUwbDg3eXVqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNzUyMDU3NDA6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNjY1MjAyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXlrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJeWsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYT3kxK0lZakRkN0NOVkN3YmVEQkdNRFpMaU5TdEZBKzNhQTZWaUp3V2k0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNDg1MDYzNjIsXCJjdXJyZW50SW5kZXhcIjoxNSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=  // PUT your SESSION_ID 


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
