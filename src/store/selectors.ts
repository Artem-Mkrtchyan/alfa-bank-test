import { RootState } from "./store"

export const selectors = {
  getUsers: (state: RootState) => state.users.items,
  users: (state: RootState) => state.users
}
