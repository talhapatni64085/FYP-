import React, {useState} from 'react'; 
import{View , Text ,StyleSheet} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';


const ConfirmEmail = () => {
    const [code, setCode] = useState('');

    const onSignInPressed = () => {
        console.warn("Sign In");
    };

    const onSignUpPressed = () => {
        console.warn('Sign Up');
    };

    const onConfirmPressed = () => {
        navigation.navigate('RP');
    };

    const onResendPressed = () => {
        console.warn('Resend');
    };

 return (
    <View style={styles.root}>
       <Text style={styles.title}>Confirm your email</Text>
       <CustomInput 
       placeholder="Enter your confirmation code" 
       value={code} 
       setvalue={setCode}
       />

    <CustomButton 
    text="Confirm" 
    onPress={onConfirmPressed}
    bgColor='#E7EAF4'
    fgColor='#4765A9'
    />

    <CustomButton 
    text="Resend Code" 
    onPress={onResendPressed} 
    bgColor='#E7EAF4'
    fgColor='black'
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

export default ConfirmEmail ;