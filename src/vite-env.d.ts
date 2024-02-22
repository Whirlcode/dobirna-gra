/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API: string
    readonly VITE_HUB_SERVER: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}