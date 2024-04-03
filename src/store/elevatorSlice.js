import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search : '',
    type : null,
    cuarto : null,
    pasajero : [1,160],
    carga : [100,12000],
    velo : [0.15,3.5]

}

const slice=createSlice({
    name : 'elevator',
    initialState,
    reducers : {
        filterSearch :((state,action)=>{
            state.search = action.payload
        }),

        filterType : ((state,action)=>{
            state.type = action.payload
        }),

        filterCuarto : ((state,action)=>{
            state.cuarto = action.payload
        }),

        updatePasjero : ((state,action)=>{
            state.pasajero = action.payload
            
        }),

        updateCarga : ((state,action)=>{
            state.carga = action.payload
        }),

        updateVelo : ((state,action)=>{
            state.velo = action.payload
        }),


    }
})

export const {filterSearch,filterType,filterCuarto,updatePasjero,updateCarga,updateVelo} = slice.actions

export default slice.reducer