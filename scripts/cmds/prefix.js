module.exports = {
    config: {
        name: "prefix",
        version: "1.0",
        author: "shizuka junior", // this cmd will expire if will change the credits
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "prefix",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
  const link = [
"https://i.ibb.co/1Q4ZKP2/image.jpg",
"https://i.ibb.co/Tm86bt0/image.jpg",
"https://i.ibb.co/8d13gLL/image.jpg"
]
 let img = link[Math.floor(Math.random()*link.length)]
    if (event.body && event.body.toLowerCase() == "prefix") return message.send({
  body: "\n.∧,,,∧   ~┏━━━━━━┓\n.(  ̳• · • ̳)  ~   𝑷𝑹𝑬𝑭𝑰𝑿 ↠⚽ \n/       づ  ~┗━━━━━━┛",attachment: await global.utils.getStreamFromURL(img)})
}
};
