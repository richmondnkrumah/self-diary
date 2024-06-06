import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Plus from '@/assets/svg/add-plus.svg'

const AddButton = () => {
  return (
    <Pressable style={{backgroundColor: '#0E0213', width: 50, height: 50,borderRadius: 25,alignItems:'center',justifyContent: 'center'}}>
      <Plus width={30} height={30} color={'#fff'}/>
    </Pressable>
  )
}

export default AddButton
