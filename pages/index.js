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

const Index = ({ team, thumbnails, latestPost }) => {
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
                <Header emailErr={emailErr} emailSuccess={emailSuccess} SubscribeEmail={SubscribeEmail} onSubscribeClick={onSubscribeClick} thumbnails={thumbnails}/>
            </section>
            <About />
            {/* Team */}
{/*
            <section className="py-20 bg-black" id="team">
                <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                    <h1 className="text-3xl text-center text-bookmark-white">Our Team</h1>
                    <p className="text-center text-bookmark-grey mt-4">
                        Meet the hardworking and commited team behind the newsletter
                    </p>
                </div>
                <Team teamData={team} />
            </section>*/}
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
                        <div className="flex items-center border-b py-4 cursor-pointer btn hover:bg-[#198754] transition-all duration-1000 my-2" style={{transition: 'all 1s'}} data-aos="fade-down">
                            <details className="flex-1"><summary>What is CS Voyager?</summary><p>CS Voyager is a newsletter launched by technology enthusiast students to spread knowledge and increase interest about Computer Science amongst the younger generation!</p></details>
                        </div>
                        <div className="flex items-center border-b py-4 cursor-pointer btn hover:bg-[#198754] transition-all duration-1000 my-2" style={{transition: 'all 1s'}} data-aos="fade-left">
                            <details className="flex-1"><summary>When does the newsletter get updated?</summary><p>The newsletter is updated on the 7th of each month.</p></details>
                        </div>
                        <div className="flex items-center border-b py-4 cursor-pointer btn hover:bg-[#198754] transition-all duration-1000 my-2" style={{transition: 'all 1s'}} data-aos="fade-right">
                            <details className="flex-1"><summary>Why should you read CS Voyager?</summary><p>CS Voyager helps you to learn more about technology. We include articles on great inventions using technology which will help you learn more about the Computer Science field and will increase your curiosity and interest for learning more!</p></details>
                        </div>
                        <div className="flex items-center border-b py-4 cursor-pointer btn hover:bg-[#198754] transition-all duration-1000 my-2" data-aos="fade-up" style={{transition: 'all 1s'}}>
                            <details className="flex-1"><summary>Who should read CS Voyager?</summary><p>Are you interested in learning about Computer Science? Are you a technology enthusiast? Are you curious about inventions done with Computer Science? Then this website is the one for you! Go for it!</p></details>
                        </div>

                    </div>
                </div>
            </section>
            <EditionAlert latestPost={latestPost} />


        </div>
    );
}

export default Index

export async function getServerSideProps() {
    const res = await axios.get('https://csvoyager-api.vercel.app/api/team')
    const thumbnails = await (await (getPosts())).data.map(post => post.featuredImage.url)
    const posts = await (await (getPosts())).data
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
