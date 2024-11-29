const intialState = {
    user:{id:1,username:"Hiba"},
    articles:[
        {id:1,designation:"Mouse",famille:"CONSOMMABLE"},
        {id:2,designation:"Keyboard",famille:"CONSOMMABLE"}
    ],
    categorie:[],
    fournisseurs:[]
}


function articleReducer(state=intialState,action){
    switch(action.type){
        case "AJOUTER_ARTICLE":
            return {...state,articles:[...state.articles,action.payload]}
        
        case "SUPPRIMER_ARTICLE":
            const newArticles = state.articles.filter(function(item){
                return item.id !== action.payload
            })
            return {...state,articles:newArticles}
        
        case "MODIFIER_ARTICLE":
            const updatedArticles = state.articles.map(function(item){
                if(item.id == action.payload.id){
                    return action.payload
                }
                return item
            })
            
            return {...state,article:updatedArticles}
        
        default:
            return state
    }

}

export default articleReducer