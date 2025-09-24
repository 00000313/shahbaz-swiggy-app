import {createSlice} from "@reduxjs/toolkit"

const cardSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state , action)=>{
            //mutating the state here
            state.items.push(action.payload);
        },
        removeItem:(state , action)=>{
            state.items.pop();
        },
        clearCart:(state , action)=>{
            state.items.length=0; // []
        },
    },
})

export const { addItem , removeItem , clearCart } = cardSlice.actions;

export default cardSlice.reducer;