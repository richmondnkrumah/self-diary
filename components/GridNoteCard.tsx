import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NoteCardStyles,GridNoteCardStyles} from '@/styles/componentStyles'
import { NOTE_COLORS } from '@/constants/Colors'


interface NOTE {
  title: string,
  time: string,
  date: string,
  hasAudio?: boolean,
  hasAttachmentFile?: boolean,
} 

const GridNoteCard = ({ title, time, hasAudio, hasAttachmentFile }: NOTE) => {
  return (
    <View style={[GridNoteCardStyles.container, { backgroundColor: NOTE_COLORS[0].main_color }]}>
      <View style={[NoteCardStyles.highlightContainer, { backgroundColor: NOTE_COLORS[0].highlight_color }]}></View>
      <View style={[NoteCardStyles.subContainer, { backgroundColor: NOTE_COLORS[0].main_color }]}>
        <View style={NoteCardStyles.Section}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={[NoteCardStyles.text,GridNoteCardStyles.title]}>{title}</Text>
        </View>
        <View style={NoteCardStyles.Section}>
          
          <View style={NoteCardStyles.attachmentSection}>
            {hasAttachmentFile && <Text>ATT</Text>}
            {hasAudio && <Text>AUD</Text>}
          </View>
          <Text style={NoteCardStyles.text}>{time}</Text>
        </View>
      </View>
    </View>
  )
}
export default GridNoteCard
