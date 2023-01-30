const o = {
  title: "Nastavenia súkromia",
  details: {
    back: "Späť"
  },
  description: {
    details: "Tu nájdete prehľad všetkých používaných súborov cookie. Môžete odsúhlasiť jednotlivé kategórie alebo jednotlivé súbory cookie a nechať si zobraziť ďalšie informácie o jednotlivých súboroch cookie.",
    main: "Na našej webovej stránke používame súbory cookie na základné účely, ako aj na štatistické a marketingové účely. Súbory cookie môžu používať aj externé médiá."
  },
  minimize: "Minimalizujte",
  clearSite: "Odstránenie údajov",
  info: {
    title: "Legenda",
    text: `✓ = Všetky súbory cookie v tejto kategórii sú akceptované
▣ = Niektoré súbory cookie akceptované v tejto kategórii
- = V tejto kategórii nie sú akceptované žiadne súbory cookie`
  },
  button: {
    acceptAll: "Prijať všetky",
    acceptSelection: "Uložiť výber"
  },
  binarySliderLabels: {
    accepted: "Prijaté",
    declined: "Odmietnuté",
    partial: "Čiastočne prijaté"
  },
  showCookieInformation: "Zobraziť informácie o súboroch cookie",
  cookieDetails: "Podrobnosti o súboroch cookie",
  individualSettings: "Individuálne nastavenia ochrany osobných údajov",
  requiredLinks: {
    privacy: {
      title: "Ochrana údajov",
      href: "/ochrana-udajov"
    },
    impress: {
      title: "Odtlačok",
      href: "/odtlacok"
    }
  }
}, e = {
  accept: "Prijať",
  name: "Názov",
  provider: "Poskytovateľ",
  purpose: "Účel",
  privacy: "Zásady ochrany osobných údajov",
  hosts: "Host",
  cookieName: "Názov súboru cookie",
  cookieValidityPeriod: "Platnosť súborov cookie",
  links: "Odkazy"
}, i = {
  id: "meta-cookie",
  name: "Dohoda o súboroch cookie",
  provider: "Vlastník webovej stránky",
  purpose: "Uloží schválenia alebo zamietnutia pre jednotlivé súbory cookie.",
  cookieValidityPeriod: "1 rok"
}, a = {
  generalLabels: o,
  cookieLabels: e,
  metaCookieTitles: i
};
export {
  e as cookieLabels,
  a as default,
  o as generalLabels,
  i as metaCookieTitles
};
