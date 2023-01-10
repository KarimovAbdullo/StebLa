import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  section: {
    paddingHorizontal: '19@s',
    paddingTop: '30@vs',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.white,
    paddingBottom: '20@vs',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '21@vs',
  },
  typo: {
    marginLeft: '10@s',
    width: '50%',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  right: {
    paddingHorizontal: '10@s',
    paddingVertical: '5@vs',
    borderRadius: '6@s',
    backgroundColor: colors.lightGrey,
  },
}))
