
import React, { Component } from 'react';
import NavigationExperimental from 'react-native-deprecated-custom-component';

import HomeView from './HomeView';
import ProductDetail from '../ProductDetail/ProductDetail';
import ListProduct from '../ListProduct/ListProduct';


export default class Home extends Component {
    render() {
        return (
          <NavigationExperimental.Navigator 
            initialRoute={{ name: 'HOME_VIEW' }}
            renderScene={(route, navigator) => {
                switch (route.name) {
                    case 'HOME_VIEW': return <HomeView navigator={navigator} types={this.props.types} topProduct={this.props.topProduct} />;
                    case 'PRODUCT_DETAIL': return <ProductDetail navigator={navigator} />;
                    default: return <ListProduct navigator={navigator} />;
                }
            }}
          />
        );
    }
}