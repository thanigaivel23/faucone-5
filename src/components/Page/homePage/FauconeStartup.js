import React from 'react'
import rocket from '../../../img/rocket.png'


const FauconeStartup = () => {
    return (
        <>
            <p className='tw-text-[#079fce] tw-text-center tw-font-GoogleSansMedium tw-my-10 tw-mt-20 md:tw-my-20 tw-text-3xl md:tw-text-4xl'>Faucone <span className='tw-font-sans tw-text-[#424242]'>For Startups</span></p>

            <img src={rocket} alt="" className='md:tw-w-[90%] tw-my-10 md:tw-my-20 tw-mx-auto tw-rounded-3xl  ' />

        </>
    )
}

export default FauconeStartup