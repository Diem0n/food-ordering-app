import { useContext, useEffect, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/CartContext";
import CartItem from "./UI/CartItem";
const Cart = (props) => {
  const ctx = useContext(CartContext);
  const hasItems = ctx.items.length > 0;
  const addItemHandler = (item)=>{
    ctx.addItem({
      ...item,
      amount : 1
    })
  }
  const removeItemHandler = (id)=>{
    ctx.removeItem(id)
  }
  const cartItems = ctx.items.map((item) => {
    return (
      <CartItem
        key={item.id + "lml"}
        id={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
        onAdd={addItemHandler.bind(null , item)}
        onRemove = {removeItemHandler.bind(null, item.id)}
      />
    );
  });
  return (
    <Modal>
      <ul className={classes.cartItems}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{!hasItems ? "$0.00" : `$${ctx.totalAmount.toFixed(2)}`}</span>
      </div>
      {!hasItems && <p>Add some items to continue placing your order</p>}
      <div className={classes.actions}>
        <button onClick={props.hide} className={classes.buttonAlt}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
