export const googleTagManager = () => {
    if (window.dataLayer) return;
    init(window, document, "script", "dataLayer", "GTM-TCBKR7W");
    sendGTMPath(undefined, window.location.pathname);
  };
  
  const init = (w: any, d: any, s: any, l: any, i: any) => {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  };
  
  const sendGTM = (data: {}) => {
    const dataLayer = window.dataLayer as {}[];
    if (dataLayer) dataLayer.push(data);
  };
  
  export const sendGTMEvent = (
    event: string,
    ga_event_category: string,
    event_properties: {} | undefined = undefined
  ) =>
    sendGTM({
      event: "CE " + event,
      event_properties: event_properties,
      user_properties: undefined,
      ga_event: {
        category: ga_event_category
      }
    });
  
  export const sendGTMPath = (
    from: string | undefined,
    to: string,
    darkMode: boolean = false
  ) =>
    sendGTM({
      event: "VP " + to,
      page: {
        from_path: from,
        to_path: to,
        theme: darkMode ? "Dark" : "Light"
      },
      user_properties: undefined,
      ga_event: undefined
    });
  