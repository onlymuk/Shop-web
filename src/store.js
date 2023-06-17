import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let cart = createSlice({
  //useState임
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    changeCount(state, action) {
      let index = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[index].count++;
      // state.map((item) => {
      //   if (action.payload === item.id) {
      //     item.count += 1;
      //   }
      //   return item;
      // });
    },

    addItem(state, action) {
      const { id, name } = action.payload;
      const existingItem = state.find((item) => item.name === name);

      if (existingItem) {
        existingItem.count++;
      } else {
        state.push({ id, name, count: 1 });
      }
      state.sort((a, b) => a.id - b.id);
    },
  },
});
export let { changeCount, addItem, addCount } = cart.actions;
export default configureStore({
  reducer: {
    cart: cart.reducer,
    user: user.reducer,
  },
});
