import Head from "next/head"
import Link from "next/link";
import 'font-awesome/css/font-awesome.min.css'
import { useRef, useState } from "react";
import validator from 'validator'
import axios from "axios";

const index = ({team}) => {
    const [emailErr, setEmailErr] = useState(null)
    const [emailSuccess, setEmailSuccess] = useState(null)

    const SubscribeEmail = useRef(null);
    const onSubscribeClick = async (e) => {
        e.preventDefault();
        if (validator.isEmail(SubscribeEmail.current.value)) {
            setEmailErr('Please Wait...')
            await axios.post("https://csvoyager-api.vercel.app/api/subscribers", {
                email: SubscribeEmail.current.value
            }).catch(err => {setEmailErr('Something went wrong!'); return})
                .then(response => response.json()).catch(err => {setEmailErr('Something went wrong!'); return;})
            setEmailErr(null);
            setEmailSuccess('Thank you for subscribing!')
        } else {
            setEmailErr('Please enter a valid email address')
            setEmailSuccess(null)
        }
    }

    return (
        <div className="overflow-hidden text-white bg-[#131313]">
            <Head>
                <title>Home</title>
            </Head>

            <section className="relative overflow-hidden" data-aos="fade-up">
                <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                    {/* Content */}
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h2 className="text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6 text-bookmark-white">
                            CS Voyager
                        </h2>
                        <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
                            A MONTHLY NEWSLETTER AIMING TO MAKE EVERYONE AWARE ABOUT REVOLUTIONIZING CS TECHNOLOGIES
                        </p>
                        <div className="flex justify-center flex-wrap gap-6">
                            <a href="https://discord.gg/AkR6U7eF6S" type="button" className="btn btn-purple hover:bg-bookmark-white hover:text-black">
                                Join our Discord
                            </a>
                            <a href="mailto:computersciencevoyager@gmail.com" type="button" className="btn btn-white hover:bg-bookmark-purple hover:text-white">
                                Mail us
                            </a>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10 overflow-hidden">
                        <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./imgs/hero-bg.png" alt="" />
                    </div>
                </div>
                {/* Rounded Rectangle */}
                <div className="
          hidden
          md:block
          overflow-hidden
          bg-bookmark-purple
          rounded-l-full
          absolute
          h-80
          w-2/4
          top-32
          right-0
          lg:
          -bottom-28
          lg:-right-36
        " />
        {/* Subscribe Us */}
        <section className="bg-bookmark-purple text-white py-20 mt-20 lg:mt-40" id="subscribe" data-aos="zoom-in">
                <div className="container">
                    <div className="sm:w-3/4 lg:w-2/4 mx-auto">
                        <p className="font-light uppercase text-center mb-8">We have 100+ members joined</p>
                        <h1 className="text-3xl text-center" >Subscribe to our newsletter</h1>
                        <form className="flex flex-col sm:flex-row gap-6 mt-8" onSubmit={onSubscribeClick}>
                            <input type="email" placeholder="Enter your email address" className="focus:outline-none flex-1 px-2 py-3 rounded-md text-black" ref={SubscribeEmail} required />
                            <button type="submit" className="btn bg-bookmark-red hover:bg-bookmark-white hover:text-black" value='Subsribe'>
                                Subscribe
                            </button>

                        </form>
                        {emailErr && <p className="font-light uppercase text-center mt-8 text-yellow-300">{emailErr}</p>}
                        {emailSuccess && <p className="font-light uppercase text-center mt-8 text-teal-300">{emailSuccess}</p>}
                    </div>
                </div>
            </section>
            </section>
            {/* Features */}
            <section className="py-20 mt-20 lg:mt-40" >
                {/* Heading */}
                <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                    <h1 className="text-3xl text-center text-bookmark-white">About Us</h1>
                    <p className="text-center text-bookmark-grey mt-4">
                        Our aim is to bring awareness and motivation among the individuals to explore the field of Computer Science
                    </p>
                </div>
                <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2 py-16">
                    <h1 className="text-3xl text-center text-bookmark-white">Features</h1>
                </div>
                {/* Feature #1 */}
                <div className="relative mt-20 lg:mt-24" data-aos="fade-right">
                    <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                        {/* Image */}
                        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                            <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./imgs/illustration-features-tab-1.png" alt="" />
                        </div>
                        {/* Content */}
                        <div className="flex flex-1 flex-col items-center lg:items-start">
                            <h1 className="text-3xl text-bookmark-white">WHAT IS "CS VOYAGER"</h1>
                            <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                                "CS Voyager" is a monthly newsletter which will keep you updated with the latest happenings around the globe in the field of Computer Science & will provide focused knowledge specifically designed for CS enthusiasts. Just like a person who goes on voyages, our newsletter is on its voyage & shall explore a different part of CS and this evolving Technology era & present them in front of the reader.
                            </p>
                        </div>
                    </div>
                    {/* Rounded Rectangle */}
                    <div className="
            hidden
            lg:block
            overflow-hidden
            bg-bookmark-purple
            rounded-r-full
            absolute
            h-80
            w-2/4
            -bottom-24
            -left-36
          " />
                </div>
                {/* Feature #2 */}
                <div className="relative mt-20 lg:mt-52" data-aos="fade-left">
                    <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
                        {/* Image */}
                        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                            <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./imgs/illustration-features-tab-2.png" alt="" />
                        </div>
                        {/* Content */}
                        <div className="flex flex-1 flex-col items-center lg:items-start">
                            <h1 className="text-3xl text-bookmark-white">NEWS AND LATEST HAPPENINGS</h1>
                            <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">

                                You will get the latest info about fascinating thing which has happened or is going to happen, in the field of CS around the globe recently.
                            </p>
                        </div>
                    </div>
                    {/* Rounded Rectangle */}
                    <div className="
            hidden
            lg:block
            overflow-hidden
            bg-bookmark-purple
            rounded-l-full
            absolute
            h-80
            w-2/4
            -bottom-24
            -right-36
          " />
                </div>
                {/* Feature #3 */}
                <div className="relative mt-20 lg:mt-52" data-aos="fade-right">
                    <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                        {/* Image */}
                        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                            <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./imgs/illustration-features-tab-3.png" alt="" />
                        </div>
                        {/* Content */}
                        <div className="flex flex-1 flex-col items-center lg:items-start">
                            <h1 className="text-3xl text-bookmark-white">PROGRAMMING TIPS & TRICKS</h1>
                            <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                                You will be given few coding tips & tricks every month to improve the execution of your coding skills & may be to show off your friends...<i className="far fa-grin-tongue-wink"></i>
                            </p>
                        </div>
                    </div>
                    {/* Rounded Rectangle */}
                    <div className="
            hidden
            lg:block
            overflow-hidden
            bg-bookmark-purple
            rounded-r-full
            absolute
            h-80
            w-2/4
            -bottom-24
            -left-36
          " />
                </div>
                {/* Feature 4 */}
                <div className="relative mt-20 lg:mt-52" data-aos="fade-left">
                    <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
                        {/* Image */}
                        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                            <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./imgs/illustration-features-tab-1.png" alt="" />
                        </div>
                        {/* Content */}
                        <div className="flex flex-1 flex-col items-center lg:items-start">
                            <h1 className="text-3xl text-bookmark-white">FUN GAMES & CODEJAMS</h1>
                            <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">

                                Bored..? So here we are with some cool games through which you can relax yourself along in your journey of learning & exploring CS & CodeJams will help you to compete with your fellow learners to know your standings at the national level.
                            </p>
                        </div>
                    </div>
                    {/* Rounded Rectangle */}
                    <div className="
            hidden
            lg:block
            overflow-hidden
            bg-bookmark-purple
            rounded-l-full
            absolute
            h-80
            w-2/4
            -bottom-24
            -right-36
          " />
                </div>
                {/* Feature #5 */}
                <div className="relative mt-20 lg:mt-52" data-aos="fade-right">
                    <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                        {/* Image */}
                        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                            <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./imgs/illustration-features-tab-3.png" alt="" />
                        </div>
                        {/* Content */}
                        <div className="flex flex-1 flex-col items-center lg:items-start">
                            <h1 className="text-3xl text-bookmark-white">FASCINATING STORIES & ACTIVITIES
                            </h1>
                            <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                                Stories About incidents that have happened recently in the field of CS, sometimes funny sometimes scandalous, which will make you a CS-Aware citizens & Fun activites will keep your motivation high to keep learning in this field.
                            </p>
                        </div>
                    </div>
                    {/* Rounded Rectangle */}
                    <div className="
            hidden
            lg:block
            overflow-hidden
            bg-bookmark-purple
            rounded-r-full
            absolute
            h-80
            w-2/4
            -bottom-24
            -left-36
          " />
                </div>
            </section>
            {/* Team */}
            <section className="py-20 mt-20">
                {/* Heading */}
                <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                    <h1 className="text-3xl text-center text-bookmark-white">Our Team</h1>
                    <p className="text-center text-bookmark-grey mt-4">
                        Meet the hardworking and commited team behind the newsletter
                    </p>
                </div>
                {/* Team */}
                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
                    {team.map((member, index) => (
                        <div className="flex flex-col rounded-md shadow-2xl shadow-black lg:mb-16" data-aos="zoom-in" key={index}>
                        <div className="p-6 flex flex-col items-center">
                            <img src={member.photo_url} alt="" className="rounded-full h-64" />
                            <h3 className="mt-5 mb-2 text-bookmark-white text-lg">{member.name}</h3>
                            <p className="mb-2 text-bookmark-grey font-light">{member.teams.toUpperCase()}</p>
                            <p className="mb-2 text-bookmark-grey font-light text-center">{member.post ? `Current Post - ${member.post}` : member.isActive !== null && member.isActive ? 'Status -  This Member is Currently Active' : 'Status - This member is Currently Inactive'}</p>
                        </div>
                        <hr className="border-bookmark-white" />
                        <div className="flex p-6">
                            {member.socials.map((social, index) => (
                                <a href={social.url} type="button" className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black text-center mx-2" target="_blank" rel="noreferrer">
                                <i className={`${social.icon}  mx-2`}></i>
                                </a>
                            ))}

                            
                        </div>
                    </div>
                    ))}   
                </div>
            </section>
            {/* FAQ */}
            <section className="bg-[#131313] text-white py-20">
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
                        <div className="flex items-center border-b py-4 cursor-pointer btn hover:btn-purple my-2" data-aos="fade-down">
                            <details className="flex-1"><summary>What is CS Voyager?</summary><p>CS Voyager is a newsletter launched by technology enthusiast students to spread knowledge and increase interest about Computer Science amongst the younger generation!</p></details>
                        </div>
                        <div className="flex items-center border-b py-4 cursor-pointer btn hover:btn-purple my-2"data-aos="fade-left">
                            <details className="flex-1"><summary>When does the newsletter get updated?</summary><p>The newsletter is updated on the 7th of each month.</p></details>
                        </div>
                        <div className="flex items-center border-b py-4 cursor-pointer btn hover:btn-purple my-2" data-aos="fade-right">
                            <details className="flex-1"><summary>Why should you read CS Voyager?</summary><p>CS Voyager helps you to learn more about technology. We include articles on great inventions using technology which will help you learn more about the Computer Science field and will increase your curiosity and interest for learning more!</p></details>
                        </div>
                        <div className="flex items-center border-b py-4 cursor-pointer btn hover:btn-purple my-2" data-aos="fade-up">
                            <details className="flex-1"><summary>Who should read CS Voyager?</summary><p>Are you interested in learning about Computer Science? Are you a technology enthusiast? Are you curious about inventions done with Computer Science? Then this website is the one for you! Go for it!</p></details>
                        </div>

                    </div>
                </div>
            </section>


        
        </div>
    );
}

export default index

export async function getServerSideProps() {
    const res = await axios.get('https://csvoyager-api.vercel.app/api/team')
    const data = await res.data
    return {
        props: {
            team: data
        }
    }
}