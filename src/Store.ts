import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch,
  useStore,
  useSelector,
  TypedUseSelectorHook,
} from "react-redux";
import notificationSlice from "@app/features/notifications/notificationSlice";
import gameStateSlice from "@app/features/gameState/gameStateSlice"

export const appStore = configureStore({
  reducer: {
    notification: notificationSlice,
    gameState: gameStateSlice
  },
});

export type AppStore = typeof appStore;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppStore = useStore.withTypes<AppStore>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default appStore;
