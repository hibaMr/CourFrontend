export function addAchatAction(newArticle) {
    return {
      type: "AJOUTER_ACHAT",
      payload: newArticle,
    };
  }

  export function updateAchatAction(newArticle) {
    return {
      type: "MODIFIER_ARTICLE",
      payload: newArticle,
    };
  }

  export function deleteAchatAction(achatNumero) {
    return {
      type: "SUPPRIMER_ACHAT",
      payload: achatNumero,
    };
  
  }

    export function filtrerAchatAction(achatNumero) {
      return {
        type: "FILTRER_ACHAT",
        payload: achatNumero,
      };
  }

  export function afficherAchatsAction(numeroClient) {
    return {
      type: "AFFICHER_ACHAT",
      payload: numeroClient,
    };
}

export function getProduitsByCode(numeroProduit) {
  return {
    type: "GET_ACHAT",
    payload: numeroProduit,
  };
}