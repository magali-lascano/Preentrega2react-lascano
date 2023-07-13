import { Item } from "./Item"
import { Capitalize } from "../helpers/Capitalize"

export const ItemList = ( {productos, titulo} ) => {
    return (
        <div>
            <h2>{Capitalize(titulo)}</h2>
            <div className="productos">
                { productos.map((prod) => <Item producto={prod} key={prod.id} />)}
            </div>
        </div>
    )
}
