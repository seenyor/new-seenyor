import { AuthProvider } from "@/context/AuthContext";
import "@/styles/index.css";
import "@/styles/tailwind.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

// import { Poppins } from "next/font/google";

export const metadata = {
  title: "Seenyor",
  description: "Elderly Care Solution",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [{ rel: "android-chrome", url: "/android-chrome-192x192.png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-1Y81WB3N0L"
          ></script>
          <script>
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-1Y81WB3N0L');
              `}
          </script>
        </head>
        <body>
          {children}
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  );
}
