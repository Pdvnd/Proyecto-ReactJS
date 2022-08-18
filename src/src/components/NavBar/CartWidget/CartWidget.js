import './CartWidget.css';


export const CartWidget = () => {

  return (
    <div>
      <button  className='icono-bag'>
        <i  className='fas fa-shopping-bag'></i>
        <span className='cart-widget-amount'></span>
      </button>
    </div>
  );
  
};