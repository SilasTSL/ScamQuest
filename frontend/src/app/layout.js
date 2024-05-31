import "./globals.css";

export const metadata = {
  title: "ScamQuest",
  description: "This is the frontend for ScamQuest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
      </body>
    </html>
  );
}
