import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturedBooks from "@/components/FeaturedBooks";
import Categories from "@/components/Categories";
import StatsRibbon from "@/components/StatsRibbon";
import EventsAndRecommended from "@/components/EventsAndRecommended";
import Footer from "@/components/Footer"; // Footer ইম্পোর্ট করলাম
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff0f1]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Stats />
        <FeaturedBooks />
        <Categories />
        <StatsRibbon />
        <EventsAndRecommended />
        <Testimonials />
      </div>
      
      <Footer /> {/* সবার নিচে Footer বসালাম */}
    </main>
  );
}