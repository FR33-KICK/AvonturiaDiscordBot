module.exports = {
	name: 'informatie',
	description: 'Informatie command',
    execute(client, message, args, Discord) {
        const newEmbedper = new Discord.MessageEmbed()
        .setColor('#E74C3C')
        .setTitle('AvonturiaParkMC | Geen Permissie')
        .setDescription(`${message.author} Je hebt geen permissie om dit commando uit te voeren!`);
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(newEmbedper)
        const newEmbed1 = new Discord.MessageEmbed()
        .setColor('#992D22')
        .setTitle('AvonturiaParkMC | Informatie')
        .addFields(
            {name: 'Welkom in de discord server van Avonturia', value: '• Op dit moment zijn wij in onderhoud :pick:\r\n• Houdt #🎢-mededelingen  in de gaten voor updates! :roller_coaster:\r\n\r\nMeer van Avonturia? #🐦-socialmedia '}
        )
        .setFooter('AvonturiaParkMC | Informatie', 'https://i.imgur.com/qxoexbQ.jpg');
        message.channel.send(newEmbed1);

}}