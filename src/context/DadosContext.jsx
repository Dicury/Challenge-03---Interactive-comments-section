"use client";

import { React, createContext, useState } from "react";
import Dados from "@/data/data.json";

export const DadosContext = createContext();
DadosContext.displayName = "Dados";

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(Dados.currentUser.username);
  const [comentarios, setComentarios] = useState(Dados.comments);

  const atualizaScoreComment = (idPassado, expressao) => {
    if (expressao === "adicionar") {
      comentarios[idPassado].score = comentarios[idPassado].score + 1;
    }

    if (expressao === "subtrair") {
      comentarios[idPassado].score = comentarios[idPassado].score - 1;
    }
  };

  const atualizaScoreReply = (idPassado, expressao, idPai) => {
    if (expressao === "adicionar") {
      comentarios[idPai].replies[idPassado].score =
        comentarios[idPai].replies[idPassado].score + 1;
    }

    if (expressao === "subtrair") {
      comentarios[idPai].replies[idPassado].score =
        comentarios[idPai].replies[idPassado].score - 1;
    }
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
