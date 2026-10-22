import "./globals.css";

export const metadata = {
  title: "Ma Garderie | Grandir avec le sourire",
  description:
    "Découvrez Ma Garderie, un espace chaleureux pour jouer, apprendre et grandir.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
