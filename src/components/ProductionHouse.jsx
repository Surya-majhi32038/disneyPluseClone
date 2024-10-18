import React from 'react'


import disney from './../assets/images/disney.png'
import marvel from './../assets/images/marvel.png'
import nationalG from './../assets/images/nationalG.png'
import pixar from './../assets/images/pixar.png'
import starwar from './../assets/images/starwar.png'
 
import starwarV from './../assets/Video/star-wars.mp4'
import disneyV from './../assets/Video/disney.mp4'
import marvelV from './../assets/Video/marvel.mp4'
import nationalGeographicV from './../assets/Video/national-geographic.mp4'
import pixarV from './../assets/Video/pixar.mp4'

function ProductionHouse() {

    // create a productionHouseList for all data of photo and video
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwar,
            video:starwarV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGeographicV
        },

    ]
  return (
    <div className='flex gap-3 md:gap-10 bg-[#282A35] p-4 px-5
      md:px-16 '>
        {
            productionHouseList.map((item,index)=>(
                <div className='transition-all duration-300 ease-in-out border-[2px] relative rounded-md hover:scale-110 cursor-pointer bg-[#2C2D38] shadow-lg shadow-black ' key={index}>
                    <video src={item.video} loop playsInline autoPlay muted className='top-0 absolute z-0 hover:z-[1] rounded-md opacity-0 hover:opacity-50 '/>
                    <img src={item.image} className='w-full z-[1]  ' alt="" />
                    
                </div>
            ))
        }
    </div>
  )
}

export default ProductionHouse