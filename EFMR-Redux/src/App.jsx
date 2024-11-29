import { Route, Routes } from "react-router-dom";
import Achats from "./achats/Achats";
import AjouterAchat from "./achats/AjouterAchat";
import Facture from "./facture/Facture";
import TestImmer from "./TestImmer";
import Menu from "./Menu";

function App(){
    return(
        <>  
            <Menu/>
            <TestImmer/>
            <Routes>
                <Route path="/facture" element={<Facture/>}/>
                <Route path="/achats" element={<Achats/>}/>
                <Route path="/achats/ajouter" element={<AjouterAchat/>}/>
            </Routes>
            
        </>
    )
}

export default App;