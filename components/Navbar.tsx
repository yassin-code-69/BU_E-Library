import Link from "next/link";
import { Search, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* 1. Logo Area */}
          {/* <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            ডামি লোগো আইকন (পরে আসল লোগো বসিয়ে নিও)
            <div className="w-10 h-10 bg-[#6A1B29] rounded-md flex items-center justify-center text-white font-bold text-sm">
              BU
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase leading-none mb-1">
                Bangladesh University
              </span>
              <span className="font-extrabold text-xl leading-none text-foreground tracking-tight">
                BU E-LIBRARY
              </span>
            </div>
          </div> */}

  

          {/* 1. Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-1 cursor-pointer">
            {/* আসল লোগো ইমেজ */}
            <div className="relative w-32 h-32">
              <Image 
                src="/images/1212.png" // তোমার লোগো ফাইলের নাম ও পাথ এখানে দাও
                alt="BU Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase leading-none mb-1">
                Bangladesh University
              </span>
              <span className="font-extrabold text-xl leading-none text-foreground tracking-tight">
                BU EL - LIBRARY
              </span>
            </div>
          </div>

          {/* 2. Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-sm font-semibold text-[#6A1B29] border-b-2 border-[#6A1B29] pb-1">
              Home
            </Link>
            <Link href="/explore" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              Explore <span className="text-[10px]">▼</span>
            </Link>
            <Link href="/categories" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              Categories <span className="text-[10px]">▼</span>
            </Link>
            <Link href="/collections" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Collections
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </div>

          {/* 3. Actions (Search, Dark Mode, Sign In) */}
          <div className="flex items-center space-x-5">
            {/* <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Search className="h-5 w-5" />
            </button> */}
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Moon className="h-5 w-5" />
            </button>
            {/* ডিজাইনের সেই মেরুন রঙের বাটন */}
            <Button className="bg-[#6A1B29] hover:bg-[#52131f] text-white rounded-full px-8 py-5 text-sm font-medium">
              Sign In
            </Button>
          </div>

        </div>
      </div>
    </nav>
  );
}