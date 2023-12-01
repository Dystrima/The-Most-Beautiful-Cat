const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required"],
		trim: true,
	},
	subject: {
		type: String,
		required: [true, "Subject is required"],
		trim: true,
	},
	message: {
		type: String,
		required: [true, "Message is required"],
		trim: true,
	},
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
