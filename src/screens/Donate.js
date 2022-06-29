import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Animated,
} from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { colors } from '../themes/MainTheme'
// import Animated from 'react-native-reanimated'

const Donate = () => {
  const [headerShown, setHeaderShown] = useState(false)
  const translation = useRef(new Animated.Value(-100)).current

  useEffect(() => {
    Animated.timing(translation, {
      toValue: headerShown ? 0 : -100,
      duration: 250,
      useNativeDriver: true,
    }).start()
  }, [headerShown])

  return (
    <>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 60,
          zIndex: 999,
          backgroundColor: 'tomato',
          opacity: 0.5,
          transform: [{ translateY: headerShown ? -100 : 0 }],
        }}>
        <Text style={{ top: 35, left: 35 }}>Donated</Text>
      </View>
      {/* <SafeAreaView style={styles.container}> */}
      {/* <StatusBar barStyle="light-content" /> */}
      <ScrollView
        onScroll={event => {
          const scrolling = event.nativeEvent.contentOffset.y
          if (scrolling > 100) {
            setHeaderShown(true)
          } else {
            setHeaderShown(false)
          }
        }}
        scrollEventThrottle={16}
        style={{ flex: 1 }}>
        <View style={styles.text}>
          <Text>Donated</Text>

          <Text>aaaa</Text>
        </View>
      </ScrollView>
      {/* </SafeAreaView> */}
    </>
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
    top: 60,
    color: 'black',
  },
})
