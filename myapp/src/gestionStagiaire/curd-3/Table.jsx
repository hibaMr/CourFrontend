

function Table({stagiaires,setNom,setPrenom,setGroupe,setNote,setInd,supprimer,modify}){
    return (
        <>
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
export default Table;