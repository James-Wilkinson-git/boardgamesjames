declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, label: string) {
  window.gtag?.("event", name, { event_label: label });
}
