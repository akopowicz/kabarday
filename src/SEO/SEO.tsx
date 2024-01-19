import { Helmet } from 'react-helmet-async';
export default function SEO({title, description, name, photo}:{title:string, description:string, name:string, photo:string}) {
return (
<Helmet>
{ /* Standard metadata tags */ }
<title>{title}</title>
<meta name='description' content={description} />
<meta property="image" content={photo}></meta>
<meta property="image:type" content="image/png" />
<meta property="image:width" content="240" />
<meta property="image:height" content="240" />
<meta property="image:alt" content="logo" />
{ /* End standard metadata tags */ }
{ /* Facebook tags */ }
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={photo}></meta>
<meta property="og:image:type" content="image/png" />
<meta property="og:image:width" content="240" />
<meta property="og:image:height" content="240" />
<meta property="og:image:alt" content="Display Picture" />
{ /* End Facebook tags */ }
{ /* Twitter tags */ }
<meta name="twitter:creator" content={name} />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={photo} />
<meta property="twitter:image:width" content="240" />
<meta property="twitter:image:height" content="240" />
<meta property="twitter:image:alt" content="logo" />
{ /* End Twitter tags */ }
</Helmet>
)
}