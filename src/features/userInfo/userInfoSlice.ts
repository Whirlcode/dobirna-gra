import { createSlice } from "@reduxjs/toolkit";

const validInviteLink = "123";

export type TUser = {
  id: number;
  name: string;
  img: string;
  inviteCode?: string;
  isGameMaster: boolean;
};

interface IUserInfo {
  me?: number | undefined;
  createdBy?: number | undefined;
  user: TUser;
  gameLobby: TUser[];
  quantityOfPlayers: number;
}

const initialState = {
  me: undefined,
  createdBy: undefined,
  user: {} as TUser,
  gameLobby: [],
  quantityOfPlayers: 0,
} as IUserInfo;

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    addImgPlayer(state, action) {
      state.user.img = action.payload;
    },
    addNamePlayer(state, action) {
      state.user.name = action.payload.current;
    },
    addInviteLink(state, action) {
      if (action.payload.current === validInviteLink) {
        state.user.inviteCode = action.payload;
      } else {
        throw new Error("INVALID INVITE LINK");
      }
    },
    addPlayerToLobby(state) {
      state.me = 1;
      state.createdBy = 2;
      state.gameLobby.push({
        ...state.user,
        id: Math.floor(Math.random() * 99999),
        isGameMaster: false,
      });
    },
    addGameMasterToLobby(state) {
      state.gameLobby.push({
        ...state.user,
        id: Math.floor(Math.random() * 99999),
        isGameMaster: true,
      });
      state.createdBy = 1;
      state.me = 1;
    },
  },
});

export const {
  addImgPlayer,
  addNamePlayer,
  addInviteLink,
  addPlayerToLobby,
  addGameMasterToLobby,
} = userInfoSlice.actions;
export default userInfoSlice.reducer;
