import React, { Component } from 'react';
import { connect } from "react-redux";
import Carts from "./../components/Carts";
import Cart from "./../components/Cart";
import CartResult from "./../components/CartResult";
import * as Message from "./../constants/Message";
import PropTypes from "prop-types";

class CartContainer extends Component {
    render() {
        var { carts } = this.props;
        return (
            <Carts>
                {this.showCart(carts)}
                {this.showTotal(carts)}
            </Carts>
        );
    }
    showCart = (carts) => {
        var result = <tr>
            <td>
                {Message.MSG_CART_EMPTY}
            </td>
        </tr>;
        if (carts.length > 0) {
            result = carts.map((cart, index) => {
                return (
                    <Cart
                        key={index}
                        cart={cart}
                    />
                )
            });
        }
        return result;
    }
    showTotal = (carts) => {
        var result = null;
        if (carts.length > 0) {
            result = <CartResult carts={carts} />
        }
        return result;
    }
}

CartContainer.propTypes = {
    carts: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = state => {
    return {
        carts: state.carts
    }
}

export default connect(mapStateToProps, null)(CartContainer);
