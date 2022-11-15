import { TUsersDataResp } from './apiType';

export type TInitialState = {
  loading: boolean
  error: string
  isFilter: boolean
  items: TUsersDataResp
  folllowData: Array<TUser>
}

export type TUser = {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
  follow: boolean
}
