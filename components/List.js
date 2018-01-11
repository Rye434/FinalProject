import React, { Component } from 'react';
import { Content } from 'native-base';
import { connect } from "react-redux";
import ListItem from "./ListItem"

class MyList extends Component {
    render() {
        console.log(this.props.info);
        let MyList = this.props.info.map((item) =>{
            return(
                <ListItem {...item} id={item.id}/>
            );
        });

        return (
                <Content>
                    { MyList }
                </Content>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        info: state.info
    };
};
export default connect(mapStateToProps)(MyList);