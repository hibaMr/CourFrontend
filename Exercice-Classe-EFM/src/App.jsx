import { Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Produits from "./produits/Produits";
import Ventes from "./ventes/Ventes";
import { useEffect, useState } from "react";
import NouveauProduit from "./produits/NouveauProduit";
import Home from "./Home";
import ModifieProduit from "./produits/ModifieProduit";


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
    },{
        id:2,
        libelle:"ordinateur portable",
        categorie:{id:4,libelle:"matériel"},
        quantiteStockee:15,
        prix:5000
    }]);

    const [ventes,setVentes] = useState([{
        id:1,
        libelle:"ordinateur portable"
    },{
        id:2,
        libelle:"ordinateur portable"
    }]);

    // useEffect(function(){
    //     let newProduit = produits.map(function(item){
    //         return item.id
    //     })
    //     setVentes([...ventes,newProduit])
    //     console.log(ventes)
    // },[])

    return(
        <>
            
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/produits" element={<Produits produits={produits} setProduits={setProduits}  produit={produit} setProduit={setProduit}/>}/>
                <Route path="/produits/nouveau" element={<NouveauProduit categories={categories} setProduits={setProduits} produits={produits} produit={produit} setProduit={setProduit}/>}/>
                <Route path="/produits/modifie" element={<ModifieProduit produits={produits} setProduits={setProduits} categories={categories}  produit={produit} setProduit={setProduit}/>}/>
                <Route path="/ventes" element={<Ventes ventes={ventes} produits={produits} setVentes={setVentes}/>}/>
            </Routes>
        </>
    )
}
export default App;