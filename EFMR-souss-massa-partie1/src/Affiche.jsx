import { useState } from "react";

function Affiche({produits}){

    const [categorie,setCategorie] = useState();
    const [ncategorie,setNcategorie] = useState([]);

    function rechercher(e){
        e.preventDefault();
        let newProduits = produits.filter(function(item){
            return item.category == categorie
        })
        setNcategorie(newProduits);
    }

    return(
        <>
        <form class="mt-10 mb-10 mx-auto max-w-xl py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300">
            <input type="text" placeholder="Search anything" onChange={(e)=>setCategorie(e.target.value)} class="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0" name="topic"/>
            <button class="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full font-medium tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] -mr-3" onClick={rechercher}>
                Search
            </button>
        </form>

        {ncategorie.length == 0 ? (
            <p className="text-red-600 mb-8">Aucun produit a afficher.</p>
        ):
            ncategorie.map(function(item,index){
                return(
                    <div >
                        <ul class="mt-8 mb-8 space-y-3 font-medium">
                            <li class="flex items-start lg:col-span-1">
                                <div class="flex-shrink-0">
                                    <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <p class="ml-3 leading-5 text-gray-600">
                                    {item.title}
                                </p>
                            </li>

                            <li class="flex items-start lg:col-span-1">
                                <div class="flex-shrink-0">
                                    <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <p class="ml-3 leading-5 text-gray-600">
                                    {item.price} DH
                                </p>
                            </li>
                            
                        </ul>
                    </div>
                )
            })
            
        }

        

        <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
    <table className="min-w-full bg-white shadow-md rounded-md">
        <thead>
            <tr class="bg-gray-100">
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Réference</th>
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Nom produit</th>
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Description</th>
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Prix</th>
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Catégorie</th>
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Image</th>
            </tr>
        </thead>
        <tbody class="bg-white">
            {produits.map(function(item,index){
                return(
                    <tr key={index}>
                        <td className="py-2 px-4 border">{item.id}</td>
                        <td className="py-2 px-4 border">{item.title}</td>
                        <td className="py-2 px-4 border">{item.description}</td>
                        <td className="py-2 px-4 border">{item.price}</td>
                        <td className="py-2 px-4 border">{item.category}</td>
                        <td className="py-2 px-4 border"><img class="h-auto w-24" src= {item.image}/></td>
                    </tr>
                )
            })}
            
            
        </tbody>
    </table>
</div>
        </>
    )
}
export default Affiche;