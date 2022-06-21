import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const ItemListing = ({ navigation }) => {
  return (
    <View>
      <Text>ItemListing</Text>
      <Button
        title="Go to Item Detail"
        onPress={() => navigation.navigate('ItemDetail')}
      />
    </View>
  )
}

export default ItemListing

const styles = StyleSheet.create({})
