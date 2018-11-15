import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, ImageBackgound, ListView, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
//361x452
const imageWidth = width * 0.45;
const imageHeight = (imageWidth * 452) / 361;
export default class TopProduct extends Component {

  
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(this.props.topProduct),
        };
    }

    componentWillReceiveProps(nextProps) {
        //const { name, price } = ;
        //   console.log(nextProps.topProducts.name);
        console.log('TopProduct-------');
        console.log(nextProps.topProduct);
        console.log('TopProduct-------');
    }

    gotoDetail(product) {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL', product });
    }

    taoHang(product) {
        return (

                <TouchableOpacity key={product.id} onPress={() => this.gotoDetail(product)} style={{ width: imageWidth, backgroundColor: '#92ABD7' }} >
                    <ImageBackgound source={{ uri: '${http://192.168.0.101:81/api/images/product/}${property.images[0]}' }} style={{ width: imageWidth, height: imageHeight, jus }} key={product.id} />
                    <Text style={{ color: '#BFE0F4' }} key={product.id} >{product.name}</Text>
                    <Text style={{ color: '#BFE0F4' }} key={product.id} >{product.price}</Text>
                </TouchableOpacity>
      
        );
    }
    render() {
        const { body } = styles;
        return (
            <View style={{ flex: 1, backgroundColor: 'blue' }}>
                <Text>Top Product</Text>
                <ListView  
                    enableEmptySections
                    contentContainerStyle={body}

                    dataSource={this.state.dataSource}
                    renderRow={this.taoHang}
                />

            </View>
        );
    }
}
const styles = StyleSheet.create({
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10,
    },
    imageStyle: {

    },

})


{/*
<TouchableOpacity>
        <ImageBackgound source={{ uri: '${http://192.168.0.101:81/api/images/product/}${property.images}' }} style={{ width: imageWidth, height: imageHeight }} />
        <Text style={{ color: '#BFE0F4' }}>{property.name}</Text>
        <Text style={{ color: '#BFE0F4' }}>{property.price}</Text>
    </TouchableOpacity>




    
                <ListView 
                    dataSource={this.state.dataSource}
                    renderRow={this.taoHang}
                />



taoHang(product) {
    return (
        <View style={{ width: imageWidth, height: imageHeight, backgroundColor: '#92ABD7' }} key={product.id} >
            <TouchableOpacity key={product.id} onPress={() => this.gotoDetail(product)} style={{ width: imageWidth, backgroundColor: '#92ABD7' }} >
                <ImageBackgound source={{ uri: '${http://192.168.0.101:81/api/images/product/}${property.images[0]}' }} style={{ width: imageWidth, height: imageHeight, jus }} key={product.id} />
                <Text style={{ color: '#BFE0F4' }} key={product.id} >{product.name}</Text>
                <Text style={{ color: '#BFE0F4' }} key={product.id} >{product.price}</Text>
            </TouchableOpacity>
        </View>
    );
}
*/}