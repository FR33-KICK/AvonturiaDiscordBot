module.exports = {
	name: 'roleselect',
	description: 'Roleselect command',
    execute(client, message, args, Discord) {
        const newEmbedper = new Discord.MessageEmbed()
        .setColor('#E74C3C')
        .setTitle('AvonturiaParkMC | Geen Permissie')
        .setDescription(`${message.author} Je hebt geen permissie om dit commando uit te voeren!`);
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(newEmbedper)
        const newEmbed1 = new Discord.MessageEmbed()
        .setColor('#992D22')
        .setTitle(':scroll: AvonturiaParkMC | Role Select')
        .addFields(
            {name: 'In deze channel kan jij een rank aanvragen voor jouw favoriete channel(s). Als jij deze rank hebt krijg jij een pushmelding als er een mededeling is van jouw channel!', value: 'Zet notificaties 👀 sneakpeaks aan.\r\nZet notificaties 🎢 mededelingen aan.\r\nZet notificaties 🔧 updates aan.'}
        )
        .setFooter('AvonturiaParkMC | Role Select', 'https://i.imgur.com/qxoexbQ.jpg');
        message.channel.send(newEmbed1);

}}