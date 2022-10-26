import React, {useState} from 'react'; 
import{View , Text , StyleSheet} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';


const ResetPassword = () => {
    const [ccode, setCcode] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () => {
        console.warn("Sign In");
    };

    const onSignUpPressed = () => {
        console.warn('Sign Up');
    };

    const onConfirmPressed = () => {
        console.warn('confirm');
    };

    const onResendPressed = () => {
        console.warn('Resend');
    };

    const onSendPressed = () => {
        console.warn('Send');
    };

    const onSubmitPressed = () => {
        console.warn('Login');
    };

 return (
    <View style={styles.root}>
       <Text style={styles.title}>Reset your password</Text>
       <CustomInput 
       placeholder="Enter your confirmation code" 
       value={ccode} 
       setvalue={setCcode}
       />

       <CustomInput 
       placeholder="Password" 
       value={password} 
       setvalue={setPassword}
       />

       <CustomButton 
       text="Submit" 
       onPress={onSubmitPressed}
       bgColor='#E7EAF4'
       fgColor='#4765A9'
      />

    <CustomButton 
    text="Back to Sign in" 
    onPress={onSignInPressed} 
    type="TERTIARY"
    />

    </View>
 );
};

const styles = StyleSheet.create({
root: {
    color: 'white',
    alignItems: 'center',
    padding: 20,
},

    title: {
        marginTop: 30,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        margin: 10,
    },

    link:{
        color: '#FDB075',
    },

    text:{
        color: 'gray',
        marginVertical: 10,
    },
});

export default ResetPassword ;