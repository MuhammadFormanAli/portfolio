
import { motion } from "framer-motion";
import project1 from "/project1.png";
import project2 from "/project2.png";
import project3 from "/project3.png";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";


const LatestProject = () => {




    return (
        <>

            <div id="project" className="mt-5">

                <div>
                    <div
                        className="text-center"
                    >
                        <h2 className=" text-3xl md:text-5xl font-bold mb-5">
                             Check my Projects
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg">
                            I have been working on some exciting projects lately, showcasing my
                            skills as a developer. From building interactive web applications
                            to creating intuitive user interfaces, my recent projects
                            highlight my passion for creating impactful digital experiences.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10 p-5">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-base-300 p-5 rounded-xl border border-gray-700"
                        >
                            <div className="w-full h-[250px] mb-5">
                                <img
                                    className="w-full h-full object-cover rounded-xl object-top transition-all duration-1000 ease-in-out hover:object-bottom"
                                    src={project2}
                                    alt="project 1"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold mb-3">HarmonyHub</h2>
                                <p className="text-base">
                                    The HarmonyHub  MERN website is a
                                    mobile-responsive website with dark mode, role management,
                                    authentication and authorization using Firebase and JWT, and
                                    visually appealing animations. Students can easily enroll in
                                    classes and make payments securely.
                                </p>
                                <div className="mt-5">
                                    <div className="flex justify-between gap-5">
                                        <div className="flex items-center gap-2">
                                            <Link
                                                to="https://github.com/MuhammadFormanAli/HarmonyHub-client"
                                                target="_blank"
                                                className="flex items-center gap-2 font-bold btn btn-outline"
                                            >
                                               <FaGithub /> Client
                                            </Link>

                                            <Link
                                                to="https://github.com/MuhammadFormanAli/HarmonyHub-server"
                                                target="_blank"
                                                className="flex items-center gap-2 font-bold btn btn-outline"
                                            >
                                               <FaGithub />  Server
                                            </Link>
                                        </div>

                                        <Link
                                            to="https://summer-camp-school-b5933.web.app/"
                                            target="_blank"
                                            className="flex items-center gap-2 font-bold btn btn-outline"
                                        >
                                            Live Site
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>


                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-base-300 p-5 rounded-xl border border-gray-700"
                        >
                            <div className="w-full h-[250px] mb-5">
                                <img
                                    className="w-full h-full object-cover rounded-xl object-top transition-all duration-1000 ease-in-out hover:object-bottom"
                                    src={project3}
                                    alt="project 3"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold mb-3">ToyVerse</h2>
                                <p className="text-base">
                                    This responsive web app has conditional navigation, private
                                    routes, user authentication with Firebase, and sections for
                                    Banners, Galleries, Categories, Trending Toys, and Top Rated
                                    Toys. Users can explore, search, add, and view their own toys.
                                    
                                </p>
                                <div className="mt-5">
                                    <div className="flex justify-between gap-5">
                                        <div className="flex items-center gap-2">
                                            <Link
                                                to="https://github.com/MuhammadFormanAli/toy-varse-client"
                                                target="_blank"
                                                className="flex items-center gap-2 font-bold btn btn-outline"
                                            >
                                               <FaGithub />  Client
                                            </Link>

                                            <Link
                                                to="https://github.com/MuhammadFormanAli/toy-verse-server"
                                                target="_blank"
                                                className="flex items-center gap-2 font-bold btn btn-outline"
                                            >
                                              <FaGithub />   Server
                                            </Link>
                                        </div>
                                        <Link
                                            to="https://toy-verse-c7d78.firebaseapp.com/"
                                            target="_blank"
                                            className="flex items-center gap-2 font-bold btn btn-outline"
                                        >
                                            Live Site
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>


                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-base-300 p-5 rounded-xl border border-gray-700"
                        >
                            <div className="w-full h-[250px] mb-5">
                                <img
                                    className="w-full h-full object-cover rounded-xl object-top transition-all duration-1000 ease-in-out hover:object-bottom"
                                    src={project1}
                                    alt="project 1"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold mb-3">SavorChef</h2>
                                <p className="text-base">
                                    This Chef Recipe project is a responsive web app with login
                                    functionality. It includes a banner section, a chefs section,
                                    and recipe details with a favorite button. The home page is
                                    fully responsive, and users can register and log in via email,
                                    password, or Google/GitHub.
                                </p>
                                <div className="mt-5">
                                    <div className="flex justify-between gap-5">
                                        <div className="flex items-center gap-2">
                                            <Link
                                                to="https://github.com/MuhammadFormanAli/SavorChef-client"
                                                target="_blank"
                                                className="flex items-center gap-2 font-bold btn btn-outline"
                                            >
                                              <FaGithub />   Client
                                            </Link>{" "}
                                            <Link
                                                to="https://github.com/MuhammadFormanAli/SavorChef-server"
                                                target="_blank"
                                                className="flex items-center gap-2 font-bold btn btn-outline"
                                            >
                                              <FaGithub />   Server
                                            </Link>
                                        </div>
                                        <Link
                                            to="https://chef-recipe-hunter-d3ad9.web.app/"
                                            target="_blank"
                                            className="flex items-center gap-2 font-bold btn btn-outline"
                                        >
                                            Live Site
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>


                    </div>

                </div>

            </div>


        </>
    );
};

export default LatestProject;