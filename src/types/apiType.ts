import { TUser } from './usersType'

export type TUsersDataResp ={
  page: number
  per_page: number
  total: number
  total_pages: number
  data: Array<TUser>
}

export enum status {
  Success = 200,
  Error = 400,
}
