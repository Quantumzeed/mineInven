import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { colors } from '../themes/MainTheme'

const Donate = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Donate</Text>
    </SafeAreaView>
  )
}

export default Donate

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.light,
  },
})
