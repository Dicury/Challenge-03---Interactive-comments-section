"use client";

import { styled } from "styled-components";

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 1rem;

  height: auto;
  margin: 1rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.neutral.white};
  border-radius: 10px;

  @media (min-width: 769px) {
    grid-template-columns: auto 1fr auto;
    padding: 2rem;
  }
`;

export const CabecalhoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  grid-row: 1/2;
  grid-column: 1/4;

  @media (min-width: 769px) {
    grid-column: 2/3;
  }
`;

export const CabecalhoImagem = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const CabecalhoNome = styled.h3`
  font-weight: 500;
`;

export const ReplyingTo = styled.span`
  color: ${(props) => props.theme.colors.primary.moderateBlue};
  font-weight: 500;
`;

export const TextoComentario = styled.p`
  grid-row: 2/3;
  grid-column: 1/4;

  @media (min-width: 769px) {
    grid-row: 2/4;
    grid-column: 2/4;
  }
`;

export const TagCurrentUser = styled.p`
  color: ${(props) => props.theme.colors.neutral.white};
  background-color: ${(props) => props.theme.colors.primary.moderateBlue};
  padding: 2px 10px;
  border-radius: 5px;
`;

export const UpdateButton = styled.button`
  grid-column: 3/4;
  border: none;
  font-size: 16px;
  font-weight: 500;
  width: 100px;
  padding: 1rem 1.2rem;
  justify-self: right;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primary.moderateBlue};
  color: ${(props) => props.theme.colors.neutral.white};
`;

export const UpdateArea = styled.textarea`
  grid-column: 2/4;
  grid-row: 2/4;
  resize: none;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.primary.moderateBlue};
  color: ${(props) => props.theme.colors.neutral.grayishBlue};
  font-size: 1rem;
`;
