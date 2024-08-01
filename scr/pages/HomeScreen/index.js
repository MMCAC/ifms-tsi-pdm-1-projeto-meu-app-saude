import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu App Saúde</Text>

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
