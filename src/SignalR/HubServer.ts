import * as signalR from "@microsoft/signalr";
import * as msgpack from "@microsoft/signalr-protocol-msgpack"
import {
    LobbyData,
    ProfileData,
    UpdateProfileAction,
    CreateLobbyAction,
    JoinLobbyAction,
    ChangeScoreAction,
    LobbyAction,
    ProfileAction,
    GameStateAction,
    StateData
} from "@app/SignalR/MessageTypes"

export interface IHubObserver {
    onProfileChanged(action: ProfileAction, me: ProfileData): void,
    onLobbyChanged(action: LobbyAction, lobbyData: LobbyData): void
    onGameStateChanged(action: GameStateAction, stateData: StateData): void
    onServerError(error: string): void
}

export interface IHubServer {

    connectAsync(): Promise<void>
    disconnectAsync(): Promise<void>
    getState(): signalR.HubConnectionState

    subscribe(listiner: IHubObserver): void
    unsubscribe(listiner: IHubObserver): void

    updateProfileAsync(name?: string): Promise<void>
    createLobbyAsync(nameLobby: string, initialNumberPlaces : number, userName: string): Promise<void>
    joinLobbyAsync(inviteCode: string, userName: string): Promise<void>
    leaveLobbyAsync(): Promise<void>

    seatAsync(index: number): Promise<void>
    seatMasterAsync(): Promise<void>
    unseatAsync(): Promise<void>

    setNumberPlacesAsync(value: number): Promise<void>
    removePlaceAsync(index: number): Promise<void>
    changeScoreAsync(targetPalceIndex: number, newScore: number): Promise<void>

    interact() : Promise<void>
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
        this.connection.on("OnGameStateChanged", listiner.onGameStateChanged);
        this.connection.on("OnServerError", listiner.onServerError);
    }

    unsubscribe(listiner: IHubObserver): void {
        this.connection.off("OnProfileChanged", listiner.onProfileChanged);
        this.connection.off("OnLobbyChanged", listiner.onLobbyChanged);
        this.connection.off("OnGameStateChanged", listiner.onGameStateChanged);
        this.connection.off("OnServerError", listiner.onServerError);
    }

    async updateProfileAsync(name?: string | undefined): Promise<void> {
        await this.connection.send("UpdateProfile", {
            Name: name
        } as UpdateProfileAction)
    }

    async createLobbyAsync(nameLobby: string, initialNumberPlaces : number, userName: string): Promise<void> {
        await this.connection.send("CreateLobby", {
            NameLobby: nameLobby,
            InitialNumberPlaces: initialNumberPlaces,
            UserName: userName
        } as CreateLobbyAction);
    }

    async joinLobbyAsync(inviteCode: string, userName: string): Promise<void> {
        await this.connection.send("JoinLobby", {
            InviteCode: inviteCode,
            UserName: userName
        } as JoinLobbyAction);
    }

    async leaveLobbyAsync(): Promise<void> {
        await this.connection.send("LeaveLobby");
    }

    async seatAsync(index: number): Promise<void> {
        await this.connection.send("Seat", index);
    }

    async seatMasterAsync(): Promise<void> {
        await this.connection.send("SeatMaster");
    }

    async unseatAsync(): Promise<void> {
        await this.connection.send("Unseat");
    }

    async setNumberPlacesAsync(value: number): Promise<void> {
        await this.connection.send("SetNumberPlaces", value);
    }

    async removePlaceAsync(index: number): Promise<void> {
        await this.connection.send("RemovePlace", index);
    }

    async changeScoreAsync(targetPalceIndex: number, newScore: number): Promise<void> {
        await this.connection.send("ChangeScore", {
            TargetPlaceIndex: targetPalceIndex,
            NewScore: newScore
        } as ChangeScoreAction);
    }

    async interact(): Promise<void> {
        await this.connection.send("Interact");
    }
}

const hubServer: IHubServer = new HubServerImpl();

export default hubServer;