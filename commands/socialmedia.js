module.exports = {
	name: 'socialmedia',
	description: 'Socialmedia command',
    execute(client, message, args, Discord) {
        const newEmbedper = new Discord.MessageEmbed()
        .setColor('#E74C3C')
        .setTitle('AvonturiaParkMC | Geen Permissie')
        .setDescription(`${message.author} Je hebt geen permissie om dit commando uit te voeren!`);
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(newEmbedper)
        const newEmbed1 = new Discord.MessageEmbed()
        .setColor('#992D22')
        .setTitle('AvonturiaParkMC | Socialmedia')
        .addFields(
            {name: '\u200B', value: 'Volg AvonturiaParkMC op Instagram! [Volg ons!](https://instagram.com/avonturiaparkmc)\r\nVolg AvonturiaParkMC op YouTube! [Volg ons!](https://www.youtube.com/channel/UCRvx1ear08TefcLaxZAc1ow)\r\nVolg AvonturiaParkMC op TikTok! [Volg ons!]( https://tiktok.com/@avonturiaparkmc)\r\nVolg AvonturiaParkMC op Twitter! [Volg ons!](https://twitter.com/AvonturiaPark?s=09)'}
        )
        .setFooter('AvonturiaParkMC | Socialmedia', 'https://i.imgur.com/qxoexbQ.jpg');
        message.channel.send(newEmbed1);

}}