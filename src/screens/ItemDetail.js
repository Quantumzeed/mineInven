import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { colors } from '../themes/MainTheme'

const ItemDetail = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ItemDetail test</Text>
    </SafeAreaView>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.forground,
  },
})
