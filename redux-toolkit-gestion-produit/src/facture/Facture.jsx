import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { afficherAchatsAction, getProduitsByCode } from "../redux/actions/articleActions";

function Facture(){

    const [numero,setNumero] = useState();

    const factureState = useSelector((state)=>state.facture);

    const productState = useSelector((state)=>state.objetProduit);


    const dispatch = useDispatch();

    function afficherAchats(){
        dispatch(afficherAchatsAction(numero))
        console.log(factureState)
        getProduit()
    }

    function getProduit(){
        dispatch(getProduitsByCode(numero))
    }

    
    return(
        <>
            <label
                class="mx-auto mt-40 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
                for="search-bar">
                <input id="search-bar" placeholder="Numero du client" onChange={(e)=>setNumero(e.target.value)}
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

                        <div class="flex items-center transition-all opacity-1 valid:" onClick={afficherAchats}><span 
                                class="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                                Search
                            </span>
                        </div>

                    </div>
                    
                </button>
            </label>

            <div class="p-4">
    <div
        class="mx-auto flex h-[500px] max-w-[90rem] flex-col justify-center rounded-2xl bg-blue-500 bg-opacity-5 px-4 text-blue-500 dark:bg-opacity-20 md:h-[400px] lg:h-[500px]  relative border-4 border-blue-500">
        <div class="pointer-events-none absolute left-0 top-0 z-[-1] h-full w-full rounded-xl bg-white dark:bg-black">
        </div>
        <span class="mb-8 text-center text-4xl font-bold">Top Notch Features</span>
        <ul
            class="flex flex-wrap text-sm font-medium text-gray-700 dark:text-white sm:text-base md:mx-auto md:max-w-screen-sm">
                {factureState.map(function(item,index){
                    return(
                        <>
                        <li class="my-1 flex w-1/2 items-center" key={index}>
                            <svg class="mr-2 flex-shrink-0 text-blue-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>nemero : {item.numero}
                        </li>

                        <li class="my-1 flex w-1/2 items-center" key={index}>
                            <svg class="mr-2 flex-shrink-0 text-blue-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>code produit : {item.codeProduit}
                        </li>

                        <li class="my-1 flex w-1/2 items-center" key={index}>
                            <svg class="mr-2 flex-shrink-0 text-blue-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>quantite : {item.qte}
                        </li>

                        </>
                    )
                })}

                {productState.map(function(elem,index){
                    return(
                        <>
                        <li class="my-1 flex w-1/2 items-center" key={index}>
                            <svg class="mr-2 flex-shrink-0 text-blue-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>intitule : {elem.intitule}
                        </li>

                        <li class="my-1 flex w-1/2 items-center" key={index}>
                            <svg class="mr-2 flex-shrink-0 text-blue-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>prix : {elem.prix}
                        </li>

                        <li class="my-1 flex w-1/2 items-center" key={index}>
                            <svg class="mr-2 flex-shrink-0 text-blue-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>quantite : {elem.quantite}
                        </li>
                    </>
                    )
                })
                    
                }
            
            
            <li></li>
        </ul>
    </div>
</div>
        </>
    )
}
export default Facture