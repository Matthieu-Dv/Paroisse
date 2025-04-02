import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { app } from '../firebase';

const auth = getAuth(app);

export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error('Erreur de connexion :', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    window.location.href = '/'; // ✅ Redirige vers l'accueil après déconnexion
  } catch (error) {
    console.error('Erreur de déconnexion :', error);
    throw error;
  }
};

export const checkUserStatus = (setUser) => {
  return onAuthStateChanged(auth, (user) => {
    setUser(user);
  });
};
