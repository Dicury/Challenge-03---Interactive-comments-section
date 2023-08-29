"use client";

import React, { useState } from "react";
import Comment from "@/components/Comment";
import Chat from "../Chat";
import Dados from "@/data/data.json";

export default function CommentsSection() {
  const [comentarios, setComentarios] = useState(Dados.comments);

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
          key={e.id}
        />
      ))}
      <Chat />
    </>
  );
}
