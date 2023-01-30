const e = {
  title: "Privacy-instellingen",
  details: {
    back: "Terug"
  },
  description: {
    details: "Hier vindt u een overzicht van alle gebruikte cookies. U kunt instemmen met afzonderlijke categorieën of afzonderlijke cookies en u kunt nadere informatie over de afzonderlijke cookies laten weergeven.",
    main: "Wij gebruiken cookies op onze website voor essentiële doeleinden, alsmede voor statistische en marketingdoeleinden. Externe media kunnen ook cookies gebruiken."
  },
  minimize: "Minimaliseer",
  clearSite: "Gegevens wissen",
  info: {
    title: "Legende",
    text: `✓ = Alle cookies in deze categorie geaccepteerd
▣ = Enkele cookies die in deze categorie worden geaccepteerd
- = Geen cookies aanvaard in deze categorie`
  },
  button: {
    acceptAll: "Accepteer alle",
    acceptSelection: "Selectie opslaan"
  },
  binarySliderLabels: {
    accepted: "Geaccepteerd",
    declined: "Afgewezen",
    partial: "Gedeeltelijk aanvaard"
  },
  showCookieInformation: "Toon cookie-informatie",
  cookieDetails: "Cookie-Details",
  individualSettings: "Individuele privacy-instellingen",
  requiredLinks: {
    privacy: {
      title: "Privacybeleid",
      href: "/privacy"
    },
    impress: {
      title: "Afdruk",
      href: "/afdruk"
    }
  }
}, i = {
  accept: "Accepteren",
  name: "Naam",
  provider: "Aanbieder",
  purpose: "Doel",
  privacy: "Privacybeleid",
  hosts: "Host",
  cookieName: "Cookie Naam",
  cookieValidityPeriod: "Geldigheid cookie",
  links: "Links"
}, o = {
  id: "meta-cookie",
  name: "Cookie-overeenkomst",
  provider: "Website eigenaar",
  purpose: "Slaat de goedkeuringen of afkeuringen voor de individuele cookies op.",
  cookieValidityPeriod: "1 jaar"
}, n = {
  generalLabels: e,
  cookieLabels: i,
  metaCookieTitles: o
};
export {
  i as cookieLabels,
  n as default,
  e as generalLabels,
  o as metaCookieTitles
};
