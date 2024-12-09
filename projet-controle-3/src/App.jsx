import { Route, Routes } from "react-router-dom"
import Menu from "./Menu"
import Home from "./Home"
import { useEffect, useState } from "react"
import ListProduits from "./produits/ListProduits";
import Test from "./Test";
import AjouterProduit from "./produits/AjouterProduit";
import ModifieProduit from "./produits/ModifieProduit";
import ListVentes from "./commande/ListCommande";



function App(){

    const [produit,setProduit] = useState({
        id:"",
        title:"",
        price:"",
        description:"",
        category:"",
        image:"",
    })

    const [produits,setProduits] = useState([]);

    useEffect(function(){
        fetch("https://fakestoreapi.com/products").then((response)=>{
            return response.json();
        }).then(function(data){
            setProduits(data)
        })
    },[])

    return(
        <>
        
        <header class="fixed w-full bg-white text-indigo-800 z-50 shadow-lg animate-slide-down">
        <div class="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between h-16">
            <button class="mobile-menu-button p-2 lg:hidden">
                <span class="material-icons-outlined text-2xl">menu</span>
            </button>
            <div class="text-xl font-bold text-blue-900">
                Admin<span class="text-indigo-800">Panel</span>
            </div>
            <div class="flex items-center space-x-2">
                <span class="material-icons-outlined p-2 text-2xl cursor-pointer hover:text-indigo-800 transition-transform duration-300 hover:scale-110 hidden md:block">search</span>
                <span class="material-icons-outlined p-2 text-2xl cursor-pointer hover:text-indigo-800 transition-transform duration-300 hover:scale-110 hidden md:block">notifications</span>
                <img class="w-10 h-10 rounded-full transition-transform duration-300 hover:scale-110 object-cover" 
                     src="https://i.pinimg.com/564x/de/0f/3d/de0f3d06d2c6dbf29a888cf78e4c0323.jpg" 
                     alt="Profile"/>
            </div>
        </div>
    </header>
            <div class="pt-16 max-w-7xl mx-auto flex">
          <Menu/>
          <main class="flex-1 bg-indigo-50 p-4">
        <Routes>
        <Route path="/" element={<Home/>}/>
            <Route path="/produit/listProduits" element={<ListProduits produits={produits} setProduits={setProduits} produit={produit} setProduit={setProduit}/>}/>
            <Route path="/produit/ajouterProduit" element={<AjouterProduit produits={produits} setProduits={setProduits} produit={produit} setProduit={setProduit}/>}/>
            <Route path="/produit/modifieProduit" element={<ModifieProduit produits={produits} setProduits={setProduits} produit={produit} setProduit={setProduit}/>}/>
            <Route path="/vente/listVentes" element={<ListVentes produits={produits} setProduits={setProduits} produit={produit} setProduit={setProduit}/>}/>
            <Route path="/test" element={<Test/>}/>
        </Routes>
        </main>
        </div>
        </>
    )
}
export default App