import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  contentItem: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    paddingHorizontal: '18@s',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textContent: {
    marginTop: '60@vs',
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '20@vs',
  },
  button: {
    width: '120@s',
  },
  inputContent: {
    marginTop: '25@vs',
  },
  iconContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '160@s',
    marginTop: '50@vs',
    alignItems: 'center',
  },
  otpContent: {
    marginTop: '10@vs',
    marginBottom: '10@vs',
    width: '100%',
    height: '69@s',
    fontSize: '24@ms',
    backgroundColor: colors.white,
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
    alignItems: 'center',
  },
  titleContent: {
    width: '210@s',
    marginTop: '20@vs',
    marginBottom: '25@vs',
  },
  refreshContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '57%',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '60%',
  },
  timerContent: {
    width: '68@s',
    height: '42@vs',
    backgroundColor: colors.lightGrey,
    justifyContent: 'center',
    borderRadius: '8@s',
  },
  bottomText: {
    marginTop: '50@vs',
  },
}))
