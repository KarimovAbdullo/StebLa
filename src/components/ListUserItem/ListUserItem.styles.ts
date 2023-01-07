import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    width: '100%',
    height: '70@vs',
    justifyContent: 'space-between',
    borderBottomWidth: '1@s',
    borderBottomColor: colors.iconLine,
  },
  textContent: {
    justifyContent: 'center',
    paddingLeft: '10@s',
  },
  checkContent: {
    justifyContent: 'center',
    paddingRight: '19@s',
  },
  bottomSheet: {
    borderTopRightRadius: '0@s',
    borderTopLeftRadius: '0@s',
  },
  bottomSheetButtonsContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomSheetButtonsText: {
    marginLeft: '10.5@s',
  },
  button: {
    marginBottom: '25@vs',
  },
  image: {
    height: '40@s',
    width: '40@s',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '18@s',
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
    backgroundColor: colors.background,
  },
  textButton: {
    color: colors.textPrimary,
  },
  textContainer: {
    paddingHorizontal: '15@s',
  },
}))
