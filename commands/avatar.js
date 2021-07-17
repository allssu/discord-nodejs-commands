module.exports = {
  name: "아바타",
  description: "내 아바타를 보여줍니다.",
  execute(message) {
    return message.channel.send(`${message.author}의 아바타 :
        ${message.author.displayAvatarURL()}`);
  },
};
