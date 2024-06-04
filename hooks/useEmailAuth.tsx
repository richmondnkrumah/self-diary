import { StyleSheet, Text, View,Alert, AppState } from 'react-native'
import {useState} from 'react'
import { supabase } from '@/utils/supabase'
import { AuthError } from '@supabase/supabase-js'

const useEmailAuth = ({email,password}: {email:string,password: string}) => {

  AppState.addEventListener('change', (state) => {
    if (state === 'active') {
      supabase.auth.startAutoRefresh()
    } else {
      supabase.auth.stopAutoRefresh()
    }
  })
  const [error, setError] = useState<AuthError | null>(null)
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) setError(error)
    setLoading(false)
  }

  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) setError(error)
    setLoading(false)
  }
  async function logInWithEmail() {

  }
  return {error,loading,logInWithEmail}
}

export default useEmailAuth
