import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

const _layout = () => {
  return (
    <Tabs screenOptions={{headerTintColor: '#fff'
      ,tabBarActiveTintColor: '#283618',headerShadowVisible:false,tabBarStyle:{backgroundColor:'#e9edc9'}}}>
<Tabs.Screen
        name="index"
        options={{
          title:'TODO',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="tasks" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen name='spendings'options={{headerShown:false}}></Tabs.Screen>
    </Tabs>
  )
}

export default _layout