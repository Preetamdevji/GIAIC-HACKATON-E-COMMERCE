import './App.css';

// import HomePage from './customer/pages/HomePage/HomePage';
// import Footer from './customer/components/Footer/footer';
// import Product from './customer/components/Product/Product';
// import ProductDetails from './customer/components/ProductDetails/ProductDetails';
// import Cart from './customer/components/Cart/Cart';
// import Checkout from './customer/components/Checkout/Checkout';
// import Order from './customer/components/Order/Order';
// import OrderDetail from './customer/components/Order/OrderDetail';
import CustomerRoute from './Router/CustomerRoute';
import AdminRoute from "./Router/AdminRoute"
import { Route, Routes } from 'react-router-dom';
// import Navigation from './customer/components/Navigation/Navigation';
function App() {
  return (
    <div className="">

      <Routes>
          <Route path='/*' element={<CustomerRoute/>}></Route>
          <Route path='/admin/*' element={<AdminRoute/>}></Route>
      </Routes>

   
      
      <div>
        {/* <HomePage/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Order/> */}
        {/* <OrderDetail/> */}
      </div>
    </div>
  );
}

export default App;
