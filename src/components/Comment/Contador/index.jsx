import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  ContadorContainer,
  BotaoContador,
  ScoreContador,
} from "@/components/Comment/Contador/Contador.style";
import useDadosContext from "@/hooks/useDadosContext";

export default function Contador({ id }) {
  const { atualizaScore, comentarios } = useDadosContext();
  let [pontuacao, setPontuacao] = useState(comentarios[id].score);

  function HandleOnClick(expressao) {
    atualizaScore(id, expressao);
    setPontuacao(comentarios[id].score);
  }
  return (
    <ContadorContainer>
      <BotaoContador onClick={() => HandleOnClick("adicionar")}>
        <Image src="images/icon-plus.svg" width={10} height={10} alt="" />
      </BotaoContador>
      <ScoreContador>{pontuacao}</ScoreContador>
      <BotaoContador onClick={() => HandleOnClick("subtrair")}>
        <Image src="images/icon-minus.svg" width={10} height={3} alt="" />
      </BotaoContador>
    </ContadorContainer>
  );
}
