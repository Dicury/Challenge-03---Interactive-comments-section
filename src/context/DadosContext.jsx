"use client";

import { React, createContext, useState } from "react";
import Dados from "@/data/data.json";
import transformScoreArray from "@/shared/transformScoreArray";

export const DadosContext = createContext();
DadosContext.displayName = "Dados";

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(Dados.currentUser.username);
  const [comentarios, setComentarios] = useState(Dados.comments);

  const atualizaScoreComment = (idPassado, expressao) => {
    const newArray = transformScoreArray(expressao, comentarios, idPassado);
    setComentarios(newArray);
  };

  const atualizaScoreReply = (idPassado, expressao, idPai) => {
    const newArray = comentarios?.map((comentario) => {
      if (comentario.id === idPai) {
        const newReplyArray = transformScoreArray(
          expressao,
          comentario.replies,
          idPassado
        );
        comentario.replies = newReplyArray;
      }
      return comentario;
    });
    setComentarios(newArray);
  };

  return (
    <DadosContext.Provider
      value={{
        currentUser,
        comentarios,
        atualizaScoreComment,
        atualizaScoreReply,
      }}
    >
      {children}
    </DadosContext.Provider>
  );
};
