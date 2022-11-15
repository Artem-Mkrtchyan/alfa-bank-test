import { RootState } from "./store"

export const selectors = {
  getUsers: (state: RootState) => state.users.items,
  isLoading: (state: RootState) => state.users.loading,
  followData: (state: RootState) => state.users.folllowData,
  isFilter: (state: RootState) => state.users.isFilter,
}
