import Link from 'next/link';
import Head from 'next/head';

export default function Index() {
    return (
        <>
            <Head>
                <title>Next Title Index Hello</title>
                <meta name="keywords" content="ключевые слова"/>
                <meta name="description" content="this is youtube tutorial for next" />
                {/* <meta name="charset" content="utf-8" /> */}
                <meta charSet="utf-8" />
            </Head>
            <h1>Hellow Next.JS!</h1>
            <p>
                <Link href={"/about"}>
                    <a>About</a>
                </Link>
            </p>
            <p><Link href={"/posts"}><a>Posts</a></Link></p>
            <p>loremloremloremloremloremlorem</p>
        </>
    )
}