import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    flexDirection: 'column',
    borderBottomWidth: '1.5@s',
    borderColor: colors.lightGrey,
    paddingRight: '40@s',
    borderWidth: 1,
  },
  textContent: {
    justifyContent: 'center',
  },
  iconContent: {
    justifyContent: 'center',
    paddingVertical: '10@vs',
    paddingRight: '15@s',
    alignItems: 'center',
  },

  itemContent: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: '25@vs',
  },

  textContainer: {
    paddingHorizontal: '15@s',
  },
}))
