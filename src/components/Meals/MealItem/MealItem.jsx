import { useContext } from 'react';
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/CartContext';
const MealItem = (props) => {
  const ctx = useContext(CartContext)
 const price = `$${props.price.toFixed(2)}`
 const amountSubmitHandler = (amount) =>{
  ctx.addItem({
      id: props.id,
      name : props.name,
      amount : amount ,
      price : props.price
    })

    let found = ctx.items.findIndex((item)=>item.id === props.id)
    console.log('id found at ' , found)

 }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>

      </div>
      <div>
        <MealItemForm amountSubmitHandler={amountSubmitHandler} id={props.id}/>
      </div>
    </li>
  );
};

export default MealItem;