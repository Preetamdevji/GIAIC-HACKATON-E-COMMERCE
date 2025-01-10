import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Product from '../customer/components/Product/Product'
import Footer from '../customer/components/Footer/footer'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/Navigation/Navigation'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout';
import Order from '../customer/components/Order/Order'
import OrderDetail from '../customer/components/Order/OrderDetail'






const CustomerRoute = () => {
  return (
    <div>
        <div>
          <Navigation/>
        </div>
        <Routes>
            <Route path='/login' element={<HomePage/>}></Route>
            <Route path='/register' element={<HomePage/>}></Route>
            
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductDetails/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetail/>}></Route>
            

          
        {/* <Product/> */}
        {/* <ProductDetails/> */}
       
        {/* <Checkout/> */}
        {/* <Order/> */}
        {/* <OrderDetail/> */}
        </Routes>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default CustomerRoute