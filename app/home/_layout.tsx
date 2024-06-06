import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import Hamburger from '@/assets/svg/hamburger-menu.svg'
import { DrawerStyles } from '@/styles/homeStyles';
import Search from '@/assets/svg/minimalistic-magnifer.svg'
import { PRIMARY_COLOR } from '@/constants/Colors';
import AllNote from '@/assets/svg/pen-2.svg'
import Settings from '@/assets/svg/settings-minimalistic.svg'
import Premium from '@/assets/svg/crown-star.svg'
import Deleted from '@/assets/svg/trash-bin-minimalistic.svg'
import Profile from '@/assets/svg/profile.svg'

const HomeLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={({ navigation }) => ({
        headerLeft: () => <Pressable onPress={() => navigation.toggleDrawer()}><Hamburger height={30} width={30} color={'#000'} /></Pressable>,
        headerLeftContainerStyle: DrawerStyles.headerPaddingLeft,
        headerRightContainerStyle: DrawerStyles.headerPaddingRight,
        headerTitle: '',
        drawerActiveBackgroundColor: 'transparent',
        drawerActiveTintColor: PRIMARY_COLOR,
        drawerContentStyle: {paddingTop: 20}         
      })}>
        <Drawer.Screen
          name='index'
          options={{
            title: 'All Notes',
            headerRight: () => <Pressable><Search height={20} width={20}/></Pressable>,
            drawerIcon: () => <AllNote height={25} width={25} color={PRIMARY_COLOR}/>
          }}
        />
        <Drawer.Screen
          name='deleted/index'
          options={{
            title: 'Recently Deleted',
            drawerIcon: () => <Deleted height={25} width={25} color={PRIMARY_COLOR}/>

          }}
        />
         <Drawer.Screen
          name='profile/index'
          options={{
            title: 'Profile',
            drawerIcon: () => <Profile height={25} width={25} color={PRIMARY_COLOR}/>
          }}
        />
        <Drawer.Screen
          name='premium/index'
          options={{
            title: 'Get Premium',
            drawerIcon: () => <Premium height={25} width={25} color={PRIMARY_COLOR}/>
          }}

        />
       
        <Drawer.Screen
          name='settings/index'
          options={{
            title: 'Settings',
            drawerIcon: () => <Settings height={25} width={25} color={PRIMARY_COLOR}/>,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}

export default HomeLayout
