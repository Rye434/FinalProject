import React, { Component } from 'react';
import { Content, Text } from 'native-base';
import { connect } from "react-redux";

class DetailScreen extends Component {
    render() {
        return (
            <Content>
                <Text>{this.props.item.name}</Text>
                <Text>{(this.props.item.distance/1000).toFixed(2)} KM away</Text>
                <Text>Price: {this.props.item.price}</Text>
                <Text>{this.props.item.rating} Stars!</Text>
            </Content>
        );
    }
}

function mapStateToProps(state){

    return {
        item: state.selectedItem
    };
}

export default connect(mapStateToProps)(DetailScreen);