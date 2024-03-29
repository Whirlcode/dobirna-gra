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

export enum GameStateAction {
    Entered = "Entered",
    Updated = "Updated"
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

export type ChangeScoreAction = {
    TargetPlaceIndex: number,
    NewScore: number
}

export type ProfileData = {
    Id: string
}

export type PlayerPlaceData = {
    UserId: string
    UserName: string
    Score: number
    ImageId: string
    IsOccupied: boolean
}

export type MasterData = {
    UserId: string
    UserName: string
    ImageId: string
    IsOccupied: boolean
}

export type LobbyData = {
    Id: string
    Name: string
    InviteCode: string
    Places: PlayerPlaceData[]
    Master: MasterData
}

export abstract class IStateData {
    abstract Type: string
}

export abstract class IdleStateData extends IStateData {
    public static getType(): string { return "idle" }

    abstract ReadyUsers: string[]
}

export abstract class RoundStateData extends IStateData {
    public static getType(): string { return "round" }

    abstract Questions: { [key: string]: number[] }
    abstract Electioneer: string
}