const e = {
  title: "Configuración de la privacidad",
  details: {
    back: "Volver"
  },
  description: {
    details: "Aquí encontrará un resumen de todas las cookies utilizadas. Puede aceptar categorías individuales o cookies individuales y hacer que se muestre más información sobre las cookies individuales.",
    main: "Utilizamos cookies en nuestro sitio web para fines esenciales, así como para fines estadísticos y de marketing. Los medios de comunicación externos también pueden utilizar cookies."
  },
  minimize: "Minimizar",
  clearSite: "Borrar datos",
  info: {
    title: "Leyenda",
    text: `✓ = Se aceptan todas las cookies de esta categoría
▣ = Algunas cookies aceptadas en esta categoría
- = No se aceptan cookies en esta categoría`
  },
  button: {
    acceptAll: "Aceptar todo",
    acceptSelection: "Guardar selección"
  },
  binarySliderLabels: {
    accepted: "Aceptado",
    declined: "Rechazado",
    partial: "Aceptado parcialmente"
  },
  showCookieInformation: "Mostrar información sobre las cookies",
  cookieDetails: "Detalles de las cookies",
  individualSettings: "Configuración individual de la privacidad",
  requiredLinks: {
    privacy: {
      title: "Protección de datos",
      href: "/proteccion-de-datos"
    },
    impress: {
      title: "Pie de imprenta",
      href: "/pie-de-imprenta"
    }
  }
}, i = {
  accept: "Aceptar",
  name: "Nombre",
  provider: "Proveedor",
  purpose: "Propósito",
  privacy: "Política de privacidad",
  hosts: "Host",
  cookieName: "Nombre de la cookie",
  cookieValidityPeriod: "Validez de las cookies",
  links: "Enlaces"
}, a = {
  id: "meta-cookie",
  name: "Acuerdo sobre cookies",
  provider: "Propietario del sitio web",
  purpose: "Guarda las aprobaciones o rechazos de las cookies individuales.",
  cookieValidityPeriod: "1 año"
}, o = {
  generalLabels: e,
  cookieLabels: i,
  metaCookieTitles: a
};
export {
  i as cookieLabels,
  o as default,
  e as generalLabels,
  a as metaCookieTitles
};
