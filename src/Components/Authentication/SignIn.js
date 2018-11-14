import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import global from '../../../global';
import signIn from '../../../api/signIn';
import saveToken from '../../../api/saveToken';

export default class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',

        };
    }

    componentDidMount() {
        const { email, password } = this.state;
        signIn(email, password)
        .then(resJSON => {
            global.OnSignIn(resJSON.user);
            saveToken(resJSON.token);
        });
    }

    gotoOnSignInNow() {
        const { email, password } = this.state;
        signIn(email, password)
        .then(resJSON => {
            global.OnSignIn(resJSON.user);
            this.props.goBackToMain();
            saveToken(resJSON.token);
        });
    }


    render() {
        return (
                <View style={{ flex: 4, backgroundColor: '#9FD3EF' }}>
                    <TextInput 
                        placeholder="Enter your email" 
                        value={this.state.email}
                        onChangeText={text => this.setState({ email: text })} 
                    />
                    <TextInput 
                        placeholder="Enter Your Passwrod " 
                        value={this.state.password}
                        onChangeText={text => this.setState({ password: text })}
                    />
                    <TouchableOpacity onPress={() => this.gotoOnSignInNow()}>
                        <Text>SIGN IN NOW</Text>
                    </TouchableOpacity>
                </View>
        );
    }
}

