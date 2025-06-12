import "./globals.css";
import { orbitron }  from "../fonts";
import Nav from "./nav";

export const metadata = {
  title: "Tesla Clone",
  description: "Tesla Clone for a Alejandro´s Sanchez Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='light' >
      <body
        className={`${orbitron.className} relative dark:bg-black dark:text-white bg-white text-black transition-colors duration-300 ease-in antialiased`}
      >
        <Nav />
        <div
        >
          {children}
        </div>
      </body>
    </html>
  );
}
