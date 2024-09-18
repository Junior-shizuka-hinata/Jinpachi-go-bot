module.exports = {
 config: {
	 name: "sukuna",
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
 if (event.body && event.body.toLowerCase() === "sukuna") {
 return message.reply({
 body: ` RYOMEN SUKUNA 😈 `,
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/8sL4FRb/image.gif")
 });
 }
 }
}
