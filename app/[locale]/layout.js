import "../globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navigation from "../_components/Navigation";

// import Navigation from "@/_components/Navigation";
export default async function LocaleLayout({ children, params: { locale } }) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages(locale);

  return (
    <html dir={locale === "ar" ? "ltr" : "rtl"} lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation locale={locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
