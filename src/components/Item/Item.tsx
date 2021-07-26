import { Wrapper } from "./Item.styled";
import { ItemType } from "../../App";
import { Button } from "@material-ui/core";

type Props = {
  item: ItemType;
  handleAddToCart: (item: ItemType) => void;
};

function Item({ item, handleAddToCart }: Props): JSX.Element {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>+ Add To Cart</Button>
    </Wrapper>
  );
}

export default Item;
