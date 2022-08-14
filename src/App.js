
import { NavBar } from "../src/components/NavBar/NavBar";
import { ItemListContainer } from "./components/Item/ItemListContainer";
import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";



function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;