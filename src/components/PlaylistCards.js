import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import data from '../data/PlaylistCardsData'

const PlaylistCards = () => {
    return (
        <>
            {/* {
                data.map((item) => {
                    return (
                        // <View className='flex  flex-row gap-2 w-full' >
                        <View className='flex flex-row w-1/2 px-2 items-center'>
                            <Image className='w-[50px] h-[50px]' source={item.img} />
                            <View className='flex items-center bg-[#565656]'>
                                <Text className='text-[14px] text-white font-extrabold'>{item.heading}</Text>
                            </View>
                            </View>
                        // </View>
                    )
                })
            } */}

            <View className=' justify-center  items-center '>
                <FlatList
                    data={data}
                    numColumns={2}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View className='w-1/2 mr-1 flex flex-row my-2 bg-[#2a2929] rounded-r-md'>
                            <Image className='w-[55px] h-[55px] rounded-l-md ' source={item.img} />
                            <View className='ml-2 flex justify-center  w-[65%] '>
                                <Text className='text-[14px] text-white font-extrabold '>{item.heading}</Text>
                            </View>

                        </View>
                    )}
                />
            </View>
        </>
    )
}

export default PlaylistCards