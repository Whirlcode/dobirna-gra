import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useStore, useSelector, TypedUseSelectorHook } from 'react-redux'

export const makeStore = () => {
  return configureStore({
    reducer: {
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppStore = useStore.withTypes<AppStore>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


