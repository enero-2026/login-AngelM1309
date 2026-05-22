import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './src/firebase/config';
import LoginScreen from './src/pantallas/LoginScreen';
import WelcomeScreen from './src/pantallas/WelcomeScreen';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return user ? <WelcomeScreen /> : <LoginScreen />;
}
