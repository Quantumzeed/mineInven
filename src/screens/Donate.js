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
        <Text style={styles.text}>
          Donated loremConsequat do velit aliquip eiusmod adipisicing anim
          adipisicing. Quis Lorem in nostrud sit nisi sit ex veniam elit. Veniam
          qui aute adipisicing tempor dolore commodo do id occaecat labore Lorem
          reprehenderit. Consectetur mollit duis Lorem voluptate ipsum ad
          pariatur sit labore consectetur ut. Do sint amet deserunt et voluptate
          esse. Ut cupidatat cillum et velit irure. Irure nisi non proident
          eiusmod. Aliqua et ullamco fugiat id quis amet aute. Proident aliqua
          esse veniam in fugiat occaecat tempor. Non id ipsum dolore anim.
          Voluptate reprehenderit labore mollit qui adipisicing mollit
          reprehenderit irure ut anim consectetur. Minim ea laboris eiusmod ex
          dolor excepteur enim nisi ullamco eiusmod proident commodo sint
          adipisicing. Velit magna voluptate elit deserunt do magna nulla cillum
          nisi Lorem sunt. Cupidatat qui Lorem et ex non do nostrud id non nisi.
          Qui non elit veniam Lorem consequat qui eu ut eu occaecat elit cillum.
          Non sit deserunt anim consectetur ad do consequat anim voluptate enim
          eu. Aliqua exercitation cillum excepteur do id. Veniam dolor cillum
          consectetur sunt culpa deserunt nulla amet dolor Lorem. Duis minim in
          nisi adipisicing laborum reprehenderit magna irure sit laboris
          consequat cupidatat aliqua. Est velit ad veniam adipisicing aute
          eiusmod.
        </Text>

        <Text style={styles.text}>
          Donated loremConsequat do velit aliquip eiusmod adipisicing anim
          adipisicing. Quis Lorem in nostrud sit nisi sit ex veniam elit. Veniam
          qui aute adipisicing tempor dolore commodo do id occaecat labore Lorem
          reprehenderit. Consectetur mollit duis Lorem voluptate ipsum ad
          pariatur sit labore consectetur ut. Do sint amet deserunt et voluptate
          esse. Ut cupidatat cillum et velit irure. Irure nisi non proident
          eiusmod. Aliqua et ullamco fugiat id quis amet aute. Proident aliqua
          esse veniam in fugiat occaecat tempor. Non id ipsum dolore anim.
          Voluptate reprehenderit labore mollit qui adipisicing mollit
          reprehenderit irure ut anim consectetur. Minim ea laboris eiusmod ex
          dolor excepteur enim nisi ullamco eiusmod proident commodo sint
          adipisicing. Velit magna voluptate elit deserunt do magna nulla cillum
          nisi Lorem sunt. Cupidatat qui Lorem et ex non do nostrud id non nisi.
          Qui non elit veniam Lorem consequat qui eu ut eu occaecat elit cillum.
          Non sit deserunt anim consectetur ad do consequat anim voluptate enim
          eu. Aliqua exercitation cillum excepteur do id. Veniam dolor cillum
          consectetur sunt culpa deserunt nulla amet dolor Lorem. Duis minim in
          nisi adipisicing laborum reprehenderit magna irure sit laboris
          consequat cupidatat aliqua. Est velit ad veniam adipisicing aute
          eiusmod.
        </Text>

        <Text style={styles.text}>
          Donated loremConsequat do velit aliquip eiusmod adipisicing anim
          adipisicing. Quis Lorem in nostrud sit nisi sit ex veniam elit. Veniam
          qui aute adipisicing tempor dolore commodo do id occaecat labore Lorem
          reprehenderit. Consectetur mollit duis Lorem voluptate ipsum ad
          pariatur sit labore consectetur ut. Do sint amet deserunt et voluptate
          esse. Ut cupidatat cillum et velit irure. Irure nisi non proident
          eiusmod. Aliqua et ullamco fugiat id quis amet aute. Proident aliqua
          esse veniam in fugiat occaecat tempor. Non id ipsum dolore anim.
          Voluptate reprehenderit labore mollit qui adipisicing mollit
          reprehenderit irure ut anim consectetur. Minim ea laboris eiusmod ex
          dolor excepteur enim nisi ullamco eiusmod proident commodo sint
          adipisicing. Velit magna voluptate elit deserunt do magna nulla cillum
          nisi Lorem sunt. Cupidatat qui Lorem et ex non do nostrud id non nisi.
          Qui non elit veniam Lorem consequat qui eu ut eu occaecat elit cillum.
          Non sit deserunt anim consectetur ad do consequat anim voluptate enim
          eu. Aliqua exercitation cillum excepteur do id. Veniam dolor cillum
          consectetur sunt culpa deserunt nulla amet dolor Lorem. Duis minim in
          nisi adipisicing laborum reprehenderit magna irure sit laboris
          consequat cupidatat aliqua. Est velit ad veniam adipisicing aute
          eiusmod.
        </Text>

        <Text style={styles.text}>
          Donated loremConsequat do velit aliquip eiusmod adipisicing anim
          adipisicing. Quis Lorem in nostrud sit nisi sit ex veniam elit. Veniam
          qui aute adipisicing tempor dolore commodo do id occaecat labore Lorem
          reprehenderit. Consectetur mollit duis Lorem voluptate ipsum ad
          pariatur sit labore consectetur ut. Do sint amet deserunt et voluptate
          esse. Ut cupidatat cillum et velit irure. Irure nisi non proident
          eiusmod. Aliqua et ullamco fugiat id quis amet aute. Proident aliqua
          esse veniam in fugiat occaecat tempor. Non id ipsum dolore anim.
          Voluptate reprehenderit labore mollit qui adipisicing mollit
          reprehenderit irure ut anim consectetur. Minim ea laboris eiusmod ex
          dolor excepteur enim nisi ullamco eiusmod proident commodo sint
          adipisicing. Velit magna voluptate elit deserunt do magna nulla cillum
          nisi Lorem sunt. Cupidatat qui Lorem et ex non do nostrud id non nisi.
          Qui non elit veniam Lorem consequat qui eu ut eu occaecat elit cillum.
          Non sit deserunt anim consectetur ad do consequat anim voluptate enim
          eu. Aliqua exercitation cillum excepteur do id. Veniam dolor cillum
          consectetur sunt culpa deserunt nulla amet dolor Lorem. Duis minim in
          nisi adipisicing laborum reprehenderit magna irure sit laboris
          consequat cupidatat aliqua. Est velit ad veniam adipisicing aute
          eiusmod.
        </Text>

        <Text style={styles.text}>
          Donated loremConsequat do velit aliquip eiusmod adipisicing anim
          adipisicing. Quis Lorem in nostrud sit nisi sit ex veniam elit. Veniam
          qui aute adipisicing tempor dolore commodo do id occaecat labore Lorem
          reprehenderit. Consectetur mollit duis Lorem voluptate ipsum ad
          pariatur sit labore consectetur ut. Do sint amet deserunt et voluptate
          esse. Ut cupidatat cillum et velit irure. Irure nisi non proident
          eiusmod. Aliqua et ullamco fugiat id quis amet aute. Proident aliqua
          esse veniam in fugiat occaecat tempor. Non id ipsum dolore anim.
          Voluptate reprehenderit labore mollit qui adipisicing mollit
          reprehenderit irure ut anim consectetur. Minim ea laboris eiusmod ex
          dolor excepteur enim nisi ullamco eiusmod proident commodo sint
          adipisicing. Velit magna voluptate elit deserunt do magna nulla cillum
          nisi Lorem sunt. Cupidatat qui Lorem et ex non do nostrud id non nisi.
          Qui non elit veniam Lorem consequat qui eu ut eu occaecat elit cillum.
          Non sit deserunt anim consectetur ad do consequat anim voluptate enim
          eu. Aliqua exercitation cillum excepteur do id. Veniam dolor cillum
          consectetur sunt culpa deserunt nulla amet dolor Lorem. Duis minim in
          nisi adipisicing laborum reprehenderit magna irure sit laboris
          consequat cupidatat aliqua. Est velit ad veniam adipisicing aute
          eiusmod.
        </Text>

        <Text style={styles.text}>
          Donated loremConsequat do velit aliquip eiusmod adipisicing anim
          adipisicing. Quis Lorem in nostrud sit nisi sit ex veniam elit. Veniam
          qui aute adipisicing tempor dolore commodo do id occaecat labore Lorem
          reprehenderit. Consectetur mollit duis Lorem voluptate ipsum ad
          pariatur sit labore consectetur ut. Do sint amet deserunt et voluptate
          esse. Ut cupidatat cillum et velit irure. Irure nisi non proident
          eiusmod. Aliqua et ullamco fugiat id quis amet aute. Proident aliqua
          esse veniam in fugiat occaecat tempor. Non id ipsum dolore anim.
          Voluptate reprehenderit labore mollit qui adipisicing mollit
          reprehenderit irure ut anim consectetur. Minim ea laboris eiusmod ex
          dolor excepteur enim nisi ullamco eiusmod proident commodo sint
          adipisicing. Velit magna voluptate elit deserunt do magna nulla cillum
          nisi Lorem sunt. Cupidatat qui Lorem et ex non do nostrud id non nisi.
          Qui non elit veniam Lorem consequat qui eu ut eu occaecat elit cillum.
          Non sit deserunt anim consectetur ad do consequat anim voluptate enim
          eu. Aliqua exercitation cillum excepteur do id. Veniam dolor cillum
          consectetur sunt culpa deserunt nulla amet dolor Lorem. Duis minim in
          nisi adipisicing laborum reprehenderit magna irure sit laboris
          consequat cupidatat aliqua. Est velit ad veniam adipisicing aute
          eiusmod.
        </Text>

        <Text style={styles.text}>
          Donated loremConsequat do velit aliquip eiusmod adipisicing anim
          adipisicing. Quis Lorem in nostrud sit nisi sit ex veniam elit. Veniam
          qui aute adipisicing tempor dolore commodo do id occaecat labore Lorem
          reprehenderit. Consectetur mollit duis Lorem voluptate ipsum ad
          pariatur sit labore consectetur ut. Do sint amet deserunt et voluptate
          esse. Ut cupidatat cillum et velit irure. Irure nisi non proident
          eiusmod. Aliqua et ullamco fugiat id quis amet aute. Proident aliqua
          esse veniam in fugiat occaecat tempor. Non id ipsum dolore anim.
          Voluptate reprehenderit labore mollit qui adipisicing mollit
          reprehenderit irure ut anim consectetur. Minim ea laboris eiusmod ex
          dolor excepteur enim nisi ullamco eiusmod proident commodo sint
          adipisicing. Velit magna voluptate elit deserunt do magna nulla cillum
          nisi Lorem sunt. Cupidatat qui Lorem et ex non do nostrud id non nisi.
          Qui non elit veniam Lorem consequat qui eu ut eu occaecat elit cillum.
          Non sit deserunt anim consectetur ad do consequat anim voluptate enim
          eu. Aliqua exercitation cillum excepteur do id. Veniam dolor cillum
          consectetur sunt culpa deserunt nulla amet dolor Lorem. Duis minim in
          nisi adipisicing laborum reprehenderit magna irure sit laboris
          consequat cupidatat aliqua. Est velit ad veniam adipisicing aute
          eiusmod.
        </Text>

        <Text style={styles.text}>
          Donated loremConsequat do velit aliquip eiusmod adipisicing anim
          adipisicing. Quis Lorem in nostrud sit nisi sit ex veniam elit. Veniam
          qui aute adipisicing tempor dolore commodo do id occaecat labore Lorem
          reprehenderit. Consectetur mollit duis Lorem voluptate ipsum ad
          pariatur sit labore consectetur ut. Do sint amet deserunt et voluptate
          esse. Ut cupidatat cillum et velit irure. Irure nisi non proident
          eiusmod. Aliqua et ullamco fugiat id quis amet aute. Proident aliqua
          esse veniam in fugiat occaecat tempor. Non id ipsum dolore anim.
          Voluptate reprehenderit labore mollit qui adipisicing mollit
          reprehenderit irure ut anim consectetur. Minim ea laboris eiusmod ex
          dolor excepteur enim nisi ullamco eiusmod proident commodo sint
          adipisicing. Velit magna voluptate elit deserunt do magna nulla cillum
          nisi Lorem sunt. Cupidatat qui Lorem et ex non do nostrud id non nisi.
          Qui non elit veniam Lorem consequat qui eu ut eu occaecat elit cillum.
          Non sit deserunt anim consectetur ad do consequat anim voluptate enim
          eu. Aliqua exercitation cillum excepteur do id. Veniam dolor cillum
          consectetur sunt culpa deserunt nulla amet dolor Lorem. Duis minim in
          nisi adipisicing laborum reprehenderit magna irure sit laboris
          consequat cupidatat aliqua. Est velit ad veniam adipisicing aute
          eiusmod.
        </Text>

        <Text style={styles.text}>
          Donated loremConsequat do velit aliquip eiusmod adipisicing anim
          adipisicing. Quis Lorem in nostrud sit nisi sit ex veniam elit. Veniam
          qui aute adipisicing tempor dolore commodo do id occaecat labore Lorem
          reprehenderit. Consectetur mollit duis Lorem voluptate ipsum ad
          pariatur sit labore consectetur ut. Do sint amet deserunt et voluptate
          esse. Ut cupidatat cillum et velit irure. Irure nisi non proident
          eiusmod. Aliqua et ullamco fugiat id quis amet aute. Proident aliqua
          esse veniam in fugiat occaecat tempor. Non id ipsum dolore anim.
          Voluptate reprehenderit labore mollit qui adipisicing mollit
          reprehenderit irure ut anim consectetur. Minim ea laboris eiusmod ex
          dolor excepteur enim nisi ullamco eiusmod proident commodo sint
          adipisicing. Velit magna voluptate elit deserunt do magna nulla cillum
          nisi Lorem sunt. Cupidatat qui Lorem et ex non do nostrud id non nisi.
          Qui non elit veniam Lorem consequat qui eu ut eu occaecat elit cillum.
          Non sit deserunt anim consectetur ad do consequat anim voluptate enim
          eu. Aliqua exercitation cillum excepteur do id. Veniam dolor cillum
          consectetur sunt culpa deserunt nulla amet dolor Lorem. Duis minim in
          nisi adipisicing laborum reprehenderit magna irure sit laboris
          consequat cupidatat aliqua. Est velit ad veniam adipisicing aute
          eiusmod.
        </Text>

        <Text style={styles.text}>
          Donated loremConsequat do velit aliquip eiusmod adipisicing anim
          adipisicing. Quis Lorem in nostrud sit nisi sit ex veniam elit. Veniam
          qui aute adipisicing tempor dolore commodo do id occaecat labore Lorem
          reprehenderit. Consectetur mollit duis Lorem voluptate ipsum ad
          pariatur sit labore consectetur ut. Do sint amet deserunt et voluptate
          esse. Ut cupidatat cillum et velit irure. Irure nisi non proident
          eiusmod. Aliqua et ullamco fugiat id quis amet aute. Proident aliqua
          esse veniam in fugiat occaecat tempor. Non id ipsum dolore anim.
          Voluptate reprehenderit labore mollit qui adipisicing mollit
          reprehenderit irure ut anim consectetur. Minim ea laboris eiusmod ex
          dolor excepteur enim nisi ullamco eiusmod proident commodo sint
          adipisicing. Velit magna voluptate elit deserunt do magna nulla cillum
          nisi Lorem sunt. Cupidatat qui Lorem et ex non do nostrud id non nisi.
          Qui non elit veniam Lorem consequat qui eu ut eu occaecat elit cillum.
          Non sit deserunt anim consectetur ad do consequat anim voluptate enim
          eu. Aliqua exercitation cillum excepteur do id. Veniam dolor cillum
          consectetur sunt culpa deserunt nulla amet dolor Lorem. Duis minim in
          nisi adipisicing laborum reprehenderit magna irure sit laboris
          consequat cupidatat aliqua. Est velit ad veniam adipisicing aute
          eiusmod.
        </Text>
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
    top: 20,
    color: 'black',
  },
})
