import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyCoupon, removeCoupon } from "../actions/cartActions";

/*
 Example coupons:
 - SAVE10 => 10%
 - SAVE20 => 20%
 - FLAT50 => special flat rupee discount (we'll show how to support percent only for simplicity)
*/
const COUPONS = {
  SAVE10: { code: "SAVE10", discountPercent: 10 },
  SAVE20: { code: "SAVE20", discountPercent: 20 }
};

const Coupon = () => {
  const [codeText, setCodeText] = useState("");
  const dispatch = useDispatch();
  const coupon = useSelector((s) => s.shop.coupon);

  const apply = () => {
    const key = codeText.toUpperCase().trim();
    if (COUPONS[key]) {
      dispatch(applyCoupon(COUPONS[key]));
      setCodeText("");
    } else {
      alert("Invalid coupon code");
    }
  };

  const remove = () => dispatch(removeCoupon());

  return (
    <div className="card coupon-card">
      <h3>Apply Coupon</h3>
      {coupon ? (
        <div>
          <div>Applied: <strong>{coupon.code}</strong> ({coupon.discountPercent}% off)</div>
          <button onClick={remove}>Remove Coupon</button>
        </div>
      ) : (
        <div className="coupon-form">
          <input
            value={codeText}
            placeholder="Enter coupon code e.g. SAVE10"
            onChange={(e) => setCodeText(e.target.value)}
          />
          <button onClick={apply}>Apply</button>
        </div>
      )}
    </div>
  );
};

export default Coupon;
