import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function AjouterProduits({listProduits,produit,setListProduits,setProduit,categorie,setCategoire}){
    //declaration dyale navigate
    const navigate = useNavigate();

    //incrementer ID  ===> hadi bache id ib9a itzad 4ire bohdo
   useEffect(function(){
        if(listProduits.length > 0){
            setProduit({...produit,id:listProduits[listProduits.length - 1].id + 1})
        }else{
            setProduit({...produit,id:1})
        }

    },[listProduits.length])



    //ajouter
    function ajouter(){
        //hadi derta 4ire bache dak libelle li cayne fi categorie li chewazito fi select ithate lina fi libelle li kayne weste lcategorie li kayna fi produit
            categorie.map(function(item){
                if(produit.categorie.id == item.id){
                    produit.categorie.libelle = item.libelle
                }
                return item
            })
        
            //hadi hiya ajouter
        setListProduits([...listProduits,produit])

        // hade navigate hiya fache nclicker 3ela lbotona dini lhade lURL li kayn nite fi lpath dyale afficher idan 4adi dini lAfficher
        navigate("/")
    }

    return(
        <>

<div class="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
    <h2 class="text-2xl font-medium mb-4">Survey</h2>
    <form>
        <div class="mb-4">
            <label for="name" class="block text-gray-700 font-medium mb-2">Nom Produit</label>
            <input type="text" id="name" name="name"
            onChange={(e)=>setProduit({...produit,libelle:e.target.value})}
                class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required/>
        </div>
        <div class="mb-4">
            <label for="categorie" class="block text-gray-700 font-medium mb-2">Categorie</label>
            <select id="categorie" name="categorie"
            onChange={(e)=>setProduit({...produit,categorie:{...produit.categorie,id:e.target.value}})}
             class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required>

                <option value="">Select Categorie</option>
                {categorie.map(function(item,index){
                    return(
                        <option value={item.id} key={index}>{item.libelle}</option>
                    )
                })}
            </select>
        </div>
        <div class="mb-4">
            <label for="age" class="block text-gray-700 font-medium mb-2">Quantite Stockee</label>
            <input type="number" id="count" name="count"
            onChange={(e)=>setProduit({...produit,quantiteStockee:e.target.value})}
                class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required/>
        </div>

        <div class="mb-4">
            <label for="prix" class="block text-gray-700 font-medium mb-2">Prix</label>
            <input type="number" id="prix" name="prix"
            onChange={(e)=>setProduit({...produit,prix:e.target.value})}
                class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required/>
        </div>
        {/* <Link to="/"> */}
            <div>
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={ajouter}>Ajouter</button>
            </div>
        {/* </Link> */}

    </form>
</div>
        </>
    )
}
export default AjouterProduits