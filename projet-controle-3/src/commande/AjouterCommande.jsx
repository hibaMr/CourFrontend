import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function AjouterCommande({produits,setProduits,produit,setProduit,commande,setCommande,commandes,setCommandes, quantite,setQuantite,comId}){

    const [_produit,_setProduit] = useState({
        id:produit.id,
        title:produit.title,
        price:produit.price,
        description:produit.description,
        category:produit.category,
        rating: produit.rating,
        
        image:produit.image,
    })
   

    const [color,setColor] = useState("[#e0e0e0]");
    const [message,setMessage] = useState("");
    const [urls,setUrls] = useState("");
    const [length,setLength] = useState(commande.length+1);
    
     

    useEffect(function(){

        if(commandes.length > 0){
            setCommande({...commande,id:commandes[commandes.length - 1].id + 1})
        }else{
            setCommande({...commande,id :1})
        }

    },[commandes.length])

    function commander(){
        commande.produit = _produit

        const _produits = produits.map(function(item){
            if(item.id  == commande.produit.id){
                item.rating.count =  item.rating.count - commande.count
            }
             return item
           
        })
        setProduits([..._produits])

        // setCommandes([...commandes,{...commande}])

        
        /// errror  ⛔ 
        
        produits.map(function(item){
            if(item.rating.count > commande.count){
                
                
                    setCommandes([...commandes,{...commande}])
                    //urls = "/commande/listCommande"
                    setUrls("yes")
                    
                
                
            }
            // else{
            //         // setMessage("cette quantite est grande");
            //         // setColor("red-800");
            //         // urls = "/commande/ajouterCommande"
                
            //         setCommandes([...commandes])
            //         //urls = "/commande/ajouterCommande"
            //         setUrls("non") 
                    
                
                
            // }

        })
    
        
        
    }
    console.log(length)
    console.log(commandes.length)
    
    let url = ""
    if(urls == "yes"){
        console.log("okkkkkkkk")
        url = "/commande/listCommande";
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
                        onChange={(e)=>setCommande({...commande,nom:e.target.value})}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="mb-5">
                <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                    Address
                </label>
                <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                        onChange={(e)=>setCommande({...commande,adress:e.target.value})}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="mb-5">
                <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
                    Email
                </label>
                <input type="email" name="email" id="email" placeholder="Enter your email"
                        onChange={(e)=>setCommande({...commande,email:e.target.value})}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label for="count" class="mb-3 block text-base font-medium text-[#07074D]">
                            Quantité
                        </label>
                        <input type="number" name="count" id="count" placeholder="count"
                                onChange={(e)=>setCommande({...commande,count:e.target.value})}
                            class={`w-full rounded-md border border-${color} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-${color} focus:shadow-md`} />

                            <p className={`text-${color}`}>{message}</p>
                    </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label for="tel" class="mb-3 block text-base font-medium text-[#07074D]">
                            Numero Tel
                        </label>
                        <input type="tel" name="tel" id="tel" placeholder="enter your tel"
                                onChange={(e)=>setCommande({...commande,tel:e.target.value})}
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
            </div>

            

            <div>
                
            <Link to={url}>
                                <button
                                    class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none" onClick={commander}>
                                    Commander
                                </button>
                            </Link>
                {/* {produits.map(function(item){
                    if(item.rating.count > commande.count){
                        return(
                            <Link to="/commande/listCommande">
                                <button
                                    class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none" onClick={commander}>
                                    Commander
                                </button>
                            </Link>
                        )
                    }else{
                        return(
                            <Link to="/commande/ajouterCommande">
                                <button
                                    class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none" >
                                    Commander
                                </button>
                            </Link>
                        )
                    }
                })} */}
                
            </div>
        </form>
    </div>
</div>
        </>
    )
}
export default AjouterCommande