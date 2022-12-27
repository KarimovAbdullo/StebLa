import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  itemsContent: {
    paddingVertical: '3@vs',
    backgroundColor: colors.backroundPrimary,
    borderRadius: '8@s',
    borderWidth: '1@s',
    borderColor: colors.iconLine,
    marginTop: '5@vs',
  },
  input: {
    marginHorizontal: '3@s',
    fontSize: '20@s',
    color: colors.textSecondary,
    paddingLeft: '2@s',
    width: '300@s',
  },
  activeInput: {
    borderWidth: '1@s',
    borderColor: colors.green,
    borderRadius: '5@s',
  },
  error: {
    borderColor: colors.tanla,
  },
  errorText: {
    fontSize: '12@s',
    color: colors.red,
    paddingLeft: '10@s',
  },
  inputContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  successText: {
    color: colors.green,
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
  },
}))
