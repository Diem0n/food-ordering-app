import CartButton from '../../Cart/UI/CartButton';
import classes from './Header.module.css'
const Header = props => {
    return <>
    <header className={classes.header}>
        <h1 >Yum Meals</h1>
        <CartButton handleClick={props.show} />
    </header>
    <div className={classes.mainImage}>
        <img src="/meals.jpg" />
    </div>
    </>
}

export default Header; 