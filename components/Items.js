import React, {Component} from "react";
import { Container, Content} from 'native-base';
import ListItem from "./ListItem"
import { connect } from "react-redux";


class Items extends Component {

    render() {
        let info = this.props.info.map((item) =>{
            return(
                <ListItem {...item} id={item.id}/>
            );
        });
        return (
            <Container>
                <Content>
                    {info}
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        info: state.info
    };
};
export default connect(mapStateToProps)(Items);