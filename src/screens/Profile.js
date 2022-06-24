import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { colors } from '../themes/MainTheme'

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background2,
  },
})
