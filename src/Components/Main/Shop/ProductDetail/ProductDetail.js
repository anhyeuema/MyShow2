import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ProductDetail extends Component {

    render() {
        const { id, name, price, material, description, nameType, idType, color } = this.props.product;
        return (
            <View style={{ flex: 1, backgroundColor: '#40A6E0' }}>
                <Text>Component ProductDetail</Text>
                <View style={{ flex: 1, backgroundColor: '#40A6E0' }}>
                           
                </View>
            </View>
        );
    }
}