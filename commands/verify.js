module.exports = {
	name: 'verify',
	description: 'verify command',
    execute(client, message, args, Discord) {
        const newEmbedper = new Discord.MessageEmbed()
        .setColor('#E74C3C')
        .setTitle('AvonturiaParkMC | Geen Permissie')
        .setDescription(`${message.author} Je hebt geen permissie om dit commando uit te voeren!`);
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(newEmbedper)
        const newEmbed1 = new Discord.MessageEmbed()
        .setColor('#992D22')
        .setTitle(':scroll: AvonturiaParkMC | Algemene voorwaarden')
        .addFields(
            {name: '\u200B', value: ':small_orange_diamond: - Niet blazen in voicechats // irritant gedrag // DDoS bedreigingen uiten.\r\n:small_blue_diamond: - Niet spammen in chats & Schelden met ziektes.\r\n:small_orange_diamond: - Geen seksuele opmerkingen maken.\r\n:small_blue_diamond: - Orders van een staff / Discord moderator altijd opvolgen.\r\n:small_orange_diamond: - Niet bemoeien met staffzaken / andermans.\r\n:small_blue_diamond: - Niet onnodig / spam mentionen & reclame maken\r\n:small_orange_diamond: - Geen speler(s) beledigen / pesten in welke vorm dan ook. \r\n:small_blue_diamond:  - Geen speler(s) uitschelden in welke vorm dan ook.\r\n:small_orange_diamond: - Geen racisme/discriminatie & Speler(s) bedreigen.\r\n:small_blue_diamond: - Niet staff uitschelden / beledigen / uitlokken. (Ook via PM’s)'}
        )
        .setFooter('AvonturiaParkMC | Algemene voorwaarden', 'https://i.imgur.com/qxoexbQ.jpg');
        message.channel.send(newEmbed1);

        const newEmbed2 = new Discord.MessageEmbed()
        .setColor('#992D22')
        .setTitle('AvonturiaParkMC | Algemene voorwaarden')
        .setFooter('Ik ga akkoord met de voorwaarden van AvonturiaParkMC.')

        message.channel.send(newEmbed2)
}}