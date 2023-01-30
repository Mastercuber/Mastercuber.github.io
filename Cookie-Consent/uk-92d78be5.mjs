const e = {
  title: "Параметри конфіденційності",
  details: {
    back: "Повернення"
  },
  description: {
    details: "Тут ви знайдете огляд усіх використовуваних файлів cookie. Ви можете погодитися з окремими категоріями або окремими файлами cookie та можете переглянути додаткову інформацію про окремі файли cookie.",
    main: "Ми використовуємо файли cookie на нашому веб-сайті для основних цілей, а також для статистичних і маркетингових цілей. Зовнішні носії також можуть використовувати файли cookie."
  },
  minimize: "Звести до мінімуму",
  clearSite: "Видалити дані",
  info: {
    title: "Легенда",
    text: `✓ = Всі файли cookie цієї категорії прийняті
▣ = Деякі файли cookie, прийняті в цій категорії
- = У цій категорії файли cookie не приймаються`
  },
  button: {
    acceptAll: "Всі приймають",
    acceptSelection: "Зберегти виділення"
  },
  binarySliderLabels: {
    accepted: "Прийнято",
    declined: "Відхилено",
    partial: "Частково прийнято"
  },
  showCookieInformation: "Показати інформацію про файли cookie",
  cookieDetails: "Інформація про файли cookie",
  individualSettings: "Індивідуальні налаштування захисту даних",
  requiredLinks: {
    privacy: {
      title: "захист даних",
      href: "/privacy"
    },
    impress: {
      title: "відбиток",
      href: "/imprint"
    }
  }
}, i = {
  accept: "Прийняти",
  name: "Ім'я",
  provider: "постачальників",
  purpose: "призначення",
  privacy: "Захист даних",
  hosts: "Host",
  cookieName: "Ім'я файлу cookie",
  cookieValidityPeriod: "Термін дії файлів cookie",
  links: "Ліворуч"
}, o = {
  id: "meta-cookie",
  name: "Згода на використання файлів cookie",
  provider: "Власник сайту",
  purpose: "Зберігає схвалення або відхилення в окремих файлах cookie.",
  cookieValidityPeriod: "1 рік"
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
