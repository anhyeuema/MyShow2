
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Category from './Category';
import Collection from './Collection';
import TopProduct from './TopProduct';

export default class HomeView extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#1B6FBB' }}>
                <Text> Component HomeView</Text>
                    <Category navigator={this.props.navigator} types={this.props.types} />
                    <Collection />
                    <TopProduct topProduct={this.props.topProduct} />
      
           
           {/*
                <Category navigator={this.props.navigator} />
                <Collection />
                <TopProduct />
           */}
            </View>

        );
    }
}

   {/*
                <Category />
                <Collection />
                <TopProduct />
           */}