import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { createMetadata } from "@/lib/metadata";
import { APP_NAME } from "@/constant";
import BuyMeACoffee from "@/script/buymeacoffe";
import Analytics from "@/script/analytics";

export const metadata = createMetadata({
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: "The easiest way to get started with your next project",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <Analytics />
        <BuyMeACoffee />
      </head>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
