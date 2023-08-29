"use client";

import { React, createContext, useState } from "react";
import Dados from "@/data/data.json";

export const DadosContext = createContext();
DadosContext.displayName = "Dados";

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(Dados.currentUser.username);
  const [comentarios, setComentarios] = useState(Dados.comments);

  const atualizaScore = (idPassado, expressao) => {
    if (expressao === "adicionar") {
      comentarios[idPassado].score = comentarios[idPassado].score + 1;
    }

    if (expressao === "subtrair") {
      comentarios[idPassado].score = comentarios[idPassado].score - 1;
    }
    console.log(comentarios[idPassado].score);
    return comentarios[idPassado].score;
  };

  return (
    <DadosContext.Provider
      value={{
        currentUser,
        comentarios,
        atualizaScore,
      }}
    >
      {children}
    </DadosContext.Provider>
  );
};
