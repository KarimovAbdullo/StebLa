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
}))
