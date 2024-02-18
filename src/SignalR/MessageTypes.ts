export enum LobbyAction {
    Joined = "Joined",
    Leaved  = "Leaved",
    Updated = "Updated",
}

export enum ProfileAction {
    LoggedIn = "LoggedIn",
    Updated  = "Updated",
    Logout = "Logout",
}

export type CreateLobbyAction = {
    NameLobby: string
    UserName: string
    InitialNumberPlaces: number
}

export type JoinLobbyAction = {
    InviteCode: string
    UserName: string
}

export type UpdateProfileAction = {
    Name: string | undefined
}

export type ProfileData = {
    Id: string
}

export type PlayerPlaceData = {
    UserId: string
    UserName: string
    Score: number
    IsOccupied: boolean
}

export type MasterData = {
    UserId: string
    UserName: string
    IsOccupied: boolean
}

export type LobbyData = {
    Id: string
    Name: string
    InviteCode: string
    Places: PlayerPlaceData[]
    Master: MasterData
}