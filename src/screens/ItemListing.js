import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { colors } from '../themes/MainTheme'

const ItemListing = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ItemListing</Text>
      <Button
        title="Go to Item Detail"
        onPress={() => navigation.navigate('ItemDetail')}
      />
    </SafeAreaView>
  )
}

export default ItemListing

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.medium,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
