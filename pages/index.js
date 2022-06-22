import Head from "next/head"
import Link from "next/link";
import 'font-awesome/css/font-awesome.min.css'
import { useRef, useState } from "react";
import validator from 'validator'
import axios from "axios";
import Header from "../components/Header";
import About from "../components/About";
import Team from "../components/Team";
import { getPosts } from "../services";
import { EditionAlert } from "../components";

const Index = ({ thumbnails, latestPost, team }) => {
    const [emailErr, setEmailErr] = useState(null)
    const [emailSuccess, setEmailSuccess] = useState(null)

    const SubscribeEmail = useRef(null);
    const onSubscribeClick = async (e) => {
        e.preventDefault();
        if (validator.isEmail(SubscribeEmail.current.value)) {
            setEmailSuccess(null)
            setEmailErr('Please Wait...')
            await axios.post("https://csvoyager-api.vercel.app/api/subscribers", {
                email: SubscribeEmail.current.value
            }).catch(err => { setEmailErr('Something went wrong!'); return })
                .then(response => response.json()).catch(err => { setEmailErr('Something went wrong!'); return; })
            setEmailErr(null);
            setEmailSuccess('Thank you for subscribing!')
        } else {
            setEmailErr('Please enter a valid email address')
            setEmailSuccess(null)
        }
    }

    return (
        <div className="overflow-hidden text-white bg-black">
            <Head>
                <title>Home</title>
            </Head>

            <section className="relative overflow-hidden" data-aos="fade-right" id="subscribe">
                <Header emailErr={emailErr} emailSuccess={emailSuccess} SubscribeEmail={SubscribeEmail} onSubscribeClick={onSubscribeClick} thumbnails={thumbnails} />
            </section>
            <About />
            {/* Team */}

            <section className="py-20 bg-black" id="team">
                <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                    <h1 className="text-3xl text-center text-bookmark-white">Our Team</h1>
                    <p className="text-center text-bookmark-grey mt-4">
                        Meet the hardworking and commited team behind the newsletter
                    </p>
                </div>
                <Team teamData={team} />
            </section>
            {/* FAQ */}
            <section className="bg-black text-white py-20">
                <div className="container">
                    {/* Heading */}
                    <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                        <h1 className="text-3xl text-center text-bookmark-white">Frequently Asked Questions</h1>
                        <p className="text-center text-bookmark-grey mt-4">
                            Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
                        </p>
                    </div>
                    {/* FAQ Items */}
                    <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
                        <div className="flex items-center border-b py-4 cursor-pointer btn hover:bg-[#198754] transition-all duration-1000 my-2" style={{ transition: 'all 1s' }} data-aos="fade-down">
                            <details className="flex-1"><summary>What is CS Voyager?</summary><p>CS Voyager is a newsletter launched by technology enthusiast students to spread knowledge and increase interest about Computer Science amongst the younger generation!</p></details>
                        </div>
                        <div className="flex items-center border-b py-4 cursor-pointer btn hover:bg-[#198754] transition-all duration-1000 my-2" style={{ transition: 'all 1s' }} data-aos="fade-left">
                            <details className="flex-1"><summary>When does the newsletter get updated?</summary><p>The newsletter is updated on the 7th of each month.</p></details>
                        </div>
                        <div className="flex items-center border-b py-4 cursor-pointer btn hover:bg-[#198754] transition-all duration-1000 my-2" style={{ transition: 'all 1s' }} data-aos="fade-right">
                            <details className="flex-1"><summary>Why should you read CS Voyager?</summary><p>CS Voyager helps you to learn more about technology. We include articles on great inventions using technology which will help you learn more about the Computer Science field and will increase your curiosity and interest for learning more!</p></details>
                        </div>
                        <div className="flex items-center border-b py-4 cursor-pointer btn hover:bg-[#198754] transition-all duration-1000 my-2" data-aos="fade-up" style={{ transition: 'all 1s' }}>
                            <details className="flex-1"><summary>Who should read CS Voyager?</summary><p>Are you interested in learning about Computer Science? Are you a technology enthusiast? Are you curious about inventions done with Computer Science? Then this website is the one for you! Go for it!</p></details>
                        </div>

                    </div>
                </div>
            </section>
            <section className="bg-black text-white py-20">
                <div className="container">
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
                </div>
            </section>
            <EditionAlert latestPost={latestPost} />


        </div>
    );
}

export default Index

export async function getStaticProps() {
    const res = await axios.get('https://csvoyager-api.vercel.app/api/team')
    const posts = await (await (getPosts())).data
    const thumbnails = posts.map(post => post.featuredImage.url)
    const latestPost = posts.slice(-1)[0]
    const data = await res.data
    return {
        props: {
            team: data,
            latestPost: latestPost,
            thumbnails: thumbnails
        }
    }
}
