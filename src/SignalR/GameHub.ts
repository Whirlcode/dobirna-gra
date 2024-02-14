import * as signalR from "@microsoft/signalr";
import * as msgpack from "@microsoft/signalr-protocol-msgpack"
import * as Message from "@app/SignalR/MessageTypes"

function getGameServerURL() {
    const useLocalServer = false;
    return useLocalServer ? "https://localhost:8000/gamehub" : "https://dobirnagraserver.onrender.com/gamehub"
}

const connection = new signalR.HubConnectionBuilder()
    .withUrl(getGameServerURL(), {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
    })
    .withHubProtocol(new msgpack.MessagePackHubProtocol())
    .withAutomaticReconnect()
    .build();

connection.on("OnProfileChanged", (me : Message.UserInfo) => {
    console.log(`OnProfileChanged: ${JSON.stringify(me)}`)
});

connection.on("OnLobbyStateChanged", (lobbyInfo : Message.LobbyInfo) => {
    console.log(`OnLobbyStateChanged: ${JSON.stringify(lobbyInfo)}`)
});

connection.on("OnServerError", (str) => {
    console.error(str)
})

connection.start().then(async () => {
    await connection.send("UpdateProfile", { Name: "Julian"} as Message.UpdateProfileAction)
    await connection.send("CreateLobby", { Name: "Test" } as Message.CreateLobbyAction);
    //await connection.send("JoinLobby", { InviteCode: "---" } as Message.JoinLobbyAction);
})