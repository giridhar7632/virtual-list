import Head from 'next/head'

const makeTitle = (title, name) =>
  title === name || !name ? title : `${title} | ${name}`

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://virtual-list-seven.vercel.app'

const Meta = ({
  title = 'Photo Gallery',
  name = '',
  description = 'A simple photo gallery using infinite loading and virtualization',
  image = `/og-image.png`,
  url = baseUrl,
  keywords = 'react, photo gallery, virtualization, infinite loading',
  children,
}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="language" content="English" />
      <meta name="keywords" content={keywords} />
      <meta key="og_locale" property="og:locale" content="en_US" />
      <meta key="og_type" property="og:type" content="website" />
      <meta key="og_site" property="og:site_name" content={name} />
      <meta key="og_url" property="og:site_url" content={url} />

      <title key="title">{makeTitle(title, name)}</title>
      <meta
        key="og_title"
        property="og:title"
        content={makeTitle(title, name)}
      />
      <meta
        key="tw_title"
        name="twitter:title"
        content={makeTitle(title, name)}
      />

      <meta key="desc" name="description" content={description} />
      <meta key="og_desc" property="og:description" content={description} />
      <meta key="tw_desc" name="twitter:description" content={description} />

      <meta key="og_img" property="og:image" content={image} />
      <meta key="tw_card" name="twitter:card" content="summary_large_image" />
      <meta key="tw_img" name="twitter:image" content={image} />
      <meta key="theme_color" name="theme-color" content="#0284C7" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      {children}
    </Head>
  )
}

export default Meta
