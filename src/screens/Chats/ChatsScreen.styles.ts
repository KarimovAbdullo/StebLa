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
  icon: {
    position: 'absolute',
    right: 0,
    alignItems: 'flex-end',
    paddingVertical: '10@vs',
    width: '50@s',
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
  loadingStyle: {
    marginVertical: '20@s',
  },
}))
