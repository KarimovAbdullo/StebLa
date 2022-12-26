import { createStyles } from 'utils/createStyles'

export default createStyles(color => ({
  container: {
    paddingHorizontal: '18@s',
    backgroundColor: color.background,
    flex: 1,
  },
}))
