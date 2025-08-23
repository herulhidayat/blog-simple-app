'use client';

import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material";
import theme from "@/styles/theme";
import { Poppins } from 'next/font/google';
import { Provider } from "react-redux";
import store from "@/store";

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body
        className={`antialiased`}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              {children}
            </Provider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
