import React, {useState} from 'react'; 
import{View , Text , StyleSheet, useWindowDimensions, Image} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Logo from '../../assets/images/logo_1.png';
import Home from './Home';
import SignIn from './SignIn';
import { ScrollView } from 'react-native-gesture-handler';


const SignUp = (props) => {
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [ cpass, setCpass] = useState('');

    const{height} = useWindowDimensions();

    const onSignInPressed = () => {
        props.navigation.navigate(SignIn)
    };

    const onGoogle = () => {
        console.warn('Google');
    };

    const onSignUpPressed = () => {
        props.navigation.navigate(Home)
    };

    const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed');
    };

    const onPrivacyPolicyPressed = () => {
        console.warn('onPrivacyPolicyPressed');
    };

 return (
    <ScrollView>
    <View style={styles.root}>
       <Text style={styles.title}>Creat an Account</Text>
       <Image source = {Logo} 
       style = {[styles.logo, {height: height * 0.3}]} resizeMode = "contain"/>
       <CustomInput 
       placeholder="Email" 
       value={email} 
       setvalue={setEmail}
       />
       <CustomInput 
       placeholder="Password" 
       value={password} 
       setvalue={setPassword}
       secureTextEntry
       />
       <CustomInput 
       placeholder="Confirm Password" 
       value={cpass} 
       setvalue={setCpass}
       secureTextEntry
       />
    
    <CustomButton 
    text="Register" 
    onPress={onSignUpPressed}
    bgColor='#E7EAF4'
    fgColor='#4765A9' 
    />

    <Text>By Registering, you confirm that you accept our {''}
    <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and {''}
    <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy.</Text>
    </Text>
    
    <CustomButton 
    text="Sign In with Google" 
    onPress={onGoogle}
    bgColor="#FAE9EA"
    fgColor='#DD4D44' 
    />

    <CustomButton 
    text="Have an account?" 
    onPress={onSignInPressed} 
    fgColor='black'
    type="TERTIARY"
    />
    </View>
    </ScrollView>
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
    text:{
        color:'black',
        marginVertical: 10,
    },
    link:{
        color:'#FDB075',
    },
    logo : {
        marginTop: 20,
        width : '70%' , 
        maxHeight : 200 ,
        maxWidth: 300,
    },
});

export default SignUp ;