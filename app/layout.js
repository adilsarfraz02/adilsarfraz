import { NextuiProviders } from "./providers/NextuiProvider";
import './globals.css'
import Header from "./components/Header";

export const metadata = {
  title: 'ADil Sarfraz | Web Developer',
  description: `Hi, I am ADil Sarfraz a web developer based in Pakistan`,
  keywords:
  'web development, react js, nextjs, nodejs, javascript, typescript, , tailwind css,frontend devolper,Adil sarfraz,muhammad adil,adil '
}
export default function RootLayout({children}) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Header />
        <NextuiProviders>
          {children}
        </NextuiProviders>
      </body>
    </html>
  );
}  