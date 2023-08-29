"use client";

import { React, useContext } from "react";
import { CurrentUserContext } from "@/context/CurrentUserContext";
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

export default function Comment({
  content,
  createdAt,
  id,
  image,
  username,
  score,
  replies,
  replyingTo,
}) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <>
      <Card>
        <Contador score={score} />
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
      <Replies replies={replies} key={replies} currentUser={currentUser} />
    </>
  );
}
