import React from "react"
import { Helmet } from "react-helmet"

const ReactHelmet = (
    {
        title = "lwplabs",
        quote = "Learn with Projects",
        image = "",
        description = "Hello",
        currentUrl = "https://www.lwplabs.com"
    }
) => (
    <Helmet>
        <meta charSet="utf-8" />
        <title>LWP Labs</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf_token" content="" />
        <meta property="type" content="website" />
        <meta property="url" content={currentUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta property="title" content={title} />
        <meta property="quote" content={quote} />
        <meta name="description" content={description} />
        <meta property="image" content={image} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:quote" content={quote} />
        <meta property="og:image" content={image} />
        <meta content="image/*" property="og:image:type" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="CampersTribe" />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">
            {`
        {
          "@context": "https://lwplabs.com",
          "@type": "Educational organisation",
          "url": "https://www.lwplabs.com",
          "name": "Learn with Projects",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 86886 53287",
            "contactType": "Customer Support"
          }
        }
      `}
        </script>
    </Helmet>
)
export default ReactHelmet;
