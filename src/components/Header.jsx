import React, { useState } from 'react'
import logo from './../assets/images/logo.png'
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItems from './HeaderItems';

function Header() {

    // create a toggle vairable 
    const [toggle,setToggle] = useState(false)
    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        }
    ]
    return (
        <div className='flex justify-between p-5 bg-[#030306]'>
            <div className='flex items-center gap-5'>

                <img src={logo} alt="disney hoseter logo" className='w-[80px] lg:w-[115px] object-cover' />

                <div className='md:flex hidden gap-5'>
                    {
                        menu.map((item,index) => (
                            <HeaderItems key={index} name={item.name} Icon={item.icon} /> // largere 
                        ))
                    }
                </div>
                <div className='flex md:hidden gap-2'>
                    {
                        menu.map((item, index) => index < 3 && (
                            <HeaderItems name={''} Icon={item.icon} /> // smaller 
                        ))
                    }
                </div>

                {/*  it's an three dot line which shown only when the srcenning size smaller  */}
                <div className='md:hidden ' onClick={()=>setToggle(!toggle)}>
                    <HeaderItems name={''} Icon={HiDotsVertical} />
                    {toggle? <div className='absolute bg-[#121212] border-[1px] border-gray-700  mt-4 p-3 py-4 flex flex-col right-10 gap-2'>
                        {
                            menu.map((item, index) => index > 2 && (
                                <HeaderItems name={item.name} Icon={item.icon} /> // smaller 
                            ))
                        }

                    </div>: null}
                    

                </div>
            </div>
            <div>
                <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                    className='w-[40px] rounded-full' />

            </div>

        </div>
    )
}

export default Header