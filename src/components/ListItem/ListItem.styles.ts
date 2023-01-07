import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    width: '100%',
    height: '59@vs',
    justifyContent: 'space-between',
    borderBottomWidth: '1@s',
    borderBottomColor: colors.iconLine,
  },
  textContent: {
    justifyContent: 'center',
    paddingLeft: '18@s',
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
}))
