import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
    LobbyData,
    IStateData
} from "@app/SignalR/MessageTypes"

export enum ConnectionState {
    DISCONNECTED,
    CONNECTING,
    CONNECTED
}

export type GameClientState = {
    me: string,
    amMaster: boolean,
    lobby: LobbyData | null,
    gameState: IStateData | null,
    connectionState: ConnectionState
}

const initialState = {
    me: '',
    amMaster: false,
    lobby: null,
    gameState: null,
    connectionState: ConnectionState.DISCONNECTED
} as GameClientState;

const gameStateSlice = createSlice({
    name: "GameState",
    initialState,
    reducers: {
        updateConnectionStatus(state, action: PayloadAction<ConnectionState>) {
            state.connectionState = action.payload
        },
        updateProfileId(state, action: PayloadAction<string>) {
            state.me = action.payload
        },
        updateLobby(state, action: PayloadAction<LobbyData | null>) {
            state.lobby = action.payload
            state.amMaster = state.me === state.lobby?.Master.UserId
        },
        updateGameState(state, action: PayloadAction<IStateData | null>) {
            state.gameState = action.payload
        }
    }
})

export const {
    updateConnectionStatus,
    updateProfileId,
    updateLobby,
    updateGameState
} = gameStateSlice.actions;

export default gameStateSlice.reducer;
