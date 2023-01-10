import { createStyles } from 'utils/createStyles'

export default createStyles((colors, fonts) => ({
  itemsContent: {
    borderRadius: '8@s',
    borderColor: colors.lightGrey,
    marginTop: '5@vs',
  },
  input: {
    fontSize: '18@s',
    color: colors.textPrimary,
    // marginLeft: '13@s',

    width: '100%',
  },
  activeInput: {
    borderWidth: '1@s',
    borderColor: colors.main,
    borderRadius: '10@s',
    borderEndWidth: 2,
  },
  error: {
    borderColor: colors.main,
  },
  errorText: {
    fontSize: '14@s',
    color: colors.red,
    paddingLeft: '15@s',
  },
  inputContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  successText: {
    color: colors.black,
    paddingLeft: '10@s',
    fontSize: '12@s',
  },
  text: {
    marginLeft: '10@s',
    color: colors.textSecondary,
    fontSize: '20@s',
    paddingBottom: '5@vs',
  },
  container: {
    marginVertical: '5@vs',
    backgroundColor: colors.lightGrey,
    padding: '5@s',
    borderRadius: '10@s',
    paddingHorizontal: '10@s',
    // height: '69@vs',
  },
  eror: {
    marginVertical: '5@vs',
    backgroundColor: colors.lightGrey,
    padding: '5@s',
    borderRadius: '10@s',
    borderWidth: '1@s',
    borderColor: colors.red,
  },
  t: {
    fontFamily: fonts.Inter.medium,
    fontSize: '12@ms',
    color: colors.textTertiary,
  },
}))
