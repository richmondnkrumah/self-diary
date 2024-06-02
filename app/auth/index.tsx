import { Pressable, Text, TextInput, View, Image, KeyboardAvoidingView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { AuthStyles } from '@/styles/authStyles'
import Auth from '@/components/Auth'
import { FontAwesome } from '@expo/vector-icons';



const index = () => {
    return (
        <SafeAreaView style={{ alignItems: 'center', marginBottom: 40,marginTop:40 }}>
            <View style={AuthStyles.mainContainer}>
                <View >
                    <Text style={AuthStyles.title}>Welcome to Self Diary</Text>
                    <Text style={AuthStyles.subTitle}>Reorganize your mood and Mental Health</Text>
                </View>
                <View style={AuthStyles.illustrationContainer}>
                    <Image source={require('@/assets/illustrations/Conversation-rafiki1.png')} alt='Authentication wIllutration' style={AuthStyles.illustrationImage} resizeMode='contain' />
                </View>
                <View style={AuthStyles.userSection}>
                    <View style={AuthStyles.emailSignIn}>
                        <TextInput style={AuthStyles.input}
                            editable
                            placeholder='johndoe@gmail.com'
                        />
                        <Pressable style={AuthStyles.signInButton} className=''>
                            <Text style={AuthStyles.signInText}>
                                Sign in
                            </Text>
                        </Pressable>
                    </View>
                    <View style={AuthStyles.horizontalSection}>
                        <View style={AuthStyles.horizontalLine}>
                        </View>
                        <Text>Or</Text>
                        <View style={AuthStyles.horizontalLine}></View>
                    </View>

                    <Pressable style={AuthStyles.signInWithGoogle}>
                        <Text>Sign in with Google</Text>
                    </Pressable>
                    
                </View>
            </View>


        </SafeAreaView>
    )
}



export default index
