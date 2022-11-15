import { status } from './../../types/apiType'
import { api } from './../../axios/API'
import { AppDispatch } from '../store'
import {usersSlice} from '../slices/usersSlice'

export const getUsers = (currenPage: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(usersSlice.actions.fetching())
    const resp = await api.getUsers(currenPage)
    if(resp.status === status.Success) {
      dispatch(usersSlice.actions.setUsersData(resp.data))
    }
  } catch (error) {

  }
}


export const subscribe = (id: number) => (dispatch: AppDispatch) => {
  dispatch(usersSlice.actions.subscribe({id}))
}

export const setCurrentPage = (currentPage: number) => (dispatch: AppDispatch) => {
  dispatch(usersSlice.actions.setCurrentPage(currentPage))
}

export const deleteUser = (id: number) => (dispatch: AppDispatch) => {
  dispatch(usersSlice.actions.deleteUser(id))
}
export const filtredUser = () => (dispatch: AppDispatch) => {
  dispatch(usersSlice.actions.isFilter())
}
