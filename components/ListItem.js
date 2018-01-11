import React, {Component} from "react";
import {TouchableOpacity} from "react-native";
import { connect } from "react-redux";
import {Card, CardItem, Thumbnail, Icon, Title ,Text } from "native-base";
import * as actions from "../actions";

class ListItem extends Component {
    render() {
        return (
            <TouchableOpacity id={this.props.id} onPress={this.props.getId}>
                <Card >
                    <CardItem>
                        <Thumbnail source={{uri: this.props.image_url}} />
                        <Title style={{paddingLeft:5}}> {this.props.name}</Title>

                        <Text note style={{paddingRight:10}}> {(this.props.distance/1000).toFixed(2)} km </Text>
                        <Icon name="arrow-forward" style={{fontSize: 18, width:10, color:"#cecece"}}/>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        );
    }
}

function mapStateToProps(state) {
    return {
        info: state.info
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        getId : ()=>{ console.log(ownProps);
            return dispatch(actions.getId(ownProps.id))}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);