

const About = () => {
    return (
        <div id="about" className=" bg-base-200 flex flex-col py-5 md:flex-row my-20">
            <div className=" w-full md:w-1/2 flex items-center justify-center ">
                <div className="h-[450px] w-[450px]">
                <img className="w-full rounded-full" src="/photo.jpg" alt="" />
                </div>
            </div>
            <div className="px-7 w-full md:w-1/2  flex flex-col  justify-center ">
                <h1 className="text-4xl font-bold">About Me</h1>
                
                <h5>I am a passionate MERN Developer with expertise in HTML, CSS, Bootstrap, Tailwind CSS, and various frameworks. As a junior MERN Developer, I have a strong grasp of Stripe, JWT, Node.js, Express.js, MongoDB, and other robust tools. This allows me to develop seamless and efficient web applications for an enhanced user experience. I stay up-to-date with the latest industry trends by exploring cutting-edge technologies like Shadcn UI, Prisma, Next.js, and TypeScript. By continuously expanding my skill set, I ensure I can deliver innovative solutions.</h5>
            
            </div>
            


        </div>
    );
};

export default About;