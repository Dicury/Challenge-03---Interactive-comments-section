"use client";

import React from "react";
import Comment from "@/components/Comment/index";

import { RepliesCard } from "@/components/Comment/Replies/Replies.style";

export default function Replies({ replies, currentUser, idPai }) {
  return (
    <>
      {replies.length > 0 && (
        <RepliesCard>
          {replies.map((reply) => (
            <Comment
              key={reply.id}
              content={reply.content}
              username={reply.user.username}
              image={reply.user.image.png}
              score={reply.score}
              replies={[]}
              replyingTo={reply.replyingTo}
              createdAt={reply.createdAt}
              currentUser={currentUser}
              id={reply.id}
              idPai={idPai}
            />
          ))}
        </RepliesCard>
      )}
    </>
  );
}
