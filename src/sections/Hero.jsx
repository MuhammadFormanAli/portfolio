
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
import developer from "../../public/a.json"
import { FaDownload } from "react-icons/fa";


const Hero = () => {
    return (
        <div id="hero" className=" h-[550px] py-4 bg-base-300 flex flex-col-reverse md:flex-row my-20 md:my-20">
            <div className="px-7 w-full md:w-1/2  flex flex-col items-center justify-center ">
                <h3 className="font-bold">Hi! I am</h3>
                <h1 id="name" className="text-3xl font-bold">Forman Ali</h1>
                <h4 className="text-xl font-bold">I am a - <span className="text-red-300"> 
                        <Typewriter
                            words={['Front-end Developer','MARN stack Developer','React Developer']}
                            loop={10}
                            cursor
                            cursorStyle='_'
                            typeSpeed={200}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span> </h4>

               <a className="btn w-fit mt-3" href="/ResumeFormanAli.pdf" download > <FaDownload /> My Resume</a>
            </div>
            <div className=" md:w-1/2 flex items-center justify-center ">
                <div className=" w-[450px] flex">
                <Lottie animationData={developer} loop={true} />
                </div>
            </div>


        </div>
    );
};

export default Hero;