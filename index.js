// init discord client
const Discord = require("discord.js")
const client = new Discord.Client()
 
// if login success, write log with bot name
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})
 
client.on('message', msg => {
    if (msg.content === 'hello'|| msg.content === 'hallo'|| msg.content === 'hi') {
        msg.reply('Chào cưng!')
    }
    if (msg.content === 'vcl'|| msg.content === 'vl'|| msg.content === 'zl') {
        msg.reply('Vãi cây lúa tươi xanh tung bay trước gió ngoài đồng')
    }
    if (msg.content === 'buần'|| msg.content === 'buồn'|| msg.content === 'bùn') {
        msg.reply('Thôi đừng buồn, bạn Bống thương thương')
    }
})

 
// login discord with token
client.login("NzMyOTQ0NTc2MzEwMTQ5MTIw.Xw7-3g.LFUC6cmVaak6M_ooHjSVvSqluZk")