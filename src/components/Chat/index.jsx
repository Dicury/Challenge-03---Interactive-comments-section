"use client";

import React from "react";
import { styled } from "styled-components";

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1auto);
  grid-template-rows: repeat(2, auto);
  align-items: center;
  justify-content: space-between;

  border-radius: 10px;
  height: auto;
  padding: 1rem;
  margin: 1rem;
  background-color: ${(props) => props.theme.colors.neutral.white};
  gap: 1rem;

  @media (min-width: 769px) {
    grid-template-columns: auto 1fr auto;

    margin: 0 5vh 10vh 10vw;
    padding: 2rem;
  }
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

  @media (min-width: 769px) {
    grid-column: 2/3;
    grid-row: 1/4;

    width: 100%;
  }
`;

const ChatImagem = styled.img`
  width: 2rem;
  height: 2rem;

  @media (min-width: 769px) {
    grid-column: 1/2;
    grid-row: 1/2;
  }
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

  @media (min-width: 769px) {
    grid-column: 3/4;
    grid-row: 1/2;
  }
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
