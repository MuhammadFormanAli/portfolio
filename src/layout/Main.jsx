
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Contact from '../sections/Contact';
import LatestProject from '../sections/LatestProject';

const Main = () => {
    return (
        <div className='max-w-[1300px] mx-auto border'>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <LatestProject></LatestProject>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Main;