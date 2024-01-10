// import ReactGA from'react-ga4';

export const analyticsEvent = (category: string, action: string) => {

  gtag('event', action, {
    'event_category': category,
    'event_label': action,
    'value': action
  });
}