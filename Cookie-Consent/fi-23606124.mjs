const t = {
  title: "Tietosuoja-asetukset",
  details: {
    back: "Takaisin"
  },
  description: {
    details: "Täältä löydät yleiskatsauksen kaikista käytetyistä evästeistä. Voit hyväksyä yksittäiset luokat tai yksittäiset evästeet ja saada lisätietoja yksittäisistä evästeistä näkyviin.",
    main: "Käytämme verkkosivustollamme evästeitä välttämättömiin tarkoituksiin sekä tilastollisiin ja markkinointitarkoituksiin. Myös ulkoiset mediat voivat käyttää evästeitä."
  },
  minimize: "Minimoi",
  clearSite: "Tietojen poistaminen",
  info: {
    title: "Selite",
    text: `✓ = Kaikki tämän luokan evästeet hyväksytty
▣ = Joitakin tähän luokkaan hyväksyttyjä evästeitä
- = Tässä kategoriassa ei hyväksytä evästeitä`
  },
  button: {
    acceptAll: "Hyväksy kaikki",
    acceptSelection: "Tallenna valinta"
  },
  binarySliderLabels: {
    accepted: "Hyväksytty",
    declined: "Hylätyt",
    partial: "Osittain hyväksytty"
  },
  showCookieInformation: "Näytä evästetiedot",
  cookieDetails: "Evästeen tiedot",
  individualSettings: "Yksilölliset yksityisyysasetukset",
  requiredLinks: {
    privacy: {
      title: "Tietosuoja",
      href: "/tietosuoja"
    },
    impress: {
      title: "Jälki",
      href: "/jaelki"
    }
  }
}, i = {
  accept: "Hyväksy",
  name: "Nimi",
  provider: "Palveluntarjoaja",
  purpose: "Käyttötarkoitus",
  privacy: "Tietosuojakäytäntö",
  hosts: "Host",
  cookieName: "Evästeen nimi",
  cookieValidityPeriod: "Evästeen voimassaolo",
  links: "Linkit"
}, e = {
  id: "meta-cookie",
  name: "Evästesopimus",
  provider: "Verkkosivuston omistaja",
  purpose: "Tallentaa yksittäisten evästeiden hyväksynnät tai hylkäykset.",
  cookieValidityPeriod: "1 vuosi"
}, s = {
  generalLabels: t,
  cookieLabels: i,
  metaCookieTitles: e
};
export {
  i as cookieLabels,
  s as default,
  t as generalLabels,
  e as metaCookieTitles
};
