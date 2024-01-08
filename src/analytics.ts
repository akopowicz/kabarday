// import ReactGA from'react-ga4';

export const analyticsEvent = (category: string, action: string) => {
  // eslint-disable-next-line
  //@ts-ignore
  gtag('event', action, {
    'event_category': category,
    'event_label': action,
    'value': action
  });
}