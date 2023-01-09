import { createStyles } from 'utils/createStyles'

export default createStyles((colors, fonts) => ({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    width: '100%',
  },
  imageContent: {
    width: '60@s',
    height: '60@s',
    marginBottom: '9@vs',
    marginTop: '7@vs',
    marginLeft: '9@s',
  },
  checkContent: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: '14@s',
  },
  active: {
    backgroundColor: colors.background,
  },
  textContent: {
    paddingVertical: '7@vs',
    flex: 1,
    borderBottomColor: colors.iconPrimary,
    borderBottomWidth: '1@s',
    paddingLeft: '10@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '150@s',
  },
  button2: {
    width: '150@s',
    backgroundColor: colors.background,
  },
  textButton: {
    color: colors.textPrimary,
  },
  sheetContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  },
  midText: {
    marginVertical: '20@vs',
  },
}))
