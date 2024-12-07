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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_17_12_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1LFxuICAgICAgICAzNixcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDczLFxuICAgICAgICA1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDgwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDM3LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDg2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwLFxuICAgICAgICA5MCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY0LFxuICAgICAgICA4NCxcbiAgICAgICAgMyxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA5OSxcbiAgICAgICAgMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNCxcbiAgICAgICAgNDksXG4gICAgICAgIDI4LFxuICAgICAgICA4MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNixcbiAgICAgICAgMTExLFxuICAgICAgICA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMixcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTksXG4gICAgICAgIDc0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDksXG4gICAgICAgIDgzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcxLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMixcbiAgICAgICAgODUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDM3LFxuICAgICAgICA3NixcbiAgICAgICAgMjAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoQVlQa2MvclRIWklFQUV0dFp0c1gyVUdZZHBadlpzTERZNWJHQVhSYXYwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTTXhOQU1lMVJacUJsSU95MkllNmR3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjZiMzI1MGJmLTA3YTktNGY4Ni05OTUxLWY0MDA4YzBlOWVlZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMixcbiAgICAgIDEwMCxcbiAgICAgIDI3LFxuICAgICAgNTgsXG4gICAgICAxNDEsXG4gICAgICAxMDAsXG4gICAgICAxODYsXG4gICAgICAyMzksXG4gICAgICA5MSxcbiAgICAgIDIzMyxcbiAgICAgIDIwNSxcbiAgICAgIDQsXG4gICAgICA3MixcbiAgICAgIDExMixcbiAgICAgIDE4OSxcbiAgICAgIDcsXG4gICAgICAyLFxuICAgICAgNzUsXG4gICAgICAyMzUsXG4gICAgICAxMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzgsXG4gICAgICA0OSxcbiAgICAgIDIzLFxuICAgICAgMjI4LFxuICAgICAgMjE0LFxuICAgICAgMjA0LFxuICAgICAgODAsXG4gICAgICAyMjEsXG4gICAgICAyMTYsXG4gICAgICA0NixcbiAgICAgIDcwLFxuICAgICAgMTM5LFxuICAgICAgMTYsXG4gICAgICAxNDAsXG4gICAgICAyNTUsXG4gICAgICA4NixcbiAgICAgIDE2MCxcbiAgICAgIDQsXG4gICAgICAxOTMsXG4gICAgICAyNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOVFQOUhKSk1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI3NTIwNTc0MDoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNoYW1pc2hhaFwiLFxuICAgIFwibGlkXCI6IFwiMTk1NDYwMDg2MTA4MjQ1OjI3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BxaDA2TUVFUG1WMGJvR0dBc2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWWN1alRMUzJvSGRWWWxHdENiSmk3OC9tcEQ4czlwTkd4dFU4ZUlNZUVIdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFczFqSEtFVUR5VFMvaStTdy9YUDl0WEdFR0RjTHBMOUhreDVLYlFQOUJzdXpCeDE1bUNOeURJZWNWRGRKdW5SSW9sU2dPZnZLUlFjSlRLVThaTXFCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBZDg1V0UyMXdMV0RsSWpKY1lSdFJJeWJLTW5ZWVlMUkluL3B5RzhmN1dYR3RrZHN4d3VmZFBpOHpPSjZQbE1uRjMyMUFnK1FtempvWUdjZVFxdVBqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNzUyMDU3NDA6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNTc3NDY4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXljXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJeWMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3dGlCZ2hEOG1UbHJIUkdXN1UwVyt1MEt2RkUya1RtelZOWVk2VUN2bjA4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNDg1MDYzNjIsXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9  // PUT your SESSION_ID 


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
