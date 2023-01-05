import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  flex: { flex: 1 },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  searchBar: {
    borderColor: colors.lightGrey,
  },
}))
