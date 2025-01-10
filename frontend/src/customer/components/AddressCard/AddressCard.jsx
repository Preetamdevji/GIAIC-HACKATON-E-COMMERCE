import React from "react";

const AddressCard = ({address}) => {
  return (
    <div>
      <div className="space-y-3">

        <p className="font-semibold">{address?.firstName} {address?.lastName}</p>
        <p>{address?.address} , {address?.city} {address?.state} ,{address?.zipcode}</p>
        <div>
          <p className="space-y-1">Phone Number</p>
          <p>{address?.number}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
