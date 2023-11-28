"use client";

import React from "react";
import useDadosContext from "@/hooks/useDadosContext";

import {
  FundoModal,
  TituloModal,
  CancelButton,
  CardModal,
  DeleteButton,
  TextoModal,
} from "@/components/Comment/CommentModal/CommentModal.style";

export default function CommentModal({ isOpen, setModalOpen, id, idPai }) {
  const { deletaComentario, deletaReply } = useDadosContext();
  const handleDelete = () => {
    if (idPai === "pai") {
      deletaComentario(id);
    } else {
      deletaReply(id, idPai);
    }
  };
  if (isOpen) {
    return (
      <FundoModal>
        <CardModal>
          <TituloModal>Delete Comment</TituloModal>
          <TextoModal>
            Are you sure you want to delete this comment? This will remove the
            comment and cant be undone.
          </TextoModal>
          <CancelButton onClick={setModalOpen}>NO, CANCEL</CancelButton>
          <DeleteButton onClick={() => handleDelete()}>
            YES, DELETE
          </DeleteButton>
        </CardModal>
      </FundoModal>
    );
  }

  return null;
}
