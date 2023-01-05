import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '20@vs',
    marginBottom: '30@vs',
  },
  icon: {
    position: 'absolute',
    right: 0,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginBottom: '15@vs',
  },
  item: {
    width: '165@s',
    borderRadius: '10@s',
    backgroundColor: colors.backroundSecondary,
    paddingVertical: '23@vs',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: '120@s',
    height: '49@vs',
    borderRadius: '36@s',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10@vs',
    backgroundColor: colors.main,
    alignSelf: 'center',
    marginTop: '30@vs',
  },
  modal: {
    backgroundColor: 'red',
    // padding: 100,
    height: 10,
  },
  text: {
    color: 'red',
    marginTop: 10,
  },
  btnYes: {
    width: '176@s',
  },
  btnNo: {
    width: '149@s',
    backgroundColor: colors.backroundSecondary,
    color: 'red',
  },
  btnCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '20@vs',
  },
  btnText: {
    color: colors.black,
  },
  itemContent: {
    justifyContent: 'space-between',
  },
}))
