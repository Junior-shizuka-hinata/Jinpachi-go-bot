module.exports = {
 config: {
	 name: "bonjour",
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
 if (event.body && event.body.toLowerCase() === "bonjour") {
 return message.reply({
 body: ` BONJOUR ET BONNE JOURNÉE...🌺 `,
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/vhFjWwy/image.gif")
 });
 }
 }
}
