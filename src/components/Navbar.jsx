import { Link } from "react-scroll";




const Navbar = () => {

    const navigationLinks = <>
		<li className="ml-1"><Link to="hero" spy={true} smooth={true} duration={500} offset={-90}>Home</Link></li>
		<li className="ml-1"><Link to="about" spy={true} smooth={true} duration={500} offset={-100}>About</Link></li>
		<li className="ml-1"><Link to="skill" spy={true} smooth={true} duration={500} offset={-100}>Skill</Link></li>
		<li className="ml-1"><Link to="project" spy={true} smooth={true} duration={500} offset={-100}>Projects</Link></li>
		<li className="ml-1"><Link to="contact" spy={true} smooth={true} duration={500} offset={-70}>Contact Me</Link></li>

		
	</>

    return (
        <>
            <div className="navbar bg-base-200 shadow-md fixed top-0 max-w-[1300px] mx-auto z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navigationLinks}
                        </ul>
                    </div>

                    <a id="logo" className=" btn btn-ghost text-5xl lowercase">MFA</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navigationLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="/ResumeFormanAli.pdf" download className="btn">Download Resume</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;