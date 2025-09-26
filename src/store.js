import { createStore } from "redux";

// initial state
const initialState = {
  cart: [],
  wishlist: [],
  discount: 0,
};

// reducer
function shopReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      // if product already in cart → increase qty
      const existingCartItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingCartItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "INCREASE_QTY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
        ),
      };

    case "DECREASE_QTY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload && item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
        ),
      };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload),
      };

    case "APPLY_DISCOUNT":
      return {
        ...state,
        discount: action.payload, // number (percentage or amount)
      };

    default:
      return state;
  }
}

// create store
const store = createStore(shopReducer);

export default store;
