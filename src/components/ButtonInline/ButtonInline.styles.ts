import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  button: {
    width: '100%',
    height: '49@vs',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10@vs',
    backgroundColor: colors.lightGrey,
    borderWidth: '1@s',
    borderColor: colors.main,
  },
  text: {
    fontSize: '16@s',
    textAlign: 'center',
    color: colors.main,
  },
  disabled: {
    borderColor: colors.iconLine,
  },
  textDisabled: {
    color: colors.textPrimary,
  },
  buttonActive: {
    borderColor: colors.red,
  },
}))
