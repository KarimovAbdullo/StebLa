import { createStyles } from 'utils/createStyles'

export default createStyles(color => ({
  topCard: {
    height: '43%',
    backgroundColor: '#000000',
    opacity: 0.6,
  },
  bottomCard: {
    marginVertical: '25@vs',
    flexDirection: 'row',
    aligItems: 'center',
  },
  text: {
    marginLeft: '10@s',
  },
  line: {
    width: '100%',
    height: '0.5@vs',
    backgroundColor: color.border,
  },
  menu: {
    flexDirection: 'row',
    aligItems: 'center',
    marginTop: '15@vs',
  },
  Main: {
    backgroundColor: color.white,
    flex: 1,
  },
  container: {
    paddingHorizontal: '18@s',
    backgroundColor: color.white,
  },
  icon: {
    position: 'absolute',
    right: 0,
    alignItems: 'flex-end',
    paddingVertical: '10@vs',
    width: '50@s',
  },
}))
