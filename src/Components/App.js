
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-component';

import Main from './Main/Main';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';

import refreshToken from '../../api/refreschToken';

export default class App extends Component {
    componentDidMount() {
        setInterval(refreshToken, 5000);
    }

    render() {
        return (
                
            
            <NavigationExperimental.Navigator 
                initialRoute={{ name: 'AUTHENTICATION' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'MAIN': return < Main navigator={navigator} />;
                        case 'AUTHENTICATION': return < Authentication navigator={navigator} />;
                        case 'CHANGEINFO': return <ChangeInfo navigator={navigator} />;
                        default: return <OrderHistory navigator={navigator} />;
                    }
                }}
            
            />
        
        );
    }
}

{/*
<View>
    <Text>Componet App</Text>
</View>
*/}