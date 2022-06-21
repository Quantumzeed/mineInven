import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import ItemStack from './ItemStack'
import RootStack from './RootStack'

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}

export default Navigation
