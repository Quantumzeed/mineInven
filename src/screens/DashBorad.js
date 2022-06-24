import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { colors } from '../themes/MainTheme'

const DashBorad = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>DashBorad</Text>
    </SafeAreaView>
  )
}

export default DashBorad

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
