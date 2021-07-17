const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
  name: "테스트",
  description: "테스트 명령어",
  execute(message) {
    const description = message.content.substring(3);

    const embed = new Discord.MessageEmbed()
      .setTitle("👇 투표합시다 😅")
      .setDescription(description)
      .setColor("RED");

    message.channel.send(embed).then((msg) => {
      msg.react("👍");
    });
  },
};
