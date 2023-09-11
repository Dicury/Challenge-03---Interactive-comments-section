"use client";

import React, { useState } from "react";
import useDadosContext from "@/hooks/useDadosContext";
import {
  Card,
  ChatInput,
  ChatImagem,
  ChatButton,
} from "@/components/Chat/Chat.style";

export default function Chat() {
  const [newComment, setNewComment] = useState();

  const { sendComment } = useDadosContext();

  const handleSubmit = () => {
    event.preventDefault();
    sendComment(newComment);
  };

  return (
    <Card id="chat" onSubmit={() => handleSubmit()}>
      <ChatInput
        placeholder="Add a comment..."
        onChange={(e) => setNewComment(e.target.value)}
      ></ChatInput>
      <ChatImagem src="images/avatars/image-juliusomo.png" />
      <ChatButton form="chat">SEND</ChatButton>
    </Card>
  );
}
