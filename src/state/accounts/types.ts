import { IAccountsData } from 'types/data'

export type AccountsState = {
  accounts: IAccountsData[]
  loading: boolean
  offset: number
  hasMore: boolean
  moreLoading: boolean
}
