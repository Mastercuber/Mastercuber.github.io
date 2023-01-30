const e = {
  title: "Privacy Settings",
  details: {
    back: "Back"
  },
  description: {
    details: "Here you find an overview from all used cookies of this site. You can agree with some categories or cookies and also let you see further Information about individual cookies.",
    main: "We use cookies on our website for essential purposes, as well as for statistical and marketing purposes. External media may also use cookies."
  },
  minimize: "Minimize",
  clearSite: "Delete data",
  info: {
    title: "Legend",
    text: `✓ = All cookies in this category accepted
▣ = Some cookies accepted in this category
- = No cookies accepted in this category`
  },
  button: {
    acceptAll: "Accept All",
    acceptSelection: "Accept Selection"
  },
  binarySliderLabels: {
    accepted: "Accepted",
    declined: "Denied",
    partial: "Partially accepted"
  },
  showCookieInformation: "Show Cookie-Information",
  cookieDetails: "Cookie-Details",
  individualSettings: "Individual Settings",
  requiredLinks: {
    privacy: {
      title: "Privacy",
      href: "/privacy"
    },
    impress: {
      title: "Imprint",
      href: "/imprint"
    }
  }
}, i = {
  accept: "Accept",
  name: "Name",
  provider: "Provider",
  purpose: "Purpose",
  privacy: "Privacy Notice",
  hosts: "Host",
  cookieName: "Cookie Name",
  cookieValidityPeriod: "Cookie Validity",
  links: "Links"
}, o = {
  id: "meta-cookie",
  name: "Cookie-Consent",
  provider: "Provider of the website",
  purpose: "Stores the consent or refusal of individual cookies",
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
