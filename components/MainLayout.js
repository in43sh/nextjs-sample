import Link from 'next/link';
import Head from 'next/head';

export function MainLayout({ children, title = 'Next App' }) {
    return (
        <>
            <Head>
                <title>{title} | Next Course</title>
                <meta name="keywords" content="ключевые слова"/>
                <meta name="description" content="this is youtube tutorial for next" />
                {/* <meta name="charset" content="utf-8" /> */}
                <meta charSet="utf-8" />
            </Head>
            <nav>
                <Link href={"/"}><a>Home</a></Link>
                <Link href={"/about"}><a>About</a></Link>
                <Link href={"/posts"}><a>Posts</a></Link>
            </nav>
            <main>
                {children}
            </main>
            
        </>
    )
}