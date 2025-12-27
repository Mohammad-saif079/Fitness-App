import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);
gsap.registerPlugin(ScrambleTextPlugin);


const Home = () => {

    useEffect(() => {
        Draggable.create("#slider", {
            type: "x,y", 
            bounds: "#bar" ,
            cursor: "grab",
            activeCursor: "grabbing",
        });

        gsap.to("#scrambled-text", { scrambleText: { text: "FIND OUT EXACTLY WHAT DIET & TRAINING WILL WORK SPECIFICALLY FOR YOU", chars: "X", speed: 0.1 }, duration: 1.9 });
        gsap.to("#scrambled-text-2", { scrambleText: { text: "Swipe to continue", chars: "Y", speed: 0.1 }, duration: 1.9 });
        gsap.to(".heading>div", { y: 0, duration: 0.4, stagger: 0.12 });
    }, [])


    return (
        <div style={{ "backgroundImage": "url(/Illustration.svg)" }} className="bg-cover bg-center h-[100svh] bg-[#FF6079] flex flex-col justify-center items-center   overflow-hidden ">
            <div className='flex flex-col items-center justify-center gap-5 ' >
                <div className=' heading overflow-hidden flex justify-center items-center text-white sm:text-5xl text-3xl font-bold font-awards '  >
                    <div className='translate-y-11' >P</div>
                    <div className='translate-y-11' >R</div>
                    <div className='translate-y-11' >O</div>
                    <div className='translate-y-11' >_</div>
                    <div className='translate-y-11' >F</div>
                    <div className='translate-y-11' >I</div>
                    <div className='translate-y-11' >T</div>
                    <div className='translate-y-11' >N</div>
                    <div className='translate-y-11' >E</div>
                    <div className='translate-y-11' >S</div>
                    <div className='translate-y-11' >S</div>
                </div>
                <p id='scrambled-text' className='font-semibold text-white text-center text-xs md:text-xl font-awards '>FIND OUT EXACTLY WHAT DIET & TRAINING WILL WORK SPECIFICALLY FOR YOU</p>
                <div id='bar' className="w-[50%] h-[40px] rounded-full bg-[#FF8094]   ">
                    <div id='slider' className="w-[40px] h-[40px] bg-white rounded-full "></div>
                </div>
                <p id='scrambled-text-2' className='font-semibold text-white text-center text-xs md:text-xl font-awards '>Swipe to continue</p>
            </div>

        </div>
    )
}

export default Home
