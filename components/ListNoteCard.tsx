import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NOTE_COLORS } from '@/constants/Colors'
import { NoteCardStyles,ListNoteCardStyles } from '@/styles/componentStyles'

interface NOTE {
  title: string,
  time: string,
  date: string,
  hasAudio?: boolean,
  hasAttachmentFile?: boolean,
}


const ListNoteCard = ({ title, time, date, hasAudio, hasAttachmentFile }: NOTE) => {
  return (
    <View style={[ListNoteCardStyles.container, { backgroundColor: NOTE_COLORS[0].main_color }]}>
      <View style={[NoteCardStyles.highlightContainer, { backgroundColor: NOTE_COLORS[0].highlight_color }]}></View>
      <View style={[NoteCardStyles.subContainer, { backgroundColor: NOTE_COLORS[0].main_color }]}>
        <View style={NoteCardStyles.Section}>
          <Text  style={[NoteCardStyles.text,ListNoteCardStyles.title]}>{title}</Text>
          <Text style={NoteCardStyles.text}>{time}</Text>
        </View>
        <View style={NoteCardStyles.Section}>
          <Text style={NoteCardStyles.text}>{date}</Text>
          <View style={NoteCardStyles.attachmentSection}>
            {hasAttachmentFile && <Text>ATT</Text>}
            {hasAudio && <Text>AUD</Text>}
          </View>
        </View>
      </View>
    </View>
  )
}

export default ListNoteCard

const styles = StyleSheet.create({})