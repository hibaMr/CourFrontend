import { Route, Routes } from "react-router-dom";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Login from "./annance/Login";
import AnnsByReg from "./annance/AnnsByReg";


function App(){

    
    return(
        <>
            <section class="bg-[#302c42] overflow-hidden pb-9 px-4 md:px-8">
                <Header/>
                <Routes>
                    <Route path="/login" element={<Login  />}/>
                    <Route path="/AnnsByReg" element={<AnnsByReg  />}/>
                </Routes>
                <Content/>
                <Footer/>
            </section>
            
        </>
        
    )
}
export default App;