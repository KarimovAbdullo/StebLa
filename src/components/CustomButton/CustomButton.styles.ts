import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  button: {
    borderRadius: '36@s',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10@vs',
    width: '100%',
    backgroundColor: colors.main,
  },
  text: {
    fontSize: '16@s',
    textAlign: 'center',
    color: colors.white,
    marginVertical: '15@vs',
  },
}))
