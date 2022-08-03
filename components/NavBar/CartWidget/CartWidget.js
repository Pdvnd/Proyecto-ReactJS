
import { ItemList } from '../../Item/ItemList';
import './CartWidget.css';

export const CartWidget = () => {
  return (
    <div>
      <span onClick={ItemList} className='icono-bag'>
        <i  className='fas fa-shopping-bag'></i>
        <span className='cart-widget-amount'></span>
      </span>
    </div>
  );
};