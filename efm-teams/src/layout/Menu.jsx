import { Link } from "react-router-dom";

function Menu(){
    return(
        <nav class="hidden sm:inline-block">
        <ul class="flex gap-3 md:gap-5 lg:gap-10">
            <li class="uppercase font-bold text-xs text-white">
                <Link to="/AnnsByReg">
                    <a href="#">AnnsByReg</a>
                </Link>
                
            </li>
            <li class="uppercase font-bold text-xs text-white"><a href="#">SERVICES</a></li>
            <li class="uppercase font-bold text-xs text-white"><a href="#">TECHNOLOGIES</a></li>
            <li class="uppercase font-bold text-xs text-white"><a href="#">HOW TO</a></li>
        </ul>
    </nav>
    )
}
export default Menu;