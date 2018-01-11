// components/Main.js
import React, {Component} from "react";
import {Container, Content, Spinner, Text, View, Button} from 'native-base';
import MyHeader from "./Header.js";
import MyList from "./List";
import MyFooter from "./Footer";
import DetailScreen from "./detailScreen"
import * as actions from "../actions";
import { connect } from "react-redux";
import { render } from "react-dom";
import {SPINNER, LIST_SCREEN, DETAIL_SCREEN} from '../screens';


class Main extends Component {
    render() {

        let bttn;
        let body;


        switch(this.props.page){

            case SPINNER:
                console.log("spinner");
                body = <Spinner color="blue"/>
                break;

            case LIST_SCREEN:
                body = (
                    <Content>
                        <MyList/>
                    </Content>
                );
                bttn = (
                    <Button block onPress={this.props.getGeolocalizedList}>
                        <Text> Find Food Places </Text>
                    </Button>
                );
                break;

            case DETAIL_SCREEN:
                body= (
                    <DetailScreen/>
                );
                bttn=(
                    <Button transparent onPress={this.props.goBack}>
                        {/*<Icon name='arrow-back'/>*/}
                        <Text>Back</Text>
                    </Button>
                );
                break;
            default:
                bttn = (
                    <Button block onPress={this.props.getGeolocalizedList}>
                        <Text> Find Food Places </Text>
                    </Button>
                )
        }

        return (
            <Container>
                <MyHeader/>
                <Content>
                    { bttn }
                    { body }
                </Content>
                <MyFooter/>
            </Container>
        );
    }
}

function mapStateToProps(state){
    return{
        page: state.page
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        getGeolocalizedList: () => dispatch(actions.getGeolocalizedList()),
        goBack: () => dispatch(actions.goBack())

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);