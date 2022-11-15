import { TInitialState } from '../../types/usersType'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TUsersDataResp } from '../../types/apiType'


const initialState: TInitialState = {
  loading: false,
  error: '',
  isFilter: false,
  folllowData: [],
  items: {
    page: 1,
    per_page: 6,
    total_pages: 2,
    total: 12,
    data: [],
  }
}


export const usersSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    fetching(state) {
      state.loading = true
    },
    setUsersData(state, action: PayloadAction<TUsersDataResp>) {
      state.loading = false
      state.items = { ...action.payload, data: action.payload.data.map(item => ({ ...item, follow: false })) }
    },
    subscribe(state, action: PayloadAction<{ id: number }>) {
      state.items.data.map(item => {
        if (item.id === action.payload.id) {
          item.follow = !item.follow
          state.folllowData = state.items.data.filter(item => item.follow)
        }
        return item
      })
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.items.page = action.payload
    },
    deleteUser(state, action: PayloadAction<number>) {
      state.items.data = state.items.data.filter(item => item.id !== action.payload)
    },
    isFilter(state, action: PayloadAction) {
      state.isFilter = !state.isFilter
    }
  }
})

export default usersSlice.reducer
