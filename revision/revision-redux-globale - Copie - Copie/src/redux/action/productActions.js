export function Ajouter(newachat){
  return{
    type :"AJOUTER",
    payload:newachat
  }
}

export function Supprimer(idAchat){
  return{
    type :"SUPPRIMER",
    payload:idAchat
  }
}
