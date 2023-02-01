import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
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
    borderRadius: '40@s',
    backgroundColor: colors.iconLine,
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
  textContainer: {
    justifyContent: 'center',
    width: '240@s',
  },
}))
