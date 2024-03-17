import { createSlice } from "@reduxjs/toolkit";

export type TimerState = {
    showTimer: boolean;
    isPausedTimer: boolean;
}

const initialState = {
    showTimer: false,
    isPausedTimer: false
} as TimerState

const timerStateSlice = createSlice({
    name: 'TimerSlice',
    initialState,
    reducers: {
        toggleShowTimer(state) {
            state.showTimer = !state.showTimer
        },
        pauseTimer(state) {
            state.isPausedTimer = !state.isPausedTimer
        }
    }
})

export const { toggleShowTimer, pauseTimer } = timerStateSlice.actions
export default timerStateSlice.reducer