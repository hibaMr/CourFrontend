
import {useState} from 'react';
function Form(){
    const [nom,setNom] = useState("");
    const [prenom,setPrenom] = useState("");
    const [groupe,setGroupe] = useState("");
    const [note,setNote] = useState();
    const [stagiaires,setStagiaires] = useState([]);
    const [index , setIndex] = useState();

    function ajouter(e){
        e.preventDefault();
        setStagiaires([...stagiaires,{nom,prenom,groupe,note}])
    }


    function supprimer(index){
        let newStagiaires = stagiaires.filter(function(element,num){
            return num !== index;
        })
        setStagiaires([...newStagiaires]);
    }

    function modify(e){
        e.preventDefault();
        let newStagiaires = stagiaires.map((item,ind)=>{
            if(ind === index){
                item.nom = nom;
                item.prenom = prenom;
                item.groupe = groupe;
                item.note = note;
            }
            return item
        })
        setStagiaires([...newStagiaires]);
    }


    return(
        <>
            <form className="m-10">
                <label>Nom :</label>
                <input type="text" placeholder="nom" className="border-solid border-2 border-cyan-500 m-4 rounded-md " value={nom} onChange={(e)=>setNom(e.target.value) }/>
                <label>Prenom :</label>
                <input type="text" placeholder="prenom" className="border-solid border-2 border-cyan-500 m-4 rounded-md" value={prenom} onChange={(e)=>setPrenom(e.target.value)}/><br />
                <label>Groupe :</label>
                <input type="text" placeholder="groupe" className="border-solid border-2 border-cyan-500 m-4 rounded-md" value={groupe} onChange={(e)=>setGroupe(e.target.value)}/>
                <label>Note :</label>
                <input type="text" placeholder="note" className="border-solid border-2 border-cyan-500 m-4 rounded-md" value={note} onChange={(e)=> setNote(e.target.value)}/><br /><br />
                <button className="btn-primary p-2 text-white bg-red-900 rounded-md" onClick={ajouter}>Ajouter</button>
                <button className="btn-primary p-2 text-white bg-green-900 rounded-md" onClick={modify}>Modify</button>
            </form>

            <table className="table-fixed border-solid border-2 ml-20">
                <thead>
                    <tr className="border-solid border-2 p-2">
                        <th className="border-solid border-2 p-2">Nom</th>
                        <th className="border-solid border-2 p-2">Prenom</th>
                        <th className="border-solid border-2 p-2">Groupe</th>
                        <th className="border-solid border-2 p-2">Note</th>
                        <th className="border-solid border-2 p-2">Tache</th>
                    </tr>
                </thead>

                <tbody>
                    
                {stagiaires.map((item,index)=>(
                    <tr className="border-solid border-2" key={index}>
                        <td className="border-solid border-2 p-2">{item.nom}</td>
                        <td className="border-solid border-2 p-2">{item.prenom}</td>
                        <td className="border-solid border-2 p-2">{item.groupe}</td>
                        <td className="border-solid border-2 p-2">{item.note}</td>
                        <td className="border-solid border-2 p-2">
                        <button className="btn-primary p-2 text-white bg-red-900 rounded-md"  onClick={()=> supprimer(index)}>Supprimer</button>
                        <button className="btn-primary p-2 text-white bg-green-900 rounded-md" onClick={()=>{
                            setIndex(index);
                            setNom(item.nom);
                            setPrenom(item.prenom);
                            setGroupe(item.groupe);
                            setNote(item.note);
                        }}  >Modify</button>
                        </td>
                    </tr>
                ))}
                    
                
                </tbody>
                       
    
            </table>

        </>
    )
}
export default Form;