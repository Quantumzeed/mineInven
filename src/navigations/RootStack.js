import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DashBorad from '../screens/DashBorad'
import ItemListing from '../screens/ItemListing'
import ItemDetail from '../screens/ItemDetail'

const Stack = createNativeStackNavigator()

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="DashBorad">
      {/* <Stack.Screen
        name="DashBorad"
        component={DashBorad}
        options={{ title: 'Test' }}
      /> */}
      <Stack.Screen name="ItemListing" component={ItemListing} />
      <Stack.Screen
        name="ItemDetail"
        component={ItemDetail}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  )
}

export default RootStack
