import "../globals.css";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export const metadata = {
  title: "Portfolio",
  description: "This is the project potfolio for David Luby",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
