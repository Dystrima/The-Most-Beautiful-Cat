const Message = require("../models/Message");

module.exports.getIndex = (req, res) => {
	res.render("index");
};

module.exports.getPortfolio = (req, res) => {
	res.render("portfolio");
};

module.exports.getAbout = (req, res) => {
	res.render("about");
};

module.exports.getContact = async (req, res) => {
	const messages = await Message.find();
	res.render("contact", { messages });
};

module.exports.postContact = async (req, res) => {
	const { name, subject, message } = req.body;
	try {
		const newMessage = await Message.create({ name, subject, message });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
	res.render("contact");
};
