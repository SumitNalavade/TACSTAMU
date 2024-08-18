import React from "react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OfficerCard from "@/components/OfficerCard";

import WhatWeDoPageImage from "../../public/what_we_do_page_image.png";

import ayush_garg_headshot from "../../public/ayush_garg_headshot.png"
import akshay_belhe_headshot from "../../public/akshay_belhe_headshot.png"
import kayley_vu_headshot from "../../public/kayley_vu_headshot.png"
import aditya_nambi_headshot from "../../public/adi_nambi_headshot.png";
import montgomery_bohde_headshot from "../../public/montgomery_bohde_headshot.png";
import sumit_nalavade_headshot from "../../public/sumit_nalavade_headshot.png";
import keshari_rijal_headshot from "../../public/keshari_rijal_headshot.png";
import sid_das_headshot from "../../public/sid_das_headshot.png";
import aarya_patel_headshot from "../../public/aarya_patel_headshot.png";
import sanjana_pasumarthi_headshot from "../../public/sanjana_pasumarthi_headshot.png";
import aashka_dasgupta_headshot from "../../public/aashka_dasgupta_headshot.jpg"

const Officers = [
    {
        name: "Aayush Garg",
        title: "President",
        linkedinLink: "https://www.linkedin.com/in/aayushg1414/",
        email: "aayushg1414@tamu.edu",
        photo: ayush_garg_headshot
    },
    {
        name: "Akshay Belhe",
        title: "Treasurer",
        linkedinLink: "https://www.linkedin.com/in/akshaybelhe/",
        email: "abelhe8900@tamu.edu",
        photo: akshay_belhe_headshot
    },
    {
        name: "Kayley Vu",
        title: "Creative Director",
        linkedinLink: "https://www.linkedin.com/in/kayley-vu/",
        email: "kayley_vu@tamu.edu",
        photo: kayley_vu_headshot
    },
    {
        name: "Aditya Nambi",
        title: "Outreach + Logistics Lead",
        linkedinLink: "https://www.linkedin.com/in/adityanambi/",
        email: "anambi@tamu.edu",
        photo: aditya_nambi_headshot
    },
    {
        name: "Montgomery Bohde",
        title: "Tech Lead",
        linkedinLink: "https://www.linkedin.com/in/montgomery-bohde/",
        email: "mbohde@tamu.edu",
        photo: montgomery_bohde_headshot
    },
    {
        name: "Sumit Nalavade",
        title: "Tech Officer",
        linkedinLink: "https://www.linkedin.com/in/sumit-nalavade/",
        email: "sumit.nalavade@tamu.edu",
        photo: sumit_nalavade_headshot
    },
    {
        name: "Keshari Rijal",
        title: "Marketing Officer",
        linkedinLink: "https://www.linkedin.com/in/keshari-rijal/",
        email: "kr66562@tamu.edu",
        photo: keshari_rijal_headshot
    },
    {
        name: "Sid Das",
        title: "Outreach + Logistics Officer",
        linkedinLink: "https://www.linkedin.com/in/siddharthadas5",
        email: "sdas05@tamu.edu",
        photo: sid_das_headshot
    },
    {
        name: "Aarya Patel",
        title: "Outreach + Logistics Officer",
        linkedinLink: "https://www.linkedin.com/in/aaryaapatel/",
        email: "aarya.patel@tamu.edu",
        photo: aarya_patel_headshot
    },
    {
        name: "Aashka Dasgupta",
        title: "Outreach + Logistics Officer",
        linkedinLink: "https://www.linkedin.com/in/aashkadasgupta/",
        email: "aashka.dasgupta@tamu.edu",
        photo: aashka_dasgupta_headshot
    },
    {
        name: "Sanjana Pasumarthi",
        title: "Outreach + Logistics Officer",
        email: "sanjana204@tamu.edu",
        photo: sanjana_pasumarthi_headshot
    }
]

const AboutPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar selectedPage="about" />

            <div className="flex-grow pt-28 max-w-7xl mx-auto px-4">
                <div className="flex">
                    <div className="flex-1 p-4 space-y-8">
                        <h2 className="text-4xl font-bold">What We Do</h2>

                        <p className="text-gray-500">
                            As the student chapter of ACM, Texas A&M Computing Society encourages the exploration of computing technology, while also provide guidance in navigating the field of computer science.
                        </p>

                        <p className="text-gray-500">
                            We host industry professionals and academic experts as guest speakers throughout the semester, as well as executing our own workshops and events to cover necessary skills to navigate the industry. Each meeting provides unique opportunities for networking and practical learning, and our social events foster a supportive and close community.
                        </p>

                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/company/tamucs/" target="_blank" className="bg-primary-light border-2 border-b-4 border-r-4 border-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-primary">More about us on LinkedIn</a>

                            <Link href="mailto:tacs-officers@lists.tamu.edu" className="bg-white border-2 border-b-4 border-r-4 border-primary text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-light hover:text-white">Shoot us an email</Link>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="mx-auto mb-4">
                            <Image src={WhatWeDoPageImage} alt={`join page image`} layout="contain" objectFit="contain" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-12 mb-4">
                    <h2 className="text-4xl font-bold">Officers</h2>
                </div>

                <div className="flex">
                    <div className="flex-1 ml-16"> {/* Adjust ml-16 as needed to make space for the fixed card */}
                        <div className="grid grid-cols-3 gap-8 p-4">
                            {Officers.map((officer, index) => (
                                <div key={index}>
                                    <OfficerCard officer={officer} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default AboutPage;
