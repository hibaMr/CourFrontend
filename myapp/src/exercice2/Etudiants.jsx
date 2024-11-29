import Etudiant from "./Etudiant";

function Etudiants(){
    let etudiants = [
        {id:1, nom:'MRIBEH', prenom:'Hiba', couleur:'red'},
        {id:2, nom:'ELADNANI', prenom:'Naoual',couleur:'green'},
        {id:3, nom:'FED', prenom:'Meryem',couleur:'yellow'}
    ]

    return (
        <>
            {/* <Etudiant nom="MOSAID" />

            <ul>
                {etudiants.map(function(item,index){
                    return <Etudiant key={index} etudiant={item} />
                })}
            </ul>

            <ul>
                {etudiants.map(function(item,index){
                    return <li key={index}>{item.nom}</li>
                })}
            </ul> */}

            
                {etudiants.map(function(item,index){
                    return <Etudiant key={index} etudiants={item} />
                })}
            
        </>
    )
}

export default Etudiants;
