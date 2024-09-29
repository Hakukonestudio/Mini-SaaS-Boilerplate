import Head from 'next/head';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* Siia saad lisada ka teisi SEO seotud meta-tunnuseid */}
        </Head>
    );
};

export default SEO;