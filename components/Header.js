import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Button, Text } from 'native-base';
import { connect } from "react-redux";
import * as actions from "../actions";


class MyHeader extends Component {
    render() {
        return (
                <Header>
                    <Left/>
                    <Body>
                        <Title>Restaurants</Title>
                    </Body>
                    <Right >
                    </Right>
                </Header>
        );
    }
}

function mapDispatchToProps(dispatch, ownProps){
    return{
       getGeolocalizedList: () => dispatch(actions.getGeolocalizedList())
    };
}
export default connect(undefined, mapDispatchToProps)(MyHeader)