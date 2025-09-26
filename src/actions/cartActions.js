import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QTY,
  DECREASE_QTY,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  APPLY_COUPON,
  REMOVE_COUPON
} from "./types";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId
});

export const increaseQty = (productId) => ({
  type: INCREASE_QTY,
  payload: productId
});

export const decreaseQty = (productId) => ({
  type: DECREASE_QTY,
  payload: productId
});

// Wishlist
export const addToWishlist = (product) => ({
  type: ADD_TO_WISHLIST,
  payload: product
});

export const removeFromWishlist = (productId) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: productId
});

// Coupons: payload { code, discountPercent } or special handling
export const applyCoupon = (coupon) => ({
  type: APPLY_COUPON,
  payload: coupon
});

export const removeCoupon = () => ({
  type: REMOVE_COUPON
});
