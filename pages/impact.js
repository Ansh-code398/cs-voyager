import React from 'react'
const Impact = () => {
    return (
        <div className='flex flex-col flex-1'>
            <div className='max-w-sm mx-auto rounded-[100%] p-16 text-center flex-wrap'>
                <img src="/img/logo.png" className='mb-5' />
                Stats of {" "}
                <a href='https://www.youtube.com/channel/UCGMSC8De3GQ5s8Ko1ZZ7W4w' className='bg-blue-500 rounded-lg px-10 py-2 mt-5 transition-all hover:bg-blue-800 duration-500 inline-block'>CS Voyager</a>
            </div>
            <div className="container mx-auto px-20">
                <div className="flex flex-col w-full items-center justify-center" style={{ cursor: 'auto' }}>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
                        <div className="metric-card bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full" style={{ cursor: 'auto' }}>
                            <div className="flex items-center text-gray-900 dark:text-gray-100" style={{ cursor: 'auto' }}>Posts</div>
                            <p className="mt-2 text-3xl font-bold spacing-sm text-black dark:text-white" style={{ cursor: 'auto' }}>50+ posts and videos</p>
                        </div>
                        <div className="metric-card bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full" style={{ cursor: 'auto' }}>
                            <div className="flex items-center text-gray-900 dark:text-gray-100" style={{ cursor: 'auto' }}>Views</div>
                            <p className="mt-2 text-3xl font-bold spacing-sm text-black dark:text-white" style={{ cursor: 'auto' }}>10,000+</p>
                        </div>
                    </div>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 my-2 w-full">
                        <div className="metric-card bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full" style={{ cursor: 'auto' }}>
                            <div className="flex items-center text-gray-900 dark:text-gray-100" style={{ cursor: 'auto' }}>Followers</div>

                            <p className="mt-2 text-3xl font-bold spacing-sm text-black dark:text-white" style={{ cursor: 'auto' }}>100+ Total Followers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Impact
