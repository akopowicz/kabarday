// import ReactGA from'react-ga4';

export const analyticsEvent = (category: string, action: string) => {
  // eslint-disable-next-line
  //@ts-ignore
    gtag("event", action,{
        category: category,
        action: action,
        label: action,
      });
}