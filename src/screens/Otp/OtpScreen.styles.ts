import { createStyles } from 'utils/createStyles'

export default createStyles(() => ({
  container: {
    flex: 1,
    paddingHorizontal: '18@s',
    justifyContent: 'center',
  },
  text: {
    marginVertical: '20@vs',
  },
  buttonContent: {
    alignItems: 'flex-end',
    marginTop: '25@vs',
  },
  button: {
    width: '200@s',
  },
  inputContent: {
    marginTop: '25@vs',
  },
}))
