import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ItemListing from '../screens/ItemListing'
import ItemDetail from '../screens/ItemDetail'

const Stack = createNativeStackNavigator()

const ItemStack = () => {
  return (
    <Stack.Navigator initialRouteName="ItemListing">
      <Stack.Screen name="ItemListing" component={ItemListing} />
      <Stack.Screen name="ItemDetail" component={ItemDetail} />
    </Stack.Navigator>
  )
}

export default ItemStack
