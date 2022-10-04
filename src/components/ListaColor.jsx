import React from "react";
import ItemColor from "./ItemColor";
import ListGroup from "react-bootstrap/ListGroup";

const ListaColor = ({arregloColor, borrarColor}) => {
  return (
    <ListGroup>
        {
            arregloColor.map((color, posicion)=>  <ItemColor key={posicion} nombreColor={color} borrarColor={borrarColor}></ItemColor> )
        }
     
    </ListGroup>
  );
};

export default ListaColor;