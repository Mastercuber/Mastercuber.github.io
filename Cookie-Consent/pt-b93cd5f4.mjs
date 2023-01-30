const e = {
  title: "Definições de privacidade",
  details: {
    back: "Voltar"
  },
  description: {
    details: "Aqui encontrará uma visão geral de todos os cookies utilizados. Pode concordar com categorias individuais ou cookies individuais e ter mais informações sobre os cookies individuais exibidos.",
    main: "Utilizamos cookies no nosso website para fins essenciais, bem como para fins estatísticos e de marketing. Os meios externos também podem utilizar cookies."
  },
  minimize: "Minimizar",
  clearSite: "Apagar dados",
  info: {
    title: "Lenda",
    text: `✓ = Todos os cookies nesta categoria são aceites
▣ = Alguns cookies aceites nesta categoria
- = Não são aceites cookies nesta categoria`
  },
  button: {
    acceptAll: "Aceitar todos",
    acceptSelection: "Salvar selecção"
  },
  binarySliderLabels: {
    accepted: "Aceite",
    declined: "Rejeitado",
    partial: "Parcialmente aceite"
  },
  showCookieInformation: "Mostrar informação sobre cookies",
  cookieDetails: "Detalhes dos bolos",
  individualSettings: "Definições de privacidade individuais",
  requiredLinks: {
    privacy: {
      title: "Protecção de dados",
      href: "/proteccao-de-dados"
    },
    impress: {
      title: "Impressão",
      href: "/impressao"
    }
  }
}, i = {
  accept: "Aceitar",
  name: "Nome",
  provider: "Fornecedor",
  purpose: "Finalidade",
  privacy: "Política de privacidade",
  hosts: "Host",
  cookieName: "Nome do Cookie",
  cookieValidityPeriod: "Validade dos bolos",
  links: "Ligações"
}, o = {
  id: "meta-cookie",
  name: "Acordo de cozinheiro",
  provider: "Proprietário do website",
  purpose: "Guarda as aprovações ou rejeições para os cookies individuais.",
  cookieValidityPeriod: "1 ano"
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
