import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

export default function WelcomeScreen() {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.subtitle}>{auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#e53935',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    width: 200,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
