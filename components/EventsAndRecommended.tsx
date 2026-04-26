import Link from "next/link";
import Image from "next/image"; // এটি অবশ্যই ইম্পোর্ট করবে
import { Star } from "lucide-react";

export default function EventsAndRecommended() {
  const events = [
    {
      month: "MAY",
      day: "24",
      title: "Research Methodology Workshop",
      time: "10:00 AM - 01:00 PM",
      location: "Central Library, Seminar Hall",
    },
    {
      month: "MAY",
      day: "31",
      title: "Citation Management with Mendeley",
      time: "02:00 PM - 04:00 PM",
      location: "Online (Zoom)",
    },
    {
      month: "JUN",
      day: "07",
      title: "AI Tools for Academic Research",
      time: "11:00 AM - 01:00 PM",
      location: "Computer Lab 3",
    },
  ];

  const recommendedBooks = [
    {
      title: "Artificial Intelligence: A Modern Approach",
      author: "Stuart Russell",
      rating: 4.8,
      format: "PDF",
      image: "/images/b1.jpg",
    },
    {
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      rating: 4.9,
      format: "EPUB",
      image: "/images/b5.jpg",
    },
    {
      title: "Clean Code: Agile Software Craftsmanship",
      author: "Robert C. Martin",
      rating: 4.7,
      format: "PDF",
      image: "/images/b3.jpg",
    },
  ];

  return (
    <section className="py-8 relative z-20">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8 h-full">
        
        {/* Left Column: Upcoming Events */}
        <div className="xl:col-span-2 bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">Upcoming Events</h2>
            <Link href="/events" className="text-sm font-medium text-muted-foreground hover:text-[#6A1B29] transition-colors flex items-center gap-1">
              View all <span className="text-[10px]">›</span>
            </Link>
          </div>
          
          <div className="flex flex-col gap-3 flex-grow justify-center">
            {events.map((event, index) => (
              <div 
                key={index} 
                className="flex items-center gap-5 p-3 sm:p-4 rounded-xl border border-transparent hover:border-gray-100 hover:bg-gray-50 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#fcf3f4] flex flex-col items-center justify-center shrink-0 group-hover:bg-[#f6e4e7] transition-colors duration-300">
                  <span className="text-[10px] font-bold text-[#6A1B29] leading-none mb-1">{event.month}</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-[#6A1B29] leading-none">{event.day}</span>
                </div>
                
                <div className="flex flex-col flex-grow">
                  <h3 className="font-bold text-foreground text-[15px] sm:text-[16px] leading-snug mb-1 sm:mb-1.5 group-hover:text-[#6A1B29] transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-[11px] sm:text-[12px] text-muted-foreground/80 font-medium">
                    <span>{event.time}</span>
                    <span className="hidden sm:inline text-gray-300">•</span>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Recommended For You */}
        <div className="xl:col-span-1 bg-[#4a0e1c] rounded-2xl p-6 lg:p-8 shadow-lg flex flex-col h-full border border-[#3b0918]">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-bold text-white">Recommended For You</h2>
            <Link href="/recommended" className="text-sm font-medium text-white/80 hover:text-white transition-colors flex items-center gap-1">
              View all <span className="text-[10px]">›</span>
            </Link>
          </div>
          
          <div className="flex flex-col gap-6 flex-grow justify-center">
            {recommendedBooks.map((book, index) => (
              <div key={index} className="flex gap-4 items-center cursor-pointer group">
                
                {/* ছবি দেখানোর জন্য এখানে পরিবর্তন করা হয়েছে */}
                <div className="w-16 h-24 bg-[#2b0810] rounded-md shrink-0 shadow-md relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <Image 
                    src={book.image} 
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-grow flex justify-between items-start gap-2">
                  <div className="flex flex-col">
                    <h3 className="font-bold text-white text-[14px] leading-tight mb-1.5 line-clamp-2">{book.title}</h3>
                    <p className="text-[11px] text-white/60">{book.author}</p>
                  </div>
                  
                  <div className="flex flex-col items-end gap-3 shrink-0">
                    <span className="text-[9px] font-extrabold px-2 py-1 bg-white text-[#4a0e1c] rounded-full uppercase tracking-wider shadow-sm leading-none">
                      {book.format}
                    </span>
                    
                    <div className="flex items-center gap-1">
                      <div className="flex gap-[1px]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-2.5 w-2.5 ${i < Math.floor(book.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-white/20 text-white/20'}`} />
                        ))}
                      </div>
                      <span className="text-[10px] text-white/90 font-bold ml-1 leading-none">{book.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}