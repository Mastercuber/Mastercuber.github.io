const o = {
  title: "Nastavení soukromí",
  details: {
    back: "Zpět"
  },
  description: {
    details: "Zde najdete přehled všech používaných souborů cookie. Můžete souhlasit s jednotlivými kategoriemi nebo jednotlivými soubory cookie a nechat si zobrazit další informace o jednotlivých souborech cookie.",
    main: "Na našich webových stránkách používáme soubory cookie pro základní účely a pro statistické a marketingové účely. Externí média mohou také používat soubory cookie."
  },
  minimize: "Minimalizujte",
  clearSite: "Odstranění dat",
  info: {
    title: "Legenda",
    text: `✓ = Všechny soubory cookie v této kategorii jsou přijaty
▣ = Některé soubory cookie přijaté v této kategorii
- = V této kategorii nejsou přijímány žádné soubory cookie`
  },
  button: {
    acceptAll: "Přijmout všechny",
    acceptSelection: "Uložit výběr"
  },
  binarySliderLabels: {
    accepted: "Přijato",
    declined: "Odmítnuto",
    partial: "Částečně přijato"
  },
  showCookieInformation: "Zobrazit informace o souborech cookie",
  cookieDetails: "Podrobnosti o souborech cookie",
  individualSettings: "Individuální nastavení soukromí",
  requiredLinks: {
    privacy: {
      title: "Ochrana údajů",
      href: "/chrana-udaju"
    },
    impress: {
      title: "Otisk",
      href: "/otisk"
    }
  }
}, e = {
  accept: "Přijmout",
  name: "Název",
  provider: "Poskytovatel",
  purpose: "Účel",
  privacy: "Zásady ochrany osobních údajů",
  hosts: "Host",
  cookieName: "Název souboru cookie",
  cookieValidityPeriod: "Platnost souborů cookie",
  links: "Odkazy"
}, i = {
  id: "meta-cookie",
  name: "Dohoda o souborech cookie",
  provider: "Vlastník webových stránek",
  purpose: "Uloží schválení nebo zamítnutí jednotlivých souborů cookie.",
  cookieValidityPeriod: "1 rok"
}, t = {
  generalLabels: o,
  cookieLabels: e,
  metaCookieTitles: i
};
export {
  e as cookieLabels,
  t as default,
  o as generalLabels,
  i as metaCookieTitles
};
