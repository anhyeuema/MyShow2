import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import LogoIcon from '../../../images-master/temp/profile.png';
import saveToken from '../../../../api/saveToken';
export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            user: null
        };
        global.OnSignIn = this.OnSignIn.bind(this);
    }

    OnSignIn(user) {
        this.setState({ user: user });
    }
  
    SignOut() {
        this.setState({ user: null });
        saveToken('')
        .then(a => console.log('---DA_LOG_IN---', a));
    }

    gotoAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTHENTICATION' });
    }

    gotoChangInfo() {
        const { navigator } = this.props;
        navigator.push({ name: 'CHANGEINFO' });
    }
    gotoOrderHistory() {
        const { navigator } = this.props;
        navigator.push({ name: 'ORDER_HISTORY' });
    }

    render() {
        const LogInJSX = (
            <View style={{ flex: 4, backgroundColor: '#00FFFF', justifyContent: 'center', alignContent: 'center' }}>
                <TouchableOpacity onPress={() => this.gotoAuthentication()}>
                    <Text>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        );

        const LoginedJSX = (
            <View style={{ flex: 4, backgroundColor: '#00FFFF' }}>
                <View style={{ flex: 1, backgroundColor: '#00FFFF' }}>
                    <Text>nguyen van nam</Text>
                </View>

                <View style={{ flex: 5, backgroundColor: '#00FFFF' }}>
                    <TouchableOpacity onPress={() => this.gotoAuthentication()}>
                        <Text>SIGN IN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.gotoChangInfo()} >
                        <Text>go to OrderHistory</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.gotoChangInfo()} >
                        <Text>go to ChangeInfo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.SignOut()}>
                        <Text>Sign OUT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
        //const { user } = this.state;
        const { user } = this.state;
        const MainJSX = user ? LoginedJSX : LogInJSX;
        return (
            <View style={{ flex: 1, backgroundColor: '#0A2B55' }}>
                <Text> Component Menu </Text>
                <View style={{ flex: 1, }}>
                    <Image source={LogoIcon} style={{ height: 40, width: 40, borderRadius: 20, }} />
                </View>

                {MainJSX}

            </View>
        );
    }
}