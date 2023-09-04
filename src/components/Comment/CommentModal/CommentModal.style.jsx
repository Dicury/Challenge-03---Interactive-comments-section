"use client";

import { styled } from "styled-components";

export const FundoModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const CardModal = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 250px;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.neutral.white};
  border-radius: 20px;
  color: black;
`;

export const TituloModal = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.neutral.darkBlue};
`;

export const TextoModal = styled.p``;

export const DeleteButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary.softRed};
  color: ${(props) => props.theme.colors.neutral.white};
  border: none;
  padding: 0.9rem 1.2rem;
  border-radius: 10px;
  font-weight: 500;
  font-size: 1rem;
`;

export const CancelButton = styled.button`
  background-color: ${(props) => props.theme.colors.neutral.grayishBlue};
  color: ${(props) => props.theme.colors.neutral.white};
  border: none;
  padding: 0.9rem 1.2rem;
  border-radius: 10px;
  font-weight: 500;
  font-size: 1rem;
`;
