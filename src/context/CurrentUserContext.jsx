"use client";

import { React, createContext, useState } from "react";
import Dados from "@/data/data.json";

export const CurrentUserContext = createContext("teste");
CurrentUserContext.displayName = "CurrentUser";

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(Dados.currentUser.username);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {children}
    </CurrentUserContext.Provider>
  );
};
