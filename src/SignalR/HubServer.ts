import * as signalR from "@microsoft/signalr";
import * as msgpack from "@microsoft/signalr-protocol-msgpack"
import {
    LobbyData,
    ProfileData,
    UpdateProfileAction,
    CreateLobbyAction,
    JoinLobbyAction,
    LobbyAction,
    ProfileAction
} from "@app/SignalR/MessageTypes"

export interface IHubObserver {
    onProfileChanged(action: ProfileAction, me: ProfileData): void,
    onLobbyChanged(action: LobbyAction, lobbyData: LobbyData): void
    onServerError(error: string): void
}

export interface IHubServer {

    connectAsync(): Promise<void>
    disconnectAsync(): Promise<void>
    getState(): signalR.HubConnectionState

    subscribe(listiner: IHubObserver): void
    unsubscribe(listiner: IHubObserver): void

    updateProfileAsync(name?: string): Promise<void>
    createLobbyAsync(name: string): Promise<void>
    joinLobbyAsync(inviteCode: string): Promise<void>
    leaveLobbyAsync(): Promise<void>
}

class HubServerImpl implements IHubServer {

    connection: signalR.HubConnection

    constructor() {
        function getServerURL() {
            return import.meta.env.VITE_HUB_SERVER
        }

        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(getServerURL(), {
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets
            })
            .withHubProtocol(new msgpack.MessagePackHubProtocol())
            .withAutomaticReconnect()
            .build();
    }

    async connectAsync(): Promise<void> {
        if (this.connection.state == signalR.HubConnectionState.Disconnected) {
            await this.connection.start()
        }
    }

    getState(): signalR.HubConnectionState {
        return this.connection.state;
    }

    disconnectAsync(): Promise<void> {
        return this.connection.stop()
    }

    subscribe(listiner: IHubObserver): void {
        this.connection.on("OnProfileChanged", listiner.onProfileChanged);
        this.connection.on("OnLobbyChanged", listiner.onLobbyChanged);
        this.connection.on("OnServerError", listiner.onServerError);
    }

    unsubscribe(listiner: IHubObserver): void {
        this.connection.off("OnProfileChanged", listiner.onProfileChanged);
        this.connection.off("OnLobbyChanged", listiner.onLobbyChanged);
        this.connection.off("OnServerError", listiner.onServerError);
    }

    async updateProfileAsync(name?: string | undefined): Promise<void> {
        await this.connection.send("UpdateProfile", {
            Name: name
        } as UpdateProfileAction)
    }

    async createLobbyAsync(name: string): Promise<void> {
        await this.connection.send("CreateLobby", {
            Name: name
        } as CreateLobbyAction);
    }

    async joinLobbyAsync(inviteCode: string): Promise<void> {
        await this.connection.send("JoinLobby", {
            InviteCode: inviteCode
        } as JoinLobbyAction);
    }

    async leaveLobbyAsync(): Promise<void> {
        await this.connection.send("LeaveLobby");
    }
}

const hubServer: IHubServer = new HubServerImpl();

export default hubServer;