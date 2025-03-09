import { useState } from "react";
import { annonces } from "../../db";
import { categories } from "../../db";
import { regions } from "../../db";
import { users } from "../../db";

const initial = {
    annonces:[...annonces],
    categories:[...categories],
    regions:[...regions],
    users:[...users]
}

function reducerAnnance(state=initial,action){
    switch(action.type){
        case "AJOUTER_ANNANCE":
            return {...state,annonces:[...state.annonces,action.payload]}

        case "SUPPRIMER_ANNANCE":
            

        default:
            return state;

    }
}
export default reducerAnnance;