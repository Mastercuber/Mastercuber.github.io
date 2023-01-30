const e = {
  title: "गोपनीय सेटिंग",
  details: {
    back: "वापसी"
  },
  description: {
    details: "यहां आपको उपयोग की गई सभी कुकीज़ का अवलोकन मिलेगा। आप अलग-अलग श्रेणियों या अलग-अलग कुकीज़ के लिए सहमत हो सकते हैं और आप अलग-अलग कुकीज़ के बारे में अधिक जानकारी देख सकते हैं।",
    main: "हम अपनी वेबसाइट पर आवश्यक उद्देश्यों के साथ-साथ सांख्यिकीय और विपणन उद्देश्यों के लिए कुकीज़ का उपयोग करते हैं। बाहरी मीडिया भी कुकीज़ का उपयोग कर सकता है।"
  },
  minimize: "छोटा करना",
  clearSite: "डेटा हटाएं",
  info: {
    title: "दंतकथा",
    text: `✓ = इस श्रेणी में सभी कुकीज़ ने स्वीकार किया
▣ = इस श्रेणी में कुछ कुकीज़ स्वीकार किए जाते हैं
- = इस श्रेणी में कोई कुकीज़ स्वीकार नहीं की`
  },
  button: {
    acceptAll: "सभी स्वीकार करते हैं",
    acceptSelection: "चयन सहेजें"
  },
  binarySliderLabels: {
    accepted: "को स्वीकृत",
    declined: "अस्वीकृत",
    partial: "आंशिक रूप से स्वीकृत"
  },
  showCookieInformation: "कुकी जानकारी दिखाएं",
  cookieDetails: "कुकी-विवरण",
  individualSettings: "व्यक्तिगत डेटा सुरक्षा सेटिंग्स",
  requiredLinks: {
    privacy: {
      title: "डेटा सुरक्षा",
      href: "/privacy"
    },
    impress: {
      title: "छाप",
      href: "/imprint"
    }
  }
}, i = {
  accept: "स्वीकार करना",
  name: "नाम",
  provider: "प्रदाताओं",
  purpose: "प्रयोजन",
  privacy: "डेटा सुरक्षा",
  hosts: "मेज़बान",
  cookieName: "कुकी का नाम",
  cookieValidityPeriod: "कुकी वैधता",
  links: "बाएं"
}, t = {
  id: "meta-cookie",
  name: "कुकी सहमति",
  provider: "वेबसाइट का मालिक",
  purpose: "व्यक्तिगत कुकीज़ के लिए अनुमोदन या अस्वीकृति सहेजता है।",
  cookieValidityPeriod: "1 वर्ष"
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
