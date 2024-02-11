import * as signalR from "@microsoft/signalr";
import * as msgpack from "@microsoft/signalr-protocol-msgpack"

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

connection.on("OnGameStateChanged", () => {
    console.log('Game State Changed')
});

connection.start().then(() => {
    connection.send("JoinLobby", {});
});