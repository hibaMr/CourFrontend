import { useDispatch, useSelector } from "react-redux";
import {
  addProductAction,
  deleteProductAction,
  updateProductAction,
} from "./redux/actions/productActions";
import { useState } from "react";

export default function Products() {
  const products = useSelector((state) => state.products);
  const [product, setProduct] = useState({});
  function onchangeInputs(e) {
    const name = e.target.name;
    const value = e.target.value;
    setProduct({ ...product, [name]: value });
  }
  const dispatch = useDispatch();
  const addProduct = () => {
    dispatch(addProductAction({ ...product }));
  };
  const deleteProduct = (id) => {
    dispatch(deleteProductAction(id));
  };
  const updateProduct = (item) => {
    dispatch(updateProductAction(item));
  };
  return (
    <>
      <div className="w-full flex justify-between h-56 flex-col items-center">
        <div className="produits">
          <table className="border-2 w-[500px] mt-10 text-center border-black">
            <thead>
              <tr>
                <th>Id</th>
                <th>Libelle</th>
                <th>Quantite</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.libelle}</td>
                    <td>{item.quantite}</td>
                    <td>
                      <button className="bg-yellow-500 px-3 py-2 ml-8 rounded-lg text-white"
                      onClick={()=>{setProduct(item)}}>
                        Modifier
                      </button>
                      <button
                        className="bg-red-500 px-3 py-2 ml-8 rounded-lg text-white"
                        onClick={() => {
                          deleteProduct(item.id);
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
        <div className="flex justify-evenly h-[400px] mt-10">
          <form
            action=""
            className="flex h-64 flex-col justify-evenly items-center  w-80 rounded-md  bg-gray-400"
          >
            <input
              type="text"
              className="w-40 pl-3 outline-none h-8 rounded-md"
              placeholder="Id"
              value={product.id}
              onChange={onchangeInputs}
              name="id"
            />
            <input
              type="text"
              className="w-40 pl-3 outline-none h-8 rounded-md"
              placeholder="Libéllé"
              value={product.libelle}
              onChange={onchangeInputs}
              name="libelle"
            />
            <input
              type="number"
              className="w-40 pl-3 outline-none h-8 rounded-md"
              placeholder="Quantité"
              value={product.quantite}
              onChange={onchangeInputs}
              name="quantite"
            />
            <div className="flex justify-between w-60">
            <button
              onClick={(e) => {
                e.preventDefault();
                addProduct();
              }}
              className="bg-blue-600 text-white w-20 h-7 rounded-md"
            >
              Ajouter
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                updateProduct(product);
              }}
              className="bg-blue-600 text-white w-28 h-7 rounded-md"
            >
              Modifier
            </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
