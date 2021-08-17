import React, { useContext } from 'react';
import { View, ActivityIndicator  } from 'react-native';

import AuthContext from '../contexts/auth';
import AppRoutes from '../routes/app.routes';
import AuthRoutes from '../routes/auth.stack';

const Routes = () => {

    const { signed, loading } = useContext(AuthContext);

    if(loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#353535" />
            </View>
        )
    }

    return (
        signed ? <AppRoutes /> : <AuthRoutes />
    );
}

export default Routes;