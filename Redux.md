## Getting Started with REDUX

## Step 1:

1. import functions 

```javascript 
import {createSlice} from '@reduxjstoolkit';
```
2. creating initial values of the store items

```javascript 
 const initialState = {
    movies : null,
    actors: null,
 }
```

3. initiating (and exporting )state manipulation using createSlice 

```javascript 
 export const authSlice = createSlice({
    name:imdb,
    initialState,
    reducers:{
        setmovies:(state,action)=>{
            state.movies = action.payload
        },
        setactors: (state,action)=>{
            state.actors = action.payload
        }
    }
 })
```

4. Exporting the actions and reducer 

```javascript

export const {setmovies,setactors} = authSlice.actions

export default authSlice.reducer;
```

## Step 2 