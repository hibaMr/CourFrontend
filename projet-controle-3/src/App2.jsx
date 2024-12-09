import { Route, Routes } from "react-router-dom"

import Home from "./Home"
import { useEffect, useState } from "react"
import ListProduits from "./produits/ListProduits";
import Test from "./Test";
import AjouterProduit from "./produits/AjouterProduit";
import Menu2 from "./Menu2";
import ModifieProduit from "./produits/ModifieProduit";
import ListCommande from "./commande/ListCommande";
import AjouterCommande from "./commande/AjouterCommande";



function App2(){
    const [produit,setProduit] = useState({
        id:"",
        title:"",
        price:"",
        description:"",
        category:"",
        rating:{
            count:""
        },
        
        image:"",
    })

    const [produits,setProduits] = useState([]);

    const [commande,setCommande] = useState({
        id:1,
        nom:"qjd",
        adress:"sjdo",
        email:"zop",
        tel:"pzo",
        title:"pzo",
        price:"zoir",
        description:"ik",
        category:"skdj",
        count:"oz",
        image:"zoke"        
    })

    const [commandes,setCommandes] = useState([{
        id:1,
        nom:"qjd",
        adress:"sjdo",
        email:"zop",
        tel:"pzo",
        title:"pzo",
        price:"zoir",
        description:"ik",
        category:"skdj",
        count:"oz",
        image:"zoke" 
    }]);



    useEffect(function(){
        fetch("https://fakestoreapi.com/products").then((response)=>{
            return response.json();
        }).then(function(data){
            setProduits(data)
        })
    },[])

    console.log(commande)

    return(
        <>
 
          <Menu2/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/produit/listProduits" element={<ListProduits produits={produits} setProduits={setProduits} produit={produit} setProduit={setProduit} commande={commande} setCommande={setCommande} commandes={commandes} setCommandes={setCommandes}/>}/>
            <Route path="/produit/ajouterProduit" element={<AjouterProduit produits={produits} setProduits={setProduits} produit={produit} setProduit={setProduit}/>}/>
            <Route path="/produit/modifieProduit" element={<ModifieProduit produits={produits} setProduits={setProduits} produit={produit} setProduit={setProduit}/>}/>
            <Route path="/commande/listCommande" element={<ListCommande produits={produits} setProduits={setProduits} produit={produit} setProduit={setProduit} commande={commande} setCommande={setCommande} commandes={commandes} setCommandes={setCommandes} />}/>
            <Route path="/commande/ajouterCommande" element={<AjouterCommande produits={produits} setProduits={setProduits} produit={produit} setProduit={setProduit} commande={commande} setCommande={setCommande} commandes={commandes} setCommandes={setCommandes}/>}/>
            <Route path="/test" element={<Test/>}/>
        </Routes>
        </>
    )
}
export default App2