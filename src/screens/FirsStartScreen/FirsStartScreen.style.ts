import { createStyles } from 'utils/createStyles'

export default createStyles(color => ({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: color.white,
    justifyContent: 'center',
  },
  logoCard: {
    alignItems: 'center',
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
    borderWidth: 0.5,
    borderColor: '#F7F8F8',
    alignSelf: 'center',
  },
  img: {
    width: '75@s',
    height: '75@s',
    marginBottom: '26@vs',
  },
  image: {
    width: '141@s',
    height: '32@s',
  },
  changeLangContent: {
    position: 'absolute',
    right: '20@s',
    top: '40@vs',
    padding: '10@s',
  },
  buttonShet: {
    width: '167@s',
  },
  contentButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: '20@vs',
  },
  buttonShet2: {
    width: '167@s',
    backgroundColor: color.background,
  },
  textButton: {
    color: color.textPrimary,
  },
  textContainer: {
    paddingHorizontal: '15@s',
  },
}))
