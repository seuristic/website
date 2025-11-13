import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
}

const defaultTitle = 'Mohammad Shahanwaz | Software Engineer'
const defaultDescription =
  'Software Engineer passionate about building creative solutions. Explore my work, photography, and journey in tech.'
const defaultImage = '/apple-touch-icon.png'
const siteUrl = import.meta.env.VITE_SITE_URL || 'https://shahanwaz.dev'

export const SEO = ({
  title,
  description = defaultDescription,
  image = defaultImage,
  url,
  type = 'website',
}: SEOProps) => {
  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle
  const pageUrl = url ? `${siteUrl}${url}` : siteUrl
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Mohammad Shahanwaz" />
      <link rel="canonical" href={pageUrl} />
    </Helmet>
  )
}

