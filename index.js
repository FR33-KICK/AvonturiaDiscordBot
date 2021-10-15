const Discord = require("discord.js");
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
const config = require("./config.json");
const { collection, Collection } = require('discord.js')
const voiceCollection = new Collection();
const disbut = require('discord-buttons');
const log = (config.LOG_CHANNEL)
const { MessageButton, MessageActionRow } = require("discord-buttons")
disbut(client);

const token = (config.token);
const PREFIX = '!';
const ytdl = require("ytdl-core")
const {
    channel_id,
    video_urls
} = require("./config.json")

// Join wachtkamer on ready / slash commands
client.on("ready", async () => {
    console.log(`Logged in as ${client.user.tag}`)
    const voiceChannel = client.channels.cache.get(channel_id)
    voiceChannel.join().then(connection => {
        console.log("Joined voice channel")
        function play(connection) {
            const stream = ytdl(video_urls[Math.floor(Math.random() * video_urls.length)], { filter: "audioonly" })
            const dispatcher = connection.play(stream)
            dispatcher.on("finish", () => {
                play(connection)
            })
        }

// Wachtkamer join log
client.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.channelID;
    let oldUserChannel = oldMember.channelID;
    const User = client.users.cache.get(`${newMember.id}`); 
    const wachtKamerjoin = new Discord.MessageEmbed()
    .setColor('#008d43')
    .setTitle('LaagLandRP™ | Wachtkamer')
    .setDescription(`${User} is de wachtkamer **gejoined!**`);
    const wachtKamerleave = new Discord.MessageEmbed()
    .setColor('#008d43')
    .setTitle('LaagLandRP™ | Wachtkamer')
    .setDescription(`${User} is de wachtkamer **geleaved**!`);
    
    if(newUserChannel !== "876167153747894284") return 
    if(newUserChannel === "876167153747894284") {
        // User Joins a voice channel
        client.channels.cache.get(`872740729607294987`).send(wachtKamerjoin);
    } else
        // User leaves a voice channel
        client.channels.cache.get(`872740729607294987`).send(wachtKamerleave)
    }
 );
// Set the client user's activity
client.user.setActivity('AvonturiaParkMC | -', { type: 'PLAYING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
  
        play(connection)
    })
})
// Command handler #1
const fs = require('fs');
const { description } = require("./commands/verify");
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
// Status + Bot is online! log
client.on('ready', () =>{
    console.log('Bot is online!');
    client.user.setActivity('LaagLandRP™ | !help', {type: 'PLAYING'}).catch(console.error);

    })

    // Welkom Roles
    client.on('guildMemberAdd', guildMember => {      
        const newEmbedwelkom = new Discord.MessageEmbed()
.setAuthor('LaagLandRP™ | Welkom', 'https://i.imgur.com/HPAKjnA.png')
.setDescription(`Welkom ${guildMember} op de **LaagLandRP™** Discord server!`)
.addFields(
    { name: '**Belangrijk**', value: 'Zorg er voor dat je **#regels** goed doorleest!' },
    { name: '**Vragen**', value: 'Om een ticket aantemaken ga naar **#ticket-aanvragen** en type daar **!ticket**, dan helpt een stafflid je zsm.' }
)
.setFooter('LaagLandRP™ - 2021', 'https://i.imgur.com/HPAKjnA.png');
        guildMember.guild.channels.cache.find(channel => channel.name === 'welkom').send(newEmbedwelkom)
        guildMember.guild.channels.cache.find(channel => channel.name === 'welkom').send(`${guildMember}`)
        .then(msg => {
            setTimeout(() => msg.delete(), 1)
        })
        var role = guildMember.guild.roles.cache.find(role => role.name == 'Niet-Geverifieerd');
        guildMember.roles.add(role);
      });

      
  // Main command handler + Message events
  client.on('message', message=>{
    const SUGGESTION_CHANNEL = "876170017652240404"

    if (message.channel.id === SUGGESTION_CHANNEL && message.author.id !== "875858990708428800") {
        message.delete()
        let embed = new Discord.MessageEmbed()
        .setAuthor(message.member.nickname ? message.member.nickname : message.author.tag,message.author.displayAvatarURL)
        .setColor(3066993	)
        .setTitle('Suggestie')
        .setDescription(message.content)
        .setTimestamp(new Date());
        message.channel.send(embed).then((message) => {
          const sent = message;
          message.react('✅')
          message.react('❎');
        })}

    if (!message.content.startsWith(PREFIX)) return;
    
        const args = message.content.slice(PREFIX.length).split(/ +/);
        const command = args.shift().toLowerCase();


        if(command === 'regels') {
            client.commands.get('regels').execute(client, message, args, Discord);
        }
        if(command === 'informatie') {
            client.commands.get('informatie').execute(client, message, args, Discord);
        }
        if(command === 'socialmedia') {
            client.commands.get('socialmedia').execute(client, message, args, Discord);
        }
        if(command === 'solliciteren') {
            client.commands.get('solliciteren').execute(client, message, args, Discord);
        }
        if(command === 'verify') {
            client.commands.get('verify').execute(client, message, args, Discord);
        }
        if(command === 'suggestieb') {
            client.commands.get('suggestieb').execute(client, message, args, Discord);
        }
        if(command === 'solliciterenb') {
            client.commands.get('solliciterenb').execute(client, message, args, Discord);
        }
    })

client.login(process.env.token);