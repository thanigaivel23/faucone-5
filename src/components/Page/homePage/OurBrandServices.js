import React from 'react'
import brand_service_1 from '../../../img/brand_service_1.svg'
import brand_service_2 from '../../../img/brand_service_2.svg'
import brand_service_3 from '../../../img/brand_service_3.svg'
import brand_service_4 from '../../../img/brand_service_4.svg'
import brand_service_5 from '../../../img/brand_service_5.svg'
import brand_service_6 from '../../../img/brand_service_6.svg'
import brand_service_7 from '../../../img/brand_service_7.svg'
import brand_service_8 from '../../../img/brand_service_8.svg'
import brand_service_9 from '../../../img/brand_service_9.svg'
import brand_service_10 from '../../../img/brand_service_10.svg'
import brand_service_11 from '../../../img/brand_service_11.svg'
import brand_service_12 from '../../../img/brand_service_12.svg'
import { useTranslation } from 'react-i18next'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../carousal.css'


const OurBrandServices = () => {
    const { t } = useTranslation();
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1021 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        laptop: {
            breakpoint: { max: 1020, min: 901 },
            items: 3,
            slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 900, min: 451 },
            items: 2,
            slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 450, min: 320 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const add3Dots = (string, limit = 60) => {
        var dots = "...";
        if (string.length > limit) {
            // you can also use substr instead of substring
            string = string.substring(0, limit) + dots;
        }

        return string;
    }

    return (
        <>
            <p className='tw-text-3xl md:tw-text-5xl tw-my-20  tw-text-center tw-text-[#1796be] tw-font-semibold '>16 Solutions <span className='tw-font-normal tw-text-2xl md:tw-text-4xl tw-text-gray-700'>1 Brand</span></p>

            {/* <main className='tw-grid tw-grid-cols-4 tw-gap-x-10 tw-w-[90%] tw-mx-auto tw-mt-10 '> */}
            <div className='lg:tw-p-5 tw-ml-10 lg:tw-ml-16 '>
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    infinite={true}
                    partialVisible={false}
                    itemClass={{ "paddingRight": "40px" }}
                    dotListclassName="custom-dot-list-style"
                >
                    <section className='tw-shadow-xl tw-bg-[#dcf7ff] tw-py-10 tw-px-8   tw-rounded-2xl tw-h-[100%] tw-pr-10 '>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className=''><span className='tw-font-bold tw-mt-3 tw-text-xl  tw-text-[#069fce]'>FAUCONE</span> <br /> <span className='tw-text-xl tw-font-PuviMedium tw-font-bold'>BUSINESS</span></p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>{add3Dots("Faucone Business Services can meet all the needs of business consulting services. Our business services are carefully designed to perfectly meet the needs of each business and brand")}</p>

                        <button className='tw-flex tw-my-14 tw-mx-auto tw-mt-14 tw- tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Explore</button>
                    </section>

                    <section className='tw-shadow-xl tw-bg-[#f2f2f2] tw-py-10 tw-px-8   tw-rounded-2xl tw-h-[100%] '>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className=''><span className='tw-font-bold tw-mt-3 tw-text-xl  tw-text-[#069fce]'>FAUCONE</span> <br /> <span className='tw-text-xl tw-font-PuviMedium tw-font-bold'>BUSINESS</span></p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>{add3Dots("Faucone Digital offer a wide range of digital services and strategies to small, medium, and big organizations’, with the goal of increasing online and mobile presence, generating leads to extend your client base, and delivering substantial ROI and improved revenues")}</p>

                        <button className='tw-flex tw-my-14 tw-bg-white tw-mx-auto  tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Explore</button>
                    </section>

                    <section className='tw-shadow-xl tw-bg-[#ffe6e6] tw-py-10 tw-px-8   tw-rounded-2xl tw-h-[100%] '>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className=''><span className='tw-font-bold tw-mt-3 tw-text-xl  tw-text-[#069fce]'>FAUCONE</span> <br /> <span className='tw-text-xl tw-font-PuviMedium tw-font-bold'>BUSINESS</span></p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>{add3Dots("Faucone Technologies can help you to grow your business and it is committed to create engaging Digital Experience through Technology")}</p>

                        <button className='tw-flex tw-my-14 tw-bg-white tw-mx-auto  tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Explore</button>
                    </section>

                    <section className='tw-shadow-xl tw-bg-[#d6f5d6] tw-py-10 tw-px-8   tw-rounded-2xl tw-h-[100%] '>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className=''><span className='tw-font-bold tw-mt-3 tw-text-xl  tw-text-[#069fce]'>FAUCONE</span> <br /> <span className='tw-text-xl tw-font-PuviMedium tw-font-bold'>BUSINESS</span></p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>{add3Dots("Faucone Solutions trust in providing value added and optimized IT and Software services to our customers and focus on quality, schedule and cost")}</p>

                        <button className='tw-flex tw-my-14 tw-bg-white tw-mx-auto  tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Explore</button>
                    </section>
                    <section className='tw-shadow-xl tw-bg-[#f5edd6] tw-py-10 tw-px-8   tw-rounded-2xl tw-h-[100%] '>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className=''><span className='tw-font-bold tw-mt-3 tw-text-xl  tw-text-[#069fce]'>FAUCONE</span> <br /> <span className='tw-text-xl tw-font-PuviMedium tw-font-bold'>BUSINESS</span></p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>{add3Dots("Faucone Finance understands that every business has unique financial needs. We are proud and working hard to provide business owners and entrepreneurs with the best financial solutions to ensure that they achieve their business goals")}</p>

                        <button className='tw-flex tw-my-14 tw-bg-white tw-mx-auto  tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Explore</button>
                    </section>
                    <section className='tw-shadow-xl tw-bg-[#e0ebeb] tw-py-10 tw-px-8   tw-rounded-2xl tw-h-[100%] '>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className=''><span className='tw-font-bold tw-mt-3 tw-text-xl  tw-text-[#069fce]'>FAUCONE</span> <br /> <span className='tw-text-xl tw-font-PuviMedium tw-font-bold'>BUSINESS</span></p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>{add3Dots("Faucone Consultancy service is a leading consultancy agency in staffing and sourcing across various industries. We formulate our recruitment in a very crafted way, which would give you a specified as- surance, keeping in mind, all the requirements of your business, giving you the ultimate satisfaction. This is because, we understand how aggressive the market has evolved today")}</p>

                        <button className='tw-flex tw-my-14 tw-bg-white tw-mx-auto  tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Explore</button>
                    </section>
                    <section className='tw-shadow-xl tw-bg-[#e6ccff] tw-py-10 tw-px-8   tw-rounded-2xl tw-h-[100%] '>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className=''><span className='tw-font-bold tw-mt-3 tw-text-xl  tw-text-[#069fce]'>FAUCONE</span> <br /> <span className='tw-text-xl tw-font-PuviMedium tw-font-bold'>BUSINESS</span></p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>{add3Dots("Studios Provides a wide range of Photography and video production services for al I Bra nds and Businesses")}</p>

                        <button className='tw-flex tw-my-14 tw-bg-white tw-mx-auto  tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Explore</button>
                    </section>
                    <section className='tw-shadow-xl tw-bg-[#ffd6cc] tw-py-10 tw-px-8   tw-rounded-2xl tw-h-[100%] '>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className=''><span className='tw-font-bold tw-mt-3 tw-text-xl  tw-text-[#069fce]'>FAUCONE</span> <br /> <span className='tw-text-xl tw-font-PuviMedium tw-font-bold'>BUSINESS</span></p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>{add3Dots("Faucone Advertising is a representat¡on of a 36o-degree marketing company which provides advertising and PR services. We have been able to create a network of the greatest media businesses of all sorts, allowing us to provide the best service at competitive costs to brands both locally and globally")}</p>

                        <button className='tw-flex tw-my-14 tw-bg-white tw-mx-auto  tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Explore</button>
                    </section>
                    <section className='tw-shadow-xl tw-bg-[#f9ecf2] tw-py-10 tw-px-8   tw-rounded-2xl tw-h-[100%] '>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className=''><span className='tw-font-bold tw-mt-3 tw-text-xl  tw-text-[#069fce]'>FAUCONE</span> <br /> <span className='tw-text-xl tw-font-PuviMedium tw-font-bold'>BUSINESS</span></p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>{add3Dots("Faucone Office Space is the leading workspace provider. We've built an unparalleled network of office globally")}</p>

                        <button className='tw-flex tw-my-14 tw-bg-white tw-mx-auto  tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Explore</button>
                    </section>
                    <section className='tw-shadow-xl tw-bg-[#e6e6ff] tw-py-10 tw-px-8   tw-rounded-2xl tw-h-[100%] '>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className=''><span className='tw-font-bold tw-mt-3 tw-text-xl  tw-text-[#069fce]'>FAUCONE</span> <br /> <span className='tw-text-xl tw-font-PuviMedium tw-font-bold'>BUSINESS</span></p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>{add3Dots("Faucone Interior design provides the best interior solution to help you stand out, win customers and manage your brand")}</p>

                        <button className='tw-flex tw-my-14 tw-bg-white tw-mx-auto  tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Explore</button>
                    </section>
                    <section className='tw-shadow-xl tw-bg-[#f2d9d9] tw-py-10 tw-px-8   tw-rounded-2xl tw-h-[100%] '>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className=''><span className='tw-font-bold tw-mt-3 tw-text-xl  tw-text-[#069fce]'>FAUCONE</span> <br /> <span className='tw-text-xl tw-font-PuviMedium tw-font-bold'>BUSINESS</span></p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>{add3Dots("Faucone prints is the one stop shop solution for all your Customized printing Needs. We deliver high-quality print services and ship across globally")}</p>

                        <button className='tw-flex tw-my-14 tw-bg-white tw-mx-auto  tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Explore</button>
                    </section>
                    <section className='tw-shadow-xl tw-bg-[#e6ffee] tw-py-10 tw-px-8   tw-rounded-2xl tw-h-[100%] '>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className=''><span className='tw-font-bold tw-mt-3 tw-text-xl  tw-text-[#069fce]'>FAUCONE</span> <br /> <span className='tw-text-xl tw-font-PuviMedium tw-font-bold'>BUSINESS</span></p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>{add3Dots("Faucone Accounting offers a full range of services including accounting, financial,compliance, and IT audits, licenses, financial management, and audits")}</p>

                        <button className='tw-flex tw-my-14 tw-bg-white tw-mx-auto  tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Explore</button>
                    </section>
                    <section className='tw-shadow-xl tw-bg-[#e6e6ff] tw-py-10 tw-px-8   tw-rounded-2xl tw-h-[100%] '>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className=''><span className='tw-font-bold tw-mt-3 tw-text-xl  tw-text-[#069fce]'>FAUCONE</span> <br /> <span className='tw-text-xl tw-font-PuviMedium tw-font-bold'>BUSINESS</span></p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>{add3Dots("Faucone Legal provide complete legal solutions for corporates like legal drafting, cyber laws, labour law, corporate law, industrial dispute, commercial disputes, etc")}</p>

                        <button className='tw-flex tw-my-14 tw-bg-white tw-mx-auto  tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Explore</button>
                    </section>
                    <section className='tw-shadow-xl tw-bg-[#d6e8ff] tw-py-10 tw-px-8   tw-rounded-2xl tw-h-[100%] '>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className=''><span className='tw-font-bold tw-mt-3 tw-text-xl  tw-text-[#069fce]'>FAUCONE</span> <br /> <span className='tw-text-xl tw-font-PuviMedium tw-font-bold'>BUSINESS</span></p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>{add3Dots("Faucone supplies provides the complete solution for all business essentials and industrial needs. We are one stop solution for all your office purchase needs. B2B Wholesale Online Shopping Store")}</p>

                        <button className='tw-flex tw-my-14 tw-bg-white tw-mx-auto  tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Explore</button>
                    </section>
                    <section className='tw-shadow-xl tw-bg-[#f5d6d6] tw-py-10 tw-px-8   tw-rounded-2xl tw-h-[100%] '>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className=''><span className='tw-font-bold tw-mt-3 tw-text-xl  tw-text-[#069fce]'>FAUCONE</span> <br /> <span className='tw-text-xl tw-font-PuviMedium tw-font-bold'>BUSINESS</span></p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>{add3Dots("Faucone Academy provides you with high-quality training for Children, College Students, Working Professionals. Acquire the in-Demand Skill With Faucone Academy. Career Guidance & Support. Live Session with Trainers")}</p>

                        <button className='tw-flex tw-my-14 tw-bg-white tw-mx-auto  tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Explore</button>
                    </section>
                    <section className='tw-shadow-xl tw-bg-[#eff2f7] tw-py-10 tw-px-8   tw-rounded-2xl tw-h-[100%] '>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className=''><span className='tw-font-bold tw-mt-3 tw-text-xl  tw-text-[#069fce]'>FAUCONE</span> <br /> <span className='tw-text-xl tw-font-PuviMedium tw-font-bold'>BUSINESS</span></p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>{add3Dots("Faucone Overseas provides complete business, study, and migration solutions  globally. we maintain an engaged and cooperative attitude with leading universities and professionals")}</p>

                        <button className='tw-flex tw-my-14 tw-bg-white tw-mx-auto  tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Explore</button>
                    </section>
                </Carousel>
                {/* </main> */}
            </div>

        </>
    )
}

export default OurBrandServices