import { createContext, useState } from "react";
import { kepekLista } from "../kepek";

export const KepContext = createContext("");

export const KepProvider = ({children})=>{

    const [kivalasztott, setkivalasztott]=useState(0);

  const kovetkezoKep = () => {
    setkivalasztott((elozoKep) => {
        if (elozoKep + 1 < kepekLista.length) {
            return elozoKep + 1;
        } else {
            return 0; // végén visszaáll az első képre
        }
    });
};

  const elozoKep = () => {
    setkivalasztott((elozoKep) => {
        if (elozoKep === 0) {
            return kepekLista.length - 1;
        } else {
            return elozoKep - 1;
        }
    });
};

    return(
        <KepContext.Provider value={{kivalasztott, kovetkezoKep, elozoKep}}>
            {children}
        </KepContext.Provider>
    )
}