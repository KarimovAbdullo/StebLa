import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    paddingHorizontal: '18@s',
    flexDirection: 'column',
    marginBottom: '10@s',
  },
  iconContent: {
    marginTop: '30@vs',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    width: '70%',
    color: colors.textPrimary,
    fontSize: '17@ms',
    padding: '0@s',
    margin: '0@s',
    marginLeft: '5@s',
  },
  inputContent: {
    backgroundColor: colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '36@vs',
    borderRadius: '10@s',
    marginTop: '10@vs',
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
  buttonBottom: {
    width: '150@s',
  },
  buttonBottom2: {
    width: '150@s',
    backgroundColor: colors.background,
  },
  textButton: {
    color: colors.textPrimary,
  },
  activeButtonStyle: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
  buttonContener: {
    height: '60@vs',
    paddingHorizontal: '20@s',
    marginVertical: '20@vs',
  },
  flatContener: {
    marginVertical: '20@vs',
    paddingHorizontal: '20@s',
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
  buttonSheet: {
    marginBottom: '25@vs',
  },
  buttonActive: {
    borderColor: colors.background,
  },
}))
