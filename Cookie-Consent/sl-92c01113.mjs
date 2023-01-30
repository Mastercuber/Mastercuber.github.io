const e = {
  title: "Nastavitve zasebnosti",
  details: {
    back: "Nazaj"
  },
  description: {
    details: "Tukaj boste našli pregled vseh uporabljenih piškotkov. Strinjate se lahko s posameznimi kategorijami ali posameznimi piškotki in prikažete dodatne informacije o posameznih piškotkih.",
    main: "Piškotke na našem spletnem mestu uporabljamo za osnovne namene ter za statistične in trženjske namene. Piškotke lahko uporabljajo tudi zunanji mediji."
  },
  minimize: "Minimieren",
  clearSite: "Brisanje podatkov",
  info: {
    title: "Legenda",
    text: `✓ = Sprejeti vsi piškotki v tej kategoriji
▣ = Nekateri piškotki, sprejeti v tej kategoriji
- = Piškotki v tej kategoriji niso sprejeti`
  },
  button: {
    acceptAll: "Sprejmite vse",
    acceptSelection: "Shranjevanje izbire"
  },
  binarySliderLabels: {
    accepted: "Sprejeto",
    declined: "Zavrnjeno",
    partial: "Delno sprejeto"
  },
  showCookieInformation: "Prikaži informacije o piškotkih",
  cookieDetails: "Podrobnosti o piškotkih",
  individualSettings: "Individualne nastavitve zasebnosti",
  requiredLinks: {
    privacy: {
      title: "Varstvo podatkov",
      href: "/varstvo-podatkov"
    },
    impress: {
      title: "Odtis",
      href: "/odtis"
    }
  }
}, i = {
  accept: "Sprejmite",
  name: "Ime",
  provider: "Ponudnik",
  purpose: "Namen",
  privacy: "Politika zasebnosti",
  hosts: "Host",
  cookieName: "Ime piškotka",
  cookieValidityPeriod: "Veljavnost piškotkov",
  links: "Povezave"
}, o = {
  id: "meta-cookie",
  name: "Sporazum o piškotkih",
  provider: "Lastnik spletnega mesta",
  purpose: "Shrani odobritve ali zavrnitve za posamezne piškotke.",
  cookieValidityPeriod: "1 leto"
}, t = {
  generalLabels: e,
  cookieLabels: i,
  metaCookieTitles: o
};
export {
  i as cookieLabels,
  t as default,
  e as generalLabels,
  o as metaCookieTitles
};
