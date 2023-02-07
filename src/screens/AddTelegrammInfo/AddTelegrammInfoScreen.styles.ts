import { createStyles } from 'utils/createStyles'

export default createStyles(color => ({
  container: {
    flex: 1,
    paddingHorizontal: '18@s',
    justifyContent: 'space-around',
    backgroundColor: color.white,
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
  bottomContainerText: {
    // marginTop: '27@vs',
    // // marginBottom: vs(50),
    // width: '100%',
  },

  title: {
    fontSize: '26@s',
    fontWeight: '400',
    color: color.black,
    textAlign: 'center',
    lineHeight: 22.5,
    paddingHorizontal: '50@s',
  },
  card: {
    flexDirection: 'row',
    height: '200@vs',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: '10@vs',
  },
}))
