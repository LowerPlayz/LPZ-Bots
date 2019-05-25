const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = client;
const index3 = require("./index3.js");

const PREFIX = 'p!';
var version = '0.0.1';

client.on('ready', () =>{
    console.log('This bot is online!');
    client.user.setActivity('Half Life 3(p!help for commands)')
})

client.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "welcome-byes");
    if(!channel) return;

    channel.send(`Welcome to the server, ${member}`)
});

client.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'website':
                message.channel.sendMessage('** Subscribe to LowerPlayz at https://www.youtube.com/channel/UCt_C_rySeTRm6CBDfnihaSg **')
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.sendMessage('Version ' + version);
            }else{
                message.channel.sendMessage('**<Invalid Command>**')
            }
            break;
        case 'embed':
            const embed = new Discord.RichEmbed()
            .setTitle('User Information')
            .addField('Player Name', message.author.username)
            .addField('Current Server', message.guild.name)
            .setColor(0xE74C3C)
            .setThumbnail(message.author.avatarURL)    
            message.channel.sendEmbed(embed);
            break;         
        case 'avatar':
            message.reply(message.author.avatarURL)
            break;
        case 'help':
            
            message.channel.sendMessage('`p!ping - Shows the ping of user                                                                                                               p!website - Youtube Channel of LPZ Bots Maker                                                      p!info version - Shows the current version of LPZ Bots                                                                                                     p!embed - Shows your profile                                                                                            p!avatar - Shows your profile picture                                                                                              p!help - Shows list of commands                                                                                                           p!say - Make the bot to say something for you                                                                                                           p!kick - Kicks a user(The user can come back)                                                                                                          p!ban - Bans a player forever unless unbanned                                                                                                      p!purge - Deletes messages in the range of 2 - 100                                                                                                                       Please subscribe to LowerPlayz and more commands will be added in the future!`')                   
                
            break; 
    }
})

client.login(process.env.BOT_TOKEN);
