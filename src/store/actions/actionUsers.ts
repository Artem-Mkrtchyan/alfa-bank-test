import { status, TRespErr } from './../../types/apiType'
import { api } from './../../axios/API'
import { AppDispatch } from '../store'
import { usersSlice } from '../slices/usersSlice'


export const getUsers = (currenPage: number) => (dispatch: AppDispatch) => {

  dispatch(usersSlice.actions.fetching())
  api.getUsers(currenPage)
    .then(resp => {
      if (resp.status === status.Success) {
        dispatch(usersSlice.actions.setUsersData(resp.data))
        dispatch(usersSlice.actions.setError(''))
      }
    })
    .catch((err: TRespErr) => {
      dispatch(usersSlice.actions.setError(err.message))
    })

}

export const subscribe = (id: number) => (dispatch: AppDispatch) => {
  dispatch(usersSlice.actions.subscribe({ id }))
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
