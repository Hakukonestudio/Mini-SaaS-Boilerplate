import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
               <Head>
    <meta property="og:title" content="Mini SaaS Boilerplate" />
    <meta property="og:description" content="A boilerplate for building scalable SaaS applications." />
    <meta property="og:image" content="https://yourdomain.com/image.png" />
    <meta property="og:url" content="https://yourdomain.com" />
    <meta name="x:card" content="summary_large_image" />
    <meta name="x:title" content="Mini SaaS Boilerplate" />
    <meta name="x:description" content="A boilerplate for building scalable SaaS applications." />
    <meta name="x:image" content="https://yourdomain.com/image.png" />
</Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;