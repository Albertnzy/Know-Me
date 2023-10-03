import {Outlet} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import profile_icon from '../../assets/profile.jpg'
import { useState, useEffect } from 'react'
import DropDownProfile from '../../components/dropdown/DropDownProfile'

const Navigation=()=>{
    const [stickyClass, setStickyClass] = useState('relative');
    const [openMenu,setOpenMenu]=useState(false)

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
    }
  };
    return(
        <div >
        <nav className={`w-full hidden justify-between h-14 md:flex ${stickyClass}`}>
            <div className='flex'>
                <img className='w-10 h-10 my-3 mx-[10px] rounded-3xl' src={profile_icon} alt=''/>
                <div className='text-xl text-black font-bold mt-4 items-start'>Albert Narzary</div>
            </div> 
            <div className='justify-between font-semibold md:flex space-x-14  mt-3 mr-4'>
                <HashLink smooth to={'#about'}>About</HashLink>
                <HashLink smooth to={'#projects'}>Projects</HashLink>
                <HashLink smooth to={'#contact'}>Contact</HashLink>
            </div>
        </nav>
        <nav className={`w-full md:hidden justify-between h-14 flex`}>
            <div className='flex'>
                <img className='w-10 h-10 my-3 mx-[10px] rounded-3xl' src={profile_icon} alt=''/>
                <div className='text-xl text-black font-bold mt-4 items-start'>Albert Narzary</div>
            </div> 
            <div className='justify-between hidden font-semibold md:flex space-x-14  mt-3 mr-4'>
                <HashLink smooth to={'#about'}>About</HashLink>
                <HashLink smooth to={'#projects'}>Projects</HashLink>
                <HashLink smooth to={'#contact'}>Contact</HashLink>
            </div>
          <div class="md:hidden">
            <button onClick={()=>setOpenMenu((prev)=>!prev)} class="text-4xl" href="#">&#8801;{openMenu && <DropDownProfile/>} </button>
        </div>
        </nav>
        <Outlet/>
        </div>
    )
}

export default Navigation