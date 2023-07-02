import { Typewriter } from "react-simple-typewriter";


const Hero = () => {
    return (
        <div id="hero" className=" h-[600px] flex flex-col-reverse md:flex-row my-20 md:my-20">
            <div className="px-7 w-full md:w-1/2  flex flex-col  justify-center ">
                <h3>Hi! I am</h3>
                <h1 className="text-3xl font-bold">Forman Ali</h1>
                <h4 className="text-xl font-bold">I am a - <span className="text-red-300"> 
                        <Typewriter
                            words={['Front-end Developer','MARN stack Developer','React Developer']}
                            loop={1}
                            cursor
                            cursorStyle='_'
                            typeSpeed={200}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span> </h4>

                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. A amet quod nesciunt. Consequatur laudantium nam nihil, aut tenetur possimus excepturi suscipit amet asperiores, consectetur autem.</h5>
                <button className="btn w-fit mt-3"> <a href="/Resume-FormanAli.pdf" download className="btn">My Resume</a></button>
            </div>
            <div className=" md:w-1/2 flex items-center justify-center ">
                <div className=" w-[250px] flex">
                <img className="w-full " src="/photo.jpg" alt="" />
                </div>
            </div>


        </div>
    );
};

export default Hero;