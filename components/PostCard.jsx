import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util.js';

const PostCard = ({ post, anim }) => (
  <div className="flex flex-col items-centerrounded-lg border shadow-md md:flex-row md:max-w-xl border-gray-700 bg-gray-800 mx-auto mt-10 overflow-hidden" data-aos={anim()}>
    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={post.featuredImage.url} alt=""/>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{post.title}</h5>
        <p className="mb-3 font-normal text-gray-400">{post.exerpt}</p>
        <span>Author - <img
          src={post.author.photo.url}
          alt={post.author.name}
          height="30px"
          width="30px"
          className="align-middle rounded-full inline"
        /> {post.author.name}</span>
        <Link href="/post/[slug]" as={`/post/${post.slug}`}>
          <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white transition-all duration-500 hover:border-transparent hover:text-teal-500 hover:bg-white mt-4" style={{maxWidth: '120px', minWidth: '120px'}}>Read more</a>
        </Link>
      </div>
  </div>
);

export default PostCard;