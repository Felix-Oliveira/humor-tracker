import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!!</Text>
      <Text style={styles.text}>Welcome to Humor Tracker!!!!!</Text>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    color: '#fff',
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#fff'
  }
});
