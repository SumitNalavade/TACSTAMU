import React from "react";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaDiscord } from "react-icons/fa";

import JoinPageImage from "../../public/join_page_image.png";

const JoinPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar selectedPage="join" />

            <div className="flex-grow pt-28 max-w-7xl mx-auto px-4">
                <div className="flex">
                    <div className="flex-1 p-4 space-y-8">
                        <h2 className="text-4xl font-bold">How To Join</h2>

                        <p className="text-gray-500">
                            Texas A&M Computing Society does not have any membership fees or applications! All we ask is that members join our Discord and follow our socials to stay updated on our events.
                        </p>

                        <p className="text-gray-500">
                            Students from all majors are welcome :)
                        </p>

                        <div>
                            <a href="https://discord.gg/CBWn8mKFvx" target="_blank" className="flex items-center gap-x-2 max-w-48 bg-primary-light border-2 border-b-4 border-r-4 border-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-primary">
                                <FaDiscord className='text-xl mt-0.5' />
                                <p>Join our Discord</p>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="mx-auto mb-4">
                            <Image src={JoinPageImage} alt={`join page image`} layout="contain" objectFit="contain" />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default JoinPage;
