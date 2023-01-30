const e = {
  title: "Personverninnstillinger",
  details: {
    back: "Komme tilbake"
  },
  description: {
    details: "Her finner du en oversikt over alle informasjonskapsler som brukes. Du kan godta individuelle kategorier eller individuelle informasjonskapsler, og du kan se mer informasjon om de enkelte informasjonskapslene.",
    main: "Vi bruker informasjonskapsler på nettsiden vår til viktige formål, så vel som for statistikk- og markedsføringsformål. Eksterne medier kan også bruke informasjonskapsler."
  },
  minimize: "Minimer",
  clearSite: "Slett data",
  info: {
    title: "Legende",
    text: `✓ = Alle informasjonskapsler i denne kategorien akseptert
▣ = Noen informasjonskapsler i denne kategorien akseptert
- = Ingen informasjonskapsler i denne kategorien akseptert`
  },
  button: {
    acceptAll: "Alle godtar",
    acceptSelection: "Lagre utvalg"
  },
  binarySliderLabels: {
    accepted: "Akseptert",
    declined: "Avslått",
    partial: "Delvis akseptert"
  },
  showCookieInformation: "Vis informasjon om informasjonskapsler",
  cookieDetails: "Informasjonskapsel-detaljer",
  individualSettings: "Individuelle databeskyttelsesinnstillinger",
  requiredLinks: {
    privacy: {
      title: "data beskyttelse",
      href: "/data-beskyttelse"
    },
    impress: {
      title: "avtrykk",
      href: "/avtrykk"
    }
  }
}, s = {
  accept: "Aksepterer",
  name: "Navn",
  provider: "tilbydere",
  purpose: "hensikt",
  privacy: "Data beskyttelse",
  hosts: "Host",
  cookieName: "Informasjonskapselnavn",
  cookieValidityPeriod: "Informasjonskapselens gyldighet",
  links: "Venstre"
}, i = {
  id: "meta-cookie",
  name: "Samtykke til informasjonskapsler",
  provider: "Nettstedseier",
  purpose: "Lagrer godkjenningene eller avslagene til de enkelte informasjonskapslene.",
  cookieValidityPeriod: "1 år"
}, n = {
  generalLabels: e,
  cookieLabels: s,
  metaCookieTitles: i
};
export {
  s as cookieLabels,
  n as default,
  e as generalLabels,
  i as metaCookieTitles
};
