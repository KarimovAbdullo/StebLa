import { createStyles } from 'utils/createStyles'

export default createStyles(color => ({
  container: {
    flex: 1,
    paddingHorizontal: '20@s',
    backgroundColor: color.white,
  },
  main: {
    marginTop: '40@vs',
  },
  text: {
    marginBottom: '17@vs',
  },

  head: {
    flexDirection: 'row',
    marginTop: '20@vs',
    alignItems: 'center',
    marginBottom: '20@vs',
    // justifyContent: 'space-between',
    // width: '50%',
  },
  freeCard: {
    borderWidth: 1,
    paddingHorizontal: '25@s',
    paddingVertical: '10@vs',
    marginTop: '25@vs',
    borderRadius: '7@s',
    // borderColor: color.title,
  },
  ProCard: {
    borderWidth: 1,
    paddingHorizontal: '25@s',
    paddingVertical: '15@vs',
    marginTop: '25@vs',
    borderRadius: '7@s',
    // borderColor: color.title,
  },
  title: {
    marginBottom: '10@vs',
  },
  iconCard: {
    position: 'absolute',
    left: '23@s',
    top: -13,
    backgroundColor: color.white,
    paddingHorizontal: '5@s',
  },
  button: {
    width: '120@s',
    height: '49@vs',
    borderRadius: '36@s',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10@vs',
    backgroundColor: color.backroundSecondary,
    alignSelf: 'center',
    marginTop: '30@vs',
  },
  textBtn: {
    fontSize: '16@s',
    textAlign: 'center',
    color: color.black,
  },
  inputContent: {
    marginTop: '25@vs',
  },
  btn: {
    // width: '120@s',
    // height: '49@vs',
    // borderRadius: '36@s',
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginBottom: '10@vs',
    // backgroundColor: color.main,
    alignSelf: 'center',
    marginTop: '30@vs',
    position: 'absolute',
    bottom: 0,
    marginBottom: '20@vs',
    borderWidth: 0.5,
  },
  icon: {
    position: 'absolute',
    right: 0,
    width: '50@s',
    marginTop: '30@vs',
  },
  iconContent: {
    marginTop: '15@vs',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  sector: {
    borderWidth: 1,
    marginTop: '20@vs',
  },
}))

// import { createStyles } from 'utils/createStyles'
// export default createStyles(colors => ({
//   main: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     paddingHorizontal: '20@s',
//     backgroundColor: colors.white,
//   },
//   iconContent: {
//     marginTop: '30@vs',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   item: {
//     width: '40@s',
//   },

//   dateSection: {
//     marginTop: '27@vs',
//     marginBottom: '5@vs',
//   },
//   smallText: {
//     marginTop: '20@vs',
//     marginBottom: '5@vs',
//   },
//   title: {
//     width: '90%',
//     marginBottom: '20@vs',
//     marginTop: '20@vs',
//   },
//   price: {
//     marginTop: '5@vs',
//     marginBottom: '20@vs',
//   },
//   btnCard: {
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//   },
//   button: {
//     backgroundColor: colors.white,
//     height: '37@vs',
//   },
//   textButton: {
//     color: '#4F4F4F',
//     fontWeight: '400',
//     fontSize: '14@ms',
//   },
//   btn: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     marginBottom: '30@vs',
//   },

//   checkBoxContent: {
//     flexDirection: 'column',
//     marginVertical: '5@s',
//   },
//   check: {
//     width: '15@s',
//     height: '15@s',
//     backgroundColor: colors.main,
//     borderRadius: '999@s',
//   },
//   checkBox: {
//     width: '22@s',
//     height: '22@s',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: '999@s',
//     borderWidth: '1@s',
//     borderColor: colors.main,
//     marginRight: '10@s',
//   },
//   header: {
//     borderWidth: 1,
//   },
// }))
