module.exports = {
 config: {
	 name: "Shizuka",
	 version: "1.0",
	 author: "Tokodori_Frtiz",//remodified by cliff
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "reply",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "shizuka") {
 return message.reply({
 body: ` 𝑴𝑶𝑵 𝑪𝑹𝑬𝑨𝑻𝑬𝑼𝑹. 𝑳𝑬 𝑩𝑶𝑺𝑺 𝑺𝑼𝑷𝑹𝑬̂𝑴𝑬...💚`,
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/Wc4XCyY/image.jpg")
 });
 }
 }
}
