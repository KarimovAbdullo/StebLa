import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    flex: 1,
    paddingHorizontal: '18@s',
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10@vs',
  },
  icon: {
    position: 'absolute',
    right: 0,
    alignItems: 'flex-end',
    paddingVertical: '10@vs',
    width: '50@s',
  },
  text: {
    // justifyContent: 'center',
    position: 'absolute',
    left: '65@s',
  },
  img: {
    width: '44@vs',
    height: '44@vs',
  },
  hr: {
    width: '100%',
    marginBottom: '46@vs',
    borderWidth: 1,
    borderColor: '#F7F8F8',
    marginTop: '29@vs',
  },
  profileCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16@vs',
  },
  boxCard: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '165@s',
    borderRadius: '6@s',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '32@vs',
    marginTop: '9@vs',
  },
  boxcard: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '165@s',
    borderRadius: '6@s',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '21@vs',
    marginTop: '9@vs',
  },
  title: {
    marginTop: '10@vs',
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}))
