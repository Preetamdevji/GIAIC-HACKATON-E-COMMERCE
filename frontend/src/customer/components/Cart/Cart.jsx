import React, { useEffect } from "react";
import CartItems from "./CartItems";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";



const Cart = () => {
    const navigate = useNavigate();
    const {cart} = useSelector(store=>store)
    const dispatch = useDispatch()
    const handleCheckout = ()=>{
      navigate('/checkout?step=2')
    }

    useEffect(()=>{
        dispatch(getCart());
    },[cart.updateCartItems,cart.deleteCartItem])
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {cart.cart?.cartItems.map((item)=><CartItems item={item}/>)}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase fond-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 fond-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>${cart.cart?.totalDiscountPrice}</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Discount</span>
                <span className="text-green-600">${cart.cart?.discount} </span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 fond-bold text-black">
                <span>Total Amount</span>
                <span className="text-green-600">${cart.cart?.totalPrice}</span>
              </div>
            </div>
            <Button
              onClick={handleCheckout}
              variant="contained"
              className="w-full"
              sx={{
                px: "2.5rem",
                py: "0.7rem",
                bgcolor: "#9155fd",
                mt: "1rem",
              }}>
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
