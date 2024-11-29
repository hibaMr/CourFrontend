import {useState} from 'react'; 
function Form(){

    const [nom,setNom] = useState("");
    const [prenom,setPrenom] = useState("");
    const [groupe,setGroupe] = useState("");
    const [note,setNote] = useState();
    const [ind,setInd] = useState();
    const [stagiaires,setStagiaires] = useState([]);

    function ajouter(e){
        e.preventDefault();
        setStagiaires([...stagiaires,{nom,prenom,groupe,note}])
    }

    function supprimer(){
        let newStagiaires = stagiaires.filter(function(item,index){
            return index !== ind;
        })
        setStagiaires([...newStagiaires]);
    }

    function modify(e){
        e.preventDefault()
        let newStagiaires = stagiaires.map(function(item,index){
            if(index === ind){
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
                <input type="text" placeholder="nom" className="border-solid border-2 border-cyan-500 m-4 rounded-md " value={nom} onChange={(e)=>setNom(e.target.value)}/>
                <label>Prenom :</label>
                <input type="text" placeholder="prenom" className="border-solid border-2 border-cyan-500 m-4 rounded-md" value={prenom} onChange={(e)=>setPrenom(e.target.value)} /><br />
                <label>Groupe :</label>
                <input type="text" placeholder="groupe" className="border-solid border-2 border-cyan-500 m-4 rounded-md" value={groupe} onChange={(e)=> setGroupe(e.target.value)} />
                <label>Note :</label>
                <input type="text" placeholder="note" className="border-solid border-2 border-cyan-500 m-4 rounded-md" value={note} onChange={(e)=>setNote(e.target.value)} /><br /><br />
                <button className="btn-primary p-2 text-white bg-red-900 rounded-md" onClick={ajouter}>Ajouter</button>
            </form>

            <table className="table-fixed border-solid border-2 ml-20">
                <thead>
                    <tr className="border-solid border-2 p-2">
                        <th className="border-solid border-2 p-2">Nom</th>
                        <th className="border-solid border-2 p-2">Prenom</th>
                        <th className="border-solid border-2 p-2">Groupe</th>
                        <th className="border-solid border-2 p-2">Note</th>
                    </tr>
                </thead>

                <tbody>
                    {stagiaires.map((item,index)=>(
                        <tr className="border-solid border-2" key={index} onClick={()=>{
                            setInd(index);
                            setNom(item.nom);
                            setPrenom(item.prenom);
                            setGroupe(item.groupe);
                            setNote(item.note);
                        }}>
                        <td className="border-solid border-2 p-2">{item.nom}</td>
                        <td className="border-solid border-2 p-2">{item.prenom}</td>
                        <td className="border-solid border-2 p-2">{item.groupe}</td>
                        <td className="border-solid border-2 p-2">{item.note}</td>
                        
                    </tr>
                    ))}
                
                    
                
                    
                
                </tbody>
                       
    
            </table><br /><br />
            
            <button className="btn-primary p-2 text-white bg-red-900 rounded-md" onClick={supprimer}>Supprimer</button>
            <button className="btn-primary p-2 text-white bg-green-900 rounded-md" onClick={modify}>Modify</button>

        </>
    )
}
export default Form;