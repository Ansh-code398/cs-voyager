import React, { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'
const Impact = () => {
    const StatsRef = useRef(null)
    const isIntersecting = useOnScreen(StatsRef)
    return (
        <section className="bg-black text-white py-20">
            <div className="container">
                <div className='flex flex-col flex-1'>
                    <div className='max-w-sm mx-auto rounded-[100%] p-16 text-center flex-wrap'>
                        <img src="/img/logo.png" className='mb-5' />
                        Stats of {" "}
                        <a href='https://www.youtube.com/channel/UCGMSC8De3GQ5s8Ko1ZZ7W4w' className='bg-blue-500 rounded-lg px-10 py-2 mt-5 transition-all hover:bg-blue-800 duration-500 inline-block'>CS Voyager</a>
                    </div>
                    <div className="container mx-auto px-20" ref={StatsRef}>
                        {isIntersecting && <div className="flex flex-col w-full items-center justify-center" style={{ cursor: 'auto' }} >
                            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
                                <div className="metric-card bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full" style={{ cursor: 'auto' }}>
                                    <div className="flex items-center text-gray-900 dark:text-gray-100" style={{ cursor: 'auto' }}>Posts</div>
                                    <p className="mt-2 text-3xl font-bold spacing-sm text-black dark:text-white" style={{ cursor: 'auto' }}>
                                        <CountUp start={0} end={100} suffix="+ posts and videos" duration={2} />
                                    </p>
                                </div>
                                <div className="metric-card bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full" style={{ cursor: 'auto' }}>
                                    <div className="flex items-center text-gray-900 dark:text-gray-100" style={{ cursor: 'auto' }}>Views</div>
                                    <p className="mt-2 text-3xl font-bold spacing-sm text-black dark:text-white" style={{ cursor: 'auto' }}><CountUp start={0} end={10000} suffix="+" duration={2} /></p>
                                </div>
                            </div>
                            <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 my-2 w-full">
                                <div className="metric-card bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full" style={{ cursor: 'auto' }}>
                                    <div className="flex items-center text-gray-900 dark:text-gray-100" style={{ cursor: 'auto' }}>Followers</div>

                                    <p className="mt-2 text-3xl font-bold spacing-sm text-black dark:text-white" style={{ cursor: 'auto' }}><CountUp start={0} end={100} suffix="+ Total Followers" duration={2} /></p>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Impact

function useOnScreen(ref) {

    const [isIntersecting, setIntersecting] = useState(false)
  
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting)
          )
      observer.observe(ref.current)
      // Remove the observer as soon as the component is unmounted
      return () => { observer.disconnect() }
    }, [])
  
    return isIntersecting
}