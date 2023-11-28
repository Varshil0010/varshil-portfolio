import React from 'react'
import "./Home.css"
import myImage from '../../assets/me.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>

                    {/* <h2 className='text-4xl sm:text-3xl text-white'>
                        Hello, My name is Varshil Patel
                    </h2> <br></br> */}
                    <h2 className='text-4xl sm:text-6xl text-white'>
                        I'm a Full Stack Developer
                    </h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">ASP.NET</div>
                            <div className="i-title-item">MySQL</div>
                            <div className="i-title-item">WebAPI</div>
                            <div className="i-title-item">Web Service</div>
                            <div className="i-title-item">AngularJS/ReactJS</div>
                        </div>
                    </div>
                    <p className='text-gray-500 py-4 max-w-md'>
                        Enthusiastic and results-driven Software Developer eager to
                        contribute expertise in software development to a dynamic and
                        fast-growing organization. Proficient in ASP.NET, C#, MVC, SQL,
                        Entity Framework, and adept at testing, deployment, and support
                        using agile methodologies. Possesses a solid foundation in computer
                        science coupled with excellent communication skills.
                    </p>
                    <div>
                        <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
                                              from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio

                            {/* arrow image */}
                            <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} className="ml-1" /></span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={myImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
                </div>
            </div>
        </div>
    )
}

export default Home