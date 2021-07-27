import { useState, useEffect } from "react";
import { Wrapper } from "./App.styles";
import Item from "./components/Item/Item";
import { Grid } from "@material-ui/core";

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

  const getItems = async () => {
    const endpoint = `https://fakestoreapi.com/products`;
    const response = await fetch(endpoint);
    const data = await response.json();
    setItems(data);
  };

  const handleAddToCart = (item: ItemType) => {
    return null;
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Wrapper>
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
