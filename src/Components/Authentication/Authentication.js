import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import SignIn from './SignIn';
import SignUp from './SignUp';


export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSigIn: false,
         
        };
    }


    gotoSignIn() {
        this.setState({ isSigIn: true });
    }

    gotoSignUp() {
        this.setState({ isSigIn: false });
    }

    gotoOnSignIn() {
        this.setState({ isSigIn: true });
    }

    goBackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        const { actiSign, actiEdSign } = styles;
        const MAINISX = this.state.isSigIn ? <SignIn goBackToMain={() => this.goBackToMain()} /> : <SignUp gotoSignIn={() => this.gotoSignIn()} />;
        return (
            <View style={{ flex: 1, backgroundColor: '#FEFEFE' }}>
                <Text> Component Authentication </Text>
                <View style={{ flex: 1, backgroundColor: '#FEFEFE' }} >
                    <TouchableOpacity onPress={() => this.goBackToMain}>
                        <Text>go BACk</Text>
                    </TouchableOpacity>
                </View>

                {MAINISX}

                <View style={{ flex: 2, backgroundColor: '#FFFFFF' }}>
                    <TouchableOpacity onPress={() => this.gotoSignIn()}>
                        <Text style={this.state.isSigIn ? actiSign : actiEdSign} >SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.gotoSignUp()}>
                        <Text style={this.state.isSigIn ? actiEdSign : actiSign} >SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    actiSign: {
        color: '#E61A5F',
    },
    actiEdSign: {
        color: '#424242',
    }
})