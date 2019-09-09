import React, { Component } from 'react';
import MessageContainer from './../containers/MessageContainer';
import CartContainer from './../containers/CartContainer';
import ProductContainer from "./../containers/ProductContainer"

class Main extends Component {
    render() {
        return (
            <main id="mainContainer">
                <div className="container">
                    <ProductContainer></ProductContainer>
                    <MessageContainer></MessageContainer>
                    <CartContainer></CartContainer>
                </div>
            </main>
        );
    }
}

export default Main;
