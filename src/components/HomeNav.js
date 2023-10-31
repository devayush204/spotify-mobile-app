import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeNav = () => {
  return (
    <View className='flex flex-row gap-2'>
      <View className='rounded-full px-3 justify-center bg-red-500'>
        <Text className='text-black font-extrabold text-[14px]'>A</Text>
      </View>

      <TouchableOpacity className='rounded-2xl flex justify-center bg-green-500 py-2 px-5 '>
        <Text className='text-black text-[12px]'>All</Text>
      </TouchableOpacity>
      <TouchableOpacity className='rounded-2xl flex justify-center bg-green-500 py-2 px-3 '>
        <Text className='text-black text-[12px]' >Music</Text>
      </TouchableOpacity >
      <TouchableOpacity className='rounded-2xl flex justify-center bg-green-500 py-2 px-3 '>
        <Text className='text-black text-[12px]'>Podcasts & Shows</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeNav