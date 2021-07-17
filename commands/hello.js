module.exports = {
  name: "안녕",
  description: "무엇을 하는 명령어인지",
  execute(message) {
    return message.channel.send(`${message.author}, 안녕!`);
  },
};
