import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import {MainLayout} from '../../components/MainLayout';
import Link from 'next/link';

export default function Post({ post: serverPost }) {
    const [post, setPost] = useState(serverPost);
    const router = useRouter();
    console.log(router);
    return (
        <MainLayout title={'Home Page'}>
            {/* <h1>Post {router.query.id}</h1> */}
            <h1>{post.title}</h1>
            <br/>
            <p>{post.body}</p>
            <Link href={'/posts'}>
                <a>Back to all posts</a>
            </Link>
        </MainLayout>
    )
}

Post.getInitialProps = async ({ query, req }) => {
    if (!req) {
        return {post: null}
    }
    console.log(ctx.query);
    const response = await fetch(`http://localhost:4200/posts/${query.id}`);
    const post = await response.json();

    return {
        post
    }
}