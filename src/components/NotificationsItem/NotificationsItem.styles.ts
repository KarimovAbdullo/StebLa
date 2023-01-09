import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    flexDirection: 'column',
    borderBottomWidth: '1.5@s',
    borderColor: colors.lightGrey,
    paddingHorizontal: '20@s',
  },
  textContent: {
    justifyContent: 'center',
  },
  iconContent: {
    justifyContent: 'center',
    paddingVertical: '15@vs',
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

  labelStyle: {
    marginTop: '25@vs',
    marginBottom: '5@vs',
  },
}))
