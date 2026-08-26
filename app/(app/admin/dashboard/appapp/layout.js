import './globals.css';

export const metadata = {
  title: 'GrowthAI — Autonomous AI Employees',
  description: 'Thirteen AI employees that answer instantly, qualify properly, and book meetings.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FDFBF7] text-[#2D2A26] antialiased">
        {children}
      </body>
    </html>
  );
}

