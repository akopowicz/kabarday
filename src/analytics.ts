import ReactGA from'react-ga4';

export const analyticsEvent = (category: string, action: string) => {
    ReactGA.event({
        category: category,
        action: action,
        label: action,
      });
}