import env from "@/env";

export default function Analytics() {
  if (!env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || !env.NEXT_PUBLIC_UMAMI_HOST) {
    return null;
  } else {
    return (
      <script
        src={env.NEXT_PUBLIC_UMAMI_HOST}
        data-website-id={env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        async
      />
    );
  }
}
