import * as types from "./../constants/ActionType";
var data = JSON.parse(localStorage.getItem("CART"));
var initialState = data ? data : [];

const reducer = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch (action.type) {
        case types.ADD_TO_CARD:
            index = findProductInCart(state, product);
            if(index !== -1){
                state[index].quantity += quantity;
            }else {
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem("CART", JSON.stringify(state));
            return [...state];

        case types.DELETE_PRODUCT_IN_CARD:
            index = findProductInCart(state, product);
            if(index !== -1){
                state.splice(index, 1);
            }
            localStorage.setItem("CART", JSON.stringify(state));
            return [...state];

        case types.UPDATE_PRODUCT_IN_CARD:
            index = findProductInCart(state, product);
            if(index !== -1){
                state[index].quantity = quantity;
            }
            localStorage.setItem("CART", JSON.stringify(state));
            return [...state];

        default:
            return [...state];
    }
}
var findProductInCart = (carts, product) => {
    var index = -1;
    if (carts.length > 0) {
        for(var i=0; i<carts.length; i++){
            if(carts[i].product.id === product.id){
                index = i;
                break;
            }
        }
    }
    return index;
}

export default reducer;