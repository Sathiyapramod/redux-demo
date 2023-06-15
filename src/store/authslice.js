//step -1
//import functions from packages
import { createSlice } from "@reduxjs/toolkit";

//step -2
//creating an initialvalue for the set of variables
const initialState = {
  username: null,
  email: null,
};

//step -3
//creating a slice & export too
export const authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsername: (state, action) => {
        //action is value which is called along with the function 
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setUsername, setEmail } = authslice.actions;
//the actions mentioned in the above line are the functions inside the authslice.
//it is different from the action mentioned inside the reducer callback.

export default authslice.reducer;
