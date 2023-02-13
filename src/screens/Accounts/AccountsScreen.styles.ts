import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  iconContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '18@s',
    paddingVertical: '15@vs',
  },
  textContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerList: {
    paddingVertical: '5@vs',
  },
  buttonContainer: {
    padding: '18@s',
  },
  buttonActive: {
    borderColor: colors.lightGrey,
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
    width: '170@s',
  },
  inputContent: {
    marginTop: '25@vs',
  },
  buttonContent: {
    alignItems: 'center',
    marginTop: '25@vs',
  },
  otpContent: {
    marginTop: '10@vs',
    marginBottom: '10@vs',
    width: '100%',
    height: '69@s',
    fontSize: '24@ms',
  },
  otpInput: {
    // paddingHorizontal: '30@s',
  },
  active: {
    fontSize: '24@ms',
    width: '49@s',
    height: '49@s',
    borderWidth: '0.5@s',
    borderColor: '#3BBE53',
    borderRadius: '16@s',
    backgroundColor: colors.white,
    color: colors.textPrimary,
  },
  noActive: {
    fontSize: '24@ms',
    width: '69@s',
    height: '69@s',
    borderWidth: '0.5@s',
    borderColor: colors.iconPrimary,
    borderRadius: '16@s',
    backgroundColor: colors.white,
    color: colors.textPrimary,
  },
  errorText: {
    paddingLeft: '10@s',
  },
  loadingStyle: {
    marginVertical: '20@s',
  },
}))
