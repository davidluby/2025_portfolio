import "./globals.css";
import Navbar from './components/Navbar'


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
        </body>
    </html>
  );
}
