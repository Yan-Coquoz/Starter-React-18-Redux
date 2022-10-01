// Exemple de ce qui est attendu
import { createAction } from "@reduxjs/toolkit";
// Plus besoin d'action type, il est placé directement dans le createAction
// Action creator
export const exemple = createAction("EXEMPLE/FETCHING", (id, data) => {
  return {
    payload: {
      id,
      data,
    },
  };
});
