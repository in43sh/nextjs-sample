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
            <style jsx global>{`
                // body {
                //     margin: 0;
                // }

                nav {
                    position: fixed;
                    height: 60px;
                    top: 0;
                    left: 0;
                    right: 0;
                    background-color: darkblue;
                    display: flex;
                    justify-content: space-around;
                    align-content: center;
                    align-items: center;
                }

                nav a {
                    color: #fff;
                    text-decoration: none;
                }
            `}</style>
        </>
    )
}