import { useState } from "react";
import { Link } from "react-router-dom";

function ModifierCommande({produits,setProduits,produit,setProduit,commande,setCommande,commandes,setCommandes,quantite,setQuantite,comId}){

    const [_commande,_setCommande] = useState({
            id:commande.id,
            nom: commande.nom,
            adress: commande.adress,
            email: commande.email,
            tel: commande.tel,
            count: commande.count,
            produit: commande.produit  
        })

        const [_produit,_setProduit] = useState({
            id:produit.id,
            title:produit.title,
            price:produit.price,
            description:produit.description,
            category:produit.category,
            rating: produit.rating,
            
            image:produit.image,
        })


    function modifier(){

        _commande.produit = _produit

        const _commandes = commandes.map(function(item){
            if(item.id == _commande.id){
                item = _commande
            }
            return item
        })

        setCommandes([..._commandes])
    }

    

    return(
        <>
        <div class="flex items-center justify-center p-12">
    <div class="mx-auto w-full max-w-[550px] bg-white">
        <form>
            <div class="mb-5">
                <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                    Nom
                </label>
                <input type="text" name="name" id="name" placeholder="Full Name" 
                        value={_commande.nom}
                        onChange={(e)=>_setCommande({..._commande,nom:e.target.value})}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="mb-5">
                <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                    Address
                </label>
                <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                        value={_commande.adress}
                        onChange={(e)=>_setCommande({..._commande,adress:e.target.value})}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="mb-5">
                <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
                    Email
                </label>
                <input type="email" name="email" id="email" placeholder="Enter your email"
                        value={_commande.email}
                        onChange={(e)=>_setCommande({..._commande,email:e.target.value})}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label for="count" class="mb-3 block text-base font-medium text-[#07074D]">
                            Quantité
                        </label>
                        <input type="number" name="count" id="count" placeholder="count"
                                value={_commande.count}
                                onChange={(e)=>_setCommande({..._commande,count:e.target.value})}
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label for="tel" class="mb-3 block text-base font-medium text-[#07074D]">
                            Numero Tel
                        </label>
                        <input type="tel" name="tel" id="tel" placeholder="enter your tel"
                                value={_commande.tel}
                                onChange={(e)=>_setCommande({..._commande,tel:e.target.value})}
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
            </div>

            <div class="py-5">
            pour modifier la commande <span></span>
            <Link to="/client/listProduitClient">
                <a href="#" class="text-base font-medium leading-6 text-red-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-red-700 " onClick={()=>setCommande({...commande})}> 
                    Cliquez ici !
                </a>
            </Link>
            </div>

            <div>
                <Link to="/commande/listCommande">
                <button
                    class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none" onClick={modifier}>
                        Mdifier
                </button>
                </Link>
            </div>
        </form>
    </div>
</div>
        </>
    )
}
export default ModifierCommande;