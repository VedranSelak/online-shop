import { useState, useEffect } from "react";
import { Wrapper } from "./App.styles";

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

  useEffect(() => {
    getItems();
  }, []);

  return <div className="App">Store</div>;
}

export default App;
