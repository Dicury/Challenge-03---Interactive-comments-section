"use client";

import React from "react";

import {
  Card,
  ContadorContainer,
  BotaoContador,
  Contador,
  ReplyContainer,
  ReplyIcone,
  Reply,
  CabecalhoContainer,
  CabecalhoImagem,
  CabecalhoNome,
  TextoComentario,
} from "@/components/Comment/Comment.style";

export default function Comment() {
  return (
    <Card>
      <ContadorContainer>
        <BotaoContador>
          <img src="images/icon-plus.svg" alt="" />
        </BotaoContador>
        <Contador>12</Contador>
        <BotaoContador>
          <img src="images/icon-minus.svg" alt="" />
        </BotaoContador>
      </ContadorContainer>
      <ReplyContainer>
        <ReplyIcone src="images/icon-reply.svg" alt="" />
        <Reply>Reply</Reply>
      </ReplyContainer>
      <CabecalhoContainer>
        <CabecalhoImagem src="images/avatars/image-amyrobson.png" alt="/" />
        <CabecalhoNome>amyrobson</CabecalhoNome>
        <p>1 month ago</p>
      </CabecalhoContainer>
      <TextoComentario>
        Impressive! Though it seems the drag feature could be improved. But
        overall it looks incredible. You've nailed the design and the
        responsiveness at various breakpoints works really well.
      </TextoComentario>
    </Card>
  );
}
