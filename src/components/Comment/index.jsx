"use client";

import React, { useState } from "react";
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
  UpdateButton,
  UpdateArea,
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
  const { currentUser, editState, setEditState } = useDadosContext();
  const [updateText, setUpdateText] = useState(content);

  const changeText = (e) => {
    setUpdateText(e);
  };
  return (
    <>
      <Card>
        {/* Botões do comentário */}
        <Contador score={score} id={id} idPai={idPai} />
        <CommentButtons
          currentUser={currentUser}
          username={username}
          id={id}
          idPai={idPai}
          key={currentUser}
          content={content}
        />
        {/* Cabeçalho do comentário */}
        <CabecalhoContainer>
          <CabecalhoImagem src={image} />
          <CabecalhoNome>{username}</CabecalhoNome>
          {currentUser === username ? <TagCurrentUser>you</TagCurrentUser> : ""}
          <p>{createdAt}</p>
        </CabecalhoContainer>

        {/* Lógica que cria/edita o texto do comentário */}
        {editState === id && currentUser === username ? (
          <>
            <UpdateArea
              type="textarea"
              value={updateText}
              onChange={(e) => changeText(e.target.value)}
            />
            <UpdateButton onClick={() => setEditState(false)}>
              Update
            </UpdateButton>
          </>
        ) : (
          <TextoComentario>
            {replyingTo ? <ReplyingTo>@{replyingTo} </ReplyingTo> : ""}
            {updateText}
          </TextoComentario>
        )}
      </Card>

      {/* Lógica que renderiza os replies */}
      <Replies
        replies={replies}
        key={replies}
        idPai={id}
        currentUser={currentUser}
      />
    </>
  );
}
