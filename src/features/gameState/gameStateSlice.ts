import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as MessageType from "@app/SignalR/MessageTypes"

export type UserInfo = MessageType.UserInfo
export type LobbyInfo = MessageType.LobbyInfo

export enum ConnectionState {
    DISCONNECTED,
    CONNECTING,
    CONNECTED
}

export type GameClientState = {
    me: UserInfo,
    lobby: LobbyInfo | null
    connectionState: ConnectionState
}

const initialState = {
    me: {},
    lobby: null,
    connectionState: ConnectionState.DISCONNECTED
} as GameClientState;

const gameStateSlice = createSlice({
    name: "GameState",
    initialState,
    reducers: {
        updateConnectionStatus(state, action : PayloadAction<ConnectionState>){
            state.connectionState = action.payload
        },
        updateProfile(state, action : PayloadAction<UserInfo>){
            state.me = action.payload
        },
        updateLobby(state, action: PayloadAction<LobbyInfo | null>){
            state.lobby = action.payload
        }
    }
})

export const { updateConnectionStatus, updateProfile, updateLobby } = gameStateSlice.actions;

export default gameStateSlice.reducer;
  