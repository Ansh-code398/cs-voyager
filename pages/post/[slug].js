import React from 'react';
import { useRouter } from 'next/router';
import { PostDetail, Loader } from '../../components/index.js';
import { getPosts, getPostDetails } from '../../services/index.js';
import Head from 'next/head';

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <link rel="shortcut icon" href="/img/logo.png" type="image/x-icon"/>
        <meta name="og:description" content={`${post.excerpt} by ${post.author.name}`} />
        <meta name="og:image" content={post.featuredImage.url} />
        <meta name="og:title" content={post.title} />
        <meta name="og:url" content={`https://csvoyager.vercel.app/post/${post.slug}`} />
      </Head>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-12">
            <PostDetail post={post} />
          </div>
        </div>
      </div>
    </>
  );
};
export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.data.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}