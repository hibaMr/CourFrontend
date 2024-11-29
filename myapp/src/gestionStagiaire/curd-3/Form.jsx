import {useState} from 'react';
import Table from './Table';


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

    function modify(){
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
                <button className="btn-primary p-2 text-white bg-green-900 rounded-md" >Modify</button>
            </form>

            <Table stagiaires = {stagiaires} setNom = {setNom} setPrenom = {setPrenom} setGroupe = {setGroupe} setNote = {setNote} setInd = {setInd} supprimer = {supprimer} modify = {modify} />


            
        </>
    )
}
export default Form;