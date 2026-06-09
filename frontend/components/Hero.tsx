import { Search, Book } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Hero() {
  return (
    <section className="relative pt-10 pb-12 lg:pt-16 lg:pb-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="flex flex-col z-10">
          <p className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-4">
            Welcome to Bangladesh University E-Library
          </p>
          
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Knowledge <br /> Unlocks. <br />
            <span className="text-[#6A1B29] dark:text-primary">Future Empowered.</span>
          </h1>
          
          <p className="text-base text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Explore thousands of books, journals, research papers and more — anytime, anywhere.
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-xl flex items-center bg-background border shadow-sm rounded-full p-1.5 mb-8">
            <Input 
              type="text" 
              placeholder="Search by title, author, subject or keyword..." 
              className="border-0 shadow-none focus-visible:ring-0 text-base px-4 bg-transparent w-full"
            />
            <Button className="rounded-full bg-[#6A1B29] hover:bg-[#52131f] dark:bg-primary dark:hover:bg-primary/90 w-12 h-12 flex items-center justify-center shrink-0 p-0 text-white dark:text-primary-foreground">
              <Search className="h-5 w-5 text-white dark:text-inherit" />
            </Button>
          </div>

          {/* Popular Tags - ছবি অনুযায়ী আপডেট করা স্টাইল */}
          <div className="flex flex-wrap items-center gap-2 text-[13px]">
            <span className="text-muted-foreground font-bold  mr-1">Popular:</span>
            {["Machine Learning", "Data Science", "Psychology", "Business"].map((tag) => (
              <span 
                key={tag} 
                className="px-4 py-1.5 bg-white/80 dark:bg-card/80 border border-white/40 dark:border-border/40 rounded-full text-muted-foreground font-semibold hover:bg-[#6A1B29] hover:text-white dark:hover:bg-primary dark:hover:text-primary-foreground transition-all cursor-pointer shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Visuals */}
        <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center">
          <div className="absolute top-10 right-4 lg:right-0 bg-background/90 backdrop-blur-md border shadow-2xl rounded-2xl p-5 flex flex-col items-center justify-center z-20 animate-bounce" style={{ animationDuration: '4s' }}>
            <div className="w-12 h-12 bg-[#f8eef0] dark:bg-muted rounded-lg flex items-center justify-center mb-2.5">
              <Book className="h-7 w-7 text-[#6A1B29] dark:text-primary" />
            </div>
            <h3 className="font-extrabold text-2xl leading-none mb-1 text-foreground">250K+</h3>
            <p className="text-[11px] text-muted-foreground font-semibold uppercase text-center tracking-wider">Resources<br/>at your fingertips</p>
          </div>

          <div className="relative w-full h-full scale-110 lg:scale-125 translate-y-10">
            <Image 
              src="/images/hero-books.png" 
              alt="BU E-Library"
              fill 
              priority 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              className="object-contain object-center" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}