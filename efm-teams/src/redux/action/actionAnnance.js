export function AjouterAnnance(newAnnance){
    return{
        type:"AJOUTER_ANNANCE",
        payload:newAnnance
    }
}

export function ModifierAnnance(newAnnance){
    return{
        type:"MODIFIER_ANNACE",
        payload:newAnnance
    }
}

export function SupprimerAnnance(idAnnance){
    return{
        type:"SUPPRIMER_ANNANCE",
        payload:idAnnance
    }
}

export function Connecter(newAnnance){
    return{
        type:"CONNECTER",
        payload:newAnnance
    }
}

export function Deconnecter(newAnnance){
    return{
        type:"DECONNECTER",
        payload:newAnnance
    }
}
