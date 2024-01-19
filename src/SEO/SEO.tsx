import { Helmet } from 'react-helmet-async';
export default function SEO({title, description, name, photo}:{title:string, description:string, name:string, photo:string}) {
return (
<Helmet>
{ /* Standard metadata tags */ }
<title>{title}</title>
<meta name='description' content={description} />
<meta property="image" content={photo}></meta>
{ /* End standard metadata tags */ }
{ /* Facebook tags */ }
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={photo}></meta>
{ /* End Facebook tags */ }
{ /* Twitter tags */ }
<meta name="twitter:creator" content={name} />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={photo} />
{ /* End Twitter tags */ }
</Helmet>
)
}