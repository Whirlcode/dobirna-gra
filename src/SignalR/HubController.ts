import hubServer, { IHubObserver } from "@app/SignalR/HubServer";

import { 
    ProfileData,
    LobbyData,
    LobbyAction,
    ProfileAction,
    IStateData,
    GameStateAction
} from "@app/SignalR/MessageTypes";

import appStore from "@app/Store"

import { 
    ConnectionState,
    updateConnectionStatus,
    updateLobby,
    updateProfileId,
    updateGameState
} from "@app/features/gameState/gameStateSlice";

class Handler implements IHubObserver {
    constructor() {
        this.onProfileChanged = this.onProfileChanged.bind(this)
        this.onLobbyChanged = this.onLobbyChanged.bind(this)
        this.onServerError = this.onServerError.bind(this)
    }

    onProfileChanged(_ : ProfileAction, me: ProfileData): void {
        appStore.dispatch(updateProfileId(me.Id))
    }

    onLobbyChanged(_ : LobbyAction, lobbyData: LobbyData): void {
        appStore.dispatch(updateLobby(lobbyData))
    }

    onGameStateChanged(_: GameStateAction, stateData: IStateData): void {
        appStore.dispatch(updateGameState(stateData))
   }

    onServerError(error: string): void {
        console.error(error)
    }
}

class HubControllerImpl {
    handler: Handler

    constructor() {
        this.handler = new Handler()
    }

    async start(): Promise<void> {
        appStore.dispatch(updateConnectionStatus(ConnectionState.CONNECTING))
        hubServer.subscribe(this.handler)
        await hubServer.connectAsync()
        appStore.dispatch(updateConnectionStatus(ConnectionState.CONNECTED))
    }

    async stop(): Promise<void> {
        await hubServer.disconnectAsync()
        hubServer.unsubscribe(this.handler)
        appStore.dispatch(updateConnectionStatus(ConnectionState.DISCONNECTED))
    }

    async createLobby(nameLobby: string, initialNumberPlaces: number, userName: string) {
        await hubServer.createLobbyAsync(nameLobby, initialNumberPlaces, userName);
    }

    async joinLobby(inviteCode: string, userName: string) {
        await hubServer.joinLobbyAsync(inviteCode, userName);
    }

    async leaveLobby() {
        await hubServer.leaveLobbyAsync();
    }

    async updateProfile(name: string) {
        await hubServer.updateProfileAsync(name);
    }

    async seat(index: number) {
        await hubServer.seatAsync(index);
    }

    async seatMaster() {
        await hubServer.seatMasterAsync();
    }

    async unseat() {
        await hubServer.unseatAsync();
    }

    async setNumberPlaces(value: number){
        await hubServer.setNumberPlacesAsync(value);
    }

    async removePlace(index: number){
        await hubServer.removePlaceAsync(index);
    }

    async changeScore(targetPalceIndex: number, newScore: number){
        await hubServer.changeScoreAsync(targetPalceIndex, newScore);
    }

    async interact() {
        await hubServer.interact();
    }
}

const hubController = new HubControllerImpl()

export default hubController