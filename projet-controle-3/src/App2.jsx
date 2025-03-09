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
import ModifierCommande from "./commande/ModifierCommande";
import ListProduitClient from "./client/ListProduitClient";



function App2(){

    const [quantite,setQuantite] = useState({
        id : "",
        count:""
    })

    let comId = 0;

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
        id:"",
        nom:"",
        adress:"",
        email:"",
        tel:"",
        count:"",
        produit:{
            id:"",
            title:"",
            price:"",
            description:"",
            category:"",
            rating:{
                count:""
            },
            image:"",  
        }    
    })

    const [commandes,setCommandes] = useState([{
        id:1,
        nom:"MRIBEH",
        adress:"casablanca",
        email:"hiba2005@gmail.com",
        tel:"0687464269",
         count:"2",
        produit:{
            id:1,
            title:"Mens Casual Premium Slim Fit T-Shirts",
            price:22.3,
            description:"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            category:"men's clothing",
            rating:{
                count:259
            },
            image:"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",  
        }
       
    },{
        id:2,
        nom:"ELADNANI",
        adress:"casablanca",
        email:"loli2001@gmail.com",
        tel:"0687423469",
        count:"1",
        produit:{
            id:1,
            title:"Mens Casual Premium Slim Fit T-Shirts",
            price:22.3,
            description:"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            category:"men's clothing",
            rating:{
                count:259
            },
            image:"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",  
        }
    },{
        id:3,
        nom:"KHALID",
        adress:"casablanca",
        email:"lila2005@gmail.com",
        tel:"0687464269",
        count:"4",
        produit:{
            id:1,
            title:"Mens Casual Premium Slim Fit T-Shirts",
            price:22.3,
            description:"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            category:"men's clothing",
            rating:{
                count:259
            },
            image:"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",  
        }
    }]);

     



    useEffect(function(){
        fetch("https://fakestoreapi.com/products").then((response)=>{
            return response.json();
        }).then(function(data){
            setProduits(data)
        })
    },[])



    return(
        <>
 
          <Menu2/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/produit/listProduits" element={<ListProduits produits={produits}  setProduits={setProduits} produit={produit} setProduit={setProduit} commande={commande} setCommande={setCommande} commandes={commandes} setCommandes={setCommandes} quantite={quantite} setQuantite={setQuantite} comId={comId} />}/>
            <Route path="/produit/ajouterProduit" element={<AjouterProduit produits={produits} setProduits={setProduits} produit={produit} setProduit={setProduit}/>}/>
            <Route path="/produit/modifieProduit" element={<ModifieProduit produits={produits} setProduits={setProduits} produit={produit} setProduit={setProduit}/>}/>
            <Route path="/commande/listCommande" element={<ListCommande produits={produits} setProduits={setProduits} produit={produit} setProduit={setProduit} commande={commande} setCommande={setCommande} commandes={commandes} setCommandes={setCommandes} quantite={quantite} setQuantite={setQuantite}  comId={comId} />}/>
            <Route path="/commande/ajouterCommande" element={<AjouterCommande produits={produits} setProduits={setProduits} produit={produit} setProduit={setProduit} commande={commande} setCommande={setCommande} commandes={commandes} setCommandes={setCommandes} quantite={quantite} setQuantite={setQuantite} comId={comId} />}/>
            <Route path="/commande/modifierCommande" element={<ModifierCommande produits={produits} setProduits={setProduits} produit={produit} setProduit={setProduit} commande={commande} setCommande={setCommande} commandes={commandes} setCommandes={setCommandes} quantite={quantite} setQuantite={setQuantite} comId={comId} />}/>
            <Route path="/client/listProduitClient" element={<ListProduitClient produits={produits} setProduits={setProduits} produit={produit} setProduit={setProduit} commande={commande} setCommande={setCommande} commandes={commandes} setCommandes={setCommandes} quantite={quantite} setQuantite={setQuantite} comId={comId} />}/>
            <Route path="/test" element={<Test/>}/>
        </Routes>
        </>
    )
}
export default App2