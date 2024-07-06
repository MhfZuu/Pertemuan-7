"use client"

import Image from 'next/image';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules'
import SwiperNavBtn from '../reusable-components/SwiperNavBtn'
import 'swiper/css'
import 'swiper/css/pagination'
import '@/app/globals.css'

//rgb(124 204 108

function Card(imageUrl :string, color :string, title :string, desc :string){
    return(
        <SwiperSlide className='w-auto flex items-center mt-20 mb-8' id='swiperslide'>
            <div style={{backgroundColor:color, boxShadow: `0 0 32px ${color}`}} className='justify-center p-10 w-full md:min-h-[320px] min-h-[100vw] flex flex-col items-start shadow-4 rounded-[40px]'>
                <div className='h-16'>
                    <Image className="absolute lg:-top-[20%] -top-[10%]" src={imageUrl} width={140} height={100} alt='' />
                </div>
                <div className='pt-10 min-h-20'>
                    <h3 className='font-bold text-3xl mt-4 mb-2'>
                        {title}
                    </h3>
                    <p className='text-sm md:text-md'>
                        {desc}
                    </p>
                </div>
            </div>
        </SwiperSlide>
    )
}

export default function Cardsec2(){
    return (
        <div className="bg-white">
            <div className='flex flex-col gap-1 relative items-center bg-inherit text-black mb-6'>
                <p className='text-center text-3xl w-5/6 font-bold md:text-4xl lg:text-5xl m-1 md:m-2'>We scale like a dream</p>
                <div className='z-30 bg-[#00880d] rounded-full w-fit py-2 px-4 text-white'> Scale with us</div>
            </div>
            <div className='w-full' >
                <Swiper className='lg:max-w-[85%] px-5 max-w-full md:px-10'
                    breakpoints={{
                        768:{
                            slidesPerView:3,
                        },
                        990:{
                            slidesPerView: 4,
                    }}}
                    spaceBetween={45} loop={true} pagination={true} slidesPerView={1} modules={[Pagination]}>
                    {Card(
                        '/gojek-1.svg', '#7ccc6c', '190 million+',
                        'app download since 2015')}
                    {Card(
                        '/gojek-1.svg', '#d48bc8', '2 million+',
                        'driver partners')}
                    {Card(
                        '/gojek-1.svg', '#ffae52', '900.000+',
                        'GoFood merchants')}
                    {Card(
                        '/gojek-1.svg', '#4ac9e3', '2.448x',
                        'Jump in download from 2015 to 200')}
                    <div className='lg:hidden absolute left-0 top-1/2 w-full flex justify-between'>
                        <SwiperNavBtn />
                    </div>
                </Swiper>
            </div>
        </div>
    )
}