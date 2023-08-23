"use client";
import { styled } from "styled-components";

export const RepliesCard = styled.div`
  margin-left: 1rem;
  border-left: 1px solid
    ${(props) => props.theme.colors.primary.lightGrayishBlue};

  @media (min-width: 769px) {
    margin-left: 4rem;
    padding-left: 2rem;
  }
`;
