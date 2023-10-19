/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  View,
  Button,
  Alert,
  DrawerLayoutAndroid,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,

} from 'react-native';
import {

  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';




const App = () => {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>(
    'left',
  );
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };
  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current?.closeDrawer()}
      />
    </View>
  );
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  return (

    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}

      renderNavigationView={navigationView}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView>

            <View style={{
              flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 32,
              paddingHorizontal: 24,
            }}>
              <Text style={{
                fontSize: 60,
                fontWeight: '600', color: '#000',
              }}>
                Logo
              </Text>

              <Text
                style={{ color: '#000', fontSize: 40, fontWeight: '600', }}
                onPress={() => drawer.current?.openDrawer()}>⚟

              </Text>

            </View>
            <View style={styles.sectionContainer}>
              <Text style={{
                fontSize: 34,
                fontWeight: '400', marginBottom: 30
              }}>
                Login Form
              </Text>
              <Text>
                First Name
              </Text>

              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Enter Your Full Name"
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Enter Your Phone Number"
                keyboardType="numeric"
              />

              <Button title="button"
                onPress={() => Alert.alert('Please Fill the Form')} />

            </View>

          </SafeAreaView>

        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </DrawerLayoutAndroid>



  );
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'red',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    height: 48,
    marginBottom: 12,
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,

  },
  button: {

  },
  textwhite: {
    color: '#fff',
  },
  container: {
    flex: 1,
  },
  navigationContainer: {

  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default App;
