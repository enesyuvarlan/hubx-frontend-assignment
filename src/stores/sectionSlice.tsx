import { createSlice } from '@reduxjs/toolkit';

type SectionState = {};

const initialState: SectionState = {};

const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {},
});

export default sectionSlice.reducer;
