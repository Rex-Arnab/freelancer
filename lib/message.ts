import Message from "@/models/message";

export const newMessage = async (message: string) => {
  const new_message = await Message.create({ message });
  return new_message;
};

export const listAllMessages = async () => {
  const messages = await Message.find({});
  return messages;
};

const getMessage = async (id: string) => {
  const message = await Message.findOne({ _id: id });
  return message;
};

export const UpdateMessage = async (id: string, msg: string) => {
  const message = await getMessage(id);
  if (!message) return null;
  message.message = msg || message.message;
  message.updatedAt = Date.now();
  await message.save();
  return message;
};

export const DeleteMessage = async (id: string) => {
  const message = await Message.findByIdAndDelete(id);
  return message;
};

exports = {
  newMessage,
  listAllMessages,
  getMessage,
  UpdateMessage,
  DeleteMessage,
};
