

const LatestProject = () => {
    return (
       <div id="project" className="flex flex-col gap-8 p-8">
        <h1 className="font-bold text-center  text-5xl my-5 py-5 ">My Projects</h1>

         <div className=" border card card-side bg-base-100 shadow-xl flex flex-col md:flex-row">
           
            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Live Demo</button>
                </div>
            </div>
        </div>

         
       </div>
    );
};

export default LatestProject;