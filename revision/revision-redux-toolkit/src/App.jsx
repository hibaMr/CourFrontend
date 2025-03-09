import { Route, Routes } from "react-router-dom";
import Afficher from "./gestionProduit/Afficher";
import Ajouter from "./gestionProduit/Ajouter";

function App(){
    return (
        <>
            <Routes>
                <Route path="/" element={<Afficher/>}/>
                <Route path="/ajouter" element={<Ajouter/>}/>
            </Routes>
            
            
        </>
    )
}
export default App;