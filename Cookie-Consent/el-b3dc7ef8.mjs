const e = {
  title: "Ρυθμίσεις απορρήτου",
  details: {
    back: "Πίσω"
  },
  description: {
    details: "Εδώ θα βρείτε μια επισκόπηση όλων των cookies που χρησιμοποιούνται. Μπορείτε να συμφωνήσετε με μεμονωμένες κατηγορίες ή μεμονωμένα cookies και να έχετε περισσότερες πληροφορίες σχετικά με τα μεμονωμένα cookies.",
    main: "Χρησιμοποιούμε cookies στον ιστότοπό μας για βασικούς σκοπούς, καθώς και για στατιστικούς σκοπούς και σκοπούς μάρκετινγκ. Τα εξωτερικά μέσα ενδέχεται επίσης να χρησιμοποιούν cookies."
  },
  minimize: "Ελαχιστοποίηση",
  clearSite: "Διαγραφή δεδομένων",
  info: {
    title: "Υπόμνημα",
    text: `✓ = Όλα τα cookies σε αυτή την κατηγορία αποδεκτά
▣ = Μερικά cookies που γίνονται δεκτά σε αυτή την κατηγορία
- = Δεν γίνονται δεκτά cookies σε αυτή την κατηγορία`
  },
  button: {
    acceptAll: "Αποδοχή όλων",
    acceptSelection: "Αποθήκευση επιλογής"
  },
  binarySliderLabels: {
    accepted: "Αποδεκτή",
    declined: "Απορρίφθηκε",
    partial: "Μερικώς αποδεκτή"
  },
  showCookieInformation: "Εμφάνιση πληροφοριών cookie",
  cookieDetails: "Λεπτομέρειες cookie",
  individualSettings: "Ατομικές ρυθμίσεις απορρήτου",
  requiredLinks: {
    privacy: {
      title: "Προστασία δεδομένων",
      href: "/privacy"
    },
    impress: {
      title: "Εκτύπωση",
      href: "/imprint"
    }
  }
}, i = {
  accept: "Αποδοχή",
  name: "Όνομα",
  provider: "Πάροχος",
  purpose: "Σκοπός",
  privacy: "Πολιτική απορρήτου",
  hosts: "Host",
  cookieName: "Όνομα cookie",
  cookieValidityPeriod: "Εγκυρότητα cookie",
  links: "Links"
}, o = {
  id: "meta-cookie",
  name: "Συμφωνία cookie",
  provider: "Ιδιοκτήτης ιστοσελίδας",
  purpose: "Αποθηκεύει τις εγκρίσεις ή απορρίψεις για τα μεμονωμένα cookies.",
  cookieValidityPeriod: "1 έτος"
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
