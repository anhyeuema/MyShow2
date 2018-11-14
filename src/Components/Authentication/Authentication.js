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
        const { actiSign, actiEdSign, btnSigIn, btnSigUp } = styles;
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

                <View style={{ flex: 2, backgroundColor: '#FFFFFF', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                    <TouchableOpacity onPress={() => this.gotoSignIn()} style={btnSigIn}>
                        <Text style={this.state.isSigIn ? actiSign : actiEdSign} >SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.gotoSignUp()} style={btnSigUp}>
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
        justifyContent: 'center', 
        alignContent: 'center'
    },
    actiEdSign: {
        color: '#424242',
        justifyContent: 'center', 
        alignContent: 'center'
    }, 
    btnSigIn: {
        marginRight: 10,
        backgroundColor: '#6BA82A',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        height: 60,
        width: 120,
        paddingLeft: 10,
        justifyContent: 'center', 
        alignContent: 'center'
    },
    btnSigUp: {
        marginLeft: 10,
        backgroundColor: '#6BA82A',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        height: 60,
        width: 120,
        paddingRight: 10,
        justifyContent: 'center', 
        alignContent: 'center'
    }
})