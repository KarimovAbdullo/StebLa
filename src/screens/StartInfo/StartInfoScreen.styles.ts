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
  subtext: {
    marginBottom: '20@vs',
  },
  card: {
    flexDirection: 'row',
    height: '200@vs',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: '10@vs',
  },
}))
