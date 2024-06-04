import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Plus from '@/assets/svg/add-plus.svg'

const AddButton = () => {
  return (
    <Pressable style={{backgroundColor: '#0E0213', width: 46, height: 46,borderRadius: 23}}>
      <Plus width={25} height={25} fill={'#fff'}/>
    </Pressable>
  )
}

export default AddButton

const styles = StyleSheet.create({})