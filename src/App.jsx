import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Carrito } from "./components/Carrito";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/cart" element={<Carrito />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
