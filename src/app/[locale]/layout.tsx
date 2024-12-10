import "@/styles/globals.scss";
import type {Metadata} from "next";
import {NextIntlClientProvider} from "next-intl";
import {JetBrains_Mono} from "next/font/google";
import {ThemeProvider} from "@/components/theme-provider";
import {Header} from "@/components/Header/Header";
import PageTransition from "@/components/PageTransition";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
    title: "iDockDesigns",
    description: "This is my personal portfolio website.",
};

async function getMessages(locale: string) {
    try {
        return (await import(`../../../messages/${locale}.json`)).default;
    } catch {
        throw new Error(`Locale file for '${locale}' not found`);
    }
}

export default async function RootLayout({ children, params }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const paramsPromise = await params;
    const locale = paramsPromise?.locale || "en";
    const messages = await getMessages(locale);

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={jetbrainsMono.variable}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <Header />
                        <PageTransition>
                            {children}
                        </PageTransition>
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
