import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HomeNav from '../components/HomeNav'
import PlaylistCards from '../components/PlaylistCards'

const Home = () => {
  return (
    <ScrollView className='px-3 pt-6 bg-[#000000]'>
    <View>
      <HomeNav/>
    </View>
    <View className='mt-4'>
        <PlaylistCards/>
    </View>
    </ScrollView>
  )
}

export default Home