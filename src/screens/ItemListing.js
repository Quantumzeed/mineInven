import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React from 'react'

const ItemListing = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>ItemListing</Text>
      <Button
        title="Go to Item Detail"
        onPress={() => navigation.navigate('ItemDetail')}
      />
    </SafeAreaView>
  )
}

export default ItemListing

const styles = StyleSheet.create({})
