import "./globals.css"
import Navbar from "./components/navbar";

export const metadata = {
  title: "Mulya Teknik",
  description: "Website Resmi Mulya Teknik",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">

        <header>
          <Navbar />
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="bg-cyan-900 rounded-t-[60px]">
          {/* ... footer mu ... */}
        </footer>

      </body>
    </html>
  );
}
