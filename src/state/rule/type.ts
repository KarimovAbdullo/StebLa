import { IRuleGroups, IStaticRuleData } from 'types/data'

export interface IRuleState {
  loading: boolean
  language: string
  groups: IRuleGroups[]
  data: IStaticRuleData[]
}
