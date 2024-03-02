import "@/styles/globals.css";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
export const metadata = {
	title: 'ADil Sarfraz | Full Stack Developer',
	description: 'I\'m a full stack developer, I love to build things and solve problems.',
	icons: {
		icon: "/favicon.ico",
	},
};


export default function RootLayout({
	children,
}) {
	return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="absolute inset-0 z-0 bg-purple-500/40 w-1/4 right-0 h-1/2 top-12 rounded-full blur-3xl" />
          <div className="min-h-screen">
            <Navbar />
            <main className="mx-auto max-w-7xl pt-16 flex-grow">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
