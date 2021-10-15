module.exports = {
	name: 'solliciteren',
	description: 'Solliciteren command',
    execute(client, message, args, Discord) {
        const newEmbedper = new Discord.MessageEmbed()
        .setColor('#E74C3C')
        .setTitle('AvonturiaParkMC | Geen Permissie')
        .setDescription(`${message.author} Je hebt geen permissie om dit commando uit te voeren!`);
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(newEmbedper)
        const newEmbed1 = new Discord.MessageEmbed()
        .setColor('#992D22')
        .setTitle('AvonturiaParkMC | Solliciteren')
        .addFields(
            {name: 'Wil jij solliciteren voor Staff/Moderator/Bouwer/Gastenservice op AvonturiaParkMC?', value: 'Vul dan [dit](https://forms.gle/EtH1SkxDLwgNsz6x7) formulier in en krijg z.s.m te horen of je aangenomen bent.'}
        )
        .setFooter('AvonturiaParkMC | Solliciteren', 'https://i.imgur.com/qxoexbQ.jpg');
        message.channel.send(newEmbed1);

}}