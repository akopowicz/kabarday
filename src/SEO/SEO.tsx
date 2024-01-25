import { Helmet } from 'react-helmet-async';
export default function SEO({ title, photo }: { title: string, photo: string }) {
    return (
        <Helmet>
            { /* Standard metadata tags */}
           
            {/* <meta name='description' content={description} />
            <meta property="title" content={title} />   */}

            {/* <meta property="image" content={photo} /> */}
            {/* <meta property="image:type" content="image/png" />
            <meta property="image:width" content="240" />
            <meta property="image:height" content="240" />
            <meta property="image:alt" content="logo" /> */}
            { /* End standard metadata tags */}
            { /* Facebook tags */}
            <meta property="og:title" content={title} />
            <meta property="og:image" content={photo}/>
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="240" />
            <meta property="og:image:height" content="240" />
            <meta property="og:image:alt" content="Display Picture" />
            { /* End Facebook tags */}
            { /* Twitter tags */}
            {/* <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={photo} />
            <meta property="twitter:image:width" content="240" />
            <meta property="twitter:image:height" content="240" />
            <meta property="twitter:image:alt" content="logo" /> */}
            { /* End Twitter tags */}
        </Helmet>
    )
}