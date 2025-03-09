import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AjouterProduit } from "../redux/action/actionProduit";
import { Link } from "react-router-dom";

function Ajouter(){

    const [produit,setProduit] = useState({
        id:'',
        nom:"",
        categorie:{id:'',libelle:""},
        quantite:'',
        prix:''
    })

    const categorie = useSelector((state)=>state.categorie);

    const dispatch = useDispatch();

    function ajouter(){
        return dispatch(AjouterProduit({...produit}))
    }

    return(
        <>
          
<div class="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
<div class="mt-10 text-center font-bold">Contact Us</div>
<div class="mt-3 text-center text-4xl font-bold">Make an Appointment</div>
<div class="p-8">
  <div class="flex gap-4">

    <input type="text" name="nom" class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Nom Produit *" onChange={(e)=>setProduit({...produit,nom:e.target.value})}/>
    <input type="number" name="qtn" class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="quantite *" onChange={(e)=>setProduit({...produit,quantite:e.target.value})} />
  </div>
  <div class="my-6 flex gap-4">
    <select name="select" id="select" class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"  onChange={(e)=>setProduit({...produit,categorie:{...produit.categorie,id:e.target.value}})}>
        {categorie.map(function(item,index){
            return(
                <option  class="font-semibold text-slate-300" key={index} value={item.id}>{item.libelle}</option>
            )
        })}
            
          
    </select>
    
  </div>
  <div class="">
    
  <input type="number" name="prix" class="mt-1 block mb-10  w-full w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"  placeholder="Prix *" onChange={(e)=>setProduit({...produit,prix:e.target.value})} />
  </div>
  <div class="text-center">
        <Link to="/">
          <a class="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white" onClick={ajouter}>Book Appoinment</a>
        </Link>
  </div>
</div>
</div>
        </>
    )
}
export default Ajouter;