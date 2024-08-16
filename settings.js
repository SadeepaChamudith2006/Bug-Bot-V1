//base by DGXeon (Xeon Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: http://www.youtube.com/@techgod143
//Instagram: @techgod143
//Telegram: t.me/techgod143
//GitHub: @techgod143
//WhatsApp: +917466008456
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@techgod143

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "94740952096"
global.ownername = "Sadeepa Chamudith"
global.ytname = "YT: "
global.socialm = "GitHub: SChamudith200611"
global.location = "Sri Lanka, Matara, Dickwella"

global.ownernumber = '94740952096'  //creator number
global.ownername = 'Sadeepa Chamudith' //owner name
global.botname = 'Bug Bot V1' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = 'Sadeepa Chamudith\n\nContact: +94740952096'

//console view/theme
global.themeemoji = '🪀'
global.wm = "Bug Bot V1 Bot Inc."

//theme link
global.link = 'https://chat.whatsapp.com/IWymZVMwCtV9sbMwd5nFk2'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = true //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = false //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v2'

//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by Tech God or premium user only',
    admin: 'This feature can be used by Tech God or admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by Tech God or owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
