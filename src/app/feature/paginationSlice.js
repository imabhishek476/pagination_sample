import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const intialState = {
    data: [],
}

const pageSlice = createSlice({
    name: "paginate",
    intialState,
    reducers:{
        handlePrevious: (state)=>{

        },
        handleNext: (state)=>{

        },
    }
})

// export const {} = pageSlice.actions;

export default pageSlice.reducer;