import SmoothScrollingWrapper from "@/components/SmoothScrolling/SmoothScrollingWrapper";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <SmoothScrollingWrapper>{children}</SmoothScrollingWrapper>
        </Theme>
        
      </body>
    </html>
  );
}
