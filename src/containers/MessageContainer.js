import React, { Component } from 'react';
import { connect } from "react-redux";
// import * as Message from "./../constants/Message";
import Message from "./../components/Message";
import PropTypes from "prop-types";
// import { actChangeMessage } from '../actions';

class MessageContainer extends Component {
    render() {
        var { message } = this.props;
        return (
            <Message message={message}></Message>
        );
    }
}

MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
}

const mapStateToProps = state => {
    return {
        message: state.message
    }
}

// const mapDispatchToProps = (dispatch, message) => {
//     return {
//         onAddToCart :(message) => {
//             dispatch(actChangeMessage(message));
//         }
//     }
// }
export default connect(mapStateToProps, null)(MessageContainer);
