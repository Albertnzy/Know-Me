import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'

const Contact=()=>{
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [message,setMessage]=useState('')

    const handleChange=(event)=>{
        const {name,value}=event.target
        if(name==="user_name"){
            setName(value)
        }else if(name==="user_email"){
            setEmail(value)
        }else if(name==='message'){
            setMessage(value)
        }
    }

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      console.log(email)
      if(email===''){
        return
      }else{
        emailjs.sendForm('service_o2yvexs', 'template_baexxg4', form.current, '86Rl8xpP9uTT-bntz')
        .then((result) => {
            console.log(result.text);
            alert('Message sent successfully!!!')
            setEmail('')
            setName('')
            setMessage('')
        }, (error) => {
        console.log(error.text);
        });
    }
    };

    return(
        <div>
        <div id='contact' className=' hidden w-full h-screen md:flex bg-black'>
            <div className='ml-60 flex flex-col mt-[20%]'>
                <h1 className='text-5xl font-bold text-white'>Contact me</h1>
                <p className='mt-9 font-semibold text-white'>Feel free while reaching out to me!!!</p>
                <p className='mt-3 font-bold text-white'>Email: Albertnarzary11@gmail.com</p>
            </div>
            <div className=' mx-[20px] mt-[15%]'>
            <form className='flex flex-col ml-[40%]' ref={form} onSubmit={sendEmail}>
            <label className='mt-2 text-white'>Name</label>
            <input className='border rounded-sm w-[350px] h-[40px]' type="text" onChange={handleChange} name="user_name" value={name}/>
            <label className='mt-2 text-white'>Email</label>
            <input className='border rounded-sm w-[350px] h-[40px]' onChange={handleChange} type="email" name="user_email" value={email}/>
            <label className='mt-2 text-white'>Message</label>
            <textarea className='border rounded-sm w-[350px] h-[130px]' onChange={handleChange} name="message" value={message}/>
            <input className='border border-black w-[180px] h-[40px] mt-5 ml-20 rounded-xl  cursor-pointer bg-white text-black hover:bg-green-700 hover:text-white ' type="submit" value="Send" />
            </form>
            </div>
        </div>
        <div id='contacts' className='w-full h-screen flex flex-col md:hidden bg-black'>
            <div className='ml-20 flex flex-col mt-[20%]'>
                <h1 className='text-4xl font-bold text-white'>Contact me</h1>
                <p className='mt-9 font-semibold text-white'>Feel free while reaching out to me!!!</p>
                <p className='mt-3 font-bold text-white'>Email: Albertnarzary11@gmail.com</p>
            </div>
            <div className=' mx-[10px] mt-[6%]'>
            <form className='flex flex-col ml-20' ref={form} onSubmit={sendEmail}>
            <label className='mt-2 text-white'>Name</label>
            <input className='border rounded-sm w-[250px] h-[40px]' type="text" onChange={handleChange} name="user_name" value={name}/>
            <label className='mt-2 text-white'>Email</label>
            <input className='border rounded-sm w-[250px] h-[40px]' onChange={handleChange} type="email" name="user_email" value={email}/>
            <label className='mt-2 text-white'>Message</label>
            <textarea className='border rounded-sm w-[250px] h-[100px]' onChange={handleChange} name="message" value={message}/>
            <input className='border border-black w-[100px] h-[40px] mt-5 ml-20 rounded-xl  cursor-pointer bg-white text-black hover:bg-green-700 hover:text-white ' type="submit" value="Send" />
            </form>
            </div>
        </div>
      </div>
  
    )
}

export default Contact