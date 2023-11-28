"use client";

import { React, createContext, useEffect, useState } from "react";
import transformScoreArray from "@/shared/transformScoreArray";
import filterArray from "@/shared/filterArray";
import { v4 as uuidv4 } from "uuid";
import DadosBrutos from "@/data/api";

export const DadosContext = createContext();
DadosContext.displayName = "Dados";

export const CurrentUserProvider = ({ children }) => {
  // Manipulação de Dados
  const [currentUser, setCurrentUser] = useState(DadosBrutos.currentUser);
  const [comentarios, setComentarios] = useState(DadosBrutos.comments);

  useEffect(() => {
    if (localStorage.getItem("comentarios")) {
      setComentarios(JSON.parse(localStorage.getItem("comentarios")));
    } else {
      setComentarios(DadosBrutos.comments);
    }
  }, []);
  //

  const [editState, setEditState] = useState(false);
  const [handleReply, setHandleReply] = useState(false);

  // Funções de atualizar o score
  const atualizaScoreComment = (idPassado, expressao) => {
    const newArray = transformScoreArray(expressao, comentarios, idPassado);
    setComentarios(newArray);
    localStorage.setItem("comentarios", JSON.stringify(newArray));
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
    localStorage.setItem("comentarios", JSON.stringify(newArray));
  };
  //

  // Funções de deletar comentários/replies
  const deletaComentario = (idPassado) => {
    const newArray = filterArray(comentarios, idPassado);
    setComentarios(newArray);
    localStorage.setItem("comentarios", JSON.stringify(newArray));
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
    localStorage.setItem("comentarios", JSON.stringify(newArray));
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
          png: currentUser.image.png,
          webp: currentUser.image.webp,
        },
        username: currentUser.username,
      },
      replies: [],
    };
    setComentarios([...comentarios, newComment]);
    localStorage.setItem(
      "comentarios",
      JSON.stringify([...comentarios, newComment])
    );
  };

  // Funções de adicionar replies
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
          png: currentUser.image.png,
          webp: currentUser.image.webp,
        },
        username: currentUser.username,
      },
      replies: [],
    };
    const newReplyFiltered = filterReplies(idPassado, newReply, idPai);
    setComentarios(newReplyFiltered);
    localStorage.setItem("comentarios", JSON.stringify(newReplyFiltered));
  };
  //

  // Função de atualizar os dados ao editar um comentário
  const updateData = (idPassado, conteudo, idPai) => {
    const newArray = comentarios.map((comentario) => {
      if (comentario.id === idPassado) {
        comentario.content = conteudo;
      }
      if (comentario.id === idPai) {
        comentario.replies.map((reply) => {
          if (reply.id === idPassado) {
            reply.content = conteudo;
          }
        });
      }

      return comentario;
    });
    setComentarios(newArray);
    localStorage.setItem("comentarios", JSON.stringify(newArray));
  };

  return (
    <DadosContext.Provider
      value={{
        currentUser,
        comentarios,
        setComentarios,
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
        updateData,
      }}
    >
      {children}
    </DadosContext.Provider>
  );
};
