import { TUsersDataResp } from './../types/apiType'
import axios from "axios"

export const instansAxios = axios.create({
  baseURL: 'https://reqres.in/api/',
})


export const api = {
  //get data user from server
  getUsers(currentPage: number = 1) {
    return instansAxios.get<TUsersDataResp>(`users?page=${currentPage}`)
  },
}
