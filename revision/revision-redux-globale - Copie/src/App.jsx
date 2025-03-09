import { Route, Routes } from "react-router-dom";
import SaisieAchats from "./SaisieAchats";
import Facture from "./Facture";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SaisieAchats></SaisieAchats>}></Route>
        <Route path="/Facture" element={<Facture></Facture>}></Route>
      </Routes>
    </>
  );
}
