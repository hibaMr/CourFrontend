import { useEffect, useState } from "react";
import InfoProd from "./InfoProd";
import Affiche from "./Affiche";
import { Route, Routes } from "react-router-dom";
import Menu from "./Menu";

function App(){

    const [produits,setProduits] = useState([]);
    
    useEffect(function(){
        fetch('https://fakestoreapi.com/products').then((response)=>{
            return response.json()
        }).then(function(data){
            setProduits(data)
        })
    },[])
    return(
        <>
            <Menu/>
            <Routes>
                <Route path="/InfoProd" element={<InfoProd/>}/>
                <Route path="/Affiche" element={<Affiche produits={produits}/>}/>
            </Routes>           
        </>
    )
}
export default App;