import { useDispatch, useSelector } from "react-redux"
import { deleteProduitAction } from "./redux/actions/produitsAction";
import { Link } from "react-router-dom";

function ListProuduit(){

    const produits = useSelector((state)=>state.produits);

    const dispatch = useDispatch();
    function supprimerProduit(ref){
        dispatch(deleteProduitAction({ref:ref}))
    }
    return(
        <>
            <Link to='/addProduit'>
                <button class="px-6 m-8 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                Ajouter
                </button>
            </Link>

            <div class="shadow-lg  rounded-lg overflow-hidden mx-4 md:mx-10">
                <table class="w-full table-fixed">
                    <thead>
                        <tr class="bg-gray-100">
                            <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Referance</th>
                            <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Nom</th>
                            <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Categorie</th>
                            <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Event</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white">
                        {produits.map(function(item,index){
                            return (
                                <tr key={index}>
                                    <td class="py-4 px-6 border-b border-gray-200">{item.ref}</td>
                                    <td class="py-4 px-6 border-b border-gray-200 truncate">{item.nom}</td>
                                    <td class="py-4 px-6 border-b border-gray-200">{item.categorie}</td>
                                    <td class="py-4 px-6 border-b border-gray-200">
                                        <button type="button"
                                            class="mr-3 text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={()=>supprimerProduit(item.ref)}>Supprimer</button>
                                    </td>
                                </tr>
                            )
                        })}
                        
                        
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListProuduit