import "./globals.css";
import Head from 'next/head'
import Navbar from './components/Navbar'


export const metadata = {
  title: "Portfolio",
  description: "This is the project potfolio for David Luby",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no'></meta>
      </Head>
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
