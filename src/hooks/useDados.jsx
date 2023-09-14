import DadosBrutos from "@/data/api";
import React, { useState } from "react";

export default function useDados() {
  const dataStorage = JSON.parse(localStorage.getItem("comentarios"));
  const [dataComments, setDataComments] = useState(
    dataStorage ? dataStorage : DadosBrutos.comments
  );
  const [dataCurrentUser, setDataCurrentUser] = useState(
    DadosBrutos.currentUser
  );
  return { dataComments: dataComments, dataCurrentUser: dataCurrentUser };
}
