import { useState } from "react";
import { useDispatch } from "react-redux";
import { addArticleAction } from "./redux/actions/articleActions";

function AjouterProduit(){

    const [id,setId] = useState(1);
    const [designation,setDesignation] = useState("");
    const [famille,setFamille] = useState('');

    const dispatch = useDispatch();

    const addProduct=(e)=>{
        e.preventDefault();
        dispatch(addArticleAction({id:id,designation:designation, famille:famille}))
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
              ID
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="id"
              type="number"
              placeholder="Auto incremented"
              onChange={(e)=>setId(e.target.value)}
            ></input>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
            designation
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="libelle"
              type="text"
              placeholder="Nom du produit"
              onChange={(e)=>setDesignation(e.target.value)}
            ></input>
          </div>
          
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="service">
            famille
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="id"
              type="number"
              placeholder="Auto incremented"
              onChange={(e)=>setFamille(e.target.value)}
            ></input>

            
          </div>
          
          <div class="flex items-center justify-center mb-4">
            <button
              class="bg-green-500 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={addProduct}
            >
              Valider
            </button>
          </div>
        </form>
      </div>
        </>
    )
}
export default AjouterProduit;