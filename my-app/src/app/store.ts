import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./slices/AuthSlice";
import { meetingsSlice } from "./slices/MeetingSlice";

export const store=configureStore({
    reducer:{
        auth:AuthSlice.reducer,
        meetings:meetingsSlice.reducer,
    },
})

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;

