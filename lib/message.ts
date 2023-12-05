import Message from "@/models/message";

const NewMessage = async (message: string) => {
  const new_message = await Message.create({ message });
  return new_message;
};

const listAllMessages = async () => {
  const messages = await Message.find({});
  return messages;
};

const getMessage = async (id: string) => {
  const message = await Message.findOne({ _id: id });
  return message;
};

const UpdateMessage = async (id: string, msg: string) => {
  const message = await getMessage(id);
  if (!message) return null;
  message.message = msg || message.message;
  message.updatedAt = Date.now();
  await message.save();
  return message;
};

const DeleteMessage = async (id: string) => {
  const message = await Message.findByIdAndDelete(id);
  return message;
};

module.exports = {
  NewMessage,
  listAllMessages,
  getMessage,
  UpdateMessage,
  DeleteMessage,
};
