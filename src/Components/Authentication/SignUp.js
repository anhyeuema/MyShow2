import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import register from '../../../api/register';
import global from '../../../global';

export default class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            rePassword: '',
        };
    }

    componentDidMount() {
        const { name, email, password } = this.state;
        register(name, email, password)
            .then(resJSON => {
                global.OnSignIn(resJSON.user);
                console.log('---USER----');
                console.log(resJSON.user);
            });
    }

 

    onSuccess() {
        Alert.alert(
            'Notice',
            'Sign Up Successfully',
            [
                { text: 'OK', onPress: this.props.gotoSignIn() },
            ],
            { cancelable: false }
        );
    }

    onFail() {
        Alert.alert(
            'Notice',
            'Email has been used by other',
            [
                { text: 'OK', onPress: this.setState({ email: ' ' }) },
            ],
            { cancelable: false }
        );
    }

    gotoOnSignUpNow() {
        const { name, email, password } = this.state;
        register(name, email, password)
            .then(resJSON => {
                if (resJSON === 'THANH_CONG') {
                    return this.onSuccess();
                }
                this.onFail();
            });
    }

    render() {
        return (
            <View style={{ flex: 4, backgroundColor: '#9FD3EF' }}>
                <TextInput
                    placeholder="Enter your name"
                    value={this.state.name}
                    onChangeText={text => this.setState({ name: text })}
                />
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
                <TextInput
                    placeholder="Re-Enter Your Passwrod "
                    value={this.state.rePassword}
                    onChangeText={text => this.setState({ rePassword: text })}
                />
                <TouchableOpacity gotoOnSignUpNow={() => this.gotoOnSignUpNow()}>
                    <Text>SIGN UP NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
