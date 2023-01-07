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

  item: {
    width: '40@s',
  },

  itemContent: {
    backgroundColor: colors.white,
    flex: 1,
  },

  text: {
    width: '60%',
    borderWidth: 1,
    flexDirection: 'column',

    justifyContent: 'space-between',
  },
  labelCard: {
    borderWidth: 1,
    paddingVertical: '37@vs',
    paddingHorizontal: '19@s',
    marginTop: '20@vs',
    borderColor: '#EDEFEF',
  },
}))
