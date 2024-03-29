import React from 'react'
// import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import Realestate from '../assets/portfolio/Realestate.jpg'
import newsApp from '../assets/portfolio/newsApp.jpg'
import {AiFillPlayCircle } from 'react-icons/ai';


const Portfolio = () => {

    const Portfolios = [
        {
            id: 1,
            src: newsApp,
            title: "NewsApp",
            links: 'https://github.com/Varshil0010/FunctionBasedNewsApp'
        },

        {
            id: 2,
            src: Realestate,
            title: "Realestate",
            links: 'https://github.com/Varshil0010/Realestate'
        },

    ]

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                    {
                        Portfolios.map(({ id, src, links, title }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt='' className='rounded-md duration-200 hover:scale-105' />
                                {/* <p className='flex items-center justify-center'>{title}</p> */}
                                <div className='flex items-center justify-center'>
                                    <button className='w-1 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={links}><AiFillPlayCircle/></a></button>
                                    {/* <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button> */}
                                </div>
                            </div>
                        ))
                    }

                </div>



            </div>
        </div>
    )
}

export default Portfolio
