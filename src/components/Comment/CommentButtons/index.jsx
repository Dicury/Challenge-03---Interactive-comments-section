"use-client";

import React, { useState } from "react";
import CommentModal from "../CommentModal";
import useDadosContext from "@/hooks/useDadosContext";

import {
  Container,
  ContainerButton,
  ReplyIcone,
  Botao,
  Delete,
} from "@/components/Comment/CommentButtons/CommentButtons.style";

export default function CommentButtons({
  currentUser,
  username,
  id,
  idPai,
  content,
}) {
  const [openModal, setOpenModal] = useState(false);
  const { setEditState, setHandleReply, setHandleReplyId, handleReply } =
    useDadosContext();

  const handleEditState = () => {
    setEditState(id);
  };

  const handleReplyState = () => {
    setHandleReply({ username: username, id: id, idPai: idPai });
    console.log(idPai);
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
              <Botao onClick={handleEditState}>Edit</Botao>
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
          <Botao onClick={handleReplyState}>Reply</Botao>
        </ContainerButton>
      )}
    </>
  );
}
