import { Wrapper } from "./Cart.styled";
import CartItem from "../CartItem/CartItem";
import { ItemType } from "../../App";

type Props = {
  cartItems: ItemType[];
  addToCart: (clickedItem: ItemType) => void;
  removeFromCart: (id: number) => void;
};

function Cart({ cartItems, addToCart, removeFromCart }: Props): JSX.Element {
  const calcTotal = (items: ItemType[]) => {
    return items.reduce((num: number, item) => num + item.amount * item.price, 0);
  };

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No Items In Cart</p> : null}
      {cartItems?.map((item) => (
        <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
      ))}
      <h2>Total: ${calcTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
}

export default Cart;
