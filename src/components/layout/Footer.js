import React from 'react'

import title from '../../img/title.png'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { PiInstagramLogoThin } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";


const Footer = () => {

    const currentYear = new Date().getFullYear();


    return (
        <>


            <main className='tw-bg-[#f1f3f4] tw-mt-20 tw-pt-16'>
                {/* follow us */}
                <section className='tw-flex tw-items-center tw-gap-x-10 tw-mx-40 tw-border-b-2 tw-pb-5 tw-border-[#e0e0e0]'>
                    <p className='tw-font-GoogleSansMedium tw-font-medium tw-text-gray-700 tw-text-2xl tw-tracking-wide'>Follow Us </p>
                    <div className='tw-flex tw-items-center tw-gap-x-7'>

                        <a href='https://www.facebook.com/faucone' target="_blank" className='tw-text-gray-500'><p><FaFacebookSquare className='tw-text-2xl' /></p></a>
                        <a href='https://www.youtube.com/@faucone8395' target="_blank" className='tw-text-gray-500'><p><FaYoutube className='tw-text-3xl' /></p></a>
                        <a href='https://www.linkedin.com/company/faucone-business-solutions-pvt-ltd/' target="_blank" className='tw-text-gray-500'><p><FaXTwitter className='tw-text-2xl' /></p></a>
                        <a href='#' target="_blank" className='tw-text-gray-500'><p><FaLinkedin className='tw-text-2xl' /></p></a>
                        <a href='https://www.instagram.com/fauconegroup/' target="_blank" className='tw-text-gray-500'><p><PiInstagramLogoThin className='tw-text-3xl' /></p></a>

                    </div>
                </section>


                {/* main content */}
                <section className='tw-mx-40 tw-grid tw-grid-cols-4  tw-mt-10 '>

                    <div className=''>
                        <p className='tw-text-[#202124] tw-text-xl tw-font-GoogleSansMedium '>Company</p>
                        <div className='tw-mt-3 tw-font-medium tw-font-GoogleSansMedium  tw-text-lg'>
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>About us</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Press</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Events</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Newsroom</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Careers</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Insights</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Branding Assets</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Client Briefing Program</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Training & Certification</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Faucone Foundation</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Faucone for Startups</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Sustainability</a> <br />
                        </div>
                    </div>


                    <div className=''>
                        <p className='tw-text-[#202124] tw-text-xl tw-font-GoogleSansMedium '>Become a Partner</p>
                        <div className='tw-mt-3 tw-font-medium tw-font-GoogleSansMedium  tw-text-lg'>
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Agencies</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Freelancers</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Vendors</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Franchise</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Affiliates</a> <br />
                        </div>

                        <p className='tw-text-[#202124] tw-text-xl tw-mt-10 tw-font-GoogleSansMedium '>Support</p>
                        <div className='tw-mt-3 tw-font-medium tw-font-GoogleSansMedium  tw-text-lg'>
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Knowledge base</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Help center</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Brand Accesment</a> <br />
                        </div>

                        <p className='tw-text-[#202124] tw-text-xl tw-mt-10 tw-font-GoogleSansMedium '>Contact us</p>
                        <div className='tw-mt-3 tw-font-medium tw-font-GoogleSansMedium  tw-text-lg'>
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>sales@faucone.com</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>support@faucone.com</a> <br />
                        </div>
                    </div>


                    <div className=''>
                        <p className='tw-text-[#202124] tw-text-xl tw-font-GoogleSansMedium '>Services</p>
                        <div className='tw-mt-3 tw-font-medium tw-font-GoogleSansMedium  tw-text-lg'>
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Startup Support System</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Multi-Dimensional Branding and Marketing</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>360 degree Advertising Solutions</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Brand Transformation services</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Brand Guidelines Strategy</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Exclusive Sales Closure Strategy</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Ad Shoot Strategy Management</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Scaling Technology for Development</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Interlinking Business Concept</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Innovative Entrepreneurship Process</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Implementing a Quality Business Process</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Revenue IOX Strategy</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Market Research & Analysis Strategy</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Startup Investor Connect</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Developing a Hybrid Work Model</a> <br />

                        </div>
                    </div>

                    <div className='tw-ml-16'>
                        <p className='tw-text-[#202124] tw-text-xl tw-font-GoogleSansMedium '>Solutions</p>
                        <div className='tw-mt-3 tw-font-medium tw-font-GoogleSansMedium  tw-text-lg'>
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Faucone Business</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Faucone Digital</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Faucone Technologies</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Faucone Solutions</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Faucone Space</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Faucone Finance</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Faucone Consultancy</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Faucone Studios</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Faucone Advertising</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Faucone Design</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Faucone Prints</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Faucone Accounting</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Faucone Legal</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Faucone Supplies</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Faucone Academy</a> <br />
                            <a href='/' className='tw-py-1 tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-black'>Faucone Overseas</a> <br />
                        </div>
                    </div>

                </section>

                {/* footer */}
                <section className='tw-flex tw-items-center tw-justify-between tw-mx-40 tw-border-t-2 tw-mt-20 tw-py-10 tw-border-[#e0e0e0]'>

                    <div className='tw-flex tw-items-center tw-text-gray-600 tw-gap-x-7'>
                        <img src={title} alt="" />
                        <p>About Faucone</p>
                        <p>Faucone services</p>
                        <p>Policy</p>
                        <p>Privacy</p>
                    </div>

                    <div className='tw-flex tw-items-center tw-text-gray-600 tw-gap-x-7'>
                        <div className='tw-flex tw-items-center tw-gap-x-3'>
                            <BsQuestionCircleFill className='tw-text-xl' />
                            <p>Help</p>
                        </div>

                        <div className='tw-flex tw-items-center tw-gap-x-1'>
                            <p>FAQ's</p>
                            <IoIosArrowDown />

                        </div>
                    </div>
                </section>

                {/* last line */}
                <section className='tw-bg-[#7C7C7C] tw-text-sm tw-text-white tw-text-center tw-py-5'>
                    &copy; {currentYear} Faucone. All Rights Reserved.
                </section>
            </main>



        </>
    )
}

export default Footer