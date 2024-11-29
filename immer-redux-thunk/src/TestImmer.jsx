import { produce } from "immer"
import { useState } from "react";


function TestImmer(){

    const stateA = {etudient:{
        id:1,
        nom:"MRIBEH",
        module : [
            {id:1,libelle:"JAVASCRIPT"},
            {id:2,libelle:"POO"},
        ]
    }}

    const stateB = produce(stateA,function(draft){
        draft.etudient.module.push({id:3,libelle:"PYTHON"})
    })

    console.log(stateA);
    console.log(stateB)

    let listA = [
        {id:1,nom:"MRIBEH"},
        {id:2,nom:"ELADNANI"},
        
    ]

    const listB = produce(listA,function(draft){
        draft.push({id:3,nom:"FEYD"});
    })

    console.log(listA);
    console.log(listB)

    return(
        <>
        
            test Immer
        </>
    )
}

export default TestImmer