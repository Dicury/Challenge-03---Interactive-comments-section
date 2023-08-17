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
`;

export const CabecalhoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  grid-row: 1/2;
  grid-column: 1/4;
`;

export const CabecalhoImagem = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const CabecalhoNome = styled.h3`
  font-weight: 500;
`;

export const ContadorContainer = styled.div`
  display: flex;
  grid-row: 3/4;
  grid-column: 1/2;
  align-items: center;
  justify-content: center;

  border-radius: 15px;
  gap: 1rem;
  height: 2.5rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.neutral.veryLightGray};
`;

export const BotaoContador = styled.button`
  display: flex;
  justify-content: center;
  background: none;
  border: none;
`;

export const Contador = styled.p`
  color: ${(props) => props.theme.colors.primary.moderateBlue};
  font-weight: 500;
`;

export const ReplyContainer = styled.div`
  display: flex;
  grid-row: 3/4;
  grid-column: 3/4;

  justify-content: right;
  align-items: center;
  gap: 0.5rem;
`;

export const ReplyIcone = styled.img`
  width: 0.8rem;
  height: 0.8rem;
`;

export const Reply = styled.button`
  border: none;
  background: none;
  color: ${(props) => props.theme.colors.primary.moderateBlue};
  font-weight: 500;
  font-size: 16px;
`;

export const TextoComentario = styled.p`
  grid-row: 2/3;
  grid-column: 1/4;
`;