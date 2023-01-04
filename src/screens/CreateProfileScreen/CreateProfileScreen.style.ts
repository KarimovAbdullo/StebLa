import { createStyles } from 'utils/createStyles'

export default createStyles(color => ({
  container: {
    // flex: 1,
  },
  main: {
    marginTop: '70@vs',
  },
  text: {
    marginBottom: '17@vs',
  },
  freeCard: {
    borderWidth: 1,
    paddingHorizontal: '25@s',
    paddingVertical: '35@vs',
    marginTop: '25@vs',
    borderRadius: '7@s',
    // borderColor: color.title,
  },
  ProCard: {
    borderWidth: 1,
    paddingHorizontal: '25@s',
    paddingVertical: '35@vs',
    marginTop: '25@vs',
    borderRadius: '7@s',
    // borderColor: color.title,
  },
  title: {
    marginBottom: '10@vs',
  },
  iconCard: {
    position: 'absolute',
    left: '23@s',
    top: -13,
    backgroundColor: color.white,
    paddingHorizontal: '5@s',
  },
  button: {
    width: '120@s',
    height: '49@vs',
    borderRadius: '36@s',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10@vs',
    backgroundColor: color.backroundSecondary,
    alignSelf: 'center',
    marginTop: '30@vs',
  },
  textBtn: {
    fontSize: '16@s',
    textAlign: 'center',
    color: color.black,
  },
  btn: {
    width: '120@s',
    height: '49@vs',
    borderRadius: '36@s',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10@vs',
    backgroundColor: color.main,
    alignSelf: 'center',
    marginTop: '30@vs',
  },
}))
