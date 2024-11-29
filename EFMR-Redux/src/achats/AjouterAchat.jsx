import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAchatAction } from "../redux/actions/articleActions";
import { useNavigate } from "react-router-dom";


function AjouterAchat(){

  const navigate = useNavigate()

  const productState = useSelector((state)=>state.produits);

  const [numero,setNumero] = useState();
  const [codeProduit,setCodeProduit] = useState();
  const [qte,setQte] = useState();

  const dispatch = useDispatch();

  function ajouterAchat(e){
    e.preventDefault();
    dispatch(addAchatAction({numero:numero,codeProduit:codeProduit,qte:qte}))
    navigate('/achats')
  }
    

    return(
        <>
            <div class="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
          Ajouter un Produit
        </div>
        <form class="py-4 px-6"  >
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="name">
            Numero
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="id"
              type="number"
              placeholder="Auto incremented"
              onChange={(e)=>setNumero(e.target.value)}
            ></input>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
            Code Produit
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="libelle"
              type="text"
              placeholder="Nom du produit"
              onChange={(e)=>setCodeProduit(e.target.value)}
            ></input>
          </div>

          <select class="block w-sm text-sm font-medium transition duration-75 border border-gray-800 rounded-lg shadow-sm h-9 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none" >
          {productState.map(function(item,index){
            return(
              <option value={item.codeProduit} key={index}>{item.intitule}</option>
            )
          })}
            
          </select>
          
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="service">
            Quantite
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="id"
              type="number"
              placeholder="Auto incremented"
              onChange={(e)=>setQte(e.target.value)}
            ></input>

            
          </div>
          
          <div class="flex items-center justify-center mb-4">
              <button
                class="bg-green-500 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={ajouterAchat}
              >
                Valider
              </button>
          </div>
        </form>
      </div>
        </>
    )
}
export default AjouterAchat;