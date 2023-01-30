const e = {
  title: "Настройки конфиденциальности",
  details: {
    back: "Назад"
  },
  description: {
    details: "Здесь вы найдете обзор всех используемых файлов cookie. Вы можете дать согласие на отдельные категории или отдельные файлы cookie и получить дополнительную информацию об отдельных файлах cookie.",
    main: "Мы используем файлы cookie на нашем сайте для основных целей, а также для статистических и маркетинговых целей. Внешние носители также могут использовать файлы cookie."
  },
  minimize: "Минимизировать",
  clearSite: "Удалить данные",
  info: {
    title: "Легенда",
    text: `✓ = Все печенья в этой категории приняты
▣ = Некоторые файлы cookie, принятые в этой категории
- = В этой категории файлы cookie не принимаются`
  },
  button: {
    acceptAll: "Принять все",
    acceptSelection: "Сохранить выбор"
  },
  binarySliderLabels: {
    accepted: "Принято",
    declined: "Отклонено",
    partial: "Частично принят"
  },
  showCookieInformation: "Показать информацию о файлах cookie",
  cookieDetails: "Информация о файлах cookie",
  individualSettings: "Индивидуальные настройки конфиденциальности",
  requiredLinks: {
    privacy: {
      title: "Защита данных",
      href: "/privacy"
    },
    impress: {
      title: "Оттиск",
      href: "/imprint"
    }
  }
}, i = {
  accept: "Принять",
  name: "Имя",
  provider: "Провайдер",
  purpose: "Назначение",
  privacy: "Политика конфиденциальности",
  hosts: "Host",
  cookieName: "Имя файла cookie",
  cookieValidityPeriod: "Срок действия куки",
  links: "Ссылки"
}, o = {
  id: "meta-cookie",
  name: "Соглашение о файлах cookie",
  provider: "Владелец сайта",
  purpose: "Сохраняет одобрения или отклонения для отдельных файлов cookie.",
  cookieValidityPeriod: "1 год"
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
