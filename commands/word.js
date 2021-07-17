module.exports = {
  name: "단어",
  description: "입력한 단어를 띄어쓰기 기준으로 봇이 알려줍니당.",
  execute(message, args) {
    message.channel.send(`입력한 단어는 총 ${args.length} 단어 입니다.`);
    args.map((arg) => {
      message.channel.send(arg);
    });
  },
};
