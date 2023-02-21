import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import monogame from '../assets/monogame.png';
import sql from '../assets/sql.jpg';


const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500'
        },

        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500'
        },

        {
            id: 3,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500'
        },

        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600'
        },

        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-400'
        },

        {
            id: 6,
            src: monogame,
            title: 'Monogame',
            style: 'shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500'
        },

        {
            id: 7,
            src: sql,
            title: 'Sql',
            style: 'shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-white'
        },

        {
            id: 8,
            src: github,
            title: 'Github',
            style: 'shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-400'
        },
    ]

    return (
        <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experince</p>
                    <p className='py-6'>This is the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {
                        techs.map(({ id, src, title, style }) => (
                            <div key={id} className={style}>
                                <img src={src} alt='' className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}

export default Experience
