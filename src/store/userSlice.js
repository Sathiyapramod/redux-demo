//step -1 
//importing basic functions to perform store operations
import {createSlice , createAsyncThunk} from "@reduxjs/toolkit";

//step-2 
// setting up initial State

const initialUsers = {
    contentList : [],
    isLoading : null,
    error : null
}

//step-3 
//creating a async function 

export const fetchContentFromBackend = createAsyncThunk(
    'content/todos', async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const result = await response.json();
        return result;
    }
)

//setting up slice for the async call results 
export const userSlice = createSlice({
    name:'users',
    initialState:initialUsers,
    reducers : {},// this will be by default empty 
    extraReducers: (builder)=>{
        builder.addCase(fetchContentFromBackend.pending, (state)=>{
            state.isLoading = true
        })
        builder.addCase(fetchContentFromBackend.fulfilled, (state,action)=>{
            state.contentList = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchContentFromBackend.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.error.message
        })

    }
})

//exporting the default reducers
export default userSlice.reducer;
