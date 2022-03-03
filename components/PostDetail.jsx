import React, { useEffect, useRef, useState, forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import moment from 'moment';

const PageCover = forwardRef((props, ref) => {
  return (
    <div className="page page-cover flex items-center justify-center m-auto bg-[#000]" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = forwardRef((props, ref) => {
  return (
    <div className="page flex items-center justify-center m-auto bg-[#000]" ref={ref}>
      <div className="page-content">
        <div className="page-image"></div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number}</div>
      </div>
    </div>
  );
});


const PostDetail = ({ post }) => {

  const [pages, setPages] = useState([])

  useEffect(() => {
    setPages(post.book.url)
  }, [post])
  const book = useRef();
  const pageToGo = useRef();
  return (
    <>
      <div className="bg-black shadow-2xl shadow-black rounded-lg lg:p-8 pb-12 mb-8 overflow-hidden">
        <div className="relative overflow-hidden shadow-md mb-6">
          <img src={post.featuredImage.url} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
        </div>

        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author.photo.url}
              />
              <p className="inline align-middle text-gray-200 ml-2 font-medium text-lg">{post.author.name}</p>
            </div>
            <div className="font-medium text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl text-white font-semibold text-center">{post.title}</h1>
          <p className="text-gray-200 text-center my-4">{post.exerpt}</p>
          <h1 className="text-2xl text-center text-white my-16 break-all">{post.desc}</h1>
          {pages && pages.length > 0 && <div className="w-full text-center sm:overflow-hidden">
            <h1 className="text-xl font-semibold mb-4 text-white">FlipBook</h1>
            <HTMLFlipBook 
              width={500}
              height={707.1}
              size="stretch"
              minWidth={200}
              maxWidth={1000}
              minHeight={282.84}
              maxHeight={1414.2}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
            ref={book} className='w-full mx-auto'>
              {pages.map((page, index) => {
                return (
                  <div key={index}>
                    {index === 0 ? <PageCover><img src={page}></img></PageCover> : <Page number={index}><img src={page}></img></Page>}
                  </div>
                )
              })}
            </HTMLFlipBook>
            <button onClick={() =>
              book.current.pageFlip().flipPrev()} className='transition duration-500 ease transform hover:-translate-y-1 inline-block bg-teal-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer mt-20'>Previous page</button>
            <button onClick={() =>
              book.current.pageFlip().flipNext()} className='transition duration-500 ease transform hover:-translate-y-1 inline-block bg-teal-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer mt-20'>Next page</button>
          </div>}
        </div>
      </div>
    </>
  );
};

export default PostDetail;