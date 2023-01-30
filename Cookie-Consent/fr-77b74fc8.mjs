const e = {
  title: "Paramètres de confidentialité",
  details: {
    back: "Dos"
  },
  description: {
    details: "Vous trouverez ici un aperçu de tous les cookies utilisés. Vous pouvez accepter des catégories individuelles ou des cookies individuels et obtenir des informations supplémentaires sur les cookies individuels.",
    main: "Nous utilisons des cookies sur notre site web à des fins essentielles, ainsi qu'à des fins statistiques et de marketing. Les médias externes peuvent également utiliser des cookies."
  },
  minimize: "Minimoi",
  clearSite: "Supprimer les données",
  info: {
    title: "Légende",
    text: `✓ = Tous les cookies de cette catégorie acceptés
▣ = Quelques cookies de cette catégorie acceptés
- = Aucun cookie de cette catégorie n'est accepté`
  },
  button: {
    acceptAll: "Accepter tous",
    acceptSelection: "Sauvegarder la sélection"
  },
  binarySliderLabels: {
    accepted: "Accepté",
    declined: "Rejeté",
    partial: "Partiellement accepté"
  },
  showCookieInformation: "Afficher les informations sur les cookies",
  cookieDetails: "Détails des cookies",
  individualSettings: "Paramètres de confidentialité individuels",
  requiredLinks: {
    privacy: {
      title: "Protection des données",
      href: "/protection-des-donnees"
    },
    impress: {
      title: "Impression",
      href: "/impression"
    }
  }
}, i = {
  accept: "Accepter",
  name: "Nom",
  provider: "Prestataire",
  purpose: "Objectif",
  privacy: "Politique de confidentialité",
  hosts: "Host",
  cookieName: "Nom du cookie",
  cookieValidityPeriod: "Validité du cookie",
  links: "Liens"
}, s = {
  id: "meta-cookie",
  name: "Accord sur les cookies",
  provider: "Propriétaire du site web",
  purpose: "Sauvegarde les approbations ou les rejets pour les cookies individuels.",
  cookieValidityPeriod: "1 an"
}, o = {
  generalLabels: e,
  cookieLabels: i,
  metaCookieTitles: s
};
export {
  i as cookieLabels,
  o as default,
  e as generalLabels,
  s as metaCookieTitles
};
