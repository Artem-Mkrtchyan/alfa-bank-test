import { combineReducers, configureStore } from "@reduxjs/toolkit"
import usersReduser from './slices/usersSlice'

const rootReducer = combineReducers({
  users: usersReduser
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type  AppDispatch = typeof store.dispatch
