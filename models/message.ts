import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updateAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Message || mongoose.model("Message", MessageSchema);
