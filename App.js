import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ConfirmEmail from './src/screens/ConfirmEmail';
import ForgotPassword from './src/screens/ForgotPassword';
import Home from './src/screens/Home';
import ResetPassword from './src/screens/ResetPassword';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';

const App = () => {
  return (
    <Home/>
  );
}

export default App;