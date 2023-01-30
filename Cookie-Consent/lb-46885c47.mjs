const e = {
  title: "Privatsphär Astellunge",
  details: {
    back: "Retour"
  },
  description: {
    details: "Hei fannt Dir en Iwwerbléck vun all benotzte Cookien. Dir kënnt fir eenzel Kategorien oder eenzel Cookien averstanen an Dir kënnt weider Informatiounen iwwert déi eenzel Cookien Bléck.",
    main: "Mir benotze Cookien op eiser Websäit fir wesentlech Zwecker, souwéi fir statistesch a Marketingzwecker. Extern Medien kënnen och Cookien benotzen."
  },
  minimize: "Minimiséieren",
  clearSite: "Läschen Daten",
  info: {
    title: "Legend",
    text: `✓ = All Cookien an dëser Kategorie akzeptéiert
▣ = E puer Cookien an dëser Kategorie akzeptéiert
- = Keng Cookien an dëser Kategorie ugeholl`
  },
  button: {
    acceptAll: "All akzeptéieren",
    acceptSelection: "Späicheren Auswiel"
  },
  binarySliderLabels: {
    accepted: "Akzeptéiert",
    declined: "Ofgeleent",
    partial: "Deelweis ugeholl"
  },
  showCookieInformation: "Show Cookie Informatiounen",
  cookieDetails: "Cookie-Detailer",
  individualSettings: "Individuell Dateschutz Astellunge",
  requiredLinks: {
    privacy: {
      title: "Dateschutz",
      href: "/datenschutz"
    },
    impress: {
      title: "Ofdréck",
      href: "/ofdreck"
    }
  }
}, i = {
  accept: "Akzeptéieren",
  name: "Numm",
  provider: "Ubidder",
  purpose: "Zweck",
  privacy: "Dateschutz",
  hosts: "Host",
  cookieName: "Cookie Numm",
  cookieValidityPeriod: "Cookie Validitéit",
  links: "Lénks"
}, t = {
  id: "meta-cookie",
  name: "Cookie Zoustëmmung",
  provider: "Websäit Besëtzer",
  purpose: "Späichert d'Zustimmungen oder Oflehnungen op déi eenzel Cookien.",
  cookieValidityPeriod: "1 Joer"
}, o = {
  generalLabels: e,
  cookieLabels: i,
  metaCookieTitles: t
};
export {
  i as cookieLabels,
  o as default,
  e as generalLabels,
  t as metaCookieTitles
};
