import { Button, IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";


const CartItems = ({item}) => {
  // console.log("item", item);
  const dispatch = useDispatch()

  const handleUpdateCartItem=(num)=>{
    const data = {data:{qauntity:item.quantity+num},cartItemId:item?._id}
    dispatch(updateCartItem(data))
  }

  const handleRemoveCartItem=()=>{
    dispatch(removeCartItem(item?._id))
  }
  // console.log("CartItems item.product:", item.product);

  const products = Array.isArray(item.product)
    ? item.product
    : Array.isArray(item.products)
    ? item.products
    : []; // Default to empty array if both are undefined

  if (products.length === 0) {
    return <div>No products found</div>; // Handle case where no products are found
  }

  return (
    <div className="p-5 shadow-lg border rounded-md">
      
      {products.map((product) => (
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={product.imageUrl}
            alt="Gallery"
          />
        </div>
        <div className="ml-5 space-y-1">
            <p className="font-semibold">{product.title}</p>
            <p className="opacity-70">size:{item.size},{product.color}</p>
            <p className="opacity-70 mt-2">Seller:{product.brand}</p>
            <div className="flex space-x-5 items-center text-gray-900 pt-5">
                <p className="font-semibold">${product.price}</p>
                <p className="opacity-60 line-through">${product.discountedPrice}</p>
                <p className="text-green-600">{product.discountPresent}% OFF</p>
            </div>
        </div>
      </div>
       ))}
      <div className="lg:flex items-center lg:space-x-10 pt-4">
                <div className="flex items-center space-x-2">
                    <IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={item.quantity<=1}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className="py-1 px-7 border rounded-sm">{item.quantity}</span>
                    <IconButton sx={{color:"RGB(145 85 253)"}} onClick={()=>handleUpdateCartItem(1)}>
                        <AddCircleOutlineIcon/>
                    </IconButton> 
                    
                </div>
                <div>
                    <Button sx={{color:"RGB(145 85 253)"}} onClick={handleRemoveCartItem}>
                        Remove
                    </Button>
                </div>
                
        </div>
    </div>
  );
};

export default CartItems;
