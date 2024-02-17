import * as signalR from "@microsoft/signalr";
import * as msgpack from "@microsoft/signalr-protocol-msgpack"
import {
    LobbyInfo,
    UserInfo,
    UpdateProfileAction,
    CreateLobbyAction,
    JoinLobbyAction
} from "@app/SignalR/MessageTypes"

export interface IHubObserver {
    onProfileChanged(me: UserInfo): void,
    onLobbyStateChanged(lobbyInfo: LobbyInfo): void
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
}

class HubServerImpl implements IHubServer {

    connection: signalR.HubConnection

    constructor() {
        function getGameServerURL() {
            const useLocalServer = false;
            return useLocalServer ? "https://localhost:8000/gamehub" : "https://dobirnagraserver.onrender.com/gamehub"
        }

        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(getGameServerURL(), {
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
        this.connection.on("OnLobbyStateChanged", listiner.onLobbyStateChanged);
        this.connection.on("OnServerError", listiner.onServerError);
    }

    unsubscribe(listiner: IHubObserver): void {
        this.connection.off("OnProfileChanged", listiner.onProfileChanged);
        this.connection.off("OnLobbyStateChanged", listiner.onLobbyStateChanged);
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
}

const hubServer: IHubServer = new HubServerImpl();

export default hubServer;