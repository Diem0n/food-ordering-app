import { useContext, useState, useEffect } from "react";
import CartIcon from "../../UI/CartIcon";
import classes from "./CartButton.module.css";
import CartContext from "../../../store/CartContext";

const CartButton = (props) => {
  const { items } = useContext(CartContext);

  useEffect(()=>{
    setButtonHighlighted(true)
    
    const intervalRef = setTimeout( ()=> {
        setButtonHighlighted(false)
    },300)

    return ()=> clearInterval(intervalRef)

  } , [items])

  const [btnHighlighted, setButtonHighlighted] = useState(false);
  const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump: ''}`;
  return (
    <button onClick={props.handleClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Items </span>
      <span className={classes.badge}> {items.length} </span>
    </button>
  );
};

export default CartButton;
