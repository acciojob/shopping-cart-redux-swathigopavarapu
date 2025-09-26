import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QTY,
  DECREASE_QTY,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  APPLY_COUPON,
  REMOVE_COUPON
} from "../actions/types";

/*
State shape:
{
  cart: [{ id, title, price, qty }],
  wishlist: [{ id, title, price }],
  coupon: { code, discountPercent } | null
}
*/

const initialState = {
  cart: [],
  wishlist: [],
  coupon: null
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const exists = state.cart.find((p) => p.id === product.id);
      if (exists) {
        return {
          ...state,
          cart: state.cart.map((p) =>
            p.id === product.id ? { ...p, qty: p.qty + 1 } : p
          )
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...product, qty: 1 }]
        };
      }
    }

    case REMOVE_FROM_CART: {
      const id = action.payload;
      return {
        ...state,
        cart: state.cart.filter((p) => p.id !== id)
      };
    }

    case INCREASE_QTY: {
      const id = action.payload;
      return {
        ...state,
        cart: state.cart.map((p) =>
          p.id === id ? { ...p, qty: p.qty + 1 } : p
        )
      };
    }

    case DECREASE_QTY: {
      const id = action.payload;
      return {
        ...state,
        cart: state.cart
          .map((p) => (p.id === id ? { ...p, qty: Math.max(1, p.qty - 1) } : p))
          // Keep product if qty >= 1 (we prevent going below 1)
          .filter(Boolean)
      };
    }

    case ADD_TO_WISHLIST: {
      const product = action.payload;
      if (state.wishlist.some((p) => p.id === product.id)) return state;
      return { ...state, wishlist: [...state.wishlist, product] };
    }

    case REMOVE_FROM_WISHLIST: {
      const id = action.payload;
      return { ...state, wishlist: state.wishlist.filter((p) => p.id !== id) };
    }

    case APPLY_COUPON: {
      const coupon = action.payload;
      return { ...state, coupon };
    }

    case REMOVE_COUPON: {
      return { ...state, coupon: null };
    }

    default:
      return state;
  }
}
