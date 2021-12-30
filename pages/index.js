import Head from "next/head"
import Link from "next/link";
import 'font-awesome/css/font-awesome.min.css'
import { useRef, useState } from "react";
import validator from 'validator'

const index = () => {
    const [emailErr, setEmailErr] = useState(null)
    const [emailSuccess, setEmailSuccess] = useState(null)

    const SubscribeEmail = useRef(null);
    const onSubscribeClick = (e) => {
        e.preventDefault();
        if (validator.isEmail(SubscribeEmail.current.value)) {
            setEmailErr('Please Wait...')
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'api-key': `${process.env.NEXT_PUBLIC_SENDINBLUE_API_KEY}`
                
        },
            body: JSON.stringify({ 
                "listIds": [
                    5
               ],
               "updateEnabled": false,
                'email': SubscribeEmail.current.value 
                
            })
        };
            fetch('https://api.sendinblue.com/v3/contacts', requestOptions).catch(err => setEmailErr('Something went wrong!'))
                .then(response => response.json()).catch(err => setEmailErr('Something went wrong!'))
                setEmailErr(null);
                setEmailSuccess('Thank you for subscribing!')
        } else {
            setEmailErr('Please enter a valid email address')
        }
    }

    return (
        <div className="overflow-x-hidden">
            <Head>
                <title>Home</title>
            </Head>
                
            <section className="relative overflow-hidden">
                <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                    {/* Content */}
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
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
          overflow-hidden
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
            </section>
            {/* Features */}
            <section className="bg-bookmark-white py-20 mt-20 lg:mt-60">
                {/* Heading */}
                <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                    <h1 className="text-3xl text-center text-bookmark-blue">About Us</h1>
                    <p className="text-center text-bookmark-grey mt-4">
                    Our aim is to bring awareness and motivation among the individuals to explore the field of Computer Science
                    </p>
                </div>
                <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2 py-16">
                    <h1 className="text-3xl text-center text-bookmark-blue">Features</h1>
                </div>
                {/* Feature #1 */}
                <div className="relative mt-20 lg:mt-24">
                    <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                        {/* Image */}
                        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                            <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./imgs/illustration-features-tab-1.png" alt="" />
                        </div>
                        {/* Content */}
                        <div className="flex flex-1 flex-col items-center lg:items-start">
                            <h1 className="text-3xl text-bookmark-blue">WHAT IS "CS VOYAGER"</h1>
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
                <div className="relative mt-20 lg:mt-52">
                    <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
                        {/* Image */}
                        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                            <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./imgs/illustration-features-tab-2.png" alt="" />
                        </div>
                        {/* Content */}
                        <div className="flex flex-1 flex-col items-center lg:items-start">
                            <h1 className="text-3xl text-bookmark-blue">NEWS AND LATEST HAPPENINGS</h1>
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
                <div className="relative mt-20 lg:mt-52">
                    <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                        {/* Image */}
                        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                            <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./imgs/illustration-features-tab-3.png" alt="" />
                        </div>
                        {/* Content */}
                        <div className="flex flex-1 flex-col items-center lg:items-start">
                            <h1 className="text-3xl text-bookmark-blue">PROGRAMMING TIPS & TRICKS</h1>
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
                <div className="relative mt-20 lg:mt-52">
                    <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
                        {/* Image */}
                        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                            <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./imgs/illustration-features-tab-1.png" alt="" />
                        </div>
                        {/* Content */}
                        <div className="flex flex-1 flex-col items-center lg:items-start">
                            <h1 className="text-3xl text-bookmark-blue">FUN GAMES & CODEJAMS</h1>
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
                <div className="relative mt-20 lg:mt-52">
                    <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                        {/* Image */}
                        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                            <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./imgs/illustration-features-tab-3.png" alt="" />
                        </div>
                        {/* Content */}
                        <div className="flex flex-1 flex-col items-center lg:items-start">
                            <h1 className="text-3xl text-bookmark-blue">FASCINATING STORIES & ACTIVITIES
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
            {/* Download */}
            <section className="py-20 mt-20">
                {/* Heading */}
                <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                    <h1 className="text-3xl text-center text-bookmark-blue">Our Team</h1>
                    <p className="text-center text-bookmark-grey mt-4">
                    Meet the hardworking and commited team behind the newsletter
                    </p>
                </div>
                {/* Cards */}
                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
                    {/* Card 1 */}
                    <div className="flex flex-col rounded-md shadow-md lg:mb-16">
                        <div className="p-6 flex flex-col items-center">
                            <img src="./img/team/team-KY.jpeg" alt="" className="rounded-full h-64" />
                            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Krish Yadav</h3>
                            <p className="mb-2 text-bookmark-grey font-light">ALL THE TEAMS</p>
                        </div>
                        <hr className="border-b border-bookmark-white" />
                        <div className="flex p-6">
                            <a href="https://www.linkedin.com/in/krish-y-22356a203/" type="button" className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black text-center">
                                <i className="fab fa-linkedin-in  mx-2"></i>
                            </a>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="flex flex-col rounded-md shadow-md lg:mb-16">
                        <div className="p-6 flex flex-col items-center mw-16 mh-16">
                            <img src="./img/team/team-PS.png" alt="" className="rounded-full h-64" />
                            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Pragyan Srivastava</h3>
                            <p className="mb-2 text-bookmark-grey font-light">TECHINCAL TEAM</p>
                        </div>
                        <hr className="border-b border-bookmark-white" />
                        <div className="flex p-6">
                            <a href="mailto:prag12241@gmail.com" type="button" className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black text-center mx-2">
                                <i className="far fa-envelope"></i>
                            </a>
                            <a href="https://github.com/pragyan-srivastava" type="button" className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black text-center mx-2">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="flex flex-col rounded-md shadow-md lg:mb-16">
                        <div className="p-6 flex flex-col items-center">
                            <img src="./img/team/team-NR.jpg" alt="" className="rounded-full h-64" />
                            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Neha Reddy</h3>
                            <p className="mb-2 text-bookmark-grey font-light">WRITING TEAM</p>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="flex flex-col rounded-md shadow-md lg:mb-16">
                        <div className="p-6 flex flex-col items-center">
                            <img src="./img/team/team-ABG.jpg" alt="" className="rounded-full h-64" />
                            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Alvin Ben George</h3>
                            <p className="mb-2 text-bookmark-grey font-light">DESIGNING TEAM</p>
                        </div>
                        <hr className="border-b border-bookmark-white" />
                    </div>
                    {/* Card 5 */}
                    <div className="flex flex-col rounded-md shadow-md lg:mb-16">
                        <div className="p-6 flex flex-col items-center">
                            <img src="./img/team/team-na.jpeg" alt="" className="rounded-full h-64" />
                            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Neev Agrawal</h3>
                            <p className="mb-2 text-bookmark-grey font-light">DESIGN + WRITING TEAM</p>
                        </div>
                        <hr className="border-b border-bookmark-white" />
                        
                    </div>
                    {/* Card 6 */}
                    <div className="flex flex-col rounded-md shadow-md lg:mb-16">
                        <div className="p-6 flex flex-col items-center">
                            <img src="https://media.discordapp.net/attachments/870055656865021953/875222882601554000/SPOILER_unknown.png" alt="" className="rounded-full h-64" />
                            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Surya Vardhan</h3>
                            <p className="mb-2 text-bookmark-grey font-light">WRITING TEAM</p>
                        </div>
                        <hr className="border-b border-bookmark-white" />
                        <div className="flex p-6">
                            <a href="https://twitter.com/SuryaV67065498" type="button" className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black text-center">
                            <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    {/* Card 7 */}
                    <div className="flex flex-col rounded-md shadow-md lg:mb-16">
                        <div className="p-6 flex flex-col items-center">
                            <img src="./img/team/team-BB.jpeg" alt="" className="rounded-full h-64" />
                            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Bhuvi Bist</h3>
                            <p className="mb-2 text-bookmark-grey font-light">WRITING TEAM</p>
                        </div>
                        <hr className="border-b border-bookmark-white" />
                        
                    </div>
                    {/* Card 8 */}
                    <div className="flex flex-col rounded-md shadow-md lg:mb-16">
                        <div className="p-6 flex flex-col items-center">
                            <img src="./img/team/team-ra.jpg" alt="" className="rounded-full h-64" />
                            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Riya Agrawal</h3>
                            <p className="mb-2 text-bookmark-grey font-light">WRITING + TECHNICAL TEAM</p>
                        </div>
                        <hr className="border-b border-bookmark-white" />
                        
                    </div>
                    {/* Card 9 */}
                    <div className="flex flex-col rounded-md shadow-md lg:mb-16">
                        <div className="p-6 flex flex-col items-center">
                            <img src="/img/team/Team-YY.jpg" alt="" className="rounded-full h-64" />
                            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Yash Yadav</h3>
                            <p className="mb-2 text-bookmark-grey font-light">WRITING TEAM</p>
                        </div>
                        <hr className="border-b border-bookmark-white" />
                        
                    </div>
                    {/* Card 10 */}
                    <div className="flex flex-col rounded-md shadow-md lg:mb-16">
                        <div className="p-6 flex flex-col items-center">
                            <img src="./img/team/team-KJ.jpg" alt="" className="rounded-full h-64" />
                            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Kavyansh Jain</h3>
                            <p className="mb-2 text-bookmark-grey font-light">WRITING TEAM</p>
                        </div>
                        <hr className="border-b border-bookmark-white" />
                        <div className="flex p-6">
                            
                        </div>
                    </div>
                    {/* Card 11 */}
                    <div className="flex flex-col rounded-md shadow-md lg:mb-16">
                        <div className="p-6 flex flex-col items-center">
                            <img src="./img/team/team-AT.jpeg" alt="" className="rounded-full h-64" />
                            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Ansh Tulsyan</h3>
                            <p className="mb-2 text-bookmark-grey font-light">PROMOTIONS TEAM</p>
                        </div>
                        <hr className="border-b border-bookmark-white" />
                        <div className="flex p-6">
                            <a href="https://www.linkedin.com/in/ansh-tulsyan-1a44b61b7/" type="button" className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black text-center">
                                <i className="fab fa-linkedin-in  mx-2"></i>
                            </a>
                        </div>
                    </div>
                    {/* Card 12 */}
                    <div className="flex flex-col rounded-md shadow-md lg:mb-16">
                        <div className="p-6 flex flex-col items-center">
                            <img src="./img/team/hacker.png" alt="" className="rounded-full h-64" />
                            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Suraj Kumar</h3>
                            <p className="mb-2 text-bookmark-grey font-light">WRITING TEAM</p>
                        </div>
                        <hr className="border-b border-bookmark-white" />
                        <div className="flex p-6">
                            
                        </div>
                    </div>
                    {/* Card 13 */}
                    <div className="flex flex-col rounded-md shadow-md lg:mb-16">
                        <div className="p-6 flex flex-col items-center">
                            <img src="./img/team/team-RR.jpg" alt="" className="rounded-full h-64" />
                            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Raihan Riyaz</h3>
                            <p className="mb-2 text-bookmark-grey font-light">WRITING TEAM</p>
                        </div>
                        <hr className="border-b border-bookmark-white" />
                        <div className="flex p-6">
                            
                        </div>
                    </div>
                    {/* Card 14 */}
                    <div className="flex flex-col rounded-md shadow-md lg:mb-16">
                        <div className="p-6 flex flex-col items-center">
                            <img src="./img/team/team-KN.png" alt="" className="rounded-full h-64" />
                            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Krishna Nagpal</h3>
                            <p className="mb-2 text-bookmark-grey font-light">WRITING TEAM</p>
                        </div>
                        <hr className="border-b border-bookmark-white" />
                        <div className="flex p-6">
                            
                        </div>
                    </div>
                    {/* Card 15 */}
                    <div className="flex flex-col rounded-md shadow-md lg:mb-16">
                        <div className="p-6 flex flex-col items-center">
                            <img src="./img/team/team-YVK.jpg" alt="" className="rounded-full h-64" />
                            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Yash Vardhan Kapil</h3>
                            <p className="mb-2 text-bookmark-grey font-light">WRITING TEAM</p>
                        </div>
                        <hr className="border-b border-bookmark-white" />
                        <div className="flex p-6">
                            <a href="https://twitter.com/YashVar20" type="button" className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black text-center mx-2">
                                <i className="fab fa-twitter  mx-2"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/yash-vardhan-kapil-323101215/" type="button" className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black text-center mx-2">
                                <i className="fab fa-linkedin-in  mx-2"></i>
                            </a>
                        </div>
                    </div>
                    {/* Card 16 */}
                    <div className="flex flex-col rounded-md shadow-md lg:mb-16">
                        <div className="p-6 flex flex-col items-center">
                            <img src="./img/team/team-DG.jpg" alt="" className="rounded-full h-64" />
                            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Diptesh Gupta</h3>
                            <p className="mb-2 text-bookmark-grey font-light">WRITING TEAM</p>
                        </div>
                        <hr className="border-b border-bookmark-white" />
                    </div>
                    <div className="flex flex-col rounded-md shadow-md lg:mb-16">
                        <div className="p-6 flex flex-col items-center mw-16 mh-16">
                            <img src="./img/team/AS.jpg" alt="" className="rounded-full h-64" />
                            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Ansh Sharma</h3>
                            <p className="mb-2 text-bookmark-grey font-light">TECHINCAL TEAM</p>
                        </div>
                        <hr className="border-b border-bookmark-white" />
                        <div className="flex p-6">
                            <a href="https://anshsharmagamesandtech.web.app" type="button" className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black text-center mx-2">
                                <i className="fas fa-globe"></i>
                            </a>
                            <a href="https://github.com/Ansh-code398/" type="button" className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black text-center mx-2">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* FAQ */}
            <section className="bg-bookmark-white py-20">
                <div className="container">
                    {/* Heading */}
                    <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                        <h1 className="text-3xl text-center text-bookmark-blue">Frequently Asked Questions</h1>
                        <p className="text-center text-bookmark-grey mt-4">
                            Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
                        </p>
                    </div>
                    {/* FAQ Items */}
                    <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
                        <div className="flex items-center border-b py-4 cursor-pointer btn hover:btn-purple">
                            <details className="flex-1"><summary>What is CS Voyager?</summary><p>CS Voyager is a newsletter launched by technology enthusiast students to spread knowledge and increase interest about Computer Science amongst the younger generation!</p></details>
                        </div>
                        <div className="flex items-center border-b py-4 cursor-pointer btn hover:btn-purple">
                            <details className="flex-1"><summary>When does the newsletter get updated?</summary><p>The newsletter is updated on the 7th of each month.</p></details>
                        </div>
                        <div className="flex items-center border-b py-4 cursor-pointer btn hover:btn-purple">
                            <details className="flex-1"><summary>Why should you read CS Voyager?</summary><p>CS Voyager helps you to learn more about technology. We include articles on great inventions using technology which will help you learn more about the Computer Science field and will increase your curiosity and interest for learning more!</p></details>
                        </div>
                        <div className="flex items-center border-b py-4 cursor-pointer btn hover:btn-purple">
                            <details className="flex-1"><summary>Who should read CS Voyager?</summary><p>Are you interested in learning about Computer Science? Are you a technology enthusiast? Are you curious about inventions done with Computer Science? Then this website is the one for you! Go for it!</p></details>
                        </div>
                        
                    </div>
                </div>
            </section>

            
            {/* Subscribe Us */}
            <section className="bg-bookmark-purple text-white py-20" id="subscribe">
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
        </div>
    );
}

export default index
