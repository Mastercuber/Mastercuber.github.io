const e = {
  title: "إعدادات الخصوصية",
  details: {
    back: "يعود"
  },
  description: {
    details: "ستجد هنا نظرة عامة على جميع ملفات تعريف الارتباط المستخدمة. يمكنك الموافقة على الفئات الفردية أو ملفات تعريف الارتباط الفردية ويمكنك عرض مزيد من المعلومات حول ملفات تعريف الارتباط الفردية.",
    main: "نحن نستخدم ملفات تعريف الارتباط على موقعنا لأغراض أساسية ، وكذلك للأغراض الإحصائية والتسويقية. يمكن للوسائط الخارجية أيضًا استخدام ملفات تعريف الارتباط."
  },
  minimize: "تصغير",
  clearSite: "حذف البيانات",
  info: {
    title: "عنوان تفسيري",
    text: `✓ = تم قبول جميع ملفات تعريف الارتباط في هذه الفئة
▣ = تم قبول بعض ملفات تعريف الارتباط في هذه الفئة
- = لم يتم قبول ملفات تعريف الارتباط في هذه الفئة`
  },
  button: {
    acceptAll: "كل قبول",
    acceptSelection: "اختيار حفظ"
  },
  binarySliderLabels: {
    accepted: "وافقت",
    declined: "رفض",
    partial: "مقبولة جزئياً"
  },
  showCookieInformation: "إظهار معلومات ملفات تعريف الارتباط",
  cookieDetails: "تفاصيل ملفات تعريف الارتباط",
  individualSettings: "إعدادات حماية البيانات الفردية",
  requiredLinks: {
    privacy: {
      title: "حماية البيانات",
      href: "/privacy"
    },
    impress: {
      title: "بصمة",
      href: "/imprint"
    }
  }
}, i = {
  accept: "استعرض - قبل - قبول",
  name: "اسم",
  provider: "مقدمي",
  purpose: "غرض",
  privacy: "حماية البيانات",
  hosts: "مضيف",
  cookieName: "اسم ملف تعريف الارتباط",
  cookieValidityPeriod: "صلاحية ملفات تعريف الارتباط",
  links: "اليسار"
}, t = {
  id: "meta-cookie",
  name: "موافقات ملفات تعريف الارتباط",
  provider: "صاحب الموقع الإلكتروني",
  purpose: "يحفظ الموافقات أو الرفض لملفات تعريف الارتباط الفردية.",
  cookieValidityPeriod: "١ سنة"
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
