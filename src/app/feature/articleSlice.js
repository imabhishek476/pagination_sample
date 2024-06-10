import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
  name: "articles",
  initialState: {
    data: [],
    currentPage: 1,
    itemsPerPage: 6,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    paginate: (state, action) => {
      state.currentPage = action.payload;
    },
    removeArticle: (state, action) => {
      state.data = state.data.filter(article => article.id !== action.payload);
    },
  },
});

export const { setData, paginate, removeArticle } = articleSlice.actions;
export default articleSlice.reducer;
