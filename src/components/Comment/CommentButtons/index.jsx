"use-client";

import React from "react";

import {
  Container,
  ContainerButton,
  ReplyIcone,
  Reply,
  Delete,
} from "@/components/Comment/CommentButtons/CommentButtons.style";

export default function CommentButtons({ currentUser, username }) {
  return (
    <>
      {currentUser === username ? (
        <Container>
          <ContainerButton>
            <ReplyIcone src="images/icon-delete.svg" alt="" />
            <Delete>Delete</Delete>
          </ContainerButton>
          <ContainerButton>
            <ReplyIcone src="images/icon-edit.svg" alt="" />
            <Reply>Edit</Reply>
          </ContainerButton>
        </Container>
      ) : (
        <ContainerButton>
          <ReplyIcone src="images/icon-reply.svg" alt="" />
          <Reply>Reply</Reply>
        </ContainerButton>
      )}
    </>
  );
}
