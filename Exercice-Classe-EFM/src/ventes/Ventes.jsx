import { useState } from "react"

function Ventes({ventes,produits,setVentes}){

    const [id,setId] = useState();
    const [listProduit,setListProduit] = useState([]);

    function afficher(){
        let _ventes = ventes.filter(function(item){
            return item.id == id
        })
        setVentes(_ventes)
    }
    

    function afficherD(){
        let _ventes = ventes.map(function(elem){
            let newProduit = produits.filter(function(item){
                return item.id == elem.id
            })
            return newProduit
        })
        
        setListProduit(_ventes)
        console.log(listProduit)
    }

    return(
        <>
            <h2 class="text-3xl font-bold text-center sm:text-5xl m-5">list des ventes</h2>

            <label
                class="mx-auto mt-40 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
                for="search-bar">
                <input id="search-bar" placeholder="Numero du client" onChange={(e)=>setId(e.target.value)}
                    class="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white" />
                <button
                    class="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
                    
                    <div class="relative">
                        <div
                            class="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                            <svg class="opacity-0 animate-spin w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                        </div>

                        <div class="flex items-center transition-all opacity-1 valid:" onClick={afficher}><span 
                                class="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                                Search
                            </span>
                        </div>

                    </div>
                    
                </button>
            </label>

            <div className="overflow-hidden mt-8">
                
                <table className=" min-w-full rounded-xl">
                    <thead>
                        <tr className="bg-gray-50">
                            <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl"> Id </th>
                            <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Libelle</th>
                            <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl">Evenement</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300 ">
                        {ventes.map(function(item,index){
                            return (
                                <tr className="bg-white transition-all duration-500 hover:bg-gray-50" key={index}>
                            <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">{item.id}</td>
                            <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{item.libelle} </td>
                            <td className=" p-5 ">
                                <div className="flex items-center gap-1">

                                    <button className=" m-5 border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
                                        Vente
                                    </button>

                                    <button className=" m-5 border border-indigo-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline" onClick={afficherD}>
                                        Afficher d'etail
                                    </button>

                                </div>
                            </td>
                        </tr>
                            )
                        })}
                            

                        
                        
                    </tbody>
                </table>
            </div>

            <div>
                {/* <ul>
                    {listProduit.map(function(item,index){
                        return(
                            <>
                                <li key={index}>{item.id}</li>
                                <li key={index}>{item.libelle}</li>
                                <li key={index}>{item.categorie.libelle}</li>
                                <li key={index}>{item.quantiteStockee}</li>
                                <li key={index}>{item.prix}</li>
                            </>
                        )
                    })}
                    
                </ul> */}
            </div>
            
        </>
    )
}
export default Ventes
