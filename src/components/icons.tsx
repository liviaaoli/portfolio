import React from 'react';
import { IconContext } from "@phosphor-icons/react";

export function IconProvider({ children }: { children: React.ReactNode }) {
  return (
    <IconContext.Provider
      value={{
        color: "currentColor",
        size: 20,
        weight: "regular",
      }}
    >
      {children}
    </IconContext.Provider>
  );
}