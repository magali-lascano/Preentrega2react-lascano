import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export const Checkout = () => {
    const [pedidoId, setPedidoId] = useState ("");
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    const comprar = (data) => {
        const pedido = {
            cliente: data,
            prods: carrito,
            total: precioTotal()
        }

        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
            .then((doc) =>{
                setPedidoId(doc.id);
                vaciarCarrito();
            })
    }
    if (pedidoId) {
        return (
            <div className="producto container">
                <h1 className="main-title">Muchas gracias ✨</h1>
                <p>Tu numero de pedido es: {pedidoId}</p>
            </div>
        )
    }
    return (
        <div className="container">
            <h1 className="main-title">Finalizar Compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>

                <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")} />
                <input type="text" placeholder="Ingresa tu apellido" {...register("nombre")} />
                <input type="email" placeholder="Ingresa tu e-mail" {...register("email")} />
                <input type="email" placeholder="Ingresa nuevamente tu e-mail" {...register("email")} />
                <input type="telefono" placeholder="Ingresa tu telefono" {...register("telefono")} />

                <button className="enviar" type="submit">Comprar</button>

            </form>
        </div>
    )
}
