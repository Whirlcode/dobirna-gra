import * as signalR from "@microsoft/signalr";
import * as msgpack from "@microsoft/signalr-protocol-msgpack"
import * as Message from "@app/SignalR/MessageTypes"

export interface IHubObserver {
    onProfileChanged(lobbyInfo: Message.LobbyInfo): void,
    onLobbyStateChanged(lobbyInfo: Message.LobbyInfo): void
    onServerError(lobbyInfo: Message.LobbyInfo): void
}

export interface IHubServer {

    connectAsync(): Promise<void>
    disconnectAsync(): Promise<void>
    getState(): signalR.HubConnectionState

    subscribe(listiner: IHubObserver): void
    unsunscribe(listiner: IHubObserver): void

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
            console.log(`start connect: ${this.connection.state}`)
            await this.connection.start()
            console.log(`finished connect: ${this.connection.state}`)
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

    unsunscribe(listiner: IHubObserver): void {
        this.connection.off("OnProfileChanged", listiner.onProfileChanged);
        this.connection.off("OnLobbyStateChanged", listiner.onLobbyStateChanged);
        this.connection.off("OnServerError", listiner.onServerError);
    }

    async updateProfileAsync(name?: string | undefined): Promise<void> {
        await this.connection.send("UpdateProfile", {
            Name: name
        } as Message.UpdateProfileAction)
    }

    async createLobbyAsync(name: string): Promise<void> {
        await this.connection.send("CreateLobby", {
            Name: name
        } as Message.CreateLobbyAction);
    }

    async joinLobbyAsync(inviteCode: string): Promise<void> {
        await this.connection.send("JoinLobby", {
            InviteCode: inviteCode
        } as Message.JoinLobbyAction);
    }
}

const hubServer: IHubServer = new HubServerImpl();

export default hubServer;