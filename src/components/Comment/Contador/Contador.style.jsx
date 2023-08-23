"use client";

import { styled } from "styled-components";

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

  @media (min-width: 769px) {
    flex-direction: column;
    grid-column: 1/2;
    grid-row: 1/4;

    height: auto;
    gap: 1.5rem;
    padding: 1rem;
  }
`;

export const BotaoContador = styled.button`
  display: flex;
  justify-content: center;
  background: none;
  border: none;
`;

export const ScoreContador = styled.p`
  color: ${(props) => props.theme.colors.primary.moderateBlue};
  font-weight: 500;
`;
