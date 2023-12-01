const Message = require("../models/Message");

module.exports = {
	getIndex: (req, res) => {
		res.render("index");
	},
	getPortfolio: (req, res) => {
		res.render("portfolio");
	},
	getAbout: (req, res) => {
		res.render("about");
	},
	getContact: async (req, res) => {
		// const messages = await Message.find();
		// res.render("contact", { messages });
		res.render("contact");
	},
	postContact: async (req, res) => {
		const { name, subject, message } = req.body;
		console.log(name, subject, message);
		new Message({ name, subject, message }).save();
		res.render("contact");
	},
};
