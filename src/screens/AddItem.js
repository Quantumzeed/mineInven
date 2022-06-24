import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { colors } from '../themes/MainTheme'

const AddItem = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>AddItem</Text>
    </SafeAreaView>
  )
}

export default AddItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
