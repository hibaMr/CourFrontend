import { Link } from "react-router-dom";

function Menu(){

    return(
        <>
            <div class="w-screen flex flex-col items-center  dark:bg-white bg-zinc-100">
                <div class="sm:w-fit xs:w-[90%] sm:px-4  py-2 rounded-sm flex md:flex-no-wrap xs:flex-wrap md:gap-4 xs:gap-1 justify-center dark:bg-gray-200  text-dark dark:text-black cursor-pointer md:text-lg md:font-semibold xs:text-sm">
                    <Link to="/"><div class="px-4 border-b-2 dark:border-blue-500 border-yellow-600 hover:border-b-2 hover:border-yellow-600 rounded-b-md">Home</div></Link>
                    <Link to="/produits"><div class="px-4 hover:border-b-2 dark:hover:border-blue-500 hover:border-yellow-600 rounded-b-md">Produits</div></Link>
                    <Link to="/ventes"><div class="px-4 hover:border-b-2 dark:hover:border-blue-500 hover:border-yellow-600 rounded-b-md">Ventes</div></Link>
                </div>
            </div>
        </>
    )
}
export default Menu;