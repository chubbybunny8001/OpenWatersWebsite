// Node Modules
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

// Global
import "./globals.css";

// Components
import Header from "@/src/Components/Global/Header/Header";


export const metadata = {
  title: "Open Waters Worship",
  description: "Open Waters Worship is a worship group in the center of Utah called to build up the body of Christ, increase moral within the Church and create fellowship among other believers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"anonymous"} />
        {/*eslint-disable-next-line @next/next/no-page-custom-font*/}
        <link href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap" rel="stylesheet"/>
      </head>
      <body className="overflow-x-hidden">
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
