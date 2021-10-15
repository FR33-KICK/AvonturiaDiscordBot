module.exports = {
	name: 'solliciterenb',
	description: 'solliciterenb Commando',
    execute(client, message, args, Discord) {
        const suggestionb = new Discord.MessageEmbed()
        .setColor('#008d43')
        .setTitle('AvonturiaParkMC | Solliciteren')
        .setDescription('Op dit moment zijn er nog geen vacatures beschikbaar.. Kom later terug!')
        .setFooter('AvonturiaParkMC | Solliciteren', 'https://i.imgur.com/qxoexbQ.jpg');
        message.channel.send(suggestionb)
    }}