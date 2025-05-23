import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        {/* Google Site Verification */}

        <meta name="google-site-verification" content="f-SjbRL81VKehh0LAbG9aXMIF0vLYFUxKFSbw81O_I0" />
        
        {/* Google Analytics Script */}
        {/* <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-WQ18ZQP85B`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WQ18ZQP85B');
          `}
        </Script> */}

        {/* Google Tag Manager */}
        {/* <Script
          id="google-tag-manager"
          strategy="afterInteractive"
        >
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[]; 
              w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'}); 
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:''; 
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; 
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M4J75QZ7');
          `}
        </Script> */}
        {/* End Google Tag Manager */}


        {/* Google Analytics - Placing directly inside <head> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WQ18ZQP85B');
            `,
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[]; 
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'}); 
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:''; 
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; 
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M4J75QZ7');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      {/* Google Tag Manager (noscript) */}
      <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M4J75QZ7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>


        {children}
      </body>
    </html>
  );
}
