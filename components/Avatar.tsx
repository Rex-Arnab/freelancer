import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

function AvatarCard() {
  return (
    <Avatar>
      <AvatarImage src="avatar.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export default AvatarCard;
