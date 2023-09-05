"use client";

import { React, createContext, useState } from "react";
import Dados from "@/data/data.json";
import transformScoreArray from "@/shared/transformScoreArray";
import filterArray from "@/shared/filterArray";

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

  const deletaComentario = (idPassado) => {
    const newArray = filterArray(comentarios, idPassado);
    setComentarios(newArray);
  };

  const deletaReply = (idPassado, idPai) => {
    const newArray = comentarios?.filter((comentario) => {
      if (comentario.id === idPai) {
        const FilteredReplyArray = filterArray(comentario.replies, idPassado);
        comentario.replies = FilteredReplyArray;
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
        deletaComentario,
        deletaReply,
      }}
    >
      {children}
    </DadosContext.Provider>
  );
};
