import { HIGHLIGHT_GRAY_COLOR,PRIMARY_COLOR } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const NoteCardStyles = StyleSheet.create({
  highlightContainer: {
    height: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  subContainer: {
    flex: 1,
   justifyContent: 'space-between',
   borderBottomRightRadius: 10,
   borderBottomLeftRadius: 10,
   paddingHorizontal: 20,
   paddingVertical: 10
  },
  Section: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    color: HIGHLIGHT_GRAY_COLOR,
    fontSize: 17
  },
  attachmentSection: {
    flexDirection: 'row',
    columnGap: 10
  }
})

export const ListNoteCardStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    borderRadius: 10
  },
  
  title:{
    fontWeight:'bold',
    color: PRIMARY_COLOR
  },
})

export const GridNoteCardStyles = StyleSheet.create({
  container: {
    height: 100,
    borderRadius: 10,
    width: '47%'
  },
  title:{
    fontWeight:'bold',
    color: PRIMARY_COLOR,

  },
 
})

export const SectionStyles = StyleSheet.create({
  mainContainer:{
    height: '100%',
    position:'relative'
  },
  addButtonContainer:{
    position: 'absolute',
    bottom:20,
    right:0
  }
})
