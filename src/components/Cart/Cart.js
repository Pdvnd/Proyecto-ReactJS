import { useContext } from "react";
import { context } from "../../CartContext/CartContext";
import { handleBuy } from "../../Firebase/Services/Services";
import { ModalDataUser } from "../Modal/ModalDataUser";
import { CartEmpty } from "./CartEmpty";
import { CartItem } from "./CartItem";


export const Cart = () => {
    const { cart, handeleDeleteItem, totalPrice } = useContext(context);

    const finishBuy = () => {
        handleBuy(cart, totalPrice);
    };
    return (
        <div className="cart">
            <div>
                <h2 className="title">mi super geek cesta</h2>
                {cart.length === 0 ? (
                    <CartEmpty />
                ) : (
                    cart.map((item, i) => (
                        <CartItem
                            key={i}
                            imgUrl={item.imgUrl}
                            cant={item.cant}
                            category={item.category}
                            description={item.description}
                            price={item.price}
                            title={item.title}
                            id={item.id}
                            handeleDeleteItem={handeleDeleteItem}
                            finishBuy={finishBuy}
                        />
                    ))
                )}
            </div>
            <div className="containerPrice">
                <h2 className="title2">resumen de tu super pedido</h2>
                <div className="containerTotal">
                    <h6 className="total">total</h6>
                    <p className="totalPrice">
                        <span>${totalPrice}</span>
                    </p>
                </div>
                <ModalDataUser />
            </div>
        </div>
    );
};
