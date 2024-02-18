import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as MessageType from "@app/SignalR/MessageTypes"

export type LobbyData = MessageType.LobbyData

export enum ConnectionState {
    DISCONNECTED,
    CONNECTING,
    CONNECTED
}

export type GameClientState = {
    me: string,
    lobby: LobbyData | null
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
        updateProfileId(state, action : PayloadAction<string>){
            state.me = action.payload
        },
        updateLobby(state, action: PayloadAction<LobbyData | null>){
            state.lobby = action.payload
        }
    }
})

export const { updateConnectionStatus, updateProfileId, updateLobby } = gameStateSlice.actions;

export default gameStateSlice.reducer;
  