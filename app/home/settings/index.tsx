import { StyleSheet, Text, View, FlatList, Pressable, Switch } from 'react-native'
import { useState } from 'react'
import { SettingStyles } from '@/styles/homeStyles'

const index = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [autoSave, setAutoSave] = useState(false)
  const [linksClickable, setLinksClickable] = useState(false)

  const handleSwitchEvent = (action: React.Dispatch<React.SetStateAction<boolean>>) => {
    action(prev => !prev)
  }

  return (
    <View style={SettingStyles.mainContainer}>
      <View>
        <Text style={SettingStyles.mainTitle}>Settings</Text>

      </View>
      <View style={SettingStyles.contentContainer}>
      <View style={SettingStyles.separator}></View>
        <Pressable style={SettingStyles.buttons}>
          <Text>Make email, Links Clickable</Text>
          <Switch onChange={() => handleSwitchEvent(setLinksClickable)} value={linksClickable} />
        </Pressable>
        <View style={SettingStyles.separator}></View>
        <Pressable style={SettingStyles.buttons}>
          <Text>Auto save</Text>
          <Switch onChange={() => handleSwitchEvent(setAutoSave)} value={autoSave} />
        </Pressable>
        <View style={SettingStyles.separator}></View>
        <Pressable style={SettingStyles.buttons}>
          <Text>Dark mode</Text>
          <Switch onChange={() => handleSwitchEvent(setDarkMode)} value={darkMode} />
        </Pressable>
      <View style={SettingStyles.separator}></View>

      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})