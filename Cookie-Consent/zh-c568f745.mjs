const e = {
  title: "隐私设置",
  details: {
    back: "溯源"
  },
  description: {
    details: "在这里，你会发现所有使用的cookies的概述。您可以同意个别类别或个别cookies，并有关于个别cookies的进一步信息显示。",
    main: "我们在网站上使用cookies是为了必要的目的，也是为了统计和营销目的。外部媒体也可能使用cookies。"
  },
  minimize: "尽量减少",
  clearSite: "删除数据",
  info: {
    title: "传说",
    text: `✓ = 接受该类别中的所有
▣ = 该类别中接受的一些
- = 此类别中不接受cookies`
  },
  button: {
    acceptAll: "接受所有",
    acceptSelection: "保存选择"
  },
  binarySliderLabels: {
    accepted: "已接受",
    declined: "被拒绝的",
    partial: "部分接受"
  },
  showCookieInformation: "显示cookie信息",
  cookieDetails: "饼干详情",
  individualSettings: "个人隐私设置",
  requiredLinks: {
    privacy: {
      title: "数据保护",
      href: "/privacy"
    },
    impress: {
      title: "版本说明",
      href: "/imprint"
    }
  }
}, i = {
  accept: "接受",
  name: "命名",
  provider: "供应商",
  purpose: "宗旨",
  privacy: "隐私政策",
  hosts: "Host",
  cookieName: "饼干名称",
  cookieValidityPeriod: "Cookie的有效性",
  links: "链接"
}, o = {
  id: "meta-cookie",
  name: "Cookie协议",
  provider: "网站所有者",
  purpose: "保存对个别cookies的批准或拒绝。",
  cookieValidityPeriod: "1年"
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
