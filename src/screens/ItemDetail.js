import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const ItemDetail = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>ItemDetail test</Text>
    </SafeAreaView>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})
