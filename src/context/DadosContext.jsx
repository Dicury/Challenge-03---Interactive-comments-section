"use client";

import { React, createContext, useState } from "react";
import Dados from "@/data/api";
import transformScoreArray from "@/shared/transformScoreArray";
import filterArray from "@/shared/filterArray";
import { v4 as uuidv4 } from "uuid";

export const DadosContext = createContext();
DadosContext.displayName = "Dados";

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(Dados.currentUser.username);
  const [comentarios, setComentarios] = useState(Dados.comments);
  const [editState, setEditState] = useState(false);
  const [handleReply, setHandleReply] = useState(false);

  // Funções de atualizar o score
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
  //

  // Funções de deletar comentários/replies
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
  //

  // Função de adicionar comentários
  const sendComment = (conteudo) => {
    const newComment = {
      id: uuidv4(),
      content: conteudo,
      createdAt: "today",
      score: 0,
      user: {
        image: {
          png: Dados.currentUser.image.png,
          webp: Dados.currentUser.image.webp,
        },
        username: currentUser,
      },
      replies: [],
    };
    setComentarios([...comentarios, newComment]);
  };
  // Função de adicionar replies
  const filterReplies = (idPassado, novaReply, idPai) => {
    const filteredComment = comentarios.map((comentario) => {
      if (comentario.id === idPassado || comentario.id === idPai) {
        return { ...comentario, replies: [...comentario.replies, novaReply] };
      }
      return comentario;
    });
    return filteredComment;
  };

  const sendReply = (conteudo, replyingTo, idPassado, idPai) => {
    const newReply = {
      id: uuidv4(),
      content: conteudo,
      createdAt: "today",
      score: 0,
      replyingTo: replyingTo,
      user: {
        image: {
          png: Dados.currentUser.image.png,
          webp: Dados.currentUser.image.webp,
        },
        username: currentUser,
      },
      replies: [],
    };
    const newReplyFiltered = filterReplies(idPassado, newReply, idPai);
    setComentarios(newReplyFiltered);
    console.log(comentarios);
  };
  //

  return (
    <DadosContext.Provider
      value={{
        currentUser,
        comentarios,
        atualizaScoreComment,
        atualizaScoreReply,
        deletaComentario,
        deletaReply,
        setEditState,
        editState,
        sendComment,
        sendReply,
        handleReply,
        setHandleReply,
      }}
    >
      {children}
    </DadosContext.Provider>
  );
};
