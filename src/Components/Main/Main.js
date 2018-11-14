import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Drawer from 'react-native-drawer';
import Shop from './Shop/Shop';
import Menu from './Menu/Menu';
import getToken from '../../../api/getToken';
import checkToken from '../../../api/checkToken';

export default class Main extends Component {

    componentDidMount() {
        getToken()
        .then(token => checkToken(token))
        .then(res => global.OnSignIn(res))
        .catch(e => console.log(e));
    }
    /*
    componentDidMount() {
        this._drawer.open();
    }
    */
    

    closeControlPanel = () => {
        this._drawer.close();
    };
    openControlPanel = () => {
        this._drawer.open();
    };

    render() {
        return (

            <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <Text> Component Main </Text>
                <View style={{ flex: 1, backgroundColor: '#FFFFFF' }} >


                    <Drawer
                        ref={(ref) => this._drawer = ref}
                        content={<Menu navigator={this.props.navigator} />}
                    >
                        <Shop openMenu={() => this.openControlPanel()} />
                    </Drawer>

                    {/*
                        <Drawer>
                            tapToClose={true}
                            openDrawerOffset={0.4}
                            ref={(ref) => this.drawer = ref}
                            content={ <Menu navigator={this.props.navigator} />}
                            <Shop />
                        </Drawer>
                        */}
                </View>
            </View>
        );
    }
}