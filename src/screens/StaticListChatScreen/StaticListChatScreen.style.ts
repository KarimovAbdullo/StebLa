import { createStyles } from 'utils/createStyles'

export default createStyles((colors, fonts) => ({
  container: {
    paddingHorizontal: '18@s',
    flexDirection: 'column',
    marginBottom: '10@s',
  },
  iconContent: {
    marginTop: '30@vs',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  item: {
    width: '40@s',
  },
  input: {
    color: colors.main,
    fontSize: '17@ms',
    fontWeight: '700',
    fontFamly: fonts.Inter.medium,
    paddingVertical: '13@vs',
    padding: '0@s',
    margin: '0@s',
    alignItems: 'center',
    width: '100%',

    textAlign: 'center',
  },
  inputContent: {
    backgroundColor: colors.lightGrey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20@vs',
    borderRadius: '10@s',
    marginHorizontal: '18@s',
  },
  itemContent: {
    backgroundColor: colors.white,
    flex: 1,
  },
  bottomContent: {
    backgroundColor: colors.white,
    height: '76@vs',
    paddingVertical: '15@vs',
    paddingHorizontal: '28@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  midText: {
    marginVertical: '20@vs',
  },
  icon: {
    position: 'absolute',
    right: 22,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
}))
