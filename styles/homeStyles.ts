import { HIGHLIGHT_GRAY_COLOR } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const DrawerStyles = StyleSheet.create({
  headerPaddingLeft: {
    paddingLeft: '5%'
  },
  headerPaddingRight: {
    paddingRight: '5%'
  }
})



export const HomeStyles = StyleSheet.create({
  mainContainer: {
    paddingLeft:'5%',
    paddingRight: '5%',
    backgroundColor:'white',
    flex: 1
  },
  mainTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#0E0213'
  },
  screenHeadingContainer:{
    rowGap:10
  },
  tableHeadingContainer: {
    flexDirection: 'row',
    columnGap:20,
  },
  tableHeadingButtons: {
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 3
  },
  tableHeadingButtonActive: {
    borderBottomColor:'#0E0213',
    borderBottomWidth:2,

  },tableHeadingText:{
    color:'#A3A3A3',
    fontSize:16,
    paddingBottom:3
  },
  tableHeadingTextActive: {
    fontWeight: 'bold',
    color:'#0E0213'
  },
  filterIconConntainer: {
    flex: 1,
  },
  horizontalLine:{
    width:'100%',
    height: 1,
    backgroundColor:'#D6D6D6',
    position: 'absolute',
    bottom:0
  }

})


export const SettingStyles = StyleSheet.create({
  mainContainer: {
    paddingLeft:'5%',
    paddingRight: '5%',
    backgroundColor:'white',
    flex: 1
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: HIGHLIGHT_GRAY_COLOR
  },
  mainTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#0E0213',
    paddingBottom:10
  },
  contentContainer: {
    rowGap: 10
  }
})