export const analyticsEvent = (category: string, action: string) => {

  gtag('event', action, {
    'event_category': category,
    'event_label': action,
    'value': action
  });
}