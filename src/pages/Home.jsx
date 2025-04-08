import "../assets/style.css";
import "../assets/App";
import LinkdinShot from "../../public/Images/social-icons (3).e703a13c.svg";
import GithubShot from "../../public/Images/github-w-icon.2d3d0ca8.svg";
import WhatsappShot from "../../public/Images/whatsapp-w-icon.8251ab7d.svg";
import HeadShot from "../../public/Images/Main-image.webp";
import SkillsIcon from "../../public/Images/adobe-photoshop.86d7467e.png";
import SkillsIcon2 from "../../public/Images/wordpress.11ed0915.png";
import SkillsIcon3 from "../../public/Images/atom.ac997969.png";
import { FaLaptopCode } from "react-icons/fa";
import { TfiWordpress } from "react-icons/tfi";
import { BsCart3 } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { RiGlobalFill } from "react-icons/ri";
import { LuSettings2 } from "react-icons/lu";
import Typewriter from 'typewriter-effect/dist/core';
import { useEffect } from "react";
import Projectone from "../../public/Images/Afropop_Logo.png";


const Homepage = () => {
    return (
        <>
            <HeroBanner />
            <About />
            <WorkSection />
        </>
    );
};

export default Homepage;



const HeroBanner = () => {  

  useEffect(() => {
    new Typewriter('#typewriter', {
      strings: ['Wordpress Developer.', 'Designer.', 'Professional Coder.'],
      autoStart: true,
      loop: true,
      pauseFor: 2500,
      devMode: 'false'
    });
  }, []);

    return (
      <main className="lg:pt-[100px] lg:pb-[100px] md:pb-[60px] md:pt-[60px] pt-[40px] pb-[40px] px-2">
          <section className="container m-auto">
            <div className="flex justify-between items-center gap-8 Hero_box">
              
              <div className="Hero_Content lg:w-2/4 md:w-3/4 w-full text-center md:text-left">
                <h3>WELCOME TO MY WORLD</h3>
                <h1 className="py-3">
                  Hi, I’m <span className="Name_clr">Sarim Ansari</span> a <br></br> <span id="typewriter"></span>
                </h1>
                <p className="pb-3">
                  I have a total of 3 years of experience in the field of web development, and I am proficient in working with WordPress. I can handle various tasks using different page builders and plugins. I have successfully built more than 32 websites, both on WordPress and through custom development.
                </p>
    
                <div className="Social_Box lg:flex justify-between">
                  <div className="Social_columns md:mb-3">
                    <h4 className="pb-4">WELCOME TO MY WORLD:</h4>
                    <div className="social_icons flex justify-center md:justify-start md:mb-0 mb-2 gap-5">
                      <a href="#">
                        <img src={LinkdinShot} alt="" className="w-7" />
                      </a>
                      <a href="#">
                        <img src={GithubShot} alt="" className="w-7" />
                      </a>
                      <a href="#">
                        <img src={WhatsappShot} alt="" className="w-7" />
                      </a>
                    </div>
                  </div>
    
                  <div className="Social_columns">
                    <h4 className="pb-4">Best Skill On:</h4>
                    <div className="social_icons flex justify-center md:justify-start md:mb-0 mb-2 gap-5">
                      <a href="#">
                        <img src={SkillsIcon3} alt="" className="w-7" />
                      </a>
                      <a href="#">
                        <img src={SkillsIcon2} alt="" className="w-7" />
                      </a>
                      <a href="#">
                        <img src={SkillsIcon} alt="" className="w-7" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="Image_div md:w-1/3 w-full flex md:justify-end justify-center">
                <img src={HeadShot} alt="" className="grayscale" />
              </div>
            
            </div>
          </section>
        </main>
      );
};
    
const About = () => {
    return (

        <main className="pb-[80px]">

            <section className="container m-auto">
                
                <div className="Skills_Section">
                    
                    <h5>Features</h5>
                    <h2>What I Do</h2>
                    
                    <div className="Box_Section mt-6 flex flex-wrap justify-center gap-8">
                        
                        <div className="Box py-11 px-8 w-[320px] md:w-[45%] lg:w-[31.5%]">
                            <FaLaptopCode />
                            <h3>Web Development</h3>
                            <p>
                            When it comes to website development, I push the limits and set new standards by creating functionally rich and aesthetically stunning websites.                            </p>
                        </div>
                        
                        <div className="Box py-11 px-8 w-[320px] md:w-[45%] lg:w-[31.5%]">
                            <TfiWordpress />
                            <h3>WordPress Development</h3>
                            <p>
                                Professional in Wordpress Development speciality in Page builders Elementor and WP Bakery and Flatsome and more.
                            </p>
                        </div>
                       
                        <div className="Box py-11 px-8 w-[320px] md:w-[45%] lg:w-[31.5%]">
                            <BsCart3 />
                            <h3>Ecommerce Solutions</h3>
                            <p>
                                A compelling e-commerce design requires creativity, innovation, skill and experience on part of the developer and competitor
                            </p>
                        </div>

                        <div className="Box py-11 px-8 w-[320px] md:w-[45%] lg:w-[31.5%]">
                            <RiGlobalFill />
                            <h3>Real Estate & Marketing</h3>
                            <p>
                                My marketing strategy is centered around helping you grow your business and reach out to millions of people.
                            </p>
                        </div>

                        <div className="Box py-11 px-8 w-[320px] md:w-[45%] lg:w-[31.5%]">
                            <FaSearch />
                            <h3>SEO & Optimization</h3>
                            <p>
                                By working with me, you will get a premium SEO experience on knowing that your website is in good hands.
                            </p>
                        </div>

                        <div className="Box py-11 px-8 w-[320px] md:w-[45%] lg:w-[31.5%]">
                            <LuSettings2 />
                            <h3>Customized Solution</h3>
                            <p>
                                I am a dedicated person of front end developer gives you the best custom services worldwide.
                            </p>
                        </div>
                    
                    </div>
                
                </div>
            
            </section>
        </main>

    );
};

const WorkSection = () => {
  return (
    
    <main className="pb-[80px]">
      <section className="container m-auto">

      <div className="portfolio_head">
          <div className="w-[100%]">
            <h2 className="lg:text-[50px] text-center text-white font-bold">
              Portfolio
            </h2>
          </div>
      </div>

      <div className="portfolio_sec flex gap-3">
        
        <div className="lg:w-[33%] port_image">
          <div className="port_box">
          <img src={Projectone} alt="" />
          <h3 className="project_name text-white text-[30px] text-center font-medium">
              Afropop
          </h3>
          <button>Learn More</button>
        </div>
        </div>
      
      </div>

      </section>
    
    </main>
  
  );
};
