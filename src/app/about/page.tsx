"use client"
import Image from 'next/image';
// import React from 'react';
import React, { useState } from 'react';


type Feature = {
    src: string;
    title: string;
    description: string;
};


const AboutUs: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const features = [
        {
            src: '/images/feature1.png',
            title: 'Feature One',
            description: 'Discover our first amazing feature that helps you achieve your goals.',
        },
        {
            src: '/images/feature2.png',
            title: 'Feature Two',
            description: 'Explore our second feature that enhances your productivity.',
        },
        {
            src: '/images/feature3.png',
            title: 'Feature Three',
            description: 'Take advantage of our third feature for better results.',
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % features.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + features.length) % features.length);
    };

    return (
        <div className="h-100vh bg-gradient-to-r from-blue-100 to-blue-50 text-gray-800">
            <main className="py-8">
                <section id="about" className="py-12">
                    <div className="text-center">
                        <h2 className="text-4xl font-semibold text-blue-600">DevMarket! 🤔</h2>
                        <p className="mt-4 text-lg">
                            DevMarket is your go-to marketplace for cutting-edge software solutions. We connect developers with buyers looking for innovative tools to enhance their projects.
                        </p>
                        <div className="mt-6">
                            <Image src="https://plus.unsplash.com/premium_photo-1661546425835-ec64f90a3875?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjB0ZWNobm9sb2d5JTIwbGFwdG9wJTIwd2l0aCUyMHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzJTIwdGVhbSUyMHdpdGglMjBsaWdodCUyMGNvbG91ciUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" alt="3D Elements" width={500} height={300} className="mx-auto" />
                        </div>
                    </div>
                </section>

                <section id="how-it-works" className="py-12 bg-white shadow-md rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
                <div className="relative z-10 text-center">
                    <h2 className="text-4xl font-semibold text-blue-600">How it Works</h2>
                    <p className="mt-6 text-lg">
                    Discover how DevMarket works and how you can benefit from our platform. We make it easy for developers to showcase their products and for buyers to find the right tools for their needs.
                    </p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-6xl px-5">
                    <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform">
                        <h3 className="text-2xl font-semibold text-blue-600">Sign Up</h3>
                        <p className="mt-2">Create an account to start using our platform.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform">
                        <h3 className="text-2xl font-semibold text-blue-600">Browse</h3>
                        <p className="mt-2">Explore a wide range of software solutions.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform">
                        <h3 className="text-2xl font-semibold text-blue-600">Purchase</h3>
                        <p className="mt-2">Buy tools that fit your needs or list your products.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform">
                        <h3 className="text-2xl font-semibold text-blue-600">Connect</h3>
                        <p className="mt-2">Engage with developers or buyers directly.</p>
                    </div>
                    </div>
                </div>
                </section>

                <section id="mission-goals" className="py-12 bg-gradient-to-r from-blue-100 to-blue-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-5xl font-extrabold text-blue-700 text-center">Our Mission & Goals</h2>
                        <div className="mt-8 text-center">
                            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                                Our mission is to empower developers and buyers by providing a platform that simplifies software acquisition and distribution. We aim to foster a thriving ecosystem where innovation and collaboration thrive.
                            </p>
                            <h3 className="mt-10 text-3xl font-semibold text-blue-600">Our Goals</h3>
                            <ul className="mt-6 space-y-4 text-left mx-auto max-w-xl list-disc pl-6 text-gray-700">
                                <li className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8.5 8.5a1 1 0 01-1.414 0l-4.5-4.5a1 1 0 011.414-1.414L8.5 13.086l7.793-7.793a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span>To be the leading marketplace for software solutions.</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8.5 8.5a1 1 0 01-1.414 0l-4.5-4.5a1 1 0 011.414-1.414L8.5 13.086l7.793-7.793a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span>To continuously innovate and improve our platform.</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8.5 8.5a1 1 0 01-1.414 0l-4.5-4.5a1 1 0 011.414-1.414L8.5 13.086l7.793-7.793a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span>To support developers in showcasing their products effectively.</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8.5 8.5a1 1 0 01-1.414 0l-4.5-4.5a1 1 0 011.414-1.414L8.5 13.086l7.793-7.793a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span>To provide exceptional service and value to our users.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* /feature seaction start / */}
                <section id="features" className="py-12 bg-white shadow-lg rounded-lg">
                    <h2 className="text-4xl font-semibold text-blue-600 text-center">Features</h2>
                    <div className="mt-6 relative">
                        <div className="overflow-hidden">
                            <div
                                className="whitespace-nowrap transition-transform duration-300 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="inline-block w-full p-6"
                                        style={{ minWidth: '100%' }}
                                    >
                                        <div className="text-center">
                                            <Image src={feature.src} alt={feature.title} width={300} height={300} className="mx-auto" />
                                            <h3 className="text-2xl font-semibold mt-4">{feature.title}</h3>
                                            <p className="mt-2">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={prevSlide}
                                className="bg-blue-600 text-white rounded-full p-2 mx-2 hover:bg-blue-700 transition-colors"
                            >
                                &#8592;
                            </button>
                            <button
                                onClick={nextSlide}
                                className="bg-blue-600 text-white rounded-full p-2 mx-2 hover:bg-blue-700 transition-colors"
                            >
                                &#8594;
                            </button>
                        </div>
                    </div>
                </section>
                {/* /feature seaction end / */}
                            <section id="stats" className="py-12">
                                <h2 className="text-4xl font-semibold text-blue-600 text-center">Performance Highlights</h2>
                                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                    <div className="stat p-6 bg-white shadow-md rounded-lg">
                                        <div className="stat-icon mb-2">
                                            <Image src="/images/users-icon.png" alt="Users" width={100} height={100} className="mx-auto" />
                                        </div>
                                        <h3 id="userCount" className="text-3xl font-bold">10,000+</h3>
                                        <p className="text-lg">Users</p>
                                    </div>
                                    <div className="stat p-6 bg-white shadow-md rounded-lg">
                                        <div className="stat-icon mb-2">
                                            <Image src="/images/transactions-icon.png" alt="Transactions" width={100} height={100} className="mx-auto" />
                                        </div>
                                        <h3 id="transactionCount" className="text-3xl font-bold">50,000+</h3>
                                        <p className="text-lg">Transactions</p>
                                    </div>
                                    <div className="stat p-6 bg-white shadow-md rounded-lg">
                                        <div className="stat-icon mb-2">
                                            <Image src="/images/software-icon.png" alt="Software" width={100} height={100} className="mx-auto" />
                                        </div>
                                        <h3 id="softwareCount" className="text-3xl font-bold">5,000+</h3>
                                        <p className="text-lg">Software Products</p>
                                    </div>
                                </div>
                            </section>

                            <section id="team" className="py-12 bg-white shadow-md rounded-lg">
                                <h2 className="text-4xl font-semibold text-blue-600 text-center">Meet Our Team</h2>
                                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                                    <div className="team-member p-6">
                                        <div className="team-avatar mb-4">
                                            <Image src="/images/john-doe.png" alt="John Doe" width={200} height={200} className="mx-auto rounded-full" />
                                        </div>
                                        <h3 className="text-2xl font-semibold">Anand</h3>
                                        <p className="text-lg">CEO</p>
                                    </div>
                                    <div className="team-member p-6">
                                        <div className="team-avatar mb-4">
                                            <Image src="/images/jane-smith.png" alt="Jane Smith" width={200} height={200} className="mx-auto rounded-full" />
                                        </div>
                                        <h3 className="text-2xl font-semibold">Anand</h3>
                                        <p className="text-lg">CTO</p>
                                    </div>
                                    <div className="team-member p-6">
                                        <div className="team-avatar mb-4">
                                            <Image src="/images/emma-jones.png" alt="Emma Jones" width={200} height={200} className="mx-auto rounded-full" />
                                        </div>
                                        <h3 className="text-2xl font-semibold">Anand</h3>
                                        <p className="text-lg">Lead Developer</p>
                                    </div>
                                    <div className="team-member p-6">
                                        <div className="team-avatar mb-4">
                                            <Image src="/images/michael-brown.png" alt="Michael Brown" width={200} height={200} className="mx-auto rounded-full" />
                                        </div>
                                        <h3 className="text-2xl font-semibold">Anand</h3>
                                        <p className="text-lg">Head of Marketing</p>
                                    </div>
                                </div>
                            </section>

                            <section id="testimonials" className="py-12">
                                <h2 className="text-4xl font-semibold text-blue-600 text-center">Testimonials</h2>
                                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="testimonial p-6 bg-white shadow-md rounded-lg">
                                        <p className="text-lg italic">
                                            &quot;DevMarket has transformed the way we acquire software. It&apos;s a game-changer for our development process!&quot;
                                        </p>
                                        <p className="mt-4 font-semibold text-right">
                                            - Anand, Tech Innovators Inc.
                                        </p>
                                    </div>
                                    <div className="testimonial p-6 bg-white shadow-md rounded-lg">
                                        <p className="text-lg italic">
                                            &quot;An excellent platform for discovering high-quality tools. DevMarket is our go-to source for software solutions.&quot;
                                        </p>
                                        <p className="mt-4 font-semibold text-right">
                                            - Anand, Creative Solutions Ltd.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section id="blog" className="py-12 bg-blue-50">
                                <h2 className="text-5xl font-extrabold text-blue-800 text-center mb-12">BLOGS</h2>
                                <div className="relative max-w-6xl mx-auto px-4">
                                    <div className="absolute inset-0 bg-blue-200 opacity-20 rounded-lg"></div>
                                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                            <div className="relative">
                                                <Image src="/images/blog1.jpg" alt="Blog Post 1" width={600} height={400} className="w-full h-60 object-cover" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                                            </div>
                                            <div className="p-6 relative z-10">
                                                <h3 className="text-3xl font-semibold text-gray-800 mb-2">Latest Trends in Software Development</h3>
                                                <p className="text-lg text-gray-600 mb-4">Stay updated with the latest trends and innovations in software development. Read our latest blog post to learn more.</p>
                                                <a href="#" className="inline-block text-blue-600 font-semibold border-b-2 border-blue-600 hover:border-blue-800 transition-colors">Read more</a>
                                            </div>
                                        </div>
                                        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                            <div className="relative">
                                                <Image src="/images/blog2.jpg" alt="Blog Post 2" width={600} height={400} className="w-full h-60 object-cover" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                                            </div>
                                            <div className="p-6 relative z-10">
                                                <h3 className="text-3xl font-semibold text-gray-800 mb-2">Top Tools for Developers in 2023</h3>
                                                <p className="text-lg text-gray-600 mb-4">Discover the top tools that developers are using this year. Our blog post highlights the best software solutions for your projects.</p>
                                                <a href="#" className="inline-block text-blue-600 font-semibold border-b-2 border-blue-600 hover:border-blue-800 transition-colors">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="partners" className="py-12 bg-white mb-0">
                                <h2 className="text-4xl font-semibold text-blue-600 text-center">Elite Partner Network</h2>
                                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                                    <div className="partner-logo p-6 bg-white shadow-md rounded-lg">
                                        <Image src="/images/partner1.png" alt="Partner 1" width={200} height={100} className="mx-auto" />
                                    </div>
                                    <div className="partner-logo p-6 bg-white shadow-md rounded-lg">
                                        <Image src="/images/partner2.png" alt="Partner 2" width={200} height={100} className="mx-auto" />
                                    </div>
                                    <div className="partner-logo p-6 bg-white shadow-md rounded-lg">
                                        <Image src="/images/partner3.png" alt="Partner 3" width={200} height={100} className="mx-auto" />
                                    </div>
                                    <div className="partner-logo p-6 bg-white shadow-md rounded-lg">
                                        <Image src="/images/partner4.png" alt="Partner 4" width={200} height={100} className="mx-auto" />
                                    </div>
                                </div>
                            </section>
                        <section id="cta" className="py-10 bg-blue-600 text-white text-center mt-0">
                            <h2 className="text-4xl font-semibold">Ready to Get Started?</h2>
                            <p className="mt-8 text-lg">Join DevMarket today and start discovering amazing software solutions.</p>
                            <a href="#" className="mt-6 inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition">Sign Up Now</a>
                        </section>
            </main>
        </div>
    );
}

export default AboutUs;
