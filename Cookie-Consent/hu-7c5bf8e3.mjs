const e = {
  title: "Adatvédelmi beállítások",
  details: {
    back: "Vissza"
  },
  description: {
    details: "Itt áttekintést talál az összes használt sütiről. Egyéni kategóriákhoz vagy egyes sütikhez hozzájárulhat, és további információkat kaphat az egyes sütikről.",
    main: "Weboldalunkon cookie-kat használunk alapvető célokra, valamint statisztikai és marketing célokra. A külső médiumok is használhatnak sütiket."
  },
  minimize: "Minimalizálja a",
  clearSite: "Adatok törlése",
  info: {
    title: "Legenda",
    text: `✓ = Minden cookie ebben a kategóriában elfogadott
▣ = Néhány ebben a kategóriában elfogadott cookie
- = Ebben a kategóriában nem fogadunk el sütiket`
  },
  button: {
    acceptAll: "Fogadjon el mindent",
    acceptSelection: "Kiválasztás mentése"
  },
  binarySliderLabels: {
    accepted: "Elfogadva",
    declined: "Visszautasított",
    partial: "Részben elfogadott"
  },
  showCookieInformation: "Cookie információk megjelenítése",
  cookieDetails: "Cookie részletek",
  individualSettings: "Egyéni adatvédelmi beállítások",
  requiredLinks: {
    privacy: {
      title: "Adatvédelem",
      href: "/adatvedelem"
    },
    impress: {
      title: "Impresszum",
      href: "/impresszum"
    }
  }
}, t = {
  accept: "Elfogadom",
  name: "Név",
  provider: "Szolgáltató",
  purpose: "Cél",
  privacy: "Datenschutzerklärung",
  hosts: "Host",
  cookieName: "Cookie Name",
  cookieValidityPeriod: "Cookie érvényessége",
  links: "Linkek"
}, a = {
  id: "meta-cookie",
  name: "Cookie-megállapodás",
  provider: "A weboldal tulajdonosa",
  purpose: "Menti az egyes sütik jóváhagyását vagy elutasítását.",
  cookieValidityPeriod: "1 év"
}, i = {
  generalLabels: e,
  cookieLabels: t,
  metaCookieTitles: a
};
export {
  t as cookieLabels,
  i as default,
  e as generalLabels,
  a as metaCookieTitles
};
