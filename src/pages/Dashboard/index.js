import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import AuthContext from '../../contexts/auth';

const Dashboard = () => {

    const { singOut } = useContext(AuthContext);

    function handleSingnOut() {
        singOut();
    }

    return (
        <View style={styles.container}>
            <Button color={'red'} title="Log Out" onPress={ () => handleSingnOut() } />
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

export default Dashboard;