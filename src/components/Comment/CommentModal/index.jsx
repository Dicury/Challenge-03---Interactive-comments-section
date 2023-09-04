"use client";

import React from "react";

import {
  FundoModal,
  TituloModal,
  CancelButton,
  CardModal,
  DeleteButton,
  TextoModal,
} from "@/components/Comment/CommentModal/CommentModal.style";

export default function CommentModal({ isOpen, setModalOpen, children }) {
  return (
    <FundoModal>
      <CardModal>
        <TituloModal>Delete Comment</TituloModal>
        <TextoModal>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </TextoModal>
        <CancelButton>NO, CANCEL</CancelButton>
        <DeleteButton>YES, DELETE</DeleteButton>
      </CardModal>
    </FundoModal>
  );
}
