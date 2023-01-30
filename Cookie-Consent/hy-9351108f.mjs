const e = {
  title: "Գաղտնիության կարգավորումներ",
  details: {
    back: "Վերադարձ"
  },
  description: {
    details: "Այստեղ դուք կգտնեք օգտագործված բոլոր թխուկների ակնարկը: Դուք կարող եք համաձայնվել առանձին կատեգորիաների կամ առանձին թխուկների հետ և կարող եք դիտել լրացուցիչ տեղեկություններ առանձին թխուկների մասին:",
    main: "Մենք օգտագործում ենք թխուկներ մեր կայքում հիմնական նպատակներով, ինչպես նաև վիճակագրական և մարքեթինգային նպատակներով: Արտաքին լրատվամիջոցները կարող են նաև օգտագործել թխուկներ:"
  },
  minimize: "Փոքրացնել",
  clearSite: "Ջնջել տվյալները",
  info: {
    title: "Լեգենդ",
    text: `✓ = Այս կատեգորիայում բոլոր Տեղեկանիշն ընդունված է
▣ = Այս կատեգորիայում որոշ բլիթներ ընդունված են
- = Այս կատեգորիայում ոչ մի բլիթ չի ընդունվում`
  },
  button: {
    acceptAll: "Բոլորն ընդունում են",
    acceptSelection: "Պահպանել ընտրությունը"
  },
  binarySliderLabels: {
    accepted: "Ընդունված է",
    declined: "Մերժվել է",
    partial: "Մասամբ ընդունված"
  },
  showCookieInformation: "Ցուցադրել թխուկների մասին տեղեկությունները",
  cookieDetails: "Cookie-Մանրամասներ",
  individualSettings: "Անհատական տվյալների պաշտպանության կարգավորումներ",
  requiredLinks: {
    privacy: {
      title: "տվյալների պաշտպանություն",
      href: "/privacy"
    },
    impress: {
      title: "դրոշմել",
      href: "/imprint"
    }
  }
}, i = {
  accept: "Ընդունել",
  name: "Անուն",
  provider: "մատակարարներ",
  purpose: "նպատակը",
  privacy: "Տվյալների պաշտպանություն",
  hosts: "Host",
  cookieName: "Թխվածքաբլիթի անվանումը",
  cookieValidityPeriod: "Cookie-ի վավերականություն",
  links: "Ձախ"
}, o = {
  id: "meta-cookie",
  name: "Cookie-ի համաձայնություն",
  provider: "Կայքի սեփականատեր",
  purpose: "Պահպանում է հաստատումները կամ մերժումները առանձին թխուկների վրա:",
  cookieValidityPeriod: "1 տարի"
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
