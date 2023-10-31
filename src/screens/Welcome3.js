import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Welcome1 = () => {
  const navigation = useNavigation();
  const img1 = require('../assets/welcome-images/img3.png')
  return (

    <ScrollView>
      <View className="flex-1 bg-white  ">
        <View className="relative h-[100vh]">
          <View className="absolute w-[200px] h-[200px] rounded-full border-2 border-black -right-[90px] -top-[90px] " ></View>
          <View className="flex items-center mt-28">
            <Text className='text-[30px] text-black font-sans font-bold'>After reading your book</Text>
            <Text className='text-[30px] text-black font-sans font-bold'>you can return it.</Text>
          </View>
          <View className="h-[500px] w-[600px] -ml-[110px] -mt-3 z-10 ">
            <Image className=" h-[100%] w-[100%] " source={img1} />
          </View>
          <View className="w-[500px] h-[500px] rounded-full bg-pink-100 absolute -bottom-16 -left-[70px] z-[1] "></View>

          <View className="z-10 w-[80px] absolute bottom-3 right-3">
            <TouchableOpacity onPress={() => { navigation.navigate("Login") }} className=" py-2 rounded-lg bg-white cursor-pointer items-center ">
              <Text className="text-black font-bold font-sans text-[14px]">Let's go</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="flex-row left-[140px] bottom-[85px] absolute bg-white py-2 px-2 items-center rounded-lg ">
        <View className="rounded-full p-1 mr-3 bg-pink-200"></View>
        <View className="rounded-full p-1 mr-3 bg-pink-200"></View>
        <View className="rounded-full p-1.5 mr-3 bg-pink-400"></View>
        <View className="rounded-full p-1 bg-pink-200"></View>
      </View>
    </ScrollView>


  )
}

export default Welcome1