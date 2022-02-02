import Head from 'next/head'
import { PostCard } from '../../components/index.js'
import { getPosts } from '../../services/index.js'



export default function Home({posts}) {
  const aos_animations = [
    'fade-up',
    'fade-down',
    'fade-left',
    'fade-right',
    'fade-up-right',
    'fade-up-left',
    'fade-down-right',
    'fade-down-left',
    'fade-up-big',
    'fade-down-big',
    'fade-left-big',
    'fade-right-big',
  ]
  const chooseAnimation = () => {
    return aos_animations[Math.floor(Math.random() * aos_animations.length)].toString()
  }
  return (
    <div className="container mx-auto px-10 mb-8 overflow-x-hidden">
      <Head>
      <link rel="shortcut icon" href="/img/logo.png" type="image/x-icon"/>
        <title>Blog</title>
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-12 col-span-1'>
          {posts && posts.map((post) => <PostCard post={post} key={post.title} anim={chooseAnimation} />)}
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