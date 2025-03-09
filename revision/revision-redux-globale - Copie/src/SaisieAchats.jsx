import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ajoutetAchatAction,
  modifierProduit,
  supprimerAchatAction,
} from "./redux/action/productActions";
import { Link } from "react-router-dom";
// import {  motion } from 'framer-motion';

function SaisieAchats() {
  const produits = useSelector((state) => state.produits);
  const [achatsFiltres, setAchatsFiltres] = useState([]);
  const [produit, setProduit] = useState({
    numero: "",
    codeProduit: "",
    qte: 0,
  });
  function getProduitByCode(code) {
    if (code != "") {
      return produits.find((item) => code == item.codeProduit);
    }
    return "";
  }
  

  const numero = useRef("");
  const achats = useSelector((state) => state.achats);
  const dispatch = useDispatch();
  function ajoutetAchat() {
    dispatch(ajoutetAchatAction({ ...produit }));
    dispatch(
      modifierProduit({
        ...getProduitByCode(produit.codeProduit),
        qteStockees:
          getProduitByCode(produit.codeProduit).qteStockees - produit.qte,
      })
    );
    setProduit({ numero: "", codeProduit: "", qte: 0 });
  }
  function supprimerAchat(id) {
    dispatch(supprimerAchatAction(id));
  }
  function onchangeInputs(e) {
    const name = e.target.name;
    const value = e.target.value;
    setProduit({ ...produit, [name]: value });
  }

  return (
    <>
      {" "}
      <div className="flex w-full justify-center">
        <Link
          to={"/Facture"}
          className="bg-purple-600 text-center mt-5 text-white w-28 h-7 rounded-md"
        >
          Facture
        </Link>
      </div>
      <div className="flex  justify-center  h-[400px] mt-10">
        {/* <motion.form
          drag
          className="flex flex-col justify-evenly items-center  w-80 rounded-md  bg-gray-400"
        > */}
          <input
            onChange={onchangeInputs}
            name="numero"
            type="text"
            className="w-40 pl-3 outline-none h-8 rounded-md"
            placeholder="Numéro"
          />
          <div>
            <select
              onChange={onchangeInputs}
              name="codeProduit"
              className="w-40 pl-3 outline-none h-8 rounded-md"
            >
              <option value={""}>Choisir un produit</option>
              {produits.map((item) => {
                return (
                  <option key={item.codeProduit} value={item.codeProduit}>
                    {item.intitule}
                  </option>
                );
              })}
            </select>
            <p>
              {produit.codeProduit
                ? `Quantite en stock ${
                    getProduitByCode(produit.codeProduit).qteStockees
                  }`
                : "choisisser un produit"}
            </p>
          </div>
          <input
            onChange={onchangeInputs}
            name="qte"
            type="number"
            className="w-40 pl-3 outline-none h-8 rounded-md"
            placeholder="Quantité"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              ajoutetAchat();
            }}
            className="bg-blue-600 text-white w-28 h-7 rounded-md disabled:bg-blue-300 cursor-pointer disabled:cursor-not-allowed"
            disabled={
              getProduitByCode(produit.codeProduit).qteStockees > 0 &&
              produit.qte <=
                getProduitByCode(produit.codeProduit).qteStockees &&
              produit.qte > 0
                ? false
                : true
            }
          >
            Ajouter
          </button>
        {/* </motion.form> */}
      </div>
      <div className="w-full flex flex-col items-center py-10">
        <div>
          <input
            className="w-40 border-2 mr-6 border-slate-500 pl-3 outline-none h-8 rounded-full"
            type="text"
            ref={numero}
            placeholder="Saisir un numéro"
          />
          <button
            className="bg-yellow-600 px-2 py-1 rounded-md"
            onClick={() => {
              setAchatsFiltres([
                ...achats.filter((item) => {
                  return item.numero == numero.current.value;
                }),
              ]);
            }}
          >
            Filtrer
          </button>
        </div>
        <ul>
          {achatsFiltres.map((item, index) => {
            return (
              <li key={index}>
                Numéro :{item.numero} Achat :
                {produits[item.codeProduit - 1].intitule} Quantite:{item.qte}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full flex justify-center mt-4   ">
        <table className="border-2 w-[500px] text-center border-black">
          <thead>
            <tr>
              <th>Numéro</th>
              <th>Produit</th>
              <th>Quantite</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {achats.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.numero}</td>
                  <td>{getProduitByCode(item.codeProduit).intitule}</td>
                  <td>{item.qte}</td>
                  <td>
                    <button
                      className="bg-red-600 px-2 py-1 rounded-md"
                      onClick={() => {
                        supprimerAchat(item.numero);
                      }}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SaisieAchats;
