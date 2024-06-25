import React, { Fragment } from 'react'

import vision from '../../../img/vision_icon.svg'
import mission from '../../../img/mission_icon.svg'
// import motto from '../../../img/motto_icon.svg'
import value from '../../../img/values_icon.svg'
// import goal from '../../../img/goal_icon.svg'
import { useTranslation } from 'react-i18next'

import people from '../../../img/people.jpg'
import eye from '../../../img/eye.png'
import arrow from '../../../img/arrow.png'
import diamond from '../../../img/diamond.png'

const FivePoints = () => {
    const { t } = useTranslation();
    return (
        <>
            <main className='tw-mt-32'>

                <img src={people} alt="" className='tw-hidden md:tw-inline tw-w-full tw-object-cover ' />


                <section className='md:tw-w-[75%] md:-tw-mt-40 tw-relative tw-mx-auto tw-bg-white tw-rounded-2xl tw-shadow-xl tw-py-5 md:tw-px-20 tw-font-GoogleSans  '>
                    <p className='tw-text-3xl md:tw-text-5xl  tw-text-center tw-text-[#1796be] tw-font-semibold '>Principles <span className='tw-font-normal tw-text-gray-700'>that drive us</span></p>
                    
                    <div className=' tw-grid md:tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-x-20 md:tw-pt-20'>
                        
                        <div className='md:tw-pl-5'>
                            <img src={eye} alt="" className='tw-w-20 tw-mx-auto md:tw-mx-auto tw-mt-10 md:tw-m-0' />
                            <p className='tw-text-2xl md:tw-text-3xl tw-font-medium tw-text-center md:tw-text-left tw-mt-3 md:tw-mt-10 tw-mb-3'>Our Vision</p>
                            <p className='tw-text-lg tw-text-gray-500 tw-px-5 md:tw-px-0 tw-text-justify'>25+ years of running a profitable organization gives us a good sense of challenges that a growing business faces. We take pride in running a sustainable business that's powered by you, our customer.</p>
                        </div>

                        <div className='md:tw-pl-10'>
                            <img src={eye} alt="" className='tw-w-20 tw-mx-auto md:tw-mx-auto tw-mt-10 md:tw-m-0' />
                            <p className='tw-text-2xl md:tw-text-3xl tw-font-medium tw-text-center md:tw-text-left tw-mt-3 md:tw-mt-10 tw-mb-3'>Our Mission</p>
                            <p className='tw-text-lg tw-text-gray-500 tw-px-5 md:tw-px-0 tw-text-justify'>Our mission is to create entrepreneurs, power brands and build a meaningful future through advanced idea.</p>
                        </div>

                        <div className='md:tw-pl-10'>
                            <img src={eye} alt="" className='tw-w-20 tw-mx-auto md:tw-mx-auto tw-mt-10 md:tw-m-0' />
                            <p className='tw-text-2xl md:tw-text-3xl tw-font-medium tw-text-center md:tw-text-left tw-mt-3 md:tw-mt-10 tw-mb-3'>Our Values</p>
                            <p className='tw-text-lg tw-text-gray-500 tw-px-5 md:tw-px-0 tw-text-center md:tw-text-left '>Limpidity</p>
                            <p className='tw-text-lg tw-text-gray-500 tw-px-5 md:tw-px-0 tw-text-center md:tw-text-left '>Virtuous</p>
                            <p className='tw-text-lg tw-text-gray-500 tw-px-5 md:tw-px-0 tw-text-center md:tw-text-left '>Gratitude</p>



                        </div>
                    </div>
                </section>
            </main>








        </>
    )
}

export default FivePoints