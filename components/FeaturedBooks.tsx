import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function FeaturedBooks() {
  // ডামি বইয়ের ডাটা
  const books = [
    {
      id: 1,
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      image: "/images/b1.jpg", // পরে আসল ছবি দিবে
      badges: ["EPUB", "PDF"],
    },
    {
      id: 2,
      title: "Clean Code",
      author: "Robert C. Martin",
      image: "/images/b2.png",
      badges: ["PDF"],
    },
    {
      id: 3,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      image: "/images/b3.jpg",
      badges: ["Audio", "EPUB"],
    },
    {
      id: 4,
      title: "The Power of Habit",
      author: "Charles Duhigg",
      image: "/images/b4.jpg",
      badges: ["PDF"],
    },
    {
      id: 5,
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      image: "/images/b5.jpg",
      badges: ["EPUB"],
    },
  ];

  return (
    <section className="py-12 relative z-20">
      {/* Header: Title & View All */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-foreground">Featured Books</h2>
        <Link href="/explore" className="text-sm font-semibold text-muted-foreground hover:text-[#6A1B29] transition-colors flex items-center gap-1">
          View all <span>›</span>
        </Link>
      </div>

      {/* Carousel Slider */}
      <div className="relative px-4 sm:px-0">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {books.map((book) => (
              <CarouselItem key={book.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col cursor-pointer group">
                  
                  {/* Book Cover Image Placeholder */}
                  <div className="w-full h-56 bg-gray-100 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center">
                    {/* অরিজিনাল ছবি অ্যাড করা হয়েছে */}
                    <Image src={book.image} alt={book.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>

                  {/* Book Info */}
                  <div className="flex-grow">
                    <h3 className="font-bold text-foreground text-[15px] leading-tight mb-1 line-clamp-2 group-hover:text-[#6A1B29] transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-4">{book.author}</p>
                  </div>

                  {/* Badges (EPUB, PDF) */}
                  <div className="flex items-center gap-2 mt-auto pt-2">
                    {book.badges.map((badge, i) => (
                      <span key={i} className="text-[10px] font-bold px-2 py-1 bg-[#f8eef0] text-[#6A1B29] rounded-md uppercase tracking-wider">
                        {badge}
                      </span>
                    ))}
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Slider Navigation Buttons (ডিজাইনের মতো বাইরে থাকবে) */}
          <div className="hidden sm:block">
            <CarouselPrevious className="-left-12 bg-white border-gray-200 shadow-sm hover:bg-gray-50 hover:text-[#6A1B29]" />
            <CarouselNext className="-right-12 bg-white border-gray-200 shadow-sm hover:bg-gray-50 hover:text-[#6A1B29]" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}