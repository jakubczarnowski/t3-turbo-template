import { TailwindIndicator } from "~/components/TailwindIndicator";
import { Providers } from "~/providers";

import "~/styles/globals.css";

import { Roboto } from "next/font/google";
import { headers } from "next/headers";

import { Toaster } from "~/components/ui/toaster";
import { AuthProvider } from "~/providers/AuthProvider/AuthProvider";
import { TRPCReactProvider } from "~/trpc/react";
import { getServerUser } from "~/utils/auth";
import { cn } from "~/utils/cn";

export const metadata = {
  title: "Questions",
  description: "QUESIUHGEWUI",
};

const font = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await getServerUser();

  return (
    <>
      <html lang="en">
        <head />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            font.className,
          )}
        >
          <TRPCReactProvider headers={headers()}>
            <AuthProvider {...user}>
              <Providers>
                {children}
                <Toaster />
              </Providers>
            </AuthProvider>
          </TRPCReactProvider>
          <TailwindIndicator />
        </body>
      </html>
    </>
  );
}

export default RootLayout;
