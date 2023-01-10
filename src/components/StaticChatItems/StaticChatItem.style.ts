import { createStyles } from 'utils/createStyles'

export default createStyles((colors, font) => ({
  itemText: {
    fontSize: '16@ms',
    fontFamily: font.Inter.regular,
    fontWeight: '400',
    color: colors.textPrimary,
  },
  item: {
    backgroundColor: colors.backroundSecondary,
    marginRight: '15@s',
    borderRadius: '39@s',
    alignItems: 'center',
    marginVertical: '10@vs',
    paddingHorizontal: '18@s',
    paddingVertical: '10@vs',
  },
}))
