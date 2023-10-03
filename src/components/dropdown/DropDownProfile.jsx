import React from "react";
import { HashLink } from "react-router-hash-link";

const DropDownProfile=()=>{
    return (
      <div className='flex flex-col absolute top-5 right-9 text-xl font-semibold w-[60px] p-[15px]'>
        <ul className='flex flex-col gap-2'>
            <HashLink smooth to={'#about'}>About</HashLink>
            <HashLink smooth to={'#project'}>Projects</HashLink>
            <HashLink smooth to={'#contacts'}>Contact</HashLink>
        </ul>
      </div>
    )
  }

  export default DropDownProfile