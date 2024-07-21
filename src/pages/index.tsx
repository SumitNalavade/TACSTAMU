import Navbar from "@/components/Navbar";
import Image from 'next/image';
import StarIcon from '../../public/star_icon.png';
import CursorIcon from '../../public/cursor_icon.png';
import MicrophoneIcon from "../../public/microphone_icon.png";
import SocialIcon from "../../public/social_icon.png";
import WorkshopsIcon from "../../public/workshops_icon.png";

import ImageCarousel from "@/components/ImageCarousel";
import SponsorCarousel from "@/components/SponsorCarousel";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />

      <div className="container max-w-6xl mx-auto text-center py-12 z-10">
        <div className="text-6xl font-bold text-primary">
          <h1 className="mb-4">Texas A&M</h1>
          <h1 className="mb-4">Computing Society</h1>
        </div>

        <div className="relative">
          <Image src={StarIcon} alt="Star Icon" className="absolute left-10" width={60} height={50} />
          <Image src={StarIcon} alt="Star Icon" className="absolute bottom-10 right-10" width={60} height={50} />
          <Image src={StarIcon} alt="Star Icon" className="absolute bottom-0 left-20" width={60} height={50} />
          <Image src={CursorIcon} alt="Cursor Icon" className="absolute top-7 right-20" width={100} height={50} />
        </div>

        <h2 className="text-2xl max-w-lg text-wrap text-gray-600 text-center mx-auto z-10">The Official Student Chapter of ACM @ Texas A&M University</h2>

        <div className="flex justify-center gap-x-4 mt-6">
          <a href="#" className="bg-white border-2 border-b-4 border-r-4 border-primary text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-light hover:text-white">Upcoming Events</a>
          <a href="#" className="bg-primary-light border-2 border-b-4 border-r-4 border-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-primary">Get in touch!</a>
        </div>
      </div>

      <div className="container mx-auto mt-8">
        <ImageCarousel />
      </div>

      <div className="container mx-auto mt-8">
        <SponsorCarousel />
      </div>

      <div className="flex justify-center mt-12">
        <h2 className="text-4xl font-bold">What We Do</h2>
      </div>

      <div className="mt-12 flex justify-center gap-x-12 px-4">
        <EventCard icon={MicrophoneIcon} title="Tech Talks" description="See industry speakers talk about what’s cool in the CS world." />
        <EventCard icon={SocialIcon} title="Socials" description="Get to know your peers and connect with like-minded people while having fun!" />
        <EventCard icon={WorkshopsIcon} title="Workshops" description="Learn industry-relevant skills from experienced students and company speakers." />
      </div>

      <div className="flex justify-center mt-8 mb-14">
        <a href="#" className="bg-primary-light border-2 border-b-4 border-r-4 border-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-primary">See our past events</a>
      </div>

      <Footer />
    </>
  )
}

export default Home;