const e = {
  title: "Kushtet e Privatësisë",
  details: {
    back: "Kthimi"
  },
  description: {
    details: "Këtu do të gjeni një përmbledhje të të gjitha cookies të përdorura. Ju mund të bini dakord për kategoritë individuale ose cookie-t individuale dhe mund të shikoni informacione të mëtejshme rreth skedarëve individualë.",
    main: "Ne përdorim cookies në faqen tonë të internetit për qëllime thelbësore, si dhe për qëllime statistikore dhe marketingu. Mediat e jashtme mund të përdorin gjithashtu cookie."
  },
  minimize: "Minimizoje",
  clearSite: "Fshi të dhënat",
  info: {
    title: "Legjendë",
    text: `✓ = Të gjitha cookies në këtë kategori pranuan
▣ = Disa cookie në këtë kategori pranuan
- = Asnjë cookie në këtë kategori nuk pranohet`
  },
  button: {
    acceptAll: "Të gjithë pranojnë",
    acceptSelection: "Ruaj përzgjedhjen"
  },
  binarySliderLabels: {
    accepted: "Pranuar",
    declined: "Refuzuar",
    partial: "Pjesërisht e pranuar"
  },
  showCookieInformation: "Shfaq informacionin e cookie-ve",
  cookieDetails: "Cookie-Detajet",
  individualSettings: "Cilësimet individuale të mbrojtjes së të dhënave",
  requiredLinks: {
    privacy: {
      title: "mbrojtjen e të dhënave",
      href: "/mbrojtjen-e-te-dhenave"
    },
    impress: {
      title: "gjurmë",
      href: "/gjurme"
    }
  }
}, i = {
  accept: "Pranoje",
  name: "Emri",
  provider: "ofruesit",
  purpose: "qëllimi",
  privacy: "Mbrojtja e të dhënave",
  hosts: "Host",
  cookieName: "Vlefshmëria e cookie-t",
  cookieValidityPeriod: "",
  links: "Majtas"
}, t = {
  id: "meta-cookie",
  name: "Pëlqimet për cookie",
  provider: "Pronari i faqes në internet",
  purpose: "Ruan miratimet ose refuzimet në kukit individualë.",
  cookieValidityPeriod: "1 vit"
}, o = {
  generalLabels: e,
  cookieLabels: i,
  metaCookieTitles: t
};
export {
  i as cookieLabels,
  o as default,
  e as generalLabels,
  t as metaCookieTitles
};
