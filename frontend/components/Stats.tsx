import { BookOpen, Bookmark, Heart, History } from "lucide-react";

export default function Stats() {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6 text-[#6A1B29] dark:text-primary" />,
      title: "Extensive Collection",
      desc: "Books, journals, thesis, and more.",
    },
    {
      icon: <Bookmark className="h-6 w-6 text-[#6A1B29] dark:text-primary" />,
      title: "Easy Access",
      desc: "Access resources anytime, anywhere.",
    },
    {
      icon: <Heart className="h-6 w-6 text-[#6A1B29] dark:text-primary" />,
      title: "Save & Organize",
      desc: "Bookmark your favorites and collections.",
    },
    {
      icon: <History className="h-6 w-6 text-[#6A1B29] dark:text-primary" />,
      title: "Reading History",
      desc: "Continue from where you left off.",
    },
  ];

  return (
    <section className="py-8 z-20 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex items-center gap-4 bg-white dark:bg-card p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-border hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            {/* আইকনের পেছনের হালকা গোলাপি গোল ব্যাকগ্রাউন্ড */}
            <div className="w-14 h-14 rounded-full bg-[#f8eef0] dark:bg-muted flex items-center justify-center shrink-0">
              {feature.icon}
            </div>
            
            {/* টেক্সট অংশ */}
            <div>
              <h4 className="font-bold text-foreground mb-1 text-[15px]">{feature.title}</h4>
              <p className="text-xs text-muted-foreground leading-snug">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}