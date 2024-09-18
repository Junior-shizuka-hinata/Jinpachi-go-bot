const { getStreamsFromAttachment, log } = global.utils;
const mediaTypes = ["photo", 'png', "animated_image", "video", "audio"];

module.exports = {
	config: {
		name: "callad",
		version: "1.7",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			vi: "gửi báo cáo, góp ý, báo lỗi,... của bạn về admin bot",
			en: "send report, feedback, bug,... to admin bot"
		},
		category: "contacts admin",
		guide: {
			vi: "   {pn} <tin nhắn>",
			en: "   {pn} <message>"
		}
	},

	langs: {
		vi: {
			missingMessage: "Vui lòng nhập tin nhắn bạn muốn gửi về admin",
			sendByGroup: "\n- Được gửi từ nhóm: %1\n- Thread ID: %2",
			sendByUser: "\n- Được gửi từ người dùng",
			content: "\n\nNội dung:\n─────────────────\n%1\n─────────────────\nPhản hồi tin nhắn này để gửi tin nhắn về người dùng",
			success: "Đã gửi tin nhắn của bạn về %1 admin thành công!\n%2",
			failed: "Đã có lỗi xảy ra khi gửi tin nhắn của bạn về %1 admin\n%2\nKiểm tra console để biết thêm chi tiết",
			reply: "📍 Phản hồi từ admin %1:\n─────────────────\n%2\n─────────────────\nPhản hồi tin nhắn này để tiếp tục gửi tin nhắn về admin",
			replySuccess: "Đã gửi phản hồi của bạn về admin thành công!",
			feedback: "📝 Phản hồi từ người dùng %1:\n- User ID: %2%3\n\nNội dung:\n─────────────────\n%4\n─────────────────\nPhản hồi tin nhắn này để gửi tin nhắn về người dùng",
			replyUserSuccess: "Đã gửi phản hồi của bạn về người dùng thành công!",
			noAdmin: "Hiện tại bot chưa có admin nào"
		},
		en: {
			missingMessage: "🌺...Veuillez saisir le message que vous souhaitez envoyer à l'administrateur...🌺\n[prefix+Callad+message]",
			sendByGroup: "\n╭━━━━━━━━━━━◆\n│𝗠𝗲𝘀𝘀𝗮𝗴𝗲 𝗲𝗻𝘃𝗼𝘆𝗲́\n│𝗱𝗲𝗽𝘂𝗶𝘀 𝗹𝗲 𝗴𝗿𝗼𝘂𝗽𝗲:\n│[%1]\n│ Thread ID\n│%2\n╰━━━━━━━━━━━◆",
			sendByUser: "\n╭━━━━━━━━━━━◆\n│ Message de l'utilisateur\n╰───────────◆",
			content: "\n🌺[✎﹏%1]🌺\n╭━━━━━━━━━━━◆\n│Réponds à ce message\n│pour envoyer ton\n│message à l'utilisateur🌺\n├━━━━━━━━━━━◆\n│✧.（〜^∇^)🍀(^∇^〜)°.❁\n╰━━━━━━━━━━━◆",
			success: "\n.   /)    /)\n.  (｡•∇•｡)〝₎₎ 𝐻𝐼𝑁𝐴𝑇𝐴....°-`✦\n╭∪━∪━━━━━━━━◆\n│🍀❀🌺𝑴𝑬𝑺𝑺𝑨𝑮𝑬🌺❀🍀\n├━━━━━━━━━━━◆\n│𝗠𝗲𝘀𝘀𝗮𝗴𝗲 𝗲𝗻𝘃𝗼𝘆𝗲́ 𝗮\n│%1 𝗮𝗱𝗺𝗶𝗻(𝘀) 𝗮𝘃𝗲𝗰\n│𝘀𝘂𝗰𝗰𝗲̀𝘀..!\n│%2\n├━━━━━━━━━━━◆\n│(❀╹з╹)🍀(≧ε≦)\n╰━━━━━━━━━━━◆",
			failed: "\n. ∧,,,∧\n. (  ̳• · • ̳)〝₎₎ 𝐻𝐼𝑁𝐴𝑇𝐴....°-`✦\n╭∪━∪━━━━━━━━◆\n│🍀❀🌺𝑴𝑬𝑺𝑺𝑨𝑮𝑬🌺❀🍀\n├━━━━━━━━━━━◆\n𝘌𝘤𝘩𝘦𝘤 𝘥𝘦 𝘭'𝘦𝘯𝘷𝘰𝘪𝘦\n│𝘥𝘶 𝘮𝘦𝘴𝘴𝘢𝘨𝘦 𝘢\n│%1 𝘢𝘥𝘮𝘪𝘯\n│%2\n├━━━━━━━━━━━◆\n│(Ɔ ˘⌣˘)🚫(˘⌣˘ C).\n╰━━━━━━━━━━━◆",
			reply: "\n.   /)    /)\n.  (ᗒ∇ᗕ)〝₎₎ 𝐻𝐼𝑁𝐴𝑇𝐴....°-`✦\n╭∪━∪━━━━━━━━◆\n│🍀❀🌺𝑴𝑬𝑺𝑺𝑨𝑮𝑬🌺❀🍀\n├━━━━━━━━━━━◆\n│📍 REPONSE DE\n│L'ADMINISTRATEUR \n│%1\n╰━━━━━━━━━━━◆\n[✎﹏%2﹏﹏✏]\n╭━━━━━━━━━━━◆\n│𝗥𝗲́𝗽𝗼𝗻𝗱𝘀 𝗮̀ 𝗰𝗲\n│𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝗽𝗼𝘂𝗿 𝗰𝗼𝗻𝘁𝗶𝗻𝘂𝗲𝗿\n│𝗮̀ 𝗱𝗶𝘀𝗰𝘂𝘁𝗲𝗿 𝗮𝘃𝗲𝗰\n│𝗹'𝗮𝗱𝗺𝗶𝗻\n├━━━━━━━━━━━◆\n│✧.(⊃^ ω ^)🍀(⁠・⁠﹏•ლ⁠).\n╰━━━━━━━━━━━◆",
			replySuccess: "🍀Votre réponse a été envoyé à l'administrateur avec succès !!🎉",
			feedback: "\n.   /)    /)\n.  (◔ ω ◔)〝₎₎ 𝐻𝐼𝑁𝐴𝑇𝐴....°-`✦\n╭∪━∪━━━━━━━━◆\n│🌺❀🍀𝑴𝑬𝑺𝑺𝑨𝑮𝑬🍀❀🌺\n├━━━━━━━━━━━◆\n│𝑴𝑬𝑺𝑺𝑨𝑮𝑬 𝑫𝑬\n│ 𝑳'𝑼𝑻𝑰𝑳𝑰𝑺𝑨𝑻𝑬𝑼𝑹\n│%1\n├━━━━━━━━━━━◆\n│𝗦𝗼𝗻 𝘂𝗶𝗱\n│%2n│%3\n╰━━━━━━━━━━━◆\n[✎﹏%4﹏]\n╭━━━━━━━━━━━◆\n\n├━━━━━━━━━━━◆\n│𝑹𝒆́𝒑𝒐𝒏𝒅𝒔 𝒂̀ 𝒄𝒆 𝒎𝒆𝒔𝒔𝒂𝒈𝒆\n│𝒑𝒐𝒖𝒓 𝒄𝒐𝒏𝒕𝒊𝒏𝒖𝒆𝒓 𝒍𝒂\n│𝒅𝒊𝒔𝒄𝒖𝒔𝒔𝒊𝒐𝒏 𝒂𝒗𝒆𝒄\n│𝒍'𝒖𝒕𝒊𝒍𝒊𝒔𝒂𝒕𝒆𝒖𝒓\n├━━━━━━━━━━━◆\n│✧.(●´ ᴈ`)🍀(ᴖ ᴑ ᴖ๑) .\n╰━━━━━━━━━━━◆",
			replyUserSuccess: "🍀Votre réponse a été envoyé avec succès..🎉",
			noAdmin: "𝐉𝐄 𝐍'𝐀𝐈 𝐏𝐀𝐒 𝐃'𝐀𝐃𝐌𝐈𝐍 𝐏𝐎𝐔𝐑 𝐋𝐄 𝐌𝐎𝐌𝐄𝐍𝐓"
		}
	},

	onStart: async function ({ args, message, event, usersData, threadsData, api, commandName, getLang }) {
		const { config } = global.GoatBot;
		if (!args[0])
			return message.reply(getLang("missingMessage"));
		const { senderID, threadID, isGroup } = event;
		if (config.adminBot.length == 0)
			return message.reply(getLang("noAdmin"));
		const senderName = await usersData.getName(senderID);
		const msg = "\n.   /)    /)\n.  (｡•∇•｡)〝₎₎𝗠𝗲𝘀𝘀𝗮𝗴𝗲.°✦\n╭∪━∪━━━━━━━━◆"
			+ `\n│𝗘𝗻𝘃𝗼𝘆𝗲́ 𝗽𝗮𝗿\n│${senderName}\n├━━━━━━━━━━━◆`
			+ `\n│𝗦𝗼𝗻 𝘂𝗶𝗱 𝗲𝘀𝘁\n│${senderID}\n╰━━━━━━━━━━━◆`
			+ (isGroup ? getLang("sendByGroup", (await threadsData.get(threadID)).threadName, threadID) : getLang("sendByUser"));

		const formMessage = {
			body: msg + getLang("content", args.join(" ")),
			mentions: [{
				id: senderID,
				tag: senderName
			}],
			attachment: await getStreamsFromAttachment(
				[...event.attachments, ...(event.messageReply?.attachments || [])]
					.filter(item => mediaTypes.includes(item.type))
			)
		};

		const successIDs = [];
		const failedIDs = [];
		const adminNames = await Promise.all(config.adminBot.map(async item => ({
			id: item,
			name: await usersData.getName(item)
		})));

		for (const uid of config.adminBot) {
			try {
				const messageSend = await api.sendMessage(formMessage, uid);
				successIDs.push(uid);
				global.GoatBot.onReply.set(messageSend.messageID, {
					commandName,
					messageID: messageSend.messageID,
					threadID,
					messageIDSender: event.messageID,
					type: "userCallAdmin"
				});
			}
			catch (err) {
				failedIDs.push({
					adminID: uid,
					error: err
				});
			}
		}

		let msg2 = "";
		if (successIDs.length > 0)
			msg2 += getLang("success", successIDs.length,
				adminNames.filter(item => successIDs.includes(item.id)).map(item => ` \n│<@${item.id}>\n│(${item.name})`).join("\n│")
			);
		if (failedIDs.length > 0) {
			msg2 += getLang("failed", failedIDs.length,
				failedIDs.map(item => ` <@${item.adminID}> (${adminNames.find(item2 => item2.id == item.adminID)?.name || item.adminID})`).join("\n")
			);
			log.err("CALL ADMIN", failedIDs);
		}
		return message.reply({
			body: msg2,
			mentions: adminNames.map(item => ({
				id: item.id,
				tag: item.name
			}))
		});
	},

	onReply: async ({ args, event, api, message, Reply, usersData, commandName, getLang }) => {
		const { type, threadID, messageIDSender } = Reply;
		const senderName = await usersData.getName(event.senderID);
		const { isGroup } = event;

		switch (type) {
			case "userCallAdmin": {
				const formMessage = {
					body: getLang("reply", senderName, args.join(" ")),
					mentions: [{
						id: event.senderID,
						tag: senderName
					}],
					attachment: await getStreamsFromAttachment(
						event.attachments.filter(item => mediaTypes.includes(item.type))
					)
				};

				api.sendMessage(formMessage, threadID, (err, info) => {
					if (err)
						return message.err(err);
					message.reply(getLang("replyUserSuccess"));
					global.GoatBot.onReply.set(info.messageID, {
						commandName,
						messageID: info.messageID,
						messageIDSender: event.messageID,
						threadID: event.threadID,
						type: "adminReply"
					});
				}, messageIDSender);
				break;
			}
			case "adminReply": {
				let sendByGroup = "";
				if (isGroup) {
					const { threadName } = await api.getThreadInfo(event.threadID);
					sendByGroup = getLang("sendByGroup", threadName, event.threadID);
				}
				const formMessage = {
					body: getLang("feedback", senderName, event.senderID, sendByGroup, args.join(" ")),
					mentions: [{
						id: event.senderID,
						tag: senderName
					}],
					attachment: await getStreamsFromAttachment(
						event.attachments.filter(item => mediaTypes.includes(item.type))
					)
				};

				api.sendMessage(formMessage, threadID, (err, info) => {
					if (err)
						return message.err(err);
					message.reply(getLang("replySuccess"));
					global.GoatBot.onReply.set(info.messageID, {
						commandName,
						messageID: info.messageID,
						messageIDSender: event.messageID,
						threadID: event.threadID,
						type: "userCallAdmin"
					});
				}, messageIDSender);
				break;
			}
			default: {
				break;
			}
		}
	}
};
