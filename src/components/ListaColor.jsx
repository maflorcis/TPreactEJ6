import { ListGroup } from "react-bootstrap";
import ItemColor from "./ItemColor";

const ListaColor = ({ color, setColor }) => {
  return (
    <ListGroup>
      {color.map((color) => (
        <ItemColor
          key={color._id}
          color={color}
          setColor={setColor}
        ></ItemColor>
      ))}
    </ListGroup>
  );
};

export default ListaColor;