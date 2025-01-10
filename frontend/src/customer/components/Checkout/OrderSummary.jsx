import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getOrderById } from '../../../State/Order/Action';
import AddressCard from '../AddressCard/AddressCard';
import { Button } from '@mui/material';
import CartItems from '../Cart/CartItems'

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { order } = useSelector(store => store);

  // const [orders,setOrder] =useState(order)
  
  // Get the order ID from the URL parameters
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get('order_id');

  // console.log("order DData",order.order?.orderItems);
  


  useEffect(() => {
    if (orderId) {
      dispatch(getOrderById(orderId));
    }
  }, [dispatch, orderId]);

  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={order.order?.shippingAddress}/>
      </div>

      <div>
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2">
            {order.order?.orderItems.map((item)=> (
                <CartItems item={item}/>
            ))}  
        </div>
          
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border">
              <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
              {/* Naming issue  */}
              <hr />
              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>${order.order?.totalDiscountPrice}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Discount</span>
                  <span className="text-green-600">${order.order?.discount}</span>
                </div>
                <div class="flex justify-between pt-3">
                  <span>Delivery Charge</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3 font-bold text-black">
                  <span>Total Amount</span>
                  <span className="text-green-600">${order.order?.totalPrice
}</span>
                </div>
              </div>
              <Button
                variant="contained"
                className="w-full"
                sx={{
                  px: '2.5rem',
                  py: '0.7rem',
                  bgcolor: '#9155fd',
                  mt: '1rem',
                }}
              >
                Payment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
