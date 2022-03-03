import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import { PostDetail, Loader } from '../../components/index.js';
import { getPosts, getPostDetails } from '../../services/index.js';
import Head from 'next/head';
import axios from 'axios';


const PostPage = ( props ) => {
  const { post } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  
  const [PostDetails, setPostDetails] = useState(null);
  useEffect(() => {
    
    const data = async () => {
     const d = await axios.get(`https://csvoyager-api.vercel.app/api/posts/${props.slug}`)
     setPostDetails(d.data);
    }
    data()
    
  }, [router]);

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <link rel="shortcut icon" href="/img/logo.png" type="image/x-icon"/>
        <meta name="og:description" content={`${post.exerpt} by ${post.author.name}`} />
        <meta name="og:image" content={post.featuredImage.url} />
        <meta name="og:title" content={post.title} />
        <meta name="og:url" content={`https://csvoyager.vercel.app/post/${post.slug}`} />
        <meta name='keywords' content={`newsletter, csvoyager, csv, computer science newsletter, ${post.title}, ${post.slug}, ${post.title} CsVoyager`} />
      </Head>
      <div className="container bg-black mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-12">
            {PostDetails ? <PostDetail post={PostDetails}/> :  <PostDetail post={props.post} />}
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
      slug: params.slug
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.data.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}