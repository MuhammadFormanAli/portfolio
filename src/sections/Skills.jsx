

const Skills = () => {
    return (
        <div id="skill" className="bg-base-300">
            <div className="h-[650px] md:w-[700px]  mx-auto">
            <h1 className="font-bold text-center  text-5xl my-5 py-5 "> My Skills</h1>

           <div className="flex flex-col gap-7">
           <div className="flex justify-center items-center gap-5 px-4 md:px-6">
                <h1 className="font-bold ">HTML5</h1>
                <progress className="progress progress-accent w-full h-4" value={85} max="100"></progress>
            </div>

           <div className="flex justify-center items-center gap-5 px-4 md:px-6">
                <h1 className="font-bold ">CSS3</h1>
                <progress className="progress progress-accent w-full h-4" value={80} max="100"></progress>
            </div>

           <div className="flex justify-center items-center gap-5 px-4 md:px-6">
                <h1 className="font-bold ">JS</h1>
                <progress className="progress progress-accent w-full h-4" value={59} max="100"></progress>
            </div>

           <div className="flex justify-center items-center gap-5 px-4 md:px-6">
                <h1 className="font-bold ">React.Js</h1>
                <progress className="progress progress-accent w-full h-4" value={75} max="100"></progress>
            </div>

           <div className="flex justify-center items-center gap-5 px-4 md:px-6">
                <h1 className="font-bold ">Node.Js</h1>
                <progress className="progress progress-accent w-full h-4" value={75} max="100"></progress>
            </div>

           <div className="flex justify-center items-center gap-5 px-4 md:px-6">
                <h1 className="font-bold ">Express.Js</h1>
                <progress className="progress progress-accent w-full h-4" value={75} max="100"></progress>
            </div>

           <div className="flex justify-center items-center gap-5 px-4 md:px-6">
                <h1 className="font-bold ">Bootstrap</h1>
                <progress className="progress progress-accent w-full h-4" value={80} max="100"></progress>
            </div>

           <div className="flex justify-center items-center gap-5 px-4 md:px-6">
                <h1 className="font-bold ">Tailwind</h1>
                <progress className="progress progress-accent w-full h-4" value={85} max="100"></progress>
            </div>

           </div>
        </div>
        </div>
    );
};

export default Skills;