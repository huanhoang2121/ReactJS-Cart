import React, { Component } from 'react';
import * as message from "./../constants/Message";

class Cart extends Component {
    render() {
        var { cart } = this.props;
        return (
            <tr>
                <th scope="row">
                    <img src={ cart.product.image }
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{ cart.product.name }</strong>
                    </h5>
                </td>
                <td>{ cart.product.price } $</td>
                <td className="center-on-small-only">
                    <span className="qty">{ cart.quantity } </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label 
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={ () => {this.onUpdateQuantity(cart.product, cart.quantity - 1)} }
                        >
                            <a href="#i" >—</a>
                        </label>
                        <label 
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={ () => {this.onUpdateQuantity(cart.product, cart.quantity + 1)} }
                        >
                            <a href="#i" >+</a>
                        </label>
                    </div>
                </td>
                <td>{this.total(cart.quantity, cart.product.price)} $</td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item"
                        onClick={ () => {this.onDelete(cart.product)}}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }
    onUpdateQuantity = (product, quantity) => {
        var { onUpdateProductInCart, onDeleteProductInCart, onChangeMessage } = this.props;
        if (quantity > 0) {
            onUpdateProductInCart(product, quantity);
            onChangeMessage(message.MSG_UPDATE_CARD_SUCCESS);
        }
        else {
            onDeleteProductInCart(product);
            onChangeMessage(message.MSG_DELETE_PRODUCT_IN_CARD_SUCCESS);
        }
    }
    onDelete = (product) => {
        var { onDeleteProductInCart, onChangeMessage } = this.props;
        onDeleteProductInCart(product);
        onChangeMessage(message.MSG_DELETE_PRODUCT_IN_CARD_SUCCESS);
    }
    total = (quantity, price) => {
        return quantity * price;
    }
}
export default Cart;
