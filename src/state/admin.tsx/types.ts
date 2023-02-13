import { IAdminData } from 'types/data'

export type AdminState = {
  admin: IAdminData[]
  loading: boolean
  offset: number
  hasMore: boolean
  moreLoading: boolean
}
