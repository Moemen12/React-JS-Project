import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";
import cartItems from "./data";
import {
  CLEAR_CART,
  DECREASE,
  DISPLAYING_ITEMS,
  INCREASE,
  LOADING,
  REMOVE,
} from "./assets/actions";
import { getTotals } from "./utils";

const url = "https://www.course-api.com/react-useReducer-cart-project";
const AppContext = createContext();

const initialState = {
  loading: false,
  card: new Map(),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotals(state.card);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };
  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  const fetchData = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: DISPLAYING_ITEMS, payload: { cart } });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
