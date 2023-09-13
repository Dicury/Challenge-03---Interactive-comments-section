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

  const { sendComment, sendReply, handleReply } = useDadosContext();

  const handleCommentSubmit = () => {
    event.preventDefault();
    sendComment(newComment);
  };

  const handleReplySubmit = () => {
    event.preventDefault();
    sendReply(
      newComment,
      handleReply.username,
      handleReply.id,
      handleReply.idPai
    );
  };

  return (
    <>
      {!handleReply ? (
        <Card id="chat" onSubmit={() => handleCommentSubmit()}>
          <ChatInput
            placeholder="Add a comment..."
            onChange={(e) => setNewComment(e.target.value)}
          ></ChatInput>
          <ChatImagem src="images/avatars/image-juliusomo.png" />
          <ChatButton form="chat">SEND</ChatButton>
        </Card>
      ) : (
        <Card id="chat" onSubmit={() => handleReplySubmit()}>
          <ChatInput
            onChange={(e) => setNewComment(e.target.value)}
          ></ChatInput>
          <ChatImagem src="images/avatars/image-juliusomo.png" />
          <ChatButton form="chat">SEND</ChatButton>
        </Card>
      )}
    </>
  );
}
