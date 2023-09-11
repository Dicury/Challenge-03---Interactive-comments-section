"use-client";

import React, { useState } from "react";

import {
  Container,
  ContainerButton,
  ReplyIcone,
  Reply,
  Delete,
} from "@/components/Comment/CommentButtons/CommentButtons.style";
import CommentModal from "../CommentModal";
import useDadosContext from "@/hooks/useDadosContext";

export default function CommentButtons({
  currentUser,
  username,
  id,
  idPai,
  content,
}) {
  const [openModal, setOpenModal] = useState(false);
  const { setEditState, setEditId } = useDadosContext();

  const handleEditState = () => {
    setEditState(true);
    setEditId(id);
  };

  return (
    <>
      {currentUser === username ? (
        <>
          <Container>
            <ContainerButton>
              <ReplyIcone src="images/icon-delete.svg" alt="" />
              <Delete onClick={() => setOpenModal(true)}>Delete</Delete>
            </ContainerButton>
            <ContainerButton>
              <ReplyIcone src="images/icon-edit.svg" alt="" />
              <Reply onClick={handleEditState}>Edit</Reply>
            </ContainerButton>
          </Container>
          <CommentModal
            isOpen={openModal}
            setModalOpen={() => setOpenModal(!openModal)}
            key={id}
            id={id}
            idPai={idPai}
          />
        </>
      ) : (
        <ContainerButton>
          <ReplyIcone src="images/icon-reply.svg" alt="" />
          <Reply>Reply</Reply>
        </ContainerButton>
      )}
    </>
  );
}
