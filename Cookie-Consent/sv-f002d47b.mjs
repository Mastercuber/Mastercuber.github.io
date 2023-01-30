const e = {
  title: "Inställningar för sekretess",
  details: {
    back: "Tillbaka"
  },
  description: {
    details: "Här hittar du en översikt över alla cookies som används. Du kan godkänna enskilda kategorier eller enskilda cookies och få ytterligare information om de enskilda cookies som visas.",
    main: "Vi använder cookies på vår webbplats för viktiga ändamål samt för statistik och marknadsföring. Externa medier kan också använda cookies."
  },
  minimize: "Zmanjšanje",
  clearSite: "Ta bort uppgifter",
  info: {
    title: "Legend",
    text: `✓ = Alla kakor i denna kategori accepteras
▣ = Några kakor som accepteras i denna kategori
- = Inga kakor accepteras i denna kategori`
  },
  button: {
    acceptAll: "Acceptera alla",
    acceptSelection: "Spara val"
  },
  binarySliderLabels: {
    accepted: "Godkänd",
    declined: "Avvisad",
    partial: "Delvis godkänt"
  },
  showCookieInformation: "Visa information om cookies",
  cookieDetails: "Uppgifter om cookies",
  individualSettings: "Individuella sekretessinställningar",
  requiredLinks: {
    privacy: {
      title: "Uppgiftsskydd",
      href: "/uppgiftsskydd"
    },
    impress: {
      title: "Tryck",
      href: "/tryck"
    }
  }
}, a = {
  accept: "Acceptera",
  name: "Namn",
  provider: "Leverantör",
  purpose: "Syfte",
  privacy: "Integritetspolicy",
  hosts: "Host",
  cookieName: "Cookie-namn",
  cookieValidityPeriod: "Cookie giltighet",
  links: "Länkar"
}, i = {
  id: "meta-cookie",
  name: "Avtal om kakor (cookies)",
  provider: "Webbplatsägare",
  purpose: "Sparar godkännanden eller avslag för enskilda kakor.",
  cookieValidityPeriod: "1 år"
}, o = {
  generalLabels: e,
  cookieLabels: a,
  metaCookieTitles: i
};
export {
  a as cookieLabels,
  o as default,
  e as generalLabels,
  i as metaCookieTitles
};
