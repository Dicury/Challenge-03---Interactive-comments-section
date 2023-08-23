"use client";

import React, { useEffect, useState } from "react";
import Comment from "@/components/Comment";
import Chat from "../Chat";
import Dados from "@/data/data.json";

export default function CommentsSection() {
  const [comentarios, setComentarios] = useState([]);
  const [usuarioAtual, setUsuarioAtual] = useState();

  useEffect(() => {
    setComentarios(Dados.comments);
    setUsuarioAtual(Dados.currentUser.username);
  }, []);

  return (
    <>
      {comentarios.map((e) => (
        <Comment
          content={e.content}
          username={e.user.username}
          createdAt={e.createdAt}
          image={e.user.image.png}
          score={e.score}
          replies={e.replies}
          id={e.id}
          currentUser={usuarioAtual}
          key={e.id}
        />
      ))}
      <Chat />
    </>
  );
}
