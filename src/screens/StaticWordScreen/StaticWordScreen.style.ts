import { createStyles } from 'utils/createStyles'

export default createStyles((colors, fonts) => ({
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
    justifyContent: 'center',
  },

  itemContent: {
    backgroundColor: colors.white,
    flex: 1,
  },
  icon: {
    position: 'absolute',
    right: 0,
  },
  input: {
    width: '100%',
    color: colors.black,
    fontSize: '17@ms',
    padding: '0@s',
    margin: '0@s',
    fontFamily: fonts.Inter.regular,
    lineHeight: '22@ms',
    textAlign: 'center',
    marginLeft: '5@s',
  },
  inputContent: {
    backgroundColor: colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '36@vs',
    borderRadius: '10@s',
    marginTop: '20@vs',
    marginHorizontal: '10@s',
  },
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
