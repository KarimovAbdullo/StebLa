import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    paddingVertical: '5@s',
    flexDirection: 'row',
  },
  checkContent: {
    width: '22@s',
    height: '22@s',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '999@s',
    borderWidth: '1@s',
    borderColor: colors.textSecondary,
    marginRight: '10@s',
  },
  check: {
    width: '15@s',
    height: '15@s',
    borderRadius: '999@s',
  },
  image: {
    width: '54@s',
    height: '23@vs',
  },
}))
