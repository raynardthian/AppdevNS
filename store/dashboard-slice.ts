import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Personnel } from "../types/database";
import { DashboardState, EventData } from "../types/types";

const initialState: DashboardState = {
    data: {
        off: {},
        leave: {},
        attc: {},
        course: {},
        ma: {},
        others: {},
    },
    personnelMap: {},
};
const temp: DashboardState = {
    data: {
        off: {},
        leave: {},
        attc: {
            
        },
        course: {
           
            
        },
        ma: {
            
        },
        others: {
           
        },
    },
    personnelMap: {
        
    },
};
const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: temp,
    reducers: {
        updateData(state, action: PayloadAction<DashboardState>) {
            state.data = action.payload.data;
            state.personnelMap = action.payload.personnelMap;

            // state.personnelMap = action.payload.personnelMap;
        },
        deleteEntry(
            state,
            action: PayloadAction<{
                type: keyof EventData;
                personnel_ID: number;
            }>
        ) {
            const { type, personnel_ID } = action.payload;
            const tempObj = { ...state.data[type] };
            delete tempObj[personnel_ID];
            return { ...state, data: { ...state.data, [type]: tempObj } };
        },
        clearData(state) { 
            return { ...state, data: initialState.data };
        }
    },
});

export const dashboardActions = dashboardSlice.actions;
export default dashboardSlice;
