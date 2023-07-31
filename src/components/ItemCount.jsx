import React from 'react'

export const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

    return (
        <div>
            <div className="item-count">
                <button onClick={handleRestar}>-</button>
                <p>{cantidad}</p>
                <button onClick={handleSumar}>+</button>
            </div>
            <div className="agregar-al-carrito" onClick={handleAgregar}>Agregar al carrito</div>
        </div>
    )
}
