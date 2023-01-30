const e = {
  title: "Setări de confidențialitate",
  details: {
    back: "Înapoi"
  },
  description: {
    details: "Aici veți găsi o prezentare generală a tuturor modulelor cookie utilizate. Puteți să vă dați acordul pentru categorii individuale sau pentru cookie-uri individuale și să vi se afișeze informații suplimentare despre cookie-urile individuale.",
    main: "Utilizăm cookie-uri pe site-ul nostru web în scopuri esențiale, precum și în scopuri statistice și de marketing. Mediile externe pot utiliza, de asemenea, module cookie."
  },
  minimize: "Minimizați",
  clearSite: "Ștergeți datele",
  info: {
    title: "Legenda",
    text: `✓ = Toate cookie-urile din această categorie sunt acceptate
▣ = Unele cookie-uri acceptate în această categorie
- = Nu se acceptă cookie-uri în această categorie`
  },
  button: {
    acceptAll: "Acceptă toate",
    acceptSelection: "Salvați selecția"
  },
  binarySliderLabels: {
    accepted: "Acceptat",
    declined: "Respins",
    partial: "Parțial acceptat"
  },
  showCookieInformation: "Afișați informații despre cookie-uri",
  cookieDetails: "Detalii despre cookie-uri",
  individualSettings: "Setări individuale de confidențialitate",
  requiredLinks: {
    privacy: {
      title: "Protecția datelor",
      href: "/protecția-datelor"
    },
    impress: {
      title: "Imprimare",
      href: "/imprimare"
    }
  }
}, i = {
  accept: "Acceptă",
  name: "Nume",
  provider: "Furnizor",
  purpose: "Scop",
  privacy: "Politica de confidențialitate",
  hosts: "Host",
  cookieName: "Nume cookie",
  cookieValidityPeriod: "Valabilitatea cookie-urilor",
  links: "Legături"
}, a = {
  id: "meta-cookie",
  name: "Acordul privind cookie-urile",
  provider: "Proprietarul site-ului web",
  purpose: "Salvează aprobările sau respingerile pentru cookie-urile individuale.",
  cookieValidityPeriod: "1 an"
}, t = {
  generalLabels: e,
  cookieLabels: i,
  metaCookieTitles: a
};
export {
  i as cookieLabels,
  t as default,
  e as generalLabels,
  a as metaCookieTitles
};
