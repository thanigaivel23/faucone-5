import React from 'react'
import banner_image from '../../../img/banner_image.png'
import { useTranslation } from 'react-i18next';
const PoweringBrands = () => {
    const { t } = useTranslation();
    return (
        <>
            {/* <div className='tw-text-7xl tw-font-bold tw-bg-gradient-to-r tw-text-[#069fce] tw-bg-clip-text'></div> */}

            <main className='lg:tw-flex tw-relative'>
                {/* bg blue color */}
                <div class="tw-absolute tw-top-0 tw-left-0 tw-w-[50%] md:tw-w-[20%] tw-h-full tw-bg-gradient-to-br tw-from-[#ade3ed] tw-to-transparent tw-via-transparent"></div>

                {/* bg person img */}
                <section className='tw-order-2 tw-mx-auto md:tw-pr-10'>
                    <div className='tw-relative '>
                        <img src={banner_image} alt="Your" className="tw-mx-auto tw-block tw-w-[500px] " />
                        {/* <div className="tw-absolute  tw-inset-x-0 tw-bottom-0 tw-h-60 tw-bg-gradient-to-b tw-from-transparent tw-to-white"></div> */}
                    </div>
                </section>

                <section className='tw-z-20 md:tw-px-24 tw-text-center lg:tw-text-left tw-py-5 lg:tw-py-24'>
                    <p className='tw-font-bold tw-text-[#069fce] tw-text-3xl md:tw-text-5xl'>{t('home.power')} {/* <br className='tw-hidden md:tw-inline' /> */} <span className=' tw-tracking-[3px] tw-font-medium  tw-text-black'>{t('home.brand')}</span></p>
                    <p className='tw-font-medium tw-text-black tw-text-3xl md:tw-text-5xl tw-my-5 md:tw-my-10'> {t('home.create')} {/* <br className='tw-hidden md:tw-inline' /> */}<span className=' tw-tracking-[3px] tw-font-bold  tw-text-[#069fce]'>{t('home.enterpernur')}</span></p>
                    <p className=' tw-mt-6 tw-text-base sm:tw-text-base tw-px-3 lg:tw-w-[66%] tw-font-PuviMedium'>{t('home.sub_content')}.</p>

                    <button className='tw-mt-10 tw-text-white tw-bg-[#069fce] tw-py-2 tw-px-4 tw-rounded-md tw-ml-3'>
                        Book Appointment
                    </button>
                </section>



            </main>
        </>
    )
}

export default PoweringBrands