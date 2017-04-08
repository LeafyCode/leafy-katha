import React from 'react';
import Head from 'next/head';

const AppHead = () => (
  <Head>
    <title>Leafy Katha</title>

    <meta content="en_US" property="og:locale" />
    <meta content="website" property="og:type" />
    <meta content="Leafy Katha" property="og:site_name" />
    <meta content="A podcast created by developers fordevelopers." name="description" />
    <meta content="A podcast created by developers fordevelopers." name="og:description" />
    <meta property="og:site_name" content="Leafy Katha" />

    <meta property="og:url" content="https://leafykatha.live/" />
    <meta property="og:image" content="https://leafykatha.live/static/images/share-image.png" />

    <style>{`
      body {
        background-color: #F2F6D0;
        margin: 0;
        font-family: 'Josefin Sans', sans-serif;
        color: #2D3047;
      }

      @font-face {
        font-family: 'Ayanna';
        src: url("/static/fonts/Ayanna-Bold.ttf") format("truetype");
        font-style: normal;
        font-weight: 600;
      }
    `}</style>

    <link rel="apple-touch-icon" sizes="57x57" href="/static/favicons/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/static/favicons/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/static/favicons/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/static/favicons/apple-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="/static/favicons/apple-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/static/favicons/apple-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/static/favicons/apple-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-icon-180x180.png" />
    <link
      rel="icon" type="image/png" sizes="192x192"
      href="/static/favicons/android-icon-192x192.png"
    />
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/static/favicons/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
    <link rel="manifest" href="/static/favicons/manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content="/static/favicons/ms-icon-144x144.png" />
    <meta name="theme-color" content="#ffffff" />

    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    <link
      href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,400i,600,700"
      rel="preload" onLoad="this.rel='stylesheet'"
    />

    <link
      href="//cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css"
      rel="preload" onLoad="this.rel='stylesheet'"
    />

    {/* eslint-disable react/no-danger */}
    <script
      dangerouslySetInnerHTML={{ __html: `<!-- Google Tag Manager -->
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-T5GX8FQ');</script>
      <!-- End Google Tag Manager -->` }}
    />
    {/* eslint-enable react/no-danger */}

    <noscript><iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-T5GX8FQ"
      height="0" width="0" style={{
        display: 'none',
        visibility: 'hidden'
      }}
    /></noscript>
  </Head>
  );

export default AppHead;
