import './globals.css';

export const metadata = {
  title: 'Energy Minds Power Solutions - Energy Consultants',
  description:
    'Technology-integrated energy trading platform delivering comprehensive solutions with data-driven insights, real-time market intelligence, and strategic optimization for sustainable energy management.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
