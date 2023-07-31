import { useEffect, useState } from "react"
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const categoria = useParams().categoria;

    useEffect(() => {
        const prodRef = collection(db, "productos");
        const q = categoria ? query(prodRef, where("categoria", "==", categoria)) : prodRef;

        getDocs(q)
            .then((resp) => {
                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            });
    }, [categoria])
    
    return (
        <div>
            <ItemList productos={productos} titulo={titulo} />
        </div>
    )
}
