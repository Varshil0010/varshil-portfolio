import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'> 
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, aperiam reprehenderit? Laboriosam ipsa quam ducimus ex neque, illo mollitia repudiandae totam. Nihil a ab ipsum aperiam facere iusto perspiciatis obcaecati.
                </p>
                <br />
                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis mollitia veniam itaque, nemo cupiditate reiciendis dolores voluptate blanditiis. Aliquid facere unde repudiandae distinctio quidem ad ea facilis libero, dolor aut doloremque velit ut perspiciatis, dicta alias aspernatur laboriosam quisquam doloribus odit. Rerum odit dolorum, eaque impedit vitae autem expedita?
                </p>
            </div>
        </div>
    )
}

export default About
