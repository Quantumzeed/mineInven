import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'

const ItemDetail = ({ navigation }) => {
  return (
    <StatusBar barStyle="light-content">
      <View style={styles.container}>
        <Text>ItemDetail</Text>
      </View>
    </StatusBar>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})
