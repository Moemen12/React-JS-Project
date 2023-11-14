import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  DISPLAYING_ITEMS,
  LOADING,
} from "./assets/actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, card: new Map() };
  }
  if (action.type === REMOVE) {
    const newCart = new Map(state.card);
    newCart.delete(action.payload.id);
    return { ...state, card: newCart };
  }
  if (action.type === INCREASE) {
    const newCart = new Map(state.card);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);
    const newItem = { ...item, amount: item.amount + 1 };
    newCart.set(itemId, newItem);
    return { ...state, card: newCart };
  }

  if (action.type === DECREASE) {
    const newCart = new Map(state.card);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);
    const newItem = {
      ...item,
      amount: item.amount === 0 ? item.amount : item.amount - 1,
    };
    newCart.set(itemId, newItem);
    return { ...state, card: newCart };
  }

  if (action.type === LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === DISPLAYING_ITEMS) {
    const newCart = new Map(action.payload.cart.map((item) => [item.id, item]));
    return { ...state, loading: false, card: newCart };
  }

  throw new Error(`no matching action type : ${action.type}`);
};

export default reducer;
