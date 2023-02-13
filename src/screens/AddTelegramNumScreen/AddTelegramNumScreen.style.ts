import { createStyles } from 'utils/createStyles'

export default createStyles(color => ({
  container: {
    flex: 1,
    paddingHorizontal: '18@s',
    justifyContent: 'center',
    backgroundColor: color.white,
  },
  text: {
    marginVertical: '20@vs',
  },
  buttonContent: {
    alignItems: 'center',
    marginTop: '30@vs',
  },
  button: {
    width: '120@s',
  },
  inputContent: {
    marginTop: '25@vs',
  },
  errorText: {
    paddingLeft: '10@s',
  },
}))
