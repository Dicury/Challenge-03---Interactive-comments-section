"use client";

import React from "react";
import Contador from "@/components/Comment/Contador/index";
import Replies from "@/components/Comment/Replies/index";
import CommentButtons from "@/components/Comment/CommentButtons/index";

import {
  Card,
  ReplyingTo,
  CabecalhoContainer,
  CabecalhoImagem,
  CabecalhoNome,
  TextoComentario,
  TagCurrentUser,
} from "@/components/Comment/Comment.style";
import useDadosContext from "@/hooks/useDadosContext";

export default function Comment({
  content,
  createdAt,
  id,
  image,
  username,
  score,
  replies,
  replyingTo,
  idPai,
}) {
  const { currentUser } = useDadosContext();
  return (
    <>
      <Card>
        <Contador score={score} id={id} idPai={idPai} />
        <CommentButtons
          currentUser={currentUser}
          username={username}
          key={currentUser}
        />
        <CabecalhoContainer>
          <CabecalhoImagem src={image} />
          <CabecalhoNome>{username}</CabecalhoNome>
          {currentUser === username ? <TagCurrentUser>you</TagCurrentUser> : ""}
          <p>{createdAt}</p>
        </CabecalhoContainer>
        <TextoComentario>
          {replyingTo ? <ReplyingTo>@{replyingTo} </ReplyingTo> : ""}
          {content}
        </TextoComentario>
      </Card>
      <Replies
        replies={replies}
        key={replies}
        idPai={id}
        currentUser={currentUser}
      />
    </>
  );
}
