import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id:"",
  date:"",
  day:"",
  dayDescription:"",
  waterGlassCount:""
};

const appStateSlice = createSlice({
  name: "appStateSlice",
  initialState,
  reducers: {
    setId:(state,{payload})=>{
      state.id = payload
    },
    setDate:(state,{payload}) =>{
      state.date = payload
    },
    setDay: (state,{payload}) => {
      state.day = payload
    },
    setDayDescription:(state,{payload})=> {
      state.dayDescription = payload
    },
    setWaterGlassCount: (state,{payload}) => {
      state.waterGlassCount = payload
    }
  },
});

export const {setId,setDate,setDay, setDayDescription,setWaterGlassCount} = appStateSlice.actions;
export default appStateSlice.reducer;
