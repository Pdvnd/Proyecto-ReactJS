
import ItemListContainer from '../../Item/ItemListContainer';
import './CartWidget.css';

export const CartWidget = () => {
  return (
    <div>
      <span onClick={ItemListContainer} className='icono-bag'>
        <i  className='fas fa-shopping-bag'></i>
        <span className='cart-widget-amount'></span>
      </span>
    </div>
  );
};