const i = {
  title: "Privatumo nustatymai",
  details: {
    back: "Atgal"
  },
  description: {
    details: "Čia rasite visų naudojamų slapukų apžvalgą. Galite sutikti su atskiromis kategorijomis arba atskirais slapukais ir gauti daugiau informacijos apie atskirus slapukus.",
    main: "Savo svetainėje slapukus naudojame svarbiausiais tikslais, taip pat statistikos ir rinkodaros tikslais. Išorinė žiniasklaida taip pat gali naudoti slapukus."
  },
  minimize: "Sumažinkite",
  clearSite: "Ištrinti duomenis",
  info: {
    title: "Legenda",
    text: `✓ = Priimami visi šios kategorijos slapukai
▣ = Kai kurie šioje kategorijoje priimtini slapukai
- = Šioje kategorijoje slapukai nepriimami`
  },
  button: {
    acceptAll: "Priimti visus",
    acceptSelection: "Išsaugoti pasirinkimą"
  },
  binarySliderLabels: {
    accepted: "Priimtas",
    declined: "Atmesta",
    partial: "Iš dalies priimta"
  },
  showCookieInformation: "Rodyti slapukų informaciją",
  cookieDetails: "Informacija apie slapukus",
  individualSettings: "Individualūs privatumo nustatymai",
  requiredLinks: {
    privacy: {
      title: "Duomenų apsauga",
      href: "/duomenų-apsauga"
    },
    impress: {
      title: "Atspaudas",
      href: "/atspaudas"
    }
  }
}, a = {
  accept: "Priimti",
  name: "Pavadinimas",
  provider: "Teikėjas",
  purpose: "Tikslas",
  privacy: "Privatumo politika",
  hosts: "Host",
  cookieName: "Slapukų pavadinimas",
  cookieValidityPeriod: "Slapukų galiojimas",
  links: "Nuorodos"
}, s = {
  id: "meta-cookie",
  name: "Susitarimas dėl slapukų",
  provider: "Svetainės savininkas",
  purpose: "Išsaugo atskirų slapukų patvirtinimus arba atmetimus.",
  cookieValidityPeriod: "1 metai"
}, t = {
  generalLabels: i,
  cookieLabels: a,
  metaCookieTitles: s
};
export {
  a as cookieLabels,
  t as default,
  i as generalLabels,
  s as metaCookieTitles
};
