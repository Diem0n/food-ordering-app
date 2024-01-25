import { useReducer } from 'react';

import CartContext from './CartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    let found = state.items.findIndex(item => item.id === action.item.id)
    if(found >  -1){
      let itemPrev = state.items[found]
      state.items[found] = {
        ...itemPrev,
        amount : itemPrev.amount + action.item.amount,
      }
      const updatedItems = [...state.items]
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      };
    }
    else{
      const updatedItems = state.items.concat(action.item);
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      };
      
    }
    
  }
  if(action.type==='REMOVE'){
    let itemIdx = state.items.findIndex(item=> item.id === action.id)
    let updatedItems = state.items
    let updatedAmount = state.updatedAmount
    if(itemIdx >  -1){
      const prevStateItem = state.items[itemIdx] 
      updatedAmount = state.totalAmount - prevStateItem.price
      if(prevStateItem.amount > 1){
        state.items[itemIdx] = {
          ...prevStateItem,
          amount : prevStateItem.amount - 1
        }
        updatedItems = [...state.items]
      }
      else{
        state.items.splice(itemIdx , 1)
      }
    }
    return {
      items : updatedItems,
      totalAmount : updatedAmount
    }
  } 
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    console.log('inside adder')
    console.log('state : ' , cartState)
    dispatchCartAction({type: 'ADD', item: item});
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>

      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;