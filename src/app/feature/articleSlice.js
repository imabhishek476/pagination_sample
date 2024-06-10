import { createSlice } from "@reduxjs/toolkit";


// export const fetchArticles = createAsyncThunk(
//     'articles/fetchArticles',
//     async ()=>{
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//         return response.json();
//     }
// )



const articleSlice = createSlice({
    name: "articles",
    intialState:{
        data:[],
        currentPage: 1,
        itemsPerPage: 6,

    },
    reducers:{
        // removeArticle: (state,action)=>{
        //     state.data = state.data.filter(article =>article.id !== action.payload)
        // },
        paginate: (state, action)=>{
            if(action.payload){
                state.currentPage = action.payload;
            }
            return null
        },
    },
    // extraReducers: builder =>{
    //     builder
    //     .addCase(fetchArticles.pending, (state)=>{
    //         state.loading = true;
    //     })
    //     .addCase(fetchArticles.fulfilled,(state,action)=>{
    //         state.data = action.payload;
    //         state.loading = false;
    //     })
    //     .addCase(fetchArticles.rejected,(state)=>{
    //         state.loading = false;
    //     })
    // }
})

export const { paginate} = articleSlice.actions;

export default articleSlice.reducer;