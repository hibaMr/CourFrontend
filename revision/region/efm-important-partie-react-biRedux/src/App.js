import { useEffect, useState } from "react";

function App(){

    const [stagiaires,setStagiaires] = useState([]);
    const [stagiaires2,setStagiaires2] = useState([]);
    const [stagiaire,setStagiaire] = useState({
        id :null,
        matricule : "",
        nom : "",
        ville :"",
        codepostal :null,
        moyenne :null,
    })

    useEffect(function(){
        if(stagiaires.length > 0){
            setStagiaire({...stagiaire,id:stagiaires[stagiaires.length - 1].id + 1})
        }else{
            setStagiaire({...stagiaire,id:1})
        }
    },[stagiaires.length])

    useEffect(function(){
        setStagiaires([
            {id :1,matricule :1454,nom : "Alaoui" ,codepostal :20400,ville :"casa",moyenne :12.56}, 
            {id :2, matricule :1455,nom : "Mansouri" ,codepostal :20400,ville :"casa",moyenne :14.67}
        ])
    },[])

    function ajouter(){
        const liststagiaires = stagiaires.find(function(item){
            return item.matricule == stagiaire.matricule
        }) 
        console.log(liststagiaires)
        if(!liststagiaires){
            if(stagiaire.nom != "" && stagiaire.matricule != "" && stagiaire.ville != ""  && stagiaire.codepostal != ""  && stagiaire.moyenne != "" ){
                if(stagiaire.moyenne >= 0 && stagiaire.moyenne <= 20 && stagiaire.codepostal >= 0 && stagiaire.codepostal <= 20){
                    setStagiaires([...stagiaires,stagiaire])
                }else{
                    alert("code postale et moyenne doit etre > 0 et < 20")
                }
            }else{
                alert("les chanps sont obligatiore")
            }
        }else{
            alert("matricule est déja sisir")
        }  
    }

    function supprimer(id){
        const _stagiaires = stagiaires.filter(function(item){
            return item.id !== id
        })

        setStagiaires(_stagiaires)
    }

    function modifier(){
        const _stagiaire = stagiaires.map(function(item){
            if(item.id == stagiaire.id){
                item = stagiaire
            }
            return item
        })
        setStagiaires([..._stagiaire])
    }

    function vider(){
        setStagiaire({
            id:stagiaires[stagiaires.length - 1].id + 1,
            matricule : "",
            nom : "",
            ville :"",
            codepostal :"",
            moyenne :"",
        })
    }

    function filtrerVN(){
        let listStagiaires
        if(stagiaire.nom != ""){
            listStagiaires = stagiaires.filter(function(item){
                return item.nom === stagiaire.nom
            })
        }else if(stagiaire.ville != ""){
            listStagiaires = stagiaires.filter(function(item){
                return item.ville === stagiaire.ville
            })
        }else if(stagiaire.nom != "" && stagiaire.ville){
            listStagiaires = stagiaires.filter(function(item){
                return item.nom === stagiaire.nom && item.ville === stagiaire.ville
            })
        }
        setStagiaires2([...listStagiaires])
        console.log(stagiaires2)
    }

    function initialiser(){
        setStagiaires2([])
    }

    return(
        <>
    
        <div class="overflow-x-auto bg-white rounded-lg shadow mt-5">
            <table class="w-full table-auto">
                <thead>
                    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th class="py-3 px-6 text-left">ID</th>
                        <th class="py-3 px-6 text-left">Matricule</th>
                        <th class="py-3 px-6 text-left">Nom</th>
                        <th class="py-3 px-6 text-left">Ville</th>
                        <th class="py-3 px-6 text-left">Code postale</th>
                        <th class="py-3 px-6 text-left">Moyenne</th>
                        <th class="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody class="text-gray-600 text-sm">
                    {stagiaires.map(function(item,index){
                        return(
                            <tr class="border-b border-gray-200 hover:bg-gray-100" key={index}>
                                <td class="py-3 px-6 text-left">{item.id}</td>
                                <td class="py-3 px-6 text-left">{item.matricule} </td>
                                <td class="py-3 px-6 text-left">{item.nom}</td>
                                <td class="py-3 px-6 text-left">{item.ville}</td>
                                <td class="py-3 px-6 text-left">{item.codepostal}</td>
                                <td class="py-3 px-6 text-left">{item.moyenne}</td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <button class="w-4 mr-2 transform hover:text-blue-500 hover:scale-110" onClick={()=> setStagiaire({...item})}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </button>
                                        <button class="w-4 mr-2 transform hover:text-red-500 hover:scale-110" onClick={()=>supprimer(item.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                    
                    
                </tbody>
            </table>
        </div>
        {stagiaires.length == 0 && <div class="flex justify-between items-center mt-6">
            <div>
                <span class="text-xl text-sm text-red-700">
                    tableau des stagiaires est vide
                </span>
            </div>
            
        </div>}
        

        <div class="bg-gray-100 dark:bg-gray-900">
    <div class="w-full max-w-3xl mx-auto p-8">
        <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
            
{/* form */}
            <div class="mb-6">
                
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="id" class="block text-gray-700 dark:text-white mb-1"  >Id</label>
                        <input type="text" id="id" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" value={stagiaire.id} readOnly/>
                    </div>
                    <div>
                        <label for="nom" class="block text-gray-700 dark:text-white mb-1" >nom</label>
                        <input type="text" id="nom" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" value={stagiaire.nom} onChange={(e)=>setStagiaire({...stagiaire,nom:e.target.value})}/>
                    </div>
                    
                </div>

                <div class="mt-4">
                    <label for ="matricule" class="block text-gray-700 dark:text-white mb-1">matricule</label>
                    <input type="text" id="matricule" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" onChange={(e)=>setStagiaire({...stagiaire,matricule:e.target.value})} value={stagiaire.matricule}/>
                </div>
                
                <div class="mt-4">
                    <label for="ville" class="block text-gray-700 dark:text-white mb-1">ville</label>
                    <input type="text" id="ville" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" onChange={(e)=>setStagiaire({...stagiaire,ville:e.target.value})} value={stagiaire.ville}/>
                </div>

                <div class="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label for="code" class="block text-gray-700 dark:text-white mb-1">code postale</label>
                        <input type="number" id="code" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" onChange={(e)=>setStagiaire({...stagiaire,codepostal:e.target.value})} value={stagiaire.codepostal}/>
                    </div>
                    <div>
                        <label for="state" class="block text-gray-700 dark:text-white mb-1">moyenne</label>
                        <input type="number" id="state" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" onChange={(e)=>setStagiaire({...stagiaire,moyenne:e.target.value})} value={stagiaire.moyenne}/>
                    </div>
                    
                </div>
            </div>

            

            <div class="mt-8 flex justify-end">
                <button class="bg-teal-500 text-white mr-2 px-5 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900" onClick={ajouter}>Ajouter</button>
                <button class=" bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-900" onClick={modifier}>Modifier</button>
                <button class="mx-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 dark:bg-green-600 dark:text-white dark:hover:bg-green-900" onClick={filtrerVN}>Feltrer ville et nom</button>
                <button class=" bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 dark:bg-red-600 dark:text-white dark:hover:bg-red-900" onClick={vider}>Vider</button>
                <button class="ml-2 bg-red-800 text-white px-4 py-2 rounded-lg hover:bg-red-700 dark:bg-red-600 dark:text-white dark:hover:bg-red-900" onClick={initialiser}>Initialiser recherche</button>
            </div>
        </div>
    </div>
</div>
{/* list */}
<div class="mx-5 p-4">
    <h1 class="font-bold text-xl text-green-900">Feature List</h1>
    <ul class="mt-3 flex flex-col space-y-2">
        <li class="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" aria-hidden="true" class="mr-2 h-auto w-6 text-green-600 sm:w-7">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z">
                </path>
            </svg>
            <p class="text-base text-slate-700 sm:text-lg">La moyenne générale la plus Elévée : {Math.max(...stagiaires.map(function(item){
                return item.moyenne
            }))}</p>
        </li>
        <li class="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" aria-hidden="true" class="mr-2 h-auto w-6 text-green-600 sm:w-7">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z">
                </path>
            </svg>
            <p class="text-base text-slate-700 sm:text-lg">La moyenne générale la moins Elévée : {Math.min(...stagiaires.map(function(item){
                return item.moyenne
            }))}</p>
        </li>
        <li class="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" aria-hidden="true" class="mr-2 h-auto w-6 text-green-600 sm:w-7">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z">
                </path>
            </svg>
            <p class="text-base text-slate-700 sm:text-lg">La moyenne de le classe : {stagiaires.reduce((somme,nombre)=>somme + parseInt(nombre.moyenne) /stagiaires.length,0)}</p>
        </li>
    </ul>
</div>

{/* list de recherche */}

<ul class=" mt-8 bg-white rounded-lg shadow divide-y divide-gray-200 max-w-sm">
    {stagiaires2.map(function(item,index){
        return(
            <li class="px-6 py-4 " key={index}>
                <div class="flex justify-between">
                    <span class="font-semibold text-lg">{item.id}</span>
                    <span class="font-semibold text-lg">{item.nom}</span>
                </div>
                <p class="text-gray-700">matricule : {item.matricule}, ville : {item.ville}, code postale : {item.codepostal}, moyenne : {item.moyenne}</p>
           
            </li>
        )
        
    })}
    
</ul>

{stagiaires2.length == 0 && <h1 class="text-xl text-red-500 mb-10 mx-5">tableau de recherche des stagiaires est vide</h1>}

  
        </>
    )
}
export default App;