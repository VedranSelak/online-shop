import { useState, useEffect } from "react";
import { Wrapper, ButtonStyle } from "./App.styles";
import Item from "./components/Item/Item";
import Cart from "./components/Cart/Cart";
import { Drawer, Grid, Badge } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

export type ItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

function App(): JSX.Element {
  const [items, setItems] = useState<ItemType[]>([]);
  const [myCartOpen, setMyCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<ItemType[]>([]);

  const getItems = async () => {
    const endpoint = `https://fakestoreapi.com/products`;
    const response = await fetch(endpoint);
    const data = await response.json();
    setItems(data);
  };

  const handleAddToCart = (itemClicked: ItemType) => {
    setCartItems((prev) => {
      const IsItemInCart = prev.find((item) => item.id === itemClicked.id);

      if (IsItemInCart) {
        return prev.map((item) => (item.id === itemClicked.id ? { ...item, amount: item.amount + 1 } : item));
      }

      return [...prev, { ...itemClicked, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as ItemType[])
    );
  };

  const getTotalItems = (items: ItemType[]) => {
    return items.reduce((num: number, item) => num + item.amount, 0);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Wrapper>
      <Drawer anchor="right" open={myCartOpen} onClose={() => setMyCartOpen(false)}>
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
      </Drawer>
      <ButtonStyle onClick={() => setMyCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="primary">
          <AddShoppingCartIcon />
        </Badge>
      </ButtonStyle>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item key={item.id} item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
