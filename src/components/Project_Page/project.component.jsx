import Animendar from '../../assets/animendar.jpg'
import Notes from '../../assets/notes.webp'

const  Projects=()=>{

    return(
        <div>
        {/* large layout */}
        <div id='projects' className="hidden md:flex flex-col w-full mb-7 my-[60px]">
            <div className="ml-[27%]">
            <h1 className="text-5xl font-bold ml-[260px]">Projects</h1>
            <div className="w-[700px] h-[2px] bg-yellow-400 rounded-xl mt-2"/>
            </div>
            <div className='flex mt-11'>
            <div className=" max-w-[600px] min-h-[200px] flex flex-col rounded-xl ml-[100px] my-4 bg-slate-300">
                <div className='flex'>
                <img className=' w-[200px] h-[150px] m-7 rounded-xl' src={Animendar} alt=""/>
                <div className='flex flex-col m-7'>
                <h1 className='font-bold text-4xl text-center mx-auto'>Animendar</h1>
                <p>A site that helps you choose which anime to watch based on your interest.</p>
                <button className='ml-7 bg-black w-52 h-10 mt-4 text-white  hover:bg-white hover:text-black'> Watch live</button>
                </div>
                </div>
            </div>
            <div className=" max-w-[600px] min-h-[200px] flex flex-col rounded-xl ml-[100px] my-4 bg-slate-300">
                <div className='flex'>
                <img className=' w-[250px] h-[150px] m-7 rounded-xl' src={Notes} alt=""/>
                <div className='flex flex-col m-7'>
                <h1 className='font-bold text-4xl text-center mx-auto'>Your Notes</h1>
                <p>This Android notepad app will help you to take notes, write messages, e-mails and do many other things.</p>
                <a href='https://play.google.com/store/apps/details?id=com.narzary.createnotes&pli=1' 
                rel='noreferrer'
                target='_blank'>
                <button className='ml-7 bg-black w-52 h-10 mt-4 text-white  hover:bg-white hover:text-black'> Watch live</button>
                </a>
                </div>
            </div>
            </div>
            </div>
            <div className=" md:max-w-[600px] min-h-[200px] flex flex-col rounded-xl ml-[450px] my-4 bg-slate-300">
                <div className='flex'>
                <div className='flex flex-col mt-12 mx-auto'>
                <p className='text-center'>Some of my ongoing Projects that I'm currently <br/> working at will be updated in this section.</p>
                <button className='ml-16 bg-black w-52 h-10 mt-4 text-white  hover:bg-white hover:text-black'> Coming soon</button>
                </div>
                </div>
            </div>
            
        </div>
        <div id='project' className='md:hidden mt-10 flex flex-col'>


        {/* small layout */}
        <div className="ml-[5%]">
            <h1 className="text-2xl font-bold ml-[150px]">Projects</h1>
            <div className="w-[250px] ml-[70px] h-[2px] bg-yellow-400 rounded-xl mt-2"/>
            </div>
            <div className=" max-w-[400px] min-h-[150px] flex flex-col rounded-xl ml-[30px] my-4 bg-slate-300">
                <div className='flex'>
                <img className=' w-[150px] h-[100px] mt-7 ml-2 rounded-xl' src={Animendar} alt=""/>
                <div className='flex flex-col m-2'>
                <h1 className='font-bold text-xl text-center mx-auto'>Animendar</h1>
                <p>A site that helps you choose which anime to watch based on your interest.</p>
                <button className='ml-7 bg-black w-28 h-8 mt-4 text-white  hover:bg-white hover:text-black'> Watch live</button>
                </div>
                </div>
            </div>
            <div className=" max-w-[400px] min-h-[150px] flex flex-col rounded-xl ml-[30px] my-4 bg-slate-300">
                <div className='flex'>
                <img className=' w-[150px] h-[100px] mt-7 ml-2 rounded-xl' src={Notes} alt=""/>
                <div className='flex flex-col m-7'>
                <h1 className='font-bold text-xl text-center mx-auto'>Your Notes</h1>
                <p>This Android notepad app will help you to take notes, write messages, e-mails.</p>
                <a href='https://play.google.com/store/apps/details?id=com.narzary.createnotes&pli=1' 
                rel='noreferrer'
                target='_blank'>
                <button className='ml-[54px] bg-black w-28 h-8 mt-4 text-white  hover:bg-white hover:text-black'> Watch live</button>
                </a>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Projects