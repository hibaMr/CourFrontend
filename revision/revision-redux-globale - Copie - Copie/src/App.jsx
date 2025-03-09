import { Route, Routes } from "react-router-dom";
import SaisieAchats from "./SaisieAchats";
import Facture from "./Facture";
import Products from "./Products";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products/>}></Route>
        <Route path="/SaisieAchats" element={<SaisieAchats/>}></Route>
        <Route path="/Facture" element={<Facture/>}></Route>
      </Routes>
    </>
  );
}
