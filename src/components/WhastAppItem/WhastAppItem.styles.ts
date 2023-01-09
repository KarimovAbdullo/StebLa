import { createStyles } from 'utils/createStyles'

export default createStyles(() => ({
  container: {
    flexDirection: 'row',
    paddingHorizontal: '18@s',
    paddingVertical: '15@vs',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContent: {
    paddingLeft: '10@s',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomSheet: {
    borderTopRightRadius: '0@s',
    borderTopLeftRadius: '0@s',
  },
  bottomSheetButtonsContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomSheetButtonsText: {
    marginLeft: '10.5@s',
  },
  button: {
    marginBottom: '25@vs',
  },
}))
