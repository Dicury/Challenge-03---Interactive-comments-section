"use client";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  grid-row: 3/4;
  grid-column: 3/4;

  justify-content: right;
  align-items: center;
  gap: 2rem;

  @media (min-width: 769px) {
    grid-row: 1/2;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  grid-row: 3/4;
  grid-column: 3/4;

  justify-content: right;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 769px) {
    grid-row: 1/2;
  }
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

export const Delete = styled.button`
  border: none;
  background: none;
  color: ${(props) => props.theme.colors.primary.softRed};
  font-weight: 500;
  font-size: 16px;
`;
