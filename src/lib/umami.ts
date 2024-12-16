import env from "@/env";

export const trackEvent = (event: string) => {
  const analytics = !!(
    env.NEXT_PUBLIC_UMAMI_HOST && env.NEXT_PUBLIC_UMAMI_WEBSITE_ID
  );
  if (analytics) {
    umami.track(event);
  }
};
