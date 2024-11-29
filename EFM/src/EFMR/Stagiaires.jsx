import { useEffect, useState } from 'react';
import './style.css';
function Stagiaires(){

    const [stagiaire,setStagiaire] = useState({id:null,matricule:"",nom:"",codepostal:"",ville:"",moyenne:""})

    const [stagiaires,setStagiaires] = useState([{id :1,matricule :1454,nom : "Alaoui" ,codepostal :20400,ville :"casa",moyenne :12.56},
        {id :2, matricule :1455,nom :"Mansouri",codepostal :20400,ville :"casa",moyenne :14.67}])
    
    const [stagiaires2,setStagiaires2] = useState([]);

    let message = ""
    let couleur = ""

    let messageR = ""
    let couleurR = ""

    let moyennePlus = 0

    useEffect(function(){
        if(stagiaires.length > 0){
            setStagiaire({
                ...stagiaire,
                id:stagiaires[stagiaires.length - 1].id + 1
            })
        }else{
            setStagiaires({
                ...stagiaire,
                id:1
            })
        }
    },[stagiaires.length])

    useEffect(function(){
        if(stagiaires == []){
            message = " tableau des stagiaires vide"
            couleur = "red"
        }
    },[])

    useEffect(function(){
        if(stagiaires2 == []){
            messageR = " Tableau de recherche vide"
            couleurR = "red"
        }
    },[])

    useEffect(function(){
        let moyennePlus1 
        let _stagiaires = stagiaires.map(function(item,index){
            if(stagiaires[index].moyenne > stagiaires[index + 1].moyenne){
                moyennePlus1 = stagiaires[index].moyenne
            }
            return moyennePlus1
        })
        moyennePlus = _stagiaires
        console.log(moyennePlus)
    },[stagiaire.moyenne])

    function ajouter(e){
        e.preventDefault();
        let _stagiaires = stagiaires.find(function(item){
            return item.matricule == stagiaire.matricule;
        })

        if(!_stagiaires){
            setStagiaires([...stagiaires,stagiaire])
        }else{
            alert("ce stagiaire existe deja");
        }
        
        
    }

    function inputChange(e){
        let name = e.target.name
        let val = e.target.value
        let _stagiaire = {...stagiaire}
        _stagiaire[name] = val
        setStagiaire(_stagiaire);
    }

    function vider(){
        setStagiaire({matricule:"",nom:"",codepostal:"",ville:"",moyenne:""})
    }

    function filtrer(e){
        e.preventDefault();
        let _stagiaires = stagiaires.filter(function(item){
            return item.ville == stagiaire.ville && item.nom == stagiaire.nom
        })            
        setStagiaires2(_stagiaires)  
        console.log(stagiaires2);  
    }

    function supprimer(id){
        let _stagiaires = stagiaires.filter(function(item){
            return item.id !== id
        })
        
        setStagiaires(_stagiaires);
    }

    function modifie(){
        let _stagiaires = stagiaires.map(function(item){
            if(item.id == stagiaire.id){
                item = stagiaire
            }
            return item
        })
        setStagiaires(_stagiaires)
    }

    function initialiser(){
        setStagiaires2([]);
    }

    return(
        <>  
        <div>
            <div className="table-container">
                    {/* <h1 className="table-title">STUDENT LIST</h1> */}
                    <table className="student-table">
                      <thead>
                        <tr>
                          <th>id</th>
                          <th>matricule</th>
                          <th>nom</th>
                          <th>code postale</th>
                          <th>ville</th>
                          <th>moyenne</th>
                          <th>Supprimer</th>
                          <th>Editer</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                      {stagiaires.map(function(item,index){
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.matricule}</td>
                                    <td>{item.nom}</td>
                                    <td>{item.codepostal}</td>
                                    <td>{item.ville}</td>
                                    <td>{item.moyenne}</td>
                                    <td><button className="btn supprimer-btn" onClick={()=>supprimer(item.id)}>Supprimer</button></td>
                                    <td><button className="btn editer-btn" onClick={()=>setStagiaire({...item})}>Editer</button></td>
                                </tr>
                            )
                        })}
                                
                                
                            
                      </tbody>
                    </table>

                  </div>


          </div>
          <div className="form-container">
            <h1 className="form-title">ADD A STUDENT2</h1>
            <div className="form">
              <input
                type="text"
                name="id"
                required
                placeholder="id"
                value={stagiaire.id}
                onChange={inputChange} />
              <input
                type="number"
                name="matricule"
                required
                placeholder="matricule"
                value={stagiaire.matricule}
                onChange={inputChange} />

              <input
                type="text"
                name="nom"
                required
                placeholder="nom"
                value={stagiaire.nom}
                onChange={inputChange} />
              <input
                type="number"
                name="codepostal"
                required
                placeholder="code postale"
                value={stagiaire.codepostal} 
                onChange={inputChange} />
  
              <input
                type="text"
                name="ville"
                required
                placeholder="ville" 
                value={stagiaire.ville}
                onChange={inputChange} />
              <input
                type="number"
                name="moyenne"
                required
                placeholder="moyenne" 
                value={stagiaire.moyenne}
                onChange={inputChange} />
              <div className='btn-form'>
                <button className="btn save-btn" onClick={ajouter}>SAVE</button>
                <button className="btn editer-btn" onClick={modifie}>Editer</button>
                <button className="btn filtrer-btn" onClick={filtrer}>Filtrer ville et nom</button>
                <button className="btn vider-btn" onClick={vider}>Vider</button>
                <button className="btn recherche-btn" onClick={initialiser}>Initialiser recherche</button>
              </div>
                <div style={{color:couleur}}>{message}</div>

                <div class="flex flex-col gap-2 px-2 text-md font-serif">
                                <>
                                <ul>
                                    <li>{moyennePlus}</li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul><br />
                                </>
                    </div>

                <h4 style={{color:couleurR}}>{messageR}</h4>

                    <div class="flex flex-col gap-2 px-2 text-md font-serif">
                        {stagiaires2.map(function(item,index){
                            return(
                                <>
                                <ul key={index}>
                                    <li>id : {item.id}</li>
                                    <li>matricule : {item.matricule}</li>
                                    <li>nom : {item.nom}</li>
                                    <li>code postal : {item.codepostal}</li>
                                    <li>ville : {item.ville}</li>
                                    <li>moyenne : {item.moyenne}</li>
                                </ul><br />
                                </>
                                
                            )
                        })}
                        
                    </div>

                    {/* <fieldset class="text-xl max-w-sm border-4 border-green-500 rounded-lg p-2">
                        <legend class="px-2 text-xl font-semibold underline decoration-green-500/60 decoration-2"> MCQs for Related Topics
                        </legend>
                        {stagiaires2.map(function(item,index){
                            return(
                                <div class="flex flex-col gap-2 px-2 text-md font-serif" key={index}>
                                    <a href="#">{item.id}</a>
                                    <hr/>
                                    <a href="#">{item.matricule}</a>
                                    <hr/>
                                    <a href="#">{item.nom}</a>
                                    <hr/>
                                    <a href="#">{item.codepostal}</a>
                                    <hr/>
                                    <a href="#">{item.ville}</a>
                                    <hr/>
                                    <a href="#">{item.moyenne}</a>
                                </div>
                            )
                        
                        })}
                    </fieldset> */}
              
              
            </div>
          </div>
          
          

           
      
        </>
    )
}
export default Stagiaires;