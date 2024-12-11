import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface stState {
  value: any[]; 
}

const initialState: stState = {
  value: [], 
};

// Create the slice
const stSlice = createSlice({
  name: "setData",
  initialState,
  reducers: {
    adData(state, action: PayloadAction<any>) { 
        state.value = [...state.value, action.payload];  
    },
    updateData(state, action: PayloadAction<any[]>) { 
      state.value = action.payload; 
    },
  },
});

export const { adData ,updateData} = stSlice.actions;

export default stSlice.reducer;

