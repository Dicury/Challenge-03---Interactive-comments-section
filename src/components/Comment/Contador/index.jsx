import React from "react";
import Image from "next/image";
import {
  ContadorContainer,
  BotaoContador,
  ScoreContador,
} from "@/components/Comment/Contador/Contador.style";
import useDadosContext from "@/hooks/useDadosContext";

export default function Contador({ id, score, idPai }) {
  const { atualizaScoreComment, atualizaScoreReply } = useDadosContext();

  function handleOnClick(expressao) {
    if (idPai === "pai") {
      atualizaScoreComment(id, expressao);
    } else {
      atualizaScoreReply(id, expressao, idPai);
    }
  }
  return (
    <ContadorContainer>
      <BotaoContador onClick={() => handleOnClick("adicionar")}>
        <Image src="images/icon-plus.svg" width={10} height={10} alt="" />
      </BotaoContador>
      <ScoreContador>{score}</ScoreContador>
      <BotaoContador onClick={() => handleOnClick("subtrair")}>
        <Image src="images/icon-minus.svg" width={10} height={3} alt="" />
      </BotaoContador>
    </ContadorContainer>
  );
}
