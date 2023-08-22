"use client";

import React from "react";
import {
  Card,
  ChatInput,
  ChatImagem,
  ChatButton,
} from "@/components/Chat/Chat.style";

export default function Chat() {
  return (
    <Card>
      <ChatInput placeholder="Add a comment..."></ChatInput>
      <ChatImagem src="images/avatars/image-juliusomo.png" />
      <ChatButton>SEND</ChatButton>
    </Card>
  );
}
