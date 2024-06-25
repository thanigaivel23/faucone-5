import React from 'react'
import girls from '../../../img/girls.png'
import girls2 from '../../../img/girls2.png'
import computer2 from '../../../img/computer2.png'
import computer from '../../../img/computer.png'


const ContributeToTheSocity2 = () => {
    return (
        <>
            <p className='tw-text-[#079fce] tw-text-center tw-font-GoogleSansMedium tw-my-10 tw-mt-20 md:tw-my-20 tw-text-3xl md:tw-text-4xl'>Our Contribution <span className='tw-font-sans tw-text-[#424242]'>to Society</span></p>
            {/*             
            <div className='tw-bg-[#069fce] tw-mx-20 tw-px-28 tw-rounded-2xl tw-flex tw-items-center tw-justify-between'>
                <p className='tw-font-medium tw-text-white tw-text-4xl tw-text-center'>WOMEN <br /><span className='tw-font-light'>EMPOWERMENT</span></p>
                <img src={girls2} alt="" className='tw-mt-5 tw-w-[600px]' />
            </div>

            <div className='tw-bg-[#cdecf5] tw-mx-20 tw-mt-10 tw-px-28 tw-rounded-2xl tw-flex tw-items-center tw-justify-between'>
                <img src={computer} alt="" className='tw-w-[500px]' />
                <p className='tw-text-center tw-text-[#069fce]  tw-font-light tw-text-4xl'>DRIVERS OF <span className='tw-font-medium '>STARTUP <br />  ECO-SYSTEM</span></p>
            </div>

            <div className='tw-bg-[#069fce] tw-mx-20 tw-mt-10 tw-px-28 tw-rounded-2xl tw-flex tw-items-center tw-justify-between'>
                <p className='tw-font-medium tw-text-white tw-text-4xl tw-text-center'>WOMEN <br /><span className='tw-font-light'>ENTRPRENEURSHIP</span></p>
                <img src={girls} alt="" className='tw-w-[500px]' />
            </div>


            <div className='tw-bg-[#cdecf5] tw-mx-20 tw-mt-10 tw-px-28 tw-rounded-2xl tw-flex tw-items-center tw-justify-between'>
                <img src={computer2} alt="" className='tw-w-[500px]' />
                <p className='tw-text-center tw-text-[#069fce]  tw-font-light tw-text-4xl'>DEVELOPING GIG <span className='tw-font-medium '><br /> ECONOMY</span></p>
            </div> */}


            {/* 4 box */}
            <main className='tw-grid md:tw-grid-cols-2 tw-gap-5 tw-mx-5'>
                <div className='tw-bg-[#F0E8FF] tw-pl-5 tw-rounded-2xl tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-10'>
                    <p className='tw-font-medium tw-mt-10 tw-text-3xl tw-text-center'><span className='-tw-my-6 tw-block'>WOMEN</span> <br /><span className=' tw-font-light'>ENTREPRENURSHIP</span></p>
                    <button className='tw-mt-7  tw-text-[#0BAAD5] tw-bg-white tw-border tw-border-[#0BAAD5] tw-py-1 tw-px-4 tw-rounded-md tw-ml-3'>
                        Explore
                    </button>
                </div>

                <div className='tw-bg-[#FFE6D6] tw-pl-5 tw-rounded-2xl tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-10'>
                    <p className='tw-text-center tw-mt-10   tw-font-light tw-text-3xl'><span className='-tw-my-6 tw-block'> DRIVERS OF <span className='tw-font-medium '>STARTUP</span></span> <br />  <span className='tw-font-medium'> ECO-SYSTEM</span></p>
                    <button className='tw-mt-7  tw-text-[#0BAAD5] tw-bg-white tw-border tw-border-[#0BAAD5] tw-py-1 tw-px-4 tw-rounded-md tw-ml-3'>
                        Explore
                    </button>
                </div>

                <div className='tw-bg-[#CDDEE1] tw-pl-5 tw-rounded-2xl tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-10'>
                    <p className='tw-text-center tw-mt-10   tw-font-light tw-text-3xl'><span className='-tw-my-6 tw-block'>DEVELOPING <span className='tw-font-medium '>GIG</span></span> <br />  <span className='tw-font-medium'> ECONOMY</span></p>
                    <button className='tw-mt-7  tw-text-[#0BAAD5] tw-bg-white tw-border tw-border-[#0BAAD5] tw-py-1 tw-px-4 tw-rounded-md tw-ml-3'>
                        Explore
                    </button>
                </div>


                <div className='tw-bg-[#FFF7D6] tw-pl-5 tw-rounded-2xl tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-2'>
                    <p className='tw-font-medium  tw-text-3xl tw-text-center tw-mt-10'><span className='-tw-my-6 tw-block'>WOMEN</span> <br /><span className=' tw-font-light'>ENTREPRENURSHIP</span></p>
                    <button className='tw-mt-7  tw-text-[#0BAAD5] tw-bg-white tw-border tw-border-[#0BAAD5] tw-py-1 tw-px-4 tw-rounded-md tw-ml-3'>
                        Explore
                    </button>
                </div>

            </main>
        </>
    )
}

export default ContributeToTheSocity2