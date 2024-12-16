import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { createMetadata } from "@/lib/metadata";
import { APP_NAME } from "@/constant";

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
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="laduniestu"
          data-description="Support me on Buy me a coffee!"
          data-message="☕ buy me a coffe"
          data-color="#FF813F"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
          defer
        />
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
