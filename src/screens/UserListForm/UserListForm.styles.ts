import { createStyles } from 'utils/createStyles'

export default createStyles(color => ({
  container: {
    flex: 1,
    paddingHorizontal: '18@s',

    backgroundColor: color.white,
  },
  text: {
    marginVertical: '20@vs',
  },
  buttonContent: {
    alignItems: 'center',
    marginTop: '25@vs',
  },
  button: {
    width: '155@s',
  },
  inputContent: {
    marginTop: '25@vs',
  },
  head: {
    flexDirection: 'row',
    marginTop: '20@vs',
    alignItems: 'center',
    marginBottom: '20@vs',
  },
  icon: {
    marginRight: '5@s',
  },
  inp: {
    marginTop: '24@vs',
  },
}))
