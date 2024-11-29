import { useState } from "react"

function InfoProd(){

    const [produit,setProduit] = useState({id:"",reference:"",nomProduit:"",categorieProduit:"",description:"",prix:"",imageProduit:""});
    const [listProduits,setListProduits] = useState([]);

    function valider(e){
        e.preventDefault();
        setListProduits([...listProduits,{...produit}])
        console.log(listProduits)
    }

    return(
        <>
            <div className="flex justify-center items-start space-x-8 p-8 bg-gray-100">
      {/* Section du formulaire */}
      <div className="w-1/2 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">Gestion des produits:</h2>
        <form className="space-y-4" >
          {/* Champ Référence */}
          <div>
            <label htmlFor="reference" className="block text-sm font-medium">
              Référence:
            </label>
            <input
              type="text"
              id="reference"
              name="reference"
              onChange={(e)=>setProduit({...produit,reference:e.target.value})}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Champ Nom Produit */}
          <div>
            <label htmlFor="nomProduit" className="block text-sm font-medium">
              Nom Produit:
            </label>
            <input
              type="text"
              id="nomProduit"
              name="nomProduit"
              onChange={(e)=>setProduit({...produit,nomProduit:e.target.value})}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Champ Catégorie Produit */}
          <div>
            <label
              htmlFor="categorieProduit"
              className="block text-sm font-medium"
            >
              Catégorie Produit:
            </label>
            <select
              id="categorieProduit"
              name="categorieProduit"
              onChange={(e)=>setProduit({...produit,categorieProduit:e.target.value})}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="Petit déjeuner">Petit déjeuner</option>
              <option value="Snacks">Snacks</option>
              <option value="Boissons">Boissons</option>
            </select>
          </div>

          {/* Champ Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              onChange={(e)=>setProduit({...produit,description:e.target.value})}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>

          {/* Champ Prix */}
          <div>
            <label htmlFor="prix" className="block text-sm font-medium">
              Prix:
            </label>
            <input
              type="number"
              id="prix"
              name="prix"
              onChange={(e)=>setProduit({...produit,prix:e.target.value})}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Champ Image Produit */}
          <div>
            <label htmlFor="imageProduit" className="block text-sm font-medium">
              Image Produit:
            </label>
            <input
              type="file"
              id="imageProduit"
              name="imageProduit"
              onChange={(e)=>setProduit({...produit,imageProduit:e.target.files[0].name})}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Bouton de soumission */}
          <button
            type="submit"
            onClick={valider}
            className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600"
          >
            Valider
          </button>
        </form>
      </div>


      {listProduits.map(function(item,index){

        return (
            <>
            <div className="w-1/2 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-600">Liste des produits</h2>
        
        
          <ul className="space-y-4">
            
                <li  className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200" key={index}>
                    <h3 className="font-semibold text-indigo-600">{item.nomProduit}</h3>
                    <p className="text-gray-700">Référence: {item.reference} </p>
                    <p className="text-gray-700">Catégorie: {item.categorieProduit} </p>
                    <p className="text-gray-700">Prix: {item.prix}</p>
                    <p className="text-gray-700">Description: {item.description}</p>
                    <p className="text-gray-700">Image: <img src={"/images/" + item.imageProduit}/> </p>
                </li>
            
              
            
          </ul>
      </div>
            </>
        )
    
})}
      </div>
        </>
    )
}
export default InfoProd