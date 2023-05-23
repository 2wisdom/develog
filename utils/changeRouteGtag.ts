declare global {
  interface Window {
    gtag: any;
  }
}

const changeRouteGtag = (url: string) => {
  window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
    page_path: url,
  });
};

export default changeRouteGtag;
