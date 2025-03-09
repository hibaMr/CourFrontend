const initialState = {
  clients: [
    { numero: "1", nom: "N1", prenom: "P1" },
    { numero: "2", nom: "N2", prenom: "P2" },
    { numero: "3", nom: "N3", prenom: "P3" },
  ],
  produits: [
    { codeProduit: "1", intitule: "Produit1", prix: 10 ,qteStockees:20},
    { codeProduit: "2", intitule: "Produit2", prix: 20 ,qteStockees:120},
    { codeProduit: "3", intitule: "Produit3", prix: 30 ,qteStockees:3}
  ],
  achats: [
    { numero: "1", codeProduit: "1", qte: 5 },
    { numero: "1", codeProduit: "3", qte: 5 },
    { numero: "1", codeProduit: "2", qte: 12 },
    { numero: "2", codeProduit: "1", qte: 10 },
    { numero: "2", codeProduit: "3", qte: 1 },
    { numero: "3", codeProduit: "2", qte: 10 },
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "AJOUTER_ACHAT":
      return { ...state, achats: [...state.achats, action.payload] };
    case "SUPPRIMER_ACHAT":
      return {
        ...state,
        achats: [
          ...state.achats.filter(function (item) {
            return item.numero != action.payload;
          }),
        ],
      };
    case "MODIFIER_PRODUCT":
      return {
        ...state,
        produits: [
          ...state.produits.map((item) => {
            if (item.codeProduit === action.payload.codeProduit) {
              return action.payload;
            }
            return item;
          }),
        ],
      };
    default:
      return state;
  }
}
export default reducer