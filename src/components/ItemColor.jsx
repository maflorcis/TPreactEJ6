import { ListGroup, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarColorAPI, consultarAPI } from "./helpers/queries";
import { FaPaintBrush } from 'react-icons/fa';

const ItemColor = ({color, setColor}) => {

  const borrarColor = () => {

    Swal.fire({
      title: "¿Estás seguro de quitar el color?",
      text: "No podés volver atrás!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarColorAPI(color._id).then((respuesta) => {
          if (respuesta.status === 200) {
            consultarAPI().then((respuesta) => {
              setColor(respuesta);
            });

            Swal.fire(
              "Color borrado!",
              "Tu color fue removido de la lista",
              "success"
            );
          } else {
            Swal.fire(
              "Ups algo pasó!",
              "Probá nuevamente luego.",
              "error"
            );
          }
        });
      }
    });
  };
  return (
   
    <ListGroup.Item className="d-flex justify-content-between">
      {color.nombreColor}
      <h2 className="fs-1"style={{color:(color.nombreColor)}}><FaPaintBrush/></h2>
      <Button variant="danger" onClick={borrarColor}>Borrar</Button>
    </ListGroup.Item>
  );
};

export default ItemColor;