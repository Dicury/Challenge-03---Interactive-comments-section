import React, { useState } from "react";
import {
  ContadorContainer,
  BotaoContador,
  ScoreContador,
} from "@/components/Comment/Contador/Contador.style";

export default function Contador({ score }) {
  let [pontuacao, setPontuacao] = useState(score);
  return (
    <ContadorContainer>
      <BotaoContador onClick={() => setPontuacao(pontuacao + 1)}>
        <img src="images/icon-plus.svg" alt="" />
      </BotaoContador>
      <ScoreContador>{pontuacao}</ScoreContador>
      <BotaoContador onClick={() => setPontuacao(pontuacao - 1)}>
        <img src="images/icon-minus.svg" alt="" />
      </BotaoContador>
    </ContadorContainer>
  );
}
