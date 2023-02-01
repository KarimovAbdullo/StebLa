import { createStyles } from 'utils/createStyles'

export default createStyles((colors, font) => ({
  container: {
    paddingHorizontal: '18@s',
    flexDirection: 'column',
    marginBottom: '5@s',
  },
  main: {
    backgroundColor: colors.white,
  },
  iconContent: {
    marginTop: '15@vs',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '30@vs',
    justifyContent: 'space-between',
  },
  icon: {
    width: '50@s',
    height: '20@vs',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  itemContent: {
    backgroundColor: colors.white,
    flex: 1,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: '10@s',
  },
  img: {
    width: '40@s',
    height: '40@s',
    marginLeft: '10@s',
    borderRadius: '30@s',
  },
  itemConten: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
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
  board: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    flexWrap: 'wrap',
    flex: 1,
    marginTop: '10@vs',
  },
}))
