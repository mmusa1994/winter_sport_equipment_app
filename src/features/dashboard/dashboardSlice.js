import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    equipment: [
      {
        id: 1,
        brand: "Burton",
        boots: "Salomon",
        helmet: true,
        skiGoggles: true,
      },
      {
        id: 2,
        brand: "Salomon",
        boots: "Alpina",
        helmet: false,
        skiGoggles: true,
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        equipment: [...state.equipment, action.payload],
      };
    },
    remove: (state, action) => {
      return {
        ...state,
        equipment: state.equipment.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
    update: (state, action) => {
      return {
        ...state,
        equipment: [...state.equipment, action.payload],
      };
    },
  },
});

export const { add, remove, update } = dashboardSlice.actions;

export const selectDashboard = (state) => state.dashboard.equipment;

export default dashboardSlice.reducer;
