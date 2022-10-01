import { createReducer } from "@reduxjs/toolkit";
import { exemple } from "actions";

const initialState = { exempleUser: "", userId, userData };

// export default createReducer(initialState, (builder) => {
//   // Par default le builder retourne le state
//   return builder.addCase(exemple, (state, action) => {
//     return action.payload;
//   });
// });

// Exemple Avec immer
// le default est placé plus haut, ici il est mis de côté pour l'exemple
export default createReducer(initialState, (builder) => {
  builder.addCase(exemple, (draft, action) => {
    // draft est le state
    if (draft.userId === "une_action") {
      draft.userId = action.payload.id;
      draft.userData = action.payload.data;
      return;
    }
    return;
  });
});
