import { Route, Routes } from "react-router-dom";
import ListProuduit from "./ListProduit";
import AddProduit from "./AddProduit";
import Menu from "./Menu";

function App(){
    return(
        <>
            <Menu/>
            <Routes>
                <Route path="/listProduit" element={<ListProuduit/>}/>
                <Route path="/addProduit" element={<AddProduit/>}/>
            </Routes>
            
        </>
    )
}
export default App;