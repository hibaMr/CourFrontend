function Etudiant(props){

    console.log(props)
    return (
        <>
            {/* <h1>I am {props.nom}</h1> */}
            {/* <h1>I am {props.etudiant.nom}</h1> */}

            <div style={{backgroundColor:props.etudiants.couleur,width:'300',color:'white',padding:'10px'}}>
                <label>Nom : {props.etudiants.nom}</label><br />
                <label>Prenom : {props.etudiants.prenom}</label>
            </div><br />
        </>
    )
}

export default Etudiant;