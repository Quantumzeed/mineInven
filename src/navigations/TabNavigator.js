import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DashBorad from '../screens/DashBorad'
import ItemStack from './ItemStack'
import AddItem from '../screens/AddItem'
import Profile from '../screens/Profile'
import Donate from '../screens/Donate'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarActiveTintColor: 'red',
        // tabBarActiveBackgroundColor: 'green',
      }}
      initialRouteName="DashBorad">
      <Tab.Screen name="DashBorad" component={DashBorad} />
      <Tab.Screen name="Item" component={ItemStack} />
      <Tab.Screen name="Add" component={AddItem} />
      <Tab.Screen name="Donate" component={Donate} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default TabNavigator
