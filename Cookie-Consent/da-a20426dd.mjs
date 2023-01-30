const e = {
  title: "Privatlivsindstillinger",
  details: {
    back: "Tilbage"
  },
  description: {
    details: "Her finder du en oversigt over alle de cookies, der anvendes. Du kan acceptere individuelle kategorier eller individuelle cookies og kan få vist yderligere oplysninger om de enkelte cookies.",
    main: "Vi bruger cookies på vores websted til væsentlige formål samt til statistiske og markedsføringsmæssige formål. Eksterne medier kan også bruge cookies."
  },
  minimize: "Minimer",
  clearSite: "Slet data",
  info: {
    title: "Legende",
    text: `✓ = Alle cookies i denne kategori accepteres
▣ = Nogle af de cookies, der accepteres i denne kategori
- = Ingen cookies accepteres i denne kategori`
  },
  button: {
    acceptAll: "Accepter alle",
    acceptSelection: "Accepter valg"
  },
  binarySliderLabels: {
    accepted: "Accepteret",
    declined: "Afvist",
    partial: "Delvist accepteret"
  },
  showCookieInformation: "Vis oplysninger om cookies",
  cookieDetails: "Cookie-detaljer",
  individualSettings: "individuelle indstillinger",
  requiredLinks: {
    privacy: {
      title: "Privatlivspolitik",
      href: "/privatlivspolotik"
    },
    impress: {
      title: "Impressum",
      href: "/impressum"
    }
  }
}, i = {
  accept: "Accepter",
  name: "Navn",
  provider: "Udbyder",
  purpose: "Formål",
  privacy: "Privatlivspolitik",
  hosts: "Vært",
  cookieName: "Cookie navn",
  cookieValidityPeriod: "Cookie køretid",
  links: "Links"
}, o = {
  id: "meta-cookie",
  name: "Samtykke til cookies",
  provider: "Webstedsoperatør",
  purpose: "Gemmer samtykke og afvisning af individuelle cookies",
  cookieValidityPeriod: "1 Year"
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
