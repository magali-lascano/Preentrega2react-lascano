import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import "../styles/main.css";


export const Carrito = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () =>{
        vaciarCarrito();
    }

    return (
        <div className="producto container">
            
            <h1 className="main-title">Carrito</h1>
            {carrito.map((prod) => (
            <div key={prod.id}>
                <h3>{prod.titulo}</h3>
                <p>Precio unitario: ${prod.precio}</p>
                <p>Precio total: ${prod.precio * prod.cantidad}</p>
                <p>Cantidad{prod.cantidad}</p>
            </div>
            ))
        }
        {carrito.length > 0 ? 
        <>
            <h2>Precio total: ${precioTotal()}</h2>
            <button className="ver-mas" onClick={handleVaciar}>Vaciar</button><br />
            <Link className="ver-mas" to="/checkout">Finalizar Compra</Link>
        </> :
        <h2>El carrito esta vacio 🛒</h2>
        }
        </div>
    )
}
