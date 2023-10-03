import HTML_Logo from '../../assets/html-icon.png'
import CSS_logo from '../../assets/css icon.jpg'
import JS_logo from '../../assets/JS-logo.jpg'
import Tailwind_logo from '../../assets/tailwindcss-logo.png'
import React_logo from '../../assets/react-logo.png'
import Node_logo  from '../../assets/node-logo.webp'
import About from '../../components/About_Page/about.component'
import Android_logo from '../../assets/android-logo.jpg'
import Github_logo from '../../assets/github-logo.jpg'
import linkdin_logo from '../../assets/linkdin-logo.jpg'
import Projects from '../../components/Project_Page/project.component'
import Contact from '../../components/Contact_Page/contact.component'

const Home=()=>{
    return(
        <>
        <div className='h-screen'>
        <div className="mt-[150px]">
            <h1 className=" md:max-w-xl mx-auto font-bold text-center md:text-7xl text-3xl">Full Stack Web <br/> Developer</h1>
            <p className="md:max-w-xl mx-auto text-base text-center mt-5 ">
                Hello, My name is Albert Narzary.<br/>
            I'm  a web developer from Guwahati India.</p>
            <div className='mt-3 flex md:ml-[47%] ml-[40%]'>
                <a href='https://github.com/Albertnzy' 
                rel='noreferrer'
                target='_blank'>
                <img className='w-10 h-9' src={Github_logo} alt=""/>
                </a>
                <a href='https://www.linkedin.com/in/albert-narzary-60ba13283/'
                rel='noreferrer'
                target='_blank'>
                <img className='w-14 h-9' src={linkdin_logo} alt=""/>
                </a>
                
            </div>
        </div>

        {/* Expertise sections starts here */}
        <div className=" mt-11">
            <div>
            <p className='my-auto text-center font-semibold md:text-xl'>Tech stacks that I have experience in</p>
            </div>
            <div className='max-w-xs flex rounded space-x-8 space-y-11 mx-auto justify-evenly'>
            <img className='w-7 h-7 md:w-14 md:h-14 rounded-sm mt-11' src={HTML_Logo} alt=""/>
            <img className='w-7 h-7 md:w-14 md:h-14 rounded-sm' src={CSS_logo} alt=""/>
            <img className='w-7 h-7 md:w-14 md:h-14 rounded-sm' src={JS_logo} alt=""/>
            <img className='w-7 h-7 md:w-14 md:h-14 rounded-3xl' src={Tailwind_logo} alt=""/>
            <img className='w-7 h-7 md:w-14 md:h-14 rounded-2xl' src={Node_logo} alt=""/>
            <img className='w-7 h-7 md:w-14 md:h-14 rounded-3xl' src={React_logo} alt=""/>
            <img className='w-7 h-7 md:w-14 md:h-14 rounded-3xl' src={Android_logo} alt=""/>
            </div>
        </div>
        </div>
        <About/>
        <Projects/>
        <div className='mt-8'>
            <Contact/>
        </div>
        </>
    )
}

export default Home