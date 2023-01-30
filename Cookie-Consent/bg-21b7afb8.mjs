const e = {
  title: "Настройки за поверителност",
  details: {
    back: "Обратно"
  },
  description: {
    details: "Тук ще намерите преглед на всички използвани бисквитки. Можете да се съгласите с отделни категории или отделни бисквитки и да получите допълнителна информация за отделните бисквитки.",
    main: 'Използваме "бисквитки" на нашия уебсайт за основни цели, както и за статистически и маркетингови цели. Външните медии също могат да използват'
  },
  minimize: "Сведете до минимум",
  clearSite: "Изтриване на данни",
  info: {
    title: "Легенда",
    text: `✓ = Всички бисквитки в тази категория приети
▣ = Някои бисквитки в тази категория приеха
- = В тази категория няма приемани бисквитки`
  },
  button: {
    acceptAll: "Приемете всички",
    acceptSelection: "Запазване на избора"
  },
  binarySliderLabels: {
    accepted: "Приема се",
    declined: "Отхвърлени",
    partial: "Частично приет"
  },
  showCookieInformation: "Показване на информация за бисквитките",
  cookieDetails: "Данни за бисквитките",
  individualSettings: "Индивидуални настройки за поверителност",
  requiredLinks: {
    privacy: {
      title: "Защита на данните",
      href: "/privacy"
    },
    impress: {
      title: "Отпечатък",
      href: "/imprint"
    }
  }
}, i = {
  accept: "Приемане на",
  name: "Име",
  provider: "Доставчик",
  purpose: "Цел",
  privacy: "Политика за поверителност",
  hosts: "Host",
  cookieName: "Име на бисквитка",
  cookieValidityPeriod: "Валидност на бисквитките",
  links: "Връзки"
}, t = {
  id: "meta-cookie",
  name: "Споразумение за бисквитки",
  provider: "Собственик на уебсайта",
  purpose: "Запазва одобренията или отказите за отделните бисквитки.",
  cookieValidityPeriod: "1 година"
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
