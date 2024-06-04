import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '@/utils/supabase'
import { Session } from '@supabase/supabase-js'
import ArrowUp from '@/assets/svg/alt-arrow-up.svg'
import ArrowDown from "@/assets/svg/alt-arrow-down.svg"
import Filter from '@/assets/svg/tuning.svg'
import { HomeStyles } from '@/styles/homeStyles'
import Refresh from '@/assets/svg/refresh.svg'
import { AllNoteSection, TemplateSection, StickyNoteSection } from '@/components'


const tableHeadings = ['All', 'Sticky', "Templates"]

const Dashboard = () => {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState('')
  const [website, setWebsite] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')
  const [session, setSession] = useState<Session | null>(null)
  const [activeTableHeading, setActiveTableHeading] = useState<string>('All')


  async function getProfile() {
    try {
      setLoading(true)
      if (!session?.user) throw new Error('No user on the session!')

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, website, avatar_url`)
        .eq('id', session?.user.id)
        .single()
      if (error && status !== 406) {
        throw error
      }

      if (data) {
        console.log(data)
        setUsername(data.full_name)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }

    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  const renderActiveSection = () => {
    switch (activeTableHeading) {
      case "All":
        return <AllNoteSection />
      case "Sticky":
        return <StickyNoteSection />
      case "Template":
        return <TemplateSection />
    }
  }

  useEffect(() => {
    if (session) getProfile()
  }, [session])
  return (
    <View style={HomeStyles.mainContainer}>
      {/* <Text>{username}</Text>
      <Text>{avatarUrl}</Text>
      <Text>{website}</Text> */}
      <View style={HomeStyles.screenHeadingContainer}>

        <View>
          <Text style={HomeStyles.mainTitle}>Richmond Notes</Text>
        </View>
        <View style={HomeStyles.tableHeadingContainer}>
          {
            tableHeadings.map(heading => (<Pressable key={heading} onPress={() => setActiveTableHeading(heading)} style={[HomeStyles.tableHeadingButtons, heading === activeTableHeading ? HomeStyles.tableHeadingButtonActive : null]}><Text style={[HomeStyles.tableHeadingText, heading === activeTableHeading ? HomeStyles.tableHeadingTextActive : null]}>{heading}</Text>
              {heading === "Templates" && (activeTableHeading === "Templates" ? <ArrowUp width={20} height={20} /> : <ArrowDown width={20} height={20} />)}</Pressable>))
          }
          <View style={HomeStyles.filterIconConntainer}>
            {
              activeTableHeading === "Templates" ? <Refresh style={{ alignSelf: 'flex-end' }} width={25} height={25} /> :
                <Filter style={{ alignSelf: 'flex-end' }} width={25} height={25} />

            }
          </View>
          <View style={HomeStyles.horizontalLine}></View>
        </View>
      </View>
      <View>
        {renderActiveSection()}
      </View>
    </View>
  )
}

export default Dashboard
