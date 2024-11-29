import { Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Produits from "./produits/Produits";
import Ventes from "./ventes/Ventes";
import { useState } from "react";
import NouveauProduit from "./produits/NouveauProduit";
import Home from "./Home";


function App(){

    const [categories,setCategories] = useState([
        {id:1,libelle:"médicale"},
        {id:2,libelle:"bureautique"},
        {id:3,libelle:"papier"},
        {id:4,libelle:"électro"}
    ])

    const [produit,setProduit] = useState({id:"",
        libelle:"",
        categorie:{},
        quantiteStockee:"",
        prix:""
    });

    const [produits,setProduits] = useState([{
        id:1,
        libelle:"ordinateur portable",
        categorie:{id:4,libelle:"matériel"},
        quantiteStockee:15,
        prix:5000
    }]);

    return(
        <>
            
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/produits" element={<Produits produits={produits} setProduits={setProduits}  produit={produit} setProduit={setProduit}/>}/>
                <Route path="/produits/nouveau" element={<NouveauProduit categories={categories} setProduits={setProduits} produits={produits} produit={produit} setProduit={setProduit}/>}/>
                <Route path="/ventes" element={<Ventes/>}/>
            </Routes>
        </>
    )
}
export default App;