module.exports = {
	name: 'suggestieb',
	description: 'Sugesstieb Commando',
    execute(client, message, args, Discord) {
        const suggestionb = new Discord.MessageEmbed()
        .setColor('#008d43')
        .setTitle('AvonturiaParkMC | Suggesties')
        .setDescription('Heb jij een idee voor de Discord/Minecraft server? Typ hier dan jou suggestie en mischien wordt het wel uitgewerkt!')
        .setFooter('AvonturiaParkMC | Suggestie', 'https://i.imgur.com/qxoexbQ.jpg');
        message.channel.send(suggestionb)
    }}