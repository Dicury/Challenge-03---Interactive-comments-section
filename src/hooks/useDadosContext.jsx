import { useContext } from "react";
import { DadosContext } from "@/context/DadosContext";

export default function useDadosContext() {
  const context = useContext(DadosContext);

  if (context === undefined) {
    throw new Error("Não está dentro do contexto");
  }

  return context;
}
