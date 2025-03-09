

const initialeState ={
    opiration : {
        val1:"",
        val2:"",
        ops:"",
        rslt:""
    }
}

function reducer(state=initialeState,action){
    switch(action.type){
        case "ADDITION":
            action.payload.rslt = parseInt(action.payload.val1 ) + parseInt(action.payload.val2 )
            action.payload.ops = "+"
            return {...state,opiration:action.payload}

        case "SOUDTRACTION":
            action.payload.ops = "-"
            action.payload.rslt = parseInt(action.payload.val1 ) - parseInt(action.payload.val2 )
            return {...state,opiration:action.payload}

        case "MULTIPLICATION":
            action.payload.ops = "*"
            action.payload.rslt = parseInt(action.payload.val1 ) * parseInt(action.payload.val2 )
            return {...state,opiration:action.payload}

        case "DIVISION":
            action.payload.ops = "/"
            action.payload.rslt = parseInt(action.payload.val1 ) / parseInt(action.payload.val2 )
            return {...state,opiration:action.payload}

        default:
            return state;
    }
}

export default reducer;