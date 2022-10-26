import React, {useState} from 'react'; 
import{View , Text , Image, StyleSheet, useWindowDimensions, Alert} from 'react-native';
import Logo from '../../assets/images/logo_1.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import SignUp from './SignUp';


const SignIn = (props) => {
    const [ username, setUsername] = useState('');
    const [ password, setPassword] = useState('');

    const{height} = useWindowDimensions();

    const onSignInPressed = () => {
        if(username == 'talha' && password == '123') {
            Alert.alert('Login Successfully');
        props.navigation.navigate(SignUp)
        }
        else {
            Alert.alert('Username & Password does not match');
        }
    };

    const onForgotPasswordPressed = () => {
        navigation.navigate('FP');
    };

    const onGoogle = () => {
        console.warn('Google');
    };

    const onSignUpPressed = () => {
        //navigation.navigate('Register');
    };

 return (
    <View style={styles.root}>
       <Image source = {Logo} 
       style = {[styles.logo, {height: height * 0.3}]} resizeMode = "contain"/>
       <CustomInput 
       placeholder="Username" 
       value={username} 
       setvalue={setUsername}

       />
       <CustomInput 
       placeholder="Password" 
       value={password} 
       setvalue={setPassword}
       secureTextEntry={true}
       />

    <CustomButton 
    text="Sign In" 
    onPress = {onSignInPressed}   
    bgColor='#E7EAF4'
    fgColor='#4765A9' 
    />

    <CustomButton 
    text="forgot password?" 
    onPress={onForgotPasswordPressed} 
    type="TERTIARY"
    />

    <CustomButton 
    text="Sign In with Google" 
    onPress={onGoogle}
    bgColor='#FAE9EA'
    fgColor='#DD4D44' 
    />

    <CustomButton 
    text="Not Registered yet? Create One" 
    onPress={onSignUpPressed} 
    type="TERTIARY"
    />
    </View>
 );
};

const styles = StyleSheet.create({
root: {
    alignItems: 'center',
    padding: 20,
},

    logo : {
        marginTop: 30,
        width : '70%' , 
        maxHeight : 200 ,
        maxWidth: 300,
    },
});

export default SignIn ;