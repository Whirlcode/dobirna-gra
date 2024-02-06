import CoreRPC, { RequestHandler as RequestHandler } from "@app/core/CoreRPC";

class GameRequestHandler implements RequestHandler {
    onStatus() {
        console.log("status refreshed")
    }

    request_failed(error: string) {
        console.error(error)
    }
}

class GameRPC extends CoreRPC {
    constructor() {
        super("ws://127.0.0.1:8000/ws", new GameRequestHandler())
    }

    refresh_status() {
        this.remoteCall('refresh_status');
    }
}

export default new GameRPC;