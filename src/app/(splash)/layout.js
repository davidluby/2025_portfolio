import "../globals.css";
import Footer from '../components/Footer'


export const metadata = {
  title: "Portfolio",
  description: "This is the project potfolio for David Luby",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
