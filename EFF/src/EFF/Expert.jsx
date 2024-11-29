import Evenements from "./Evenements"


function Expert({data}){
    console.log(data)
    return(
        <>
            
            <li>{data.nom_complet}</li>
            <Evenements evenements = {data.evenements}/>
        </>
    )
}
export default Expert