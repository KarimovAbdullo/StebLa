import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    paddingHorizontal: '18@s',
    flexDirection: 'column',
    marginBottom: '5@s',
  },
  main: {
    backgroundColor: colors.white,
  },
  iconContent: {
    marginTop: '15@vs',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  itemContent: {
    backgroundColor: colors.white,
    flex: 1,
  },

  text: {
    width: '60%',
    flexDirection: 'column',

    justifyContent: 'space-between',
  },
  labelCard: {
    borderWidth: 1,
    paddingVertical: '37@vs',
    paddingHorizontal: '19@s',
    marginTop: '20@vs',
    borderColor: colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    width: '99@s',
    height: '35@vs',
    backgroundColor: colors.backroundSecondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '36@vs',
  },
  btnText: {
    color: colors.black,
  },
  icon: {
    paddingLeft: '10@s',
  },

  history: {
    flexDirection: 'row',
    marginHorizontal: '19@s',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backroundSecondary,
    paddingVertical: '14@vs',
    marginVertical: '20@vs',
  },
  titleCard: {
    backgroundColor: colors.white,
    paddingHorizontal: '19@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: '25%',
  },
  titleBottom: {
    backgroundColor: colors.white,
    paddingHorizontal: '19@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: '25%',
  },

  titles: {
    marginBottom: '20@vs',

    // width: '80%',
  },
  HistoryCard: {
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: '30@vs',
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '20@s',
    marginBottom: '29@vs',
    marginTop: '29@vs',
  },
  foot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '20@s',
    marginBottom: '29@vs',
  },
  p: {
    paddingHorizontal: '19@s',
  },
  t: {
    marginBottom: '20@vs',
  },
  line: {
    borderBottomWidth: 1,
    borderColor: colors.border,
    marginBottom: '20@vs',
  },

  button: {
    marginHorizontal: '19@s',

    backgroundColor: colors.backroundSecondary,
    borderColor: colors.main,
    alignItems: 'center',
    paddingVertical: '20@vs',
    marginVertical: '10@vs',
  },
}))
