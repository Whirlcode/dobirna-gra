import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type NotificationEntry = {
    id: number
    message: string,
    details?: string,
    durationMs?: number
}

interface NotificationCenterState {
    messages: NotificationEntry[],
    count: number
}

const initialState = { messages: [], count: 0 } as NotificationCenterState

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        pushNotification(state, action: PayloadAction<NotificationEntry>) {
            state.messages.push({ ...action.payload, id: state.count })
            ++state.count
        },
        popNotification(state, action: PayloadAction<number>) {
            state.messages = state.messages.filter(i => i.id !== action.payload)
        }
    },
})


export const { pushNotification, popNotification } = notificationSlice.actions
export default notificationSlice.reducer