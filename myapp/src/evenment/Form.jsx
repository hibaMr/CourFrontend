import { useState } from "react";
import Changement from "./Changement";

function Form(){
    const [id,setId] = useState('');
    const [nom,setNom] = useState('');
    const [prenom,setPrenom] = useState('');
    const [etudiants,setEtudiants] = useState([]);

    function save(){
        setEtudiants([...etudiants, {id:id,nom:nom,prenom:prenom}])
    }

    function changement(e){
        setId(e.target.value) ;
        setNom(e.target.value) ;
        setPrenom(e.target.value) ;
    }

    return(
        <>
            <input type="text" onChange={changement}  style={{border:'solid 2px black'}} placeholder="taxt"/>
            <input type="text" onChange={changement}  style={{border:'solid 2px black'}} placeholder="taxt"/>
            <input type="text" onChange={changement}  style={{border:'solid 2px black'}} placeholder="taxt"/>
            <button onClick={save} style={{padding:'10px',background:'green',color:'white',borderRadius:'5px'}}>Save</button>
            <ul>
                {
                    etudiants.map(function(item,index){
                        return <li key={index}>{item.nom} {item.prenom} </li>
                    })
                }
            </ul>
        </>
    )
}

export default Form;