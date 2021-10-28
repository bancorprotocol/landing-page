declare global {
  interface Window {
    dataLayer: any
  }
}

export const googleTagManager = () => {
  if (window.dataLayer) return

  window.dataLayer = [
    {
      page: { class: 'Web' },
    },
  ]
  init(window, document, 'script', 'dataLayer', 'GTM-TCBKR7W')
}

const init = (w: any, d: any, s: any, l: any, i: any) => {
  w[l] = w[l] || []
  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != 'dataLayer' ? '&l=' + l : ''
  j.async = true
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
  f.parentNode.insertBefore(j, f)
}
