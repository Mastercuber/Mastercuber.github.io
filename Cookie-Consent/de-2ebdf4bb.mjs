const e = {
  title: "Datenschutzeinstellungen",
  details: {
    back: "Zurück"
  },
  description: {
    details: "Hier findest Du eine Übersicht über alle verwendeten Cookies. Du kannst zu einzelnen Kategorien oder einzelnen Cookies zustimmen und kannst Dir weitere Informationen zu den einzelnen Cookies anzeigen lassen.",
    main: "Wir nutzen Cookies auf unserer Webseite für essenzielle Zwecke, sowie für statistische und Marketingzwecke. Auch externe Medien können Cookies verwenden."
  },
  minimize: "Minimieren",
  clearSite: "Daten löschen",
  info: {
    title: "Legende",
    text: `✓ = Alle Cookies dieser Kategorie akzeptiert
▣ = Einige Cookies dieser Kategorie akzeptiert
- = Keine Cookies dieser Kategorie akzeptiert`
  },
  button: {
    acceptAll: "Alle Akzeptieren",
    acceptSelection: "Auswahl Speichern"
  },
  binarySliderLabels: {
    accepted: "Akzeptiert",
    declined: "Abgelehnt",
    partial: "Teilweise akzeptiert"
  },
  showCookieInformation: "Cookie-Information anzeigen",
  cookieDetails: "Cookie-Details",
  individualSettings: "Individuelle Datenschutzeinstellungen",
  requiredLinks: {
    privacy: {
      title: "Datenschutz",
      href: "/datenschutz"
    },
    impress: {
      title: "Impressum",
      href: "/impressum"
    }
  }
}, i = {
  accept: "Akzeptieren",
  name: "Name",
  provider: "Anbieter",
  purpose: "Zweck",
  privacy: "Datenschutzerklärung",
  hosts: "Host",
  cookieName: "Cookie Name",
  cookieValidityPeriod: "Cookie Gültigkeit",
  links: "Links"
}, n = {
  id: "meta-cookie",
  name: "Cookie-Zustimmungen",
  provider: "Eigentümer der Webseite",
  purpose: "Speichert die Zustimmungen bzw. Ablehnungen zu den einzelnen Cookies.",
  cookieValidityPeriod: "1 Jahr"
}, t = {
  generalLabels: e,
  cookieLabels: i,
  metaCookieTitles: n
};
export {
  i as cookieLabels,
  t as default,
  e as generalLabels,
  n as metaCookieTitles
};
