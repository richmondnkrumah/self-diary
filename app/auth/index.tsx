import { Pressable, Text, TextInput, View, Image, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect } from 'react'
import { AuthStyles } from '@/styles/authStyles'
import useGoogleSignIn from '@/hooks/useGoogleSignIn'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { useNavigationContainerRef } from 'expo-router'



const index = () => {
    const { data, loading, error, signInWithGoogle } = useGoogleSignIn();
    const navigationRef = useNavigationContainerRef();

    GoogleSignin.configure({
        webClientId: '676507925916-oiu03mpr56hqev5j7730ptv0vq820a8a.apps.googleusercontent.com', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
    });
    useEffect(() => {
        if (data !== null) {
            navigationRef.resetRoot({
                index: 0,
                routes: [{ name: 'home', params: { userData: data }, path: '/home' }]
            })

        }
    }, [data])

    return (
        <KeyboardAvoidingView style={AuthStyles.safeAreaContainer}>
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
                            editable={!loading}
                            placeholder='johndoe@gmail.com'

                        />
                        <Pressable disabled={!loading} style={AuthStyles.signInButton} className=''>
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

                    <Pressable onPress={signInWithGoogle} style={AuthStyles.signInWithGoogleContainer}>
                        {
                            loading ? <ActivityIndicator /> :
                                <View style={AuthStyles.signInWithGoogleButton}>
                                    <Image style={AuthStyles.googleImage} resizeMode='contain' source={require("@/assets/images/googleicon.png")} />
                                    <Text>Sign in with Google</Text>
                                </View>
                        }

                    </Pressable>

                </View>
            </View>


        </KeyboardAvoidingView>
    )
}



export default index
