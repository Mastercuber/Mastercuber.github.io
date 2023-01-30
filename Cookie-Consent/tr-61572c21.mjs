const e = {
  title: "Gizlilik ayarları",
  details: {
    back: "Dönüş"
  },
  description: {
    details: "Burada kullanılan tüm çerezlerin bir özetini bulacaksınız. Bireysel kategorileri veya bireysel tanımlama bilgilerini kabul edebilir ve bireysel tanımlama bilgileri hakkında daha fazla bilgi görüntüleyebilirsiniz.",
    main: "Web sitemizde çerezleri temel amaçlar ve ayrıca istatistiksel ve pazarlama amaçları için kullanıyoruz. Harici medya da çerezleri kullanabilir."
  },
  minimize: "küçültmek",
  clearSite: "Verileri sil",
  info: {
    title: "Efsane",
    text: `✓ = Bu kategorideki tüm çerezler kabul edildi
▣ = Bu kategoride kabul edilen bazı çerezler
- = Bu kategoride çerez kabul edilmez`
  },
  button: {
    acceptAll: "Hepsi kabul ediyor",
    acceptSelection: "Seçimi kaydet"
  },
  binarySliderLabels: {
    accepted: "Kabul edilmiş",
    declined: "reddedildi",
    partial: "Kısmen kabul edildi"
  },
  showCookieInformation: "Çerez bilgilerini göster",
  cookieDetails: "Çerez-Ayrıntılar",
  individualSettings: "Bireysel veri koruma ayarları",
  requiredLinks: {
    privacy: {
      title: "veri koruması",
      href: "/veri-korumasi"
    },
    impress: {
      title: "damga",
      href: "/damga"
    }
  }
}, i = {
  accept: "Kabul etmek",
  name: "İsim",
  provider: "sağlayıcılar",
  purpose: "amaç",
  privacy: "Veri koruması",
  hosts: "Host",
  cookieName: "Çerez Adı",
  cookieValidityPeriod: "Çerez geçerliliği",
  links: "Sol"
}, a = {
  id: "meta-cookie",
  name: "Çerez İzinleri",
  provider: "Web sitesi sahibi",
  purpose: "Onayları veya retleri ayrı çerezlere kaydeder.",
  cookieValidityPeriod: "1 yil"
}, l = {
  generalLabels: e,
  cookieLabels: i,
  metaCookieTitles: a
};
export {
  i as cookieLabels,
  l as default,
  e as generalLabels,
  a as metaCookieTitles
};
