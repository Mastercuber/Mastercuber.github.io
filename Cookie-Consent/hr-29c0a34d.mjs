const i = {
  title: "Postavke privatnosti",
  details: {
    back: "Povratak"
  },
  description: {
    details: "Ovdje ćete pronaći pregled svih korištenih kolačića. Možete pristati na pojedinačne kategorije ili pojedinačne kolačiće i možete vidjeti dodatne informacije o pojedinačnim kolačićima.",
    main: "Kolačiće na našoj web stranici koristimo u osnovne svrhe, kao i u statističke i marketinške svrhe. Vanjski mediji također mogu koristiti kolačiće."
  },
  minimize: "Minimizirajte",
  clearSite: "Izbriši podatke",
  info: {
    title: "Legenda",
    text: `✓ = Svi kolačići u ovoj kategoriji prihvaćeni su
▣ = Neki kolačići u ovoj kategoriji prihvaćeni su
- = Nije prihvaćen nijedan kolačići u ovoj kategoriji`
  },
  button: {
    acceptAll: "Svi prihvaćaju",
    acceptSelection: "Spremi odabir"
  },
  binarySliderLabels: {
    accepted: "Prihvaćeno",
    declined: "Odbijeno",
    partial: "Djelomično prihvaćeno"
  },
  showCookieInformation: "Prikaži informacije o kolačićima",
  cookieDetails: "Pojedinosti o kolačićima",
  individualSettings: "Pojedinačne postavke zaštite podataka",
  requiredLinks: {
    privacy: {
      title: "zaštita podataka",
      href: "/zastita-podataka"
    },
    impress: {
      title: "otisak",
      href: "/otisak"
    }
  }
}, a = {
  accept: "Prihvatiti",
  name: "Ime",
  provider: "pružatelji usluga",
  purpose: "Svrha",
  privacy: "Zaštita podataka",
  hosts: "Host",
  cookieName: "Naziv kolačića",
  cookieValidityPeriod: "Valjanost kolačića",
  links: "Lijevo"
}, e = {
  id: "meta-cookie",
  name: "Suglasnost za kolačiće",
  provider: "Vlasnik web stranice",
  purpose: "Sprema odobrenja ili odbijanja u pojedinačne kolačiće.",
  cookieValidityPeriod: "1 godina"
}, o = {
  generalLabels: i,
  cookieLabels: a,
  metaCookieTitles: e
};
export {
  a as cookieLabels,
  o as default,
  i as generalLabels,
  e as metaCookieTitles
};
