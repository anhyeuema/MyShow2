import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#8AA1CD' }}>
                <View style={{ flex: 2, backgroundColor: '#8AA1CD' }} >
                    <TouchableOpacity onOpenMenu={this.props.onOpenMenu}>
                        <Text>Go Back Menu</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <TextInput placeholder="what do you want buy" />
                </View>
            </View>
        );
    }
}