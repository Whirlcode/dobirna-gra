export enum LobbyAction {
    Joined = "Joined",
    Leaved  = "Leaved",
    Updated = "Updated"
}

export enum ProfileAction {
    LoggedIn = "LoggedIn",
    Updated  = "Updated",
    Logout = "Logout"
}

export type CreateLobbyAction = {
    Name: string
}

export type JoinLobbyAction = {
    InviteCode: string
}

export type UpdateProfileAction = {
    Name: string | undefined
}

export type ProfileData = {
    Id: string
}

export type PlayerTableData = {
    Id: string,
    Name: string
    Score: number,
}

export type MasterData = {
    Id: string,
    Name: string
}

export type LobbyData = {
    Id: string,
    Name: string,
    InviteCode: string,
    Tables: PlayerTableData[]
    Master: MasterData
}