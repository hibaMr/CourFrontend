import { useState } from "react"
import { useDispatch } from "react-redux";
import { addProduitAction } from "./redux/actions/produitsAction";
import { Link } from "react-router-dom";

function AddProduit(){
    const [ref,setRef] = useState();
    const [nom,setNom] = useState();
    const [categorie,setCategorie] = useState();

    const dispatch = useDispatch();
    function addProduit(){
        dispatch(addProduitAction({ref:ref,nom:nom,categorie:categorie}))
    }

    return(
        <>
            <div class="flex justify-center mt-20 px-8">
                <form class="max-w-2xl">
                    <div class="flex flex-wrap border shadow rounded-lg p-3 dark:bg-gray-600">
                        <h2 class="text-xl text-gray-600 dark:text-gray-300 pb-2">Account settings:</h2>

                        <div class="flex flex-col gap-2 w-full border-gray-400">

                            <div>
                                <label class="text-gray-600 dark:text-gray-400">Réferance
                                    
                                </label>
                                <input
                                    class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                                    type="text" onChange={(e)=>setRef(e.target.value)}/>
                            </div>

                            <div>
                                <label class="text-gray-600 dark:text-gray-400">Nom</label>
                                <input
                                    class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                                    type="text" onChange={(e)=>setNom(e.target.value)}/>
                            </div>

                            <div>
                                <select  class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100" onChange={(e)=>setCategorie(e.target.value)}>
                                    <option >Informatique</option>
                                    <option >TV</option>
                                    <option >Gestion</option>
                                </select>
                            </div>
                            <div class="flex justify-end">
                                <Link to="/listProduit">
                                    <button
                                        class="py-1.5 px-3 m-1 text-center bg-violet-700 border rounded-md text-white  hover:bg-violet-500 hover:text-gray-100 dark:text-gray-200 dark:bg-violet-700"
                                        type="submit" onClick={addProduit}>Save changes</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default AddProduit