import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",

  initialState :
  JSON.parse(
    localStorage.getItem(
      "favorites"
    )
  ) || []
,

  reducers: {

    addFavorite: (state, action) => {
       state.push(action.payload);

  localStorage.setItem(
    "favorites",
    JSON.stringify(state)
  );

        alert("add to fav")

      const exists = state.find(
        grocery =>
          grocery.id === action.payload.id
      );

      if (!exists) {
        state.push(action.payload);
      }

    },

    removeFavorite:(state,action)=>{

 const updated =
   state.filter(
     grocery =>
     grocery.id !==
     action.payload
   );

 localStorage.setItem(
   "favorites",
   JSON.stringify(updated)
 );

 return updated;
}

  }
});

export const {
  addFavorite,
  removeFavorite
} = favoriteSlice.actions;

export default favoriteSlice.reducer;