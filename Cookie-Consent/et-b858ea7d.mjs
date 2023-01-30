const e = {
  title: "Privaatsuse seaded",
  details: {
    back: "Tagasi"
  },
  description: {
    details: "Siit leiate ülevaate kõigist kasutatavatest küpsistest. Saate nõustuda üksikute kategooriate või üksikute küpsiste kasutamisega ja saada lisateavet üksikute küpsiste kohta.",
    main: "Me kasutame oma veebisaidil küpsiseid põhilistel eesmärkidel, samuti statistilistel ja turunduslikel eesmärkidel. Ka väline meedia võib kasutada küpsiseid."
  },
  minimize: "Minimeeri",
  clearSite: "Andmete kustutamine",
  info: {
    title: "Legend",
    text: `✓ = Kõik küpsised selles kategoorias on aktsepteeritud
▣ = Mõned selles kategoorias aktsepteeritud küpsised
- = Selles kategoorias ei ole küpsised lubatud`
  },
  button: {
    acceptAll: "Võtke kõik vastu",
    acceptSelection: "Salvesta valik"
  },
  binarySliderLabels: {
    accepted: "Aktsepteeritud",
    declined: "Tagasilükatud",
    partial: "Osaliselt aktsepteeritud"
  },
  showCookieInformation: "Näita küpsiste teavet",
  cookieDetails: "Küpsise üksikasjad",
  individualSettings: "Individuaalsed privaatsusseaded",
  requiredLinks: {
    privacy: {
      title: "Andmekaitse",
      href: "/andmekaitse"
    },
    impress: {
      title: "Jälg",
      href: "/jaelg"
    }
  }
}, i = {
  accept: "Aktsepteeri",
  name: "Nimi",
  provider: "Teenusepakkuja",
  purpose: "Eesmärk",
  privacy: "Privaatsuspoliitika",
  hosts: "Host",
  cookieName: "Küpsise nimi",
  cookieValidityPeriod: "Küpsise kehtivus",
  links: "Links"
}, s = {
  id: "meta-cookie",
  name: "Küpsiste leping",
  provider: "Veebilehe omanik",
  purpose: "Salvestab üksikute küpsiste heakskiitmise või tagasilükkamise.",
  cookieValidityPeriod: "1 aasta"
}, a = {
  generalLabels: e,
  cookieLabels: i,
  metaCookieTitles: s
};
export {
  i as cookieLabels,
  a as default,
  e as generalLabels,
  s as metaCookieTitles
};
