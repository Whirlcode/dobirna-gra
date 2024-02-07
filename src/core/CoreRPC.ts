type RequestRPC = {
    method: string
    args: object[]
}

export interface RequestHandler { }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function clientCallMethod(obj: any, methodName: string, ...args: any[]) {
    const method = obj[methodName]
    if (typeof method === 'function') {
        method.call(obj, ...args)
    }
}

class CoreRPC {
    private url: string
    private requestHandler: RequestHandler

    private ws: WebSocket | null

    constructor(url: string, handler: RequestHandler) {
        this.url = url;
        this.requestHandler = handler
        this.ws = null
    }

    connect(openAction?: () => void | undefined) {
        
        if(this.ws !== null && this.ws.readyState === WebSocket.CONNECTING)
            return;

        if(this.ws !== null && this.ws.readyState === WebSocket.OPEN)
        {
            this.ws.close()
            this.ws = null
        }

        this.ws = new WebSocket(this.url)
        this.ws.onmessage = this.onMessage.bind(this)
        this.ws.close = this.close.bind(this)
        this.ws.onopen = () => {
            if (openAction !== undefined) {
                openAction()
            }
            if (this.ws !== null) {
                this.ws.onopen = null
            }
        }
        this.ws.onerror = () => {
            throw new Error('An error occurs when working with WebSocket');
        }
    }

    close() {
        if (this.ws !== null && this.ws.readyState === WebSocket.OPEN) {
            this.ws.close()
        }
        this.ws = null
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    protected remoteCall(funcName: string, ...args: any[]) {
        const request: RequestRPC = {
            method: funcName,
            args: args
        }
        this.remoteCallMethod(request)
    }

    protected remoteCallMethod(request: RequestRPC) {
        this.ws?.send(JSON.stringify(request))
    }

    protected processRequest(request: RequestRPC) {
        clientCallMethod(this.requestHandler, request.method, ...request.args)
    }

    onMessage(event: MessageEvent) {
        const request: RequestRPC = JSON.parse(event.data)
        this.processRequest(request)
    }
}

export default CoreRPC
