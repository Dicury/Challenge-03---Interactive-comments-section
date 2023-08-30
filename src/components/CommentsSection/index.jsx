"use client";

import React from "react";
import Comment from "@/components/Comment";
import Chat from "../Chat";
import useDadosContext from "@/hooks/useDadosContext";

export default function CommentsSection() {
  const { comentarios } = useDadosContext();

  return (
    <>
      {comentarios
        .sort((a, b) => (a.score < b.score ? 1 : -1))
        .map((e) => (
          <Comment
            content={e.content}
            username={e.user.username}
            createdAt={e.createdAt}
            image={e.user.image.png}
            score={e.score}
            replies={e.replies}
            idPai="pai"
            id={e.id}
            key={e.id}
          />
        ))}
      <Chat />
    </>
  );
}
