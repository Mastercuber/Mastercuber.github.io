const e = {
  title: "Ustawienia prywatności",
  details: {
    back: "Powrót"
  },
  description: {
    details: "Tutaj znajdziesz przegląd wszystkich używanych plików cookie. Mogą Państwo wyrazić zgodę na poszczególne kategorie lub poszczególne pliki cookie i uzyskać dalsze informacje na temat poszczególnych plików cookie.",
    main: "Używamy plików cookies na naszej stronie internetowej w celach niezbędnych, statystycznych i marketingowych. Zewnętrzne media mogą również używać plików cookie."
  },
  minimize: "Zminimalizuj",
  clearSite: "Usuń dane",
  info: {
    title: "Legenda",
    text: `✓ = Wszystkie ciasteczka w tej kategorii zaakceptowane
▣ = Niektóre pliki cookie akceptowane w tej kategorii
- = W tej kategorii nie akceptuje się plików cookie`
  },
  button: {
    acceptAll: "Przyjmij wszystkie",
    acceptSelection: "Zapisz wybór"
  },
  binarySliderLabels: {
    accepted: "Zaakceptowany",
    declined: "Odrzucony",
    partial: "Częściowo przyjęty"
  },
  showCookieInformation: "Pokaż informacje o plikach cookie",
  cookieDetails: "Szczegóły dotyczące plików cookie",
  individualSettings: "Indywidualne ustawienia prywatności",
  requiredLinks: {
    privacy: {
      title: "Ochrona danych",
      href: "/ochrona-danych"
    },
    impress: {
      title: "Nadruk",
      href: "/nadruk"
    }
  }
}, i = {
  accept: "Przyjmij",
  name: "Nazwa",
  provider: "Dostawca",
  purpose: "Przeznaczenie",
  privacy: "Polityka prywatności",
  hosts: "Host",
  cookieName: "Nazwa pliku cookie",
  cookieValidityPeriod: "Ważność plików cookie",
  links: "Linki"
}, o = {
  id: "meta-cookie",
  name: "Umowa dotycząca plików cookie",
  provider: "Właściciel strony internetowej",
  purpose: "Zapisuje zatwierdzenia lub odrzucenia dla poszczególnych plików cookie.",
  cookieValidityPeriod: "1 rok"
}, a = {
  generalLabels: e,
  cookieLabels: i,
  metaCookieTitles: o
};
export {
  i as cookieLabels,
  a as default,
  e as generalLabels,
  o as metaCookieTitles
};
