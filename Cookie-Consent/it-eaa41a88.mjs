const i = {
  title: "Impostazioni della privacy",
  details: {
    back: "Indietro"
  },
  description: {
    details: "Qui troverete una panoramica di tutti i cookie utilizzati. È possibile acconsentire a singole categorie o a singoli cookie e far visualizzare ulteriori informazioni sui singoli cookie.",
    main: "Utilizziamo i cookie sul nostro sito web per scopi essenziali, così come per scopi statistici e di marketing. Anche i media esterni possono utilizzare i cookie."
  },
  minimize: "Minimizzare",
  clearSite: "Cancellare i dati",
  info: {
    title: "Leggenda",
    text: `✓ = Tutti i cookie di questa categoria accettati
▣ = Alcuni cookie accettati in questa categoria
- = Nessun cookie accettato in questa categoria`
  },
  button: {
    acceptAll: "Accetta tutti",
    acceptSelection: "Salva la selezione"
  },
  binarySliderLabels: {
    accepted: "Accettato",
    declined: "Rifiutato",
    partial: "Parzialmente accettato"
  },
  showCookieInformation: "Mostra informazioni sui cookie",
  cookieDetails: "Dettagli dei cookie",
  individualSettings: "Impostazioni di privacy individuali",
  requiredLinks: {
    privacy: {
      title: "Protezione dei dati",
      href: "/protezione-dei-dati"
    },
    impress: {
      title: "Impronta",
      href: "/impronta"
    }
  }
}, e = {
  accept: "Accettare",
  name: "Nome",
  provider: "Fornitore",
  purpose: "Scopo",
  privacy: "Politica sulla privacy",
  hosts: "Host",
  cookieName: "Nome del cookie",
  cookieValidityPeriod: "Validità dei cookie",
  links: "Links"
}, o = {
  id: "meta-cookie",
  name: "Accordo sui cookie",
  provider: "Proprietario del sito web",
  purpose: "Salva le approvazioni o i rifiuti per i singoli cookie..",
  cookieValidityPeriod: "1 anno"
}, t = {
  generalLabels: i,
  cookieLabels: e,
  metaCookieTitles: o
};
export {
  e as cookieLabels,
  t as default,
  i as generalLabels,
  o as metaCookieTitles
};
