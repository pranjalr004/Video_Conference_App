import { createSlice } from "@reduxjs/toolkit";

interface authInitialState{}

const initialState:authInitialState={}

export const AuthSlice=createSlice(
    {
        name:"auth",
        initialState,
        reducers:{},
    }
)

export const {}=AuthSlice.actions;