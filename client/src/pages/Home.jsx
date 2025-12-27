import React from 'react'

const Home = () => {
    return (
        <div style={{ "backgroundImage": "url(/Illustration.svg)" }} className="bg-cover bg-center h-[100svh] bg-[#FF6079] flex flex-col justify-center items-center   overflow-hidden ">
            <div className='flex flex-col items-center justify-center gap-5 ' >
                <h1 className=' text-white text-4xl font-semibold  '  >Pro Fitness</h1>
                <p className='text-white text-center text-xs md:text-lg '>FIND OUT EXACTLY WHAT DIET & TRAINING WILL WORK SPECIFICALLY FOR YOU</p>
                <button className="text-black font-semibold text-md md:text-lg bg-white px-10 py-2 rounded-lg ">Next</button>
            </div>

        </div>
    )
}

export default Home
