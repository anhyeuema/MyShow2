import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from './Home/Home';
import Search from './Search/Search';
import Cart from './Cart/Cart';

import Header from './Home/Header';


export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            types: [],
            topProduct: [],
            cartArray: [],

        };
    }

    componentDidMount() {
        fetch('http://192.168.0.102:81/api/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 

            })
        })
        .then(res => res.json())
        .then(resJSON => {
            console.log('----SHOP----');
            console.log(resJSON);
            this.setState({ 
                types: resJSON.type,
                topProduct: resJSON.product,
            });
            //.then(re => console.log(re));
        });
    }
    
    
    gotoMenu() {
        const { openMenu } = this.props;
        openMenu();
    }
    

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#0A2B55' }}>
                <Text> Component Shop1 </Text>
                    <Header onOpenMenu={() => this.gotoMenu()} />
                    {/*
                    <View style={{ flex: 1, backgroundColor: '#8AA1CD' }}> 
                        <TouchableOpacity onOpenMenu={() => this.gotoMenu()}>
                        <Text>Go BACK menu</Text>
                        </TouchableOpacity>
                        <TextInput placeholder="what do you want buy" />
                        
                    </View>
                    */}
                <View style={{ flex: 5, backgroundColor: '#00FFFF' }}>

                    <TabNavigator>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'home'} //nhu nut buttom khi nhan vao 'home' thi ve component Home.js
                            onPress={() => this.setState({ selectedTab: 'home' })}
                            title='Home'
                        >
                            <Home types={this.state.types} topProduct={this.state.topProduct} />
                        </TabNavigator.Item>

                        <TabNavigator.Item
                            onPress={() => this.setState({ selectedTab: 'search' })}
                            title='Search'
                            selected={this.state.selectedTab === 'search'} //nhu nut buttom khi nhan vao 'home' thi ve component Home.js
                        >
                            <Search />
                        </TabNavigator.Item>

                        <TabNavigator.Item
                            onPress={() => this.setState({ selectedTab: 'cart' })}
                            title='Cart'
                            badgeText='1'
                            selected={this.state.selectedTab === 'cart'} //nhu nut buttom khi nhan vao 'home' thi ve component Home.js
                        >
                            <Cart />
                        </TabNavigator.Item>

                    </TabNavigator>
                </View>
            </View>
        );
    }
}

/* 
<TabNavigator>
    <TabNavigator.Item 
        onPress={() => this.setState({ selectedTab: 'home' })}
        title='Home'
        selected={this.state.selectedTab === 'home'} //nhu nut buttom khi nhan vao 'home' thi ve component Home.js
    >
        <Home  />
    </TabNavigator.Item>

    <TabNavigator.Item 
        onPress={() => this.setState({ selectedTab: 'search' })}
        title='Search'
        selected={this.state.selectedTab === 'search'} //nhu nut buttom khi nhan vao 'home' thi ve component Home.js
    >
        <Search />
    </TabNavigator.Item>

    <TabNavigator.Item 
        onPress={() => this.setState({ selectedTab: 'cart' })}
        title='Cart'
        selected={this.state.selectedTab === 'cart'} //nhu nut buttom khi nhan vao 'home' thi ve component Home.js
    >
        <Cart />
    </TabNavigator.Item>

</TabNavigator>
*/