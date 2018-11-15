import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, 
    ImageBackground, TouchableOpacity 
} from 'react-native';

import maxi from '../../../../images-master/temp/maxi.jpg';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');
const url = 'http://192.168.0.101:81/api/images/type/';
const imagaWidth = width - 40;
const imageHeight = imagaWidth / 2; //(imagaWidth / 800) * 400;

export default class Category extends Component {

    gotoListProduct() {
        const { navigator } = this.props;
        navigator.push({ name: 'LIST_PRODUCT' });
    }
    render() {
        const { imageSytle } = styles;

        return (
            <View style={{ height: height * 0.35, backgroundColor: '#1F9EC5' }}>
                <Text>Component Category</Text>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 20 }}>LIST OF CATEGOTY</Text>
                </View>

                <View style={{ flex: 4 }}>
                    <Swiper width={imagaWidth} height={imageHeight} >
                        {this.props.types.map(e => (
                            <View style={imageSytle} key={e.id}>
                                <TouchableOpacity onPress={() => this.gotoListProduct()} key={e.id}>
                                    <ImageBackground source={{ uri: '${url}${e.image}' }} style={imageSytle} >
                                        <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 15 }}>{e.name}</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </Swiper>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageSytle: {
        height: imageHeight,
        width: imagaWidth,
        padding: 10,
        justifyContent: 'center', 
        alignItems: 'center'
    }
});

{/*
import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, ImageBackgound, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

import maxi from '../../../../images-master/temp/maxi.jpg';

const { width, height } = Dimensions.get('window');

export default class Category extends Component {

    gotoDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }

    render() {
        const { wrapper } = styles;
        return (
            <View style={{ height: height * 0.34, backgroundColor: '#9393B4' }} >
                <View style={{ flex: 1, backgroundColor: '#97ADDB' }}>
                    <Text>LIST OF CATEGORY </Text>
                </View>
                <View style={{ flex: 4, backgroundColor: '#fff', }}>
                    <Swiper height={imageHeight} width={imageWidht} >

                        <TouchableOpacity onPress={() => this.gotoDetail()}>
                            <ImageBackgound source={maxi} style={{ height: imageHeight, width: imageWidht }}>
                                <Text >MAXI DRESS</Text>
                            </ImageBackgound>
                        </TouchableOpacity>

                    </Swiper>
                </View>
            </View>
        );
    }
}

const imageWidht = width - 40;
const imageHeight = imageWidht / 2;
const styles = StyleSheet.create({
    imageSytle: {
        height: imageHeight, 
        width: imageWidht,
        padding: 10,
        justifyContent: 'center', 
        alignItems: 'center'
    }
});

*/}