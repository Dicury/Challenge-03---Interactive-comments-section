import React from "react";
import {
  ContadorContainer,
  BotaoContador,
  ScoreContador,
} from "@/components/Comment/Contador/Contador.style";

export default function Contador({ score }) {
  return (
    <ContadorContainer>
      <BotaoContador>
        <img src="images/icon-plus.svg" alt="" />
      </BotaoContador>
      <ScoreContador>{score}</ScoreContador>
      <BotaoContador>
        <img src="images/icon-minus.svg" alt="" />
      </BotaoContador>
    </ContadorContainer>
  );
}
