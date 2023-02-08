import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    flexDirection: 'column',
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: '10@s',
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
  iconContent: {
    marginTop: '30@vs',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: '18@s',
    marginBottom: '15@vs',
  },
  item: {
    width: '18@s',
  },
  labelStyle: {
    marginTop: '25@vs',
    marginBottom: '5@vs',
  },
}))
