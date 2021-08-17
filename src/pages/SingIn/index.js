import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import AuthContext from '../../contexts/auth';

const SingIn = () => {

    const { signed, user, token, singIn } = useContext(AuthContext);
    console.log('Logado?', signed);
    console.log('Usuário?', user);


    function handleSinIn() {
        singIn();
    }

    return (
        <View style={styles.container}>
            <Button title="Sing In" onPress={ () => handleSinIn() } />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
})


export default SingIn;