import { Atom, Palette, Briefcase, Users, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Categories() {
  const categories = [
    { name: "Science & Technology", count: "12,540+", icon: <Atom className="h-6 w-6 text-[#4F46E5]" />, bg: "bg-indigo-50" },
    { name: "Arts & Humanities", count: "8,230+", icon: <Palette className="h-6 w-6 text-[#EA580C]" />, bg: "bg-orange-50" },
    { name: "Business & Economics", count: "9,105+", icon: <Briefcase className="h-6 w-6 text-[#16A34A]" />, bg: "bg-green-50" },
    { name: "Social Sciences", count: "7,890+", icon: <Users className="h-6 w-6 text-[#9333EA]" />, bg: "bg-purple-50" },
    { name: "Engineering", count: "10,330+", icon: <Cpu className="h-6 w-6 text-[#2563EB]" />, bg: "bg-blue-50" },
  ];

  return (
    <section className="py-8 relative z-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Continue Reading (1/3 width) */}
        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold text-foreground mb-6">Continue Reading</h2>
          
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-all">
            {/* Book Cover */}
            {/* <div className="w-20 h-28 bg-gray-900 rounded-lg shrink-0 flex items-center justify-center text-white text-[10px] text-center p-2 shadow-inner">
              {/* ছবি অ্যাড করলে এখানে img ট্যাগ বসাবে */}
              {/* Deep Learning Book */}
            {/* </div> */} 
              
              {/* Book Cover */}
<div className="relative w-20 h-28 shrink-0 shadow-md rounded-lg overflow-hidden bg-gray-100">
  <Image 
    src="/images/b1.jpg" // তোমার ইমেজের পাথ এখানে দাও
    alt="Deep Learning Book"
    fill
    className="object-cover"
    priority
  />
</div>

            {/* Reading Info */}
            <div className="flex-grow">
              <h3 className="font-bold text-foreground text-[15px] mb-1 leading-tight">Deep Learning</h3>
              <p className="text-xs text-muted-foreground mb-4">Ian Goodfellow</p>
              
              {/* Progress Bar */}
              <div className="mb-2">
                <div className="flex justify-between text-[10px] font-bold text-muted-foreground mb-1.5">
                  <span>60% Complete</span>
                  <span>60%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-[#6A1B29] h-1.5 rounded-full" style={{ width: "60%" }}></div>
                </div>
              </div>
              
              <Button className="w-full bg-[#6A1B29] hover:bg-[#52131f] text-white rounded-lg h-8 text-xs font-semibold mt-2">
                Resume Reading
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Browse by Categories (2/3 width) */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-foreground mb-6">Browse by Categories</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((cat, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                {/* Icon Background */}
                <div className={`w-12 h-12 rounded-full ${cat.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <h4 className="font-bold text-foreground text-[13px] leading-snug mb-1">{cat.name}</h4>
                <p className="text-[11px] text-muted-foreground font-medium">{cat.count}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}