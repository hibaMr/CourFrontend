import { useState } from "react";
import AfficherProduits from "./gestionProduits/AfficherProduits";
import { Route, Routes } from "react-router-dom";
import AjouterProduits from "./gestionProduits/AjouterProduits";
import ModifieProduits from "./gestionProduits/ModifieProduits";

function App(){

    const [produit,setProduit] = useState({
        id:'',
        libelle:"",
        categorie:{id:'',libelle:""},
        quantiteStockee:'',
        prix:''
    })

    const [categorie,setCategorie] = useState([{
        id:1,
        libelle:"femme"
    },{
        id:2,
        libelle:"homme"
    },{
        id:3,
        libelle:"enfent"
    }])

    const [listProduits,setListProduits] = useState([{
        id:1,
        libelle:"ordinateur portable",
        categorie:{id:4,libelle:"matériel"},
        quantiteStockee:15,
        prix:5000
    },{
        id:2,
        libelle:"ordinateur portable",
        categorie:{id:4,libelle:"homme"},
        quantiteStockee:15,
        prix:5000
    }]);



    return(
        <>
            <Routes>
                <Route path="/" element={<AfficherProduits listProduits={listProduits} produit={produit} setListProduits={setListProduits} setProduit={setProduit} categorie={categorie} setCategorie={setCategorie} />}/>
                <Route path="/ajouter" element={<AjouterProduits listProduits={listProduits} produit={produit} setListProduits={setListProduits} setProduit={setProduit} categorie={categorie} setCategorie={setCategorie} />}/>
                <Route path="/modifie" element={<ModifieProduits listProduits={listProduits} produit={produit} setListProduits={setListProduits} setProduit={setProduit} categorie={categorie} setCategorie={setCategorie} />}/>
            </Routes>
            
        </>
    )
}
export default App;