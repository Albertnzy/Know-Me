import AboutImage from '../../assets/about-image.png'

const About=()=>{
    return(
        <div id="about" className="w-full mt-[-100px] md:mt-[-50px] ml-3">
            <div className="flex md:mt-[70px]">
                <img className='w-[250px] h-[100px] md:w-[420px] md:h-[250px] md:ml-[15%] rounded-xl' src={AboutImage} alt=""/>
                <div className='ml-4'>
                <h1 className="md:text-5xl text-2xl ml-[-30px] font-bold mt-[-60px] md:text-center md:mt-10">About</h1>
                <div className="md:hidden w-[180px] ml-[-85px] h-[2px] bg-blue-400 rounded-xl mt-2"/>
                <p className='mt-4 ml-1'>I'm a web developer from India proficient in all the technologies<br/>
                mentioned above. To look some of my real work and projects<br/> you can easily look 
                through the list provided on the Project <br/> section of this page.
                </p>
                </div>
            </div>
            
        </div>
    )
}

export default About