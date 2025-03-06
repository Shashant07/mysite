import React from 'react';
import ReactDOM from 'react-dom/client';
// import './assets/styles/bootstrap.custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';

import 'bootstrap/dist/js/bootstrap.min.js';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
// import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ServiceScreen from './screens/ServiceScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MessageScreen from './screens/MessageScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderListScreen from './screens/admin/OrderListScreen';
import ProductListScreen from './screens/admin/ProductListScreen';
import ProductEditScreen from './screens/admin/ProductEditScreen';
import ServiceListScreen from './screens/admin/ServiceListScreen';
import ServiceEditScreen from './screens/admin/ServiceEditScreen';
import UserListScreen from './screens/admin/UserListScreen';
import MessageListScreen from './screens/admin/MessageListScreen';
import UserEditScreen from './screens/admin/UserEditScreen';
import store from './store';
import { Provider } from 'react-redux';
import AllProductsScreen from './screens/AllProductsScreen';
import AllServicesScreen from './screens/AllServicesScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import FAQ from './components/FAQ';
import { Container } from 'react-bootstrap';
import AllProducts from './components/AllProducts';
import AllServices from './components/AllServices';
import Policy from './components/Policy';
import Blogs from './components/Blogs';
import Portfolio from './components/Portfolio';
import Careers from './components/Careers';
import TandC from './components/TandC';
// import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/search/:keyword' element={<Container><h4 className="container" style={{ fontWeight: "bold", letterSpacing: "2px", margin: "20px 0"  }}>Search Result: </h4><hr /><AllProducts /><AllServices /></Container>} />
      <Route path='/page/:pageNumber' element={<HomeScreen />} />
      <Route
        path='/search/:keyword/page/:pageNumber'
        element={<AllProductsScreen />}
      />
      <Route path='/products' element={<AllProductsScreen />} />
      <Route path='/product/:id' element={<ProductScreen />} />
      <Route path='/services' element={<AllServicesScreen />} />
      <Route path='/service/:id' element={<ServiceScreen />} />
      <Route path='/cart' element={<CartScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='/messages' element={<MessageScreen />} />
      <Route path='/about' element={<AboutUsScreen />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/tandc' element={<TandC />} />
      <Route path='/policy' element={<Policy />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/careers' element={<Careers />} />
      {/* Registered users */}
      <Route path='' element={<PrivateRoute />}>
        <Route path='/shipping' element={<ShippingScreen />} />
        <Route path='/payment' element={<PaymentScreen />} />
        <Route path='/placeorder' element={<PlaceOrderScreen />} />
        <Route path='/order/:id' element={<OrderScreen />} />
        <Route path='/profile' element={<ProfileScreen />} />
      </Route>
      {/* Admin users */}
      <Route path='' element={<AdminRoute />}>
        <Route path='/admin/orderlist' element={<OrderListScreen />} />
        <Route path='/admin/productlist' element={<ProductListScreen />} />
        <Route path='/admin/servicelist' element={<ServiceListScreen />} />
        <Route path='/admin/productlist/:pageNumber' element={<ProductListScreen />}/>
        <Route path='/admin/servicelist/:pageNumber' element={<ServiceListScreen />}/>
        <Route path='/admin/userlist' element={<UserListScreen />} />
        <Route path='/admin/messagelist' element={<MessageListScreen />} />
        <Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />
        <Route path='/admin/service/:id/edit' element={<ServiceEditScreen />} />
        <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HelmetProvider> */}
      <Provider store={store}>
        {/* <PayPalScriptProvider deferLoading={true}> */}
          <RouterProvider router={router} />
        {/* </PayPalScriptProvider> */}
      </Provider>
    {/* </HelmetProvider> */}
  </React.StrictMode>
);

reportWebVitals();
