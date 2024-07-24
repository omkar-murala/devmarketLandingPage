"use client"
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import 'animate.css';
import { getCalApi } from "@calcom/embed-react";

function Page() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "mock-interviews" });
            cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])


    return (
        <>
            <section>
                <div className='relative w-full h-[100vh] flex flex-col items-center justify-center overflow-x-hidden'>
                    <div>
                        <h1 className='text-white font-bold text-5xl text-center animate__animated animate__backInLeft'>Revolutionize Your IT Outsourcing</h1>
                        <h2 className='text-white font-bold text-2xl text-center p-5 animate__animated animate__backInRight'>Unlock unparalleled efficiency and innovation with DevMarket's Strategic IT Partnerships</h2>
                        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 pt-10 animate__animated animate__backInUp'>
                            <button className='bg-red-500 px-7 py-3 text-white font-semibold'>
                                TRANSFORM Your IT TODAY
                            </button>
                            <button className='bg-red-500 px-7 py-3 text-white font-semibold'>
                                WATCH OUR STORY
                            </button>
                        </div>
                    </div>
                    <div className='absolute z-[-1] opacity-80 w-full h-full'>
                        <video src="https://res.cloudinary.com/dfqrdloq7/video/upload/v1721807364/spzghpptjm4sw2ygci1b.mp4" className='w-full h-full object-cover' autoPlay loop></video>
                    </div>
                </div>
                <div className='relative bg-blue-500 h-[75vh] w-full flex flex-col items-center justify-center px-8 sm:px-2'>
                    <div>
                        <div>
                            <h1 className='font-bold text-slate-700 text-4xl text-center'>The DevMarket Difference</h1>
                            <p className='text-white px-4 sm:px-[10rem] lg:px-[20rem] py-4 text-center'>At DevMarket, we're not just another IT outsourcing company. We're your strategic partner in digital transformation, offering a unique blend of expertise, innovation, and collaboration that sets us apart from the rest.</p>
                        </div>
                        <div className='flex flex-col sm:flex-row items-center justify-center gap-10 pt-10'>
                            <div className='flex flex-col items-center'>
                                <span className='text-white text-4xl font-bold'><CountUp start={0} end={98} duration={2.75} /></span>
                                <span className='text-white text-lg font-semibold'>% Client Satisfaction</span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='text-white text-4xl font-bold'><CountUp start={0} end={500} duration={2.75} /></span>
                                <span className='text-white text-lg font-semibold'>+ Successful Projects</span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='text-white text-4xl font-bold'><CountUp start={0} end={35} duration={2.75} /></span>
                                <span className='text-white text-lg font-semibold'>% Average Cost Saving</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative flex flex-col items-center justify-center w-full h-auto py-10'>
                    <div>
                        <h1 className='text-slate-700 text-center font-bold text-5xl'>
                            Why Partner With DevMarket?
                        </h1>
                        <div className='flex flex-col lg:flex-row items-center justify-center gap-10 pt-10'>
                            <div className='flex flex-col items-center justify-center w-full max-w-xs p-8 h-auto border shadow-md rounded-md shadow-slate-300 hover:scale-105 transition-transform ease-linear'>
                                <span className='text-2xl font-bold pb-4'>True Partnership</span>
                                <p className='text-center'>We don't just work for you, we work with you. Our success is measured by your success.</p>
                            </div>
                            <div className='flex flex-col items-center justify-center w-full max-w-xs p-8 h-auto border shadow-md rounded-md shadow-slate-300 hover:scale-105 transition-transform ease-linear'>
                                <span className='text-2xl font-bold text-center pb-4'>End-to-End Solutions</span>
                                <p className='text-center'>From ideation to implementation, we handle every aspect of your IT projects with expertise.</p>
                            </div>
                            <div className='flex flex-col items-center justify-center w-full max-w-xs p-8 h-auto border shadow-md rounded-md shadow-slate-300 hover:scale-105 transition-transform ease-linear'>
                                <span className='text-2xl font-bold pb-4'>Scalable Growth</span>
                                <p className='text-center'>Our flexible model allows you to scale your IT capabilities without the overhead.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='bg-red-500'>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2011 - present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={""}
                        >
                            <h3 className="vertical-timeline-element-title">Creative Director</h3>
                            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>

                </div> */}
                <div className='bg-blue-900 flex flex-col items-center justify-center gap-10 h-[50vh] w-full'>
                    <div>
                        <h1 className='text-white text-3xl font-bold text-center'>Ready to Elevate Your IT Strategy?</h1>
                    </div>
                    <div>
                        <p className='text-white text-lg text-center'>Experience the power of strategic IT partnership. Let's discuss how we can drive your business forward.</p>
                    </div>
                    <div>
                        <button className='bg-red-500 font-semibold text-white text-center px-4 py-2' data-cal-namespace="mock-interviews"
                            data-cal-link="lets-resource-hzokv0/mock-interviews"
                            data-cal-config='{"layout":"month_view"}'>
                                SCHEDULE NOW

                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page;
