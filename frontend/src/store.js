import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { cartReducer } from './reducers/cartReducers';
import { userSigninReducer, userRegisterReducer, userUpdateReducer } from './reducers/userReducers';
import { orderCreateReducer, orderDetailsReducer, myOrderListReducer } from './reducers/orderReducers';

const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;

const initialState= {cart: { cartItems, shipping: {}, payment: {} }, userSignin: {userInfo}};
const reducer = combineReducers({
      productList: productListReducer,
      productSave: productSaveReducer,
      productDetails: productDetailsReducer,
      productDelete: productDeleteReducer,
      cart: cartReducer,
      userSignin: userSigninReducer,
      userRegister: userRegisterReducer,
      orderCreate: orderCreateReducer,
      orderDetails : orderDetailsReducer,
      userUpdate : userUpdateReducer,
      myOrderList : myOrderListReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;