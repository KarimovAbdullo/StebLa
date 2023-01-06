import { createStyles } from 'utils/createStyles'

export default createStyles(color => ({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: color.white,
    paddingTop: '150@vs',
  },
  logoCard: {
    alignItems: 'center',

    paddingTop: '30@vs',
  },
  logoTitle: {
    alignItems: 'center',
    marginTop: '26@vs',
    justifyContent: 'center',
  },
  text: {
    paddingHorizontal: '52@s',
    marginTop: '27@vs',
  },
  btn: {
    width: '280@s',
  },
  line: {
    marginVertical: '50@vs',
    backgroundColor: color.white,
    width: '98@s',
    borderWidth: 1,
    borderColor: '#F7F8F8',
    alignSelf: 'center',
  },
}))
