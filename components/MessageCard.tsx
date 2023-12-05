"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { MessageSquare, Loader } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import axios from "axios";
function MessageCard() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleMessageSend = async () => {
    if (!message || message.length < 1) {
      return alert("Please write a message");
    }
    setLoading(true);
    console.log(message);
    axios
      .post("/api/message", { message })
      .then(() => {
        alert("Message Sent");
        setMessage("");
      })
      .catch((err) => {
        alert("Error Sending Message");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Dialog>
      <DialogTrigger>
        <MessageSquare size={24} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Write Your Message..</DialogTitle>
          <DialogDescription>
            <Textarea
              placeholder="Write your message here.."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button className="mt-2" onClick={handleMessageSend}>
              {loading ? (
                <>
                  <Loader className="animate-spin" /> Sending..
                </>
              ) : (
                "Send"
              )}
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default MessageCard;
