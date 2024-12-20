import type { Metadata } from "next";
import "@/app/globals.css";
import StoreProvider from "@/app/StoreProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import Navbar from "@/components/Layout/Navbar/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "SnapShop",
  description: "A complete shopping store you need.",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang="en">
      <StoreProvider>
        <body className="antialiased">
          <NextIntlClientProvider messages={messages}>
            <Header />
            <Navbar locale={locale} />
            {children}
            <Footer />
            <ToastContainer />
          </NextIntlClientProvider>
        </body>
      </StoreProvider>
    </html>
  );
}
