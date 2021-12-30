import Head from 'next/head'
import { PostCard } from '../../components/index.js'
import { getPosts } from '../../services/index.js'


export default function Home({posts}) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
      <link rel="shortcut icon" href="/img/logo.png" type="image/x-icon"/>
        <title>Blog</title>
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-12 col-span-1'>
          {posts && posts.map((post) => <PostCard post={post} key={post.title}/> )}
        </div>
      </div>

    </div>
  )
}

// Fetch data at build time
export async function getServerSideProps() {
  const posts = (await ((await getPosts()).data)) || [];
  return {
    props: { posts },
  };
}