export function Addition(newOP){
    return{
        type:"ADDITION",
        payload:newOP
    }
}

export function Soustraction(newOP){
    return{
        type:"SOUDTRACTION",
        payload:newOP
    }
}

export function Multiplication(newOP){
    return{
        type:"MULTIPLICATION",
        payload:newOP
    }
}

export function Division(newOP){
    return{
        type:"DIVISION",
        payload:newOP
    }
}