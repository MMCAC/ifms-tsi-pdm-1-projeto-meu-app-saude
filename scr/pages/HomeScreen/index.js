import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('ICQ')}
      >
        <Text style={styles.buttonText}>Calcular ICQ</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('IMC')}
      >
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#f0f',
    paddingVertical: 12,
    width: 200,
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ccc',
    fontSize: 20,
  },
});