import React from 'react'
import ItemListing from '../screens/ItemListing'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ItemDetail from '../screens/ItemDetail'

const Stack = createNativeStackNavigator()

const ItemStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: 'modal' }}
      initialRouteName="ItemListing">
      <Stack.Screen name="ItemListing" component={ItemListing} />
      <Stack.Screen name="ItemDetail" component={ItemDetail} />
    </Stack.Navigator>
  )
}

export default ItemStack
