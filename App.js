import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableWithoutFeedback, Text, Image, TouchableHighlight, View, SafeAreaView, Button } from 'react-native';

// import WelcomeScreen from './app/screens/welcomeScreen';
// import TrendingGifs from './app/screens/TrendingGif';
 import HomeScreen from './app/screens/HomeScreen';

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    //   <Text>Hello World!</Text>
    //   <StatusBar style="auto" />
    //   {/* <Image  source={require('./assets/logo.png')} /> */}
    //   {/* <TouchableWithoutFeedback onPress={() => {console.log('hello')}}>
    //     <Image
    //       source={{
    //         width: 200,
    //         height: 300,
    //         uri: 'https://picsum.photos/200/200',
    //       }}
    //     />
    //   </TouchableWithoutFeedback>
    //   <TouchableHighlight>
    //     <Image
    //       source={{
    //         width: 200,
    //         height: 300,
    //         uri: 'https://picsum.photos/200/200',
    //       }}
    //     />
    //   </TouchableHighlight> */}
    //   <Button title='Click' onPress={
    //     () => {
    //       alert('Hello World!');
    //     }
    //   }></Button>

    // </SafeAreaView>
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     // alignItems: 'center',
    //     // justifyContent: 'center',
    //   }}
    // >
    //   <View
    //     style={{
    //       flex: 1,
    //       backgroundColor: '#ff0',
    //       // alignItems: 'center',
    //       // justifyContent: 'center',
    //     }}
    //   >

    //   </View>
    //   <View
    //     style={{
    //       flex: 1,
    //       backgroundColor: '#4f0',
    //       // alignItems: 'center',
    //       // justifyContent: 'center',
    //     }}
    //   >

    //   </View>
    //   <View
    //     style={{
    //       flex: 1,
    //       backgroundColor: '#f70',
    //       // alignItems: 'center',
    //       // justifyContent: 'center',
    //     }}
    //   >

    //   </View>
    // </View>
    // <HomeScreen/>
    
    // <TrendingGifs/>
    // <WelcomeScreen/>
    <HomeScreen/>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 50,
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
