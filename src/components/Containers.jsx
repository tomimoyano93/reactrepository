import React from "react";
import ItemCount from "./ItemCount";
import { Card } from "react-bootstrap";

export default function ItemContainer(){
    const handleClick =(total) => {
        alert(`La cantidad agregada es ${total}`)
    }
    return (   
        <card className="fondoItem2"> 
            <Card.Img className="imgProducto" variant ="top" src="assets/img/gorras.png"/>
            <Card.Body>
                <Card.Title>Producto</Card.Title>
                <Card.Text> Descripcion del Producto </Card.Text>
                <ItemCount stock={5} initial={1} onAdd={handleClick}/>
            </Card.Body>
        </card>
    )
}