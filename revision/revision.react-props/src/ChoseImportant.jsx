import { useEffect, useState } from "react"

function ChoseImportant(){
    
    const [produits,setProduits] = useState([{idProduit:1,nom:"sac",prix:20},{idProduit:2,nom:"chemise",prix:13}])
    const [achats,setAchats] = useState([{idProduit:1,idClient:1,quantite:20},{idProduit:2,idClient:2,quantite:15}])
    const [clients,setClients] = useState([{idClient:1,nom:"MRIBEH",ville:"casa"},{idClient:2,nom:"ELADNANI",ville:"jadida"}])
    const [ventes,setVentes] = useState([])

    function getbyidproduit(id){
        return produits.find(function(item){
            return item.id == id
        })
    }

    function getbyidclient(id){
        return clients.find(function(item){
            return item.id == id
        })
    }

    function ajouter(){
        const _achats = achats.map(function(item){
            const _produits = getbyidproduit(item.idProduit);
            const _clients = getbyidclient(item.idClient)

            return {...item,nomProduit:_produits.nom,ville:_clients.ville,prix:_produits.prix,nomClient:_clients.nom}
        })
        setVentes(_achats);
        console.log(_achats)
    }
    


    return(
        <>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="border-b">
                                    <tr>
                                        
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Nom produit</th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Nom client</th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">ville</th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Prix</th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
            
                                    {/* Affichage */}
                                    
                                    {ventes.map(function(item,index){
                                        return(
                                            <tr class="border-b" key={index}>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.nomProduit}</td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.nomClient}</td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.ville}</td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.prix}</td>
                                                
                                            </tr>
                                        )
                                        
                                    })}
                                    
                                    
                                </tbody>
                            </table>
                        </div>
                        <button onClick={ajouter}>ajouter</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChoseImportant;