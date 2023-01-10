import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    flex: 1,
    paddingHorizontal: '18@s',
    flexDirection: 'column',
    backgroundColor: colors.white,
  },
  iconContent: {
    alignItems: 'flex-end',
    marginTop: '30@vs',
  },
  textContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '200@s',
    marginTop: '25@vs',
  },
  subTitle: {
    marginTop: '17@vs',
  },
  icon: {
    position: 'absolute',
    right: 0,
    width: '50@s',
    marginTop: '30@vs',
  },
}))
