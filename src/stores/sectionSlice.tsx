import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SectionState = {
  activeSection: number;
};

const initialState: SectionState = {
  activeSection: 0,
};

const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {
    setActiveSection(state, action: PayloadAction<number>) {
      state.activeSection = action.payload;
    },
  },
});

export const { setActiveSection } = sectionSlice.actions;
export default sectionSlice.reducer;