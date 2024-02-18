import hubServer, { IHubObserver } from "@app/SignalR/HubServer";
import { ProfileData, LobbyData, LobbyAction, ProfileAction } from "@app/SignalR/MessageTypes";

import appStore from "@app/Store"
import { ConnectionState, updateConnectionStatus, updateLobby, updateProfileId } from "@app/features/gameState/gameStateSlice";

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

    async createLobby(name: string) {
        await hubServer.createLobbyAsync(name);
    }

    async joinLobby(inviteCode: string) {
        await hubServer.joinLobbyAsync(inviteCode);
    }

    async leaveLobby() {
        await hubServer.leaveLobbyAsync();
    }

    async updateProfile(name: string) {
        await hubServer.updateProfileAsync(name);
    }
}

const hubController = new HubControllerImpl()

export default hubController