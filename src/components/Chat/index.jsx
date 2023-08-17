"use client";

import React from "react";
import { styled } from "styled-components";

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1auto);
  grid-template-rows: repeat(2, auto);
  align-items: center;
  justify-content: space-between;

  height: auto;
  padding: 1rem;
  margin: 1rem;
  background-color: ${(props) => props.theme.colors.neutral.white};
  gap: 1rem;
`;

const ChatInput = styled.textarea`
  grid-row: 1/2;
  grid-column: 1/3;

  height: 6rem;
  padding: 1rem 1.5rem;
  border: 1px solid ${(props) => props.theme.colors.neutral.lightGray};
  border-radius: 10px;
  text-align: left;
  resize: none;
  font-size: 16px;
`;

const ChatImagem = styled.img`
  width: 2rem;
  height: 2rem;
`;

const ChatButton = styled.button`
  border: none;
  font-size: 16px;
  font-weight: 500;
  width: 100px;
  padding: 1rem 1.2rem;
  justify-self: right;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primary.moderateBlue};
  color: ${(props) => props.theme.colors.neutral.white};
`;

export default function Chat() {
  return (
    <Card>
      <ChatInput placeholder="Add a comment..."></ChatInput>
      <ChatImagem src="images/avatars/image-juliusomo.png" />
      <ChatButton>SEND</ChatButton>
    </Card>
  );
}
