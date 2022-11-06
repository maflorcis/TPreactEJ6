import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Swal from "sweetalert2/dist/sweetalert2.all";
import { useForm } from "react-hook-form";
import { consultarAPI, crearColorAPI } from "./helpers/queries";
import ListaColor from "./ListaColor";
import { GiPaintBucket } from 'react-icons/gi';

const FormularioColor = () => {
  const [color, setColor] = useState([]);

  useEffect(() => {
    consultarAPI().then((respuesta) => {
      setColor(respuesta);
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nombreColor: "",
    },
  });

  const onSubmit = (datos) => {
    crearColorAPI(datos).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Tu color se ha creado",
          "El color se agregó correctamente a la lista",
          "success"
        );
        reset();
        consultarAPI().then((respuesta) => {
          setColor(respuesta);
        });
      } else {
        Swal.fire("Ups algo pasó", "Vuelva a intentarlo más tarde", "error");
      }
    });
  };

  return (
    <div>
      <div className='d-inline-flex'>
    <h2 className="display-4 mx-1">
    < GiPaintBucket className="fs-1" color={color} onChange={updatedColor => setColor(updatedColor)}></GiPaintBucket></h2>
    <h1 className="display-4"> Administrar colores</h1> 
    <hr />
    </div>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group
          className="mb-3 row justify-content-center"
          controlId="formBasicEmail"
        >
          <aside className="col-sm-12 col-md-8 col-lg-4">
            <Form.Control
              type="text"
              placeholder="Agregá un color"
              {...register("nombreColor", {
                required: "Este dato es obligatorio",
                minLength: {
                  value: 3,
                  message: "Debés ingresar como mínimo 3 caracteres",
                },
                maxLength: {
                  value: 150,
                  message: "Como máximo 150 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
            {errors.nombreColor?.message}
          </Form.Text>
          </aside>
          <aside className="col-sm-12 col-md-4 col-lg-2">
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </aside>
        </Form.Group>
      </Form>
      <ListaColor color={color} setColor={setColor}></ListaColor>
    </div>
  );
};

export default FormularioColor;