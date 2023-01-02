import { createStyles } from 'utils/createStyles'

export default createStyles(color => ({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // position: 'absolute',
    marginTop: '150@vs',
  },
  logoCard: {
    alignItems: 'center',

    paddingTop: '30@vs',
  },
  logoTitle: {
    alignItems: 'center',
    marginTop: '26@vs',
    justifyContent: 'center',
    borderWidth: 1,
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
    backgroundColor: 'grey',
    width: '98@s',
    borderWidth: 1,
    borderColor: '#F7F8F8',
    alignSelf: 'center',
  },
}))
