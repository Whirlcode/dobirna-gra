
export type CreateLobbyAction = {
    Name: string
}

export type JoinLobbyAction = {
    InviteCode: string
}

export type UpdateProfileAction = {
    Name: string | undefined
}

export type UserInfo = {
    Id: string,
    Name: string
}

export type LobbyInfo = {
    Id: string,
    Name: string,
    InviteCode: string,
    Users: UserInfo[]
}