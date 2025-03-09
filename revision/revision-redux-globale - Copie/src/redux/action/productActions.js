export function ajoutetAchatAction(newProduct) {
  return {
    type: "AJOUTER_ACHAT",
    payload: newProduct,
  };
}
export function modifierProduit(newProduct) {
  return {
    type: "MODIFIER_PRODUCT",
    payload: newProduct,
  };
}
export function supprimerAchatAction(idProduct) {
  return {
    type: "SUPPRIMER_ACHAT",
    payload: idProduct,
  };
}


