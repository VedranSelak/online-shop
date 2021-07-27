import { Wrapper } from "./Cart.styled";
import CartItem from "../CartItem/CartItem";
import { ItemType } from "../../App";

type Props = {
  cartItems: ItemType[];
  addToCart: (clickedItem: ItemType) => void;
  removeFromCart: (id: number) => void;
};

function Cart({ cartItems, addToCart, removeFromCart }: Props): JSX.Element {
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No Items In Cart</p> : null}
      {cartItems?.map((item) => (
        <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
      ))}
    </Wrapper>
  );
}

export default Cart;
