import { StyleSheet } from "react-native"

export const AuthStyles = StyleSheet.create({
  safeAreaContainer: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 40
  },
  mainContainer: {
    width: '90%',
    height: '100%',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  subTitle: {
    textAlign: 'center',
    color: 'gray'
  },
  horizontalSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    columnGap:10
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#D6D6D6',
    flexGrow: 1
  },
  inputContainer: {
    
  },
  input: {
    height:45,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D6D6',
    
  }
  ,
  signInButton: {
    borderRadius: 10,
    backgroundColor: '#0E0213',
    height: 45,
    justifyContent:'center',
    alignItems:'center',
    
  },
  signInText: {
    color: 'white',
    fontSize: 18
  },
  illustrationContainer: {
    width: '100%',
    height: 400
  },
  illustrationImage: {
    height: '100%',
    width: '100%',
  },
  userSection: {
    rowGap: 25
  },
  signInWithGoogleContainer: {
    height:45,
    justifyContent:'center',
    alignItems:'center',
    width: 200,
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth:1,
    borderColor: '#D6D6D6'
  },
  emailSignIn: {
    gap:20
  },
  googleImage: {
    height:50,
    width:50
  },
  signInWithGoogleButton:{
    flexDirection: 'row',
    alignItems: 'center'
  }
})