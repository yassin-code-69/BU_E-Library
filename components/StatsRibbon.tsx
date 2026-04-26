import { BookOpen, BookMarked, FileText, FileBadge, Route, History } from "lucide-react";

export default function StatsRibbon() {
  const stats = [
    { count: "250K+", label: "Resources", icon: <BookOpen className="h-5 w-5" /> },
    { count: "35K+", label: "e-Books", icon: <BookMarked className="h-5 w-5" /> },
    { count: "12K+", label: "Journals", icon: <FileText className="h-5 w-5" /> },
    { count: "5K+", label: "Thesis Papers", icon: <FileBadge className="h-5 w-5" /> },
    { count: "50+", label: "Subject Areas", icon: <Route className="h-5 w-5" /> },
    { count: "24/7", label: "Access Anywhere", icon: <History className="h-5 w-5" /> },
  ];

  return (
    <section className="py-6 relative z-20">
      <div className="bg-[#5a1523] rounded-2xl p-5 md:p-6 shadow-md border border-[#6A1B29]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
          
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-3 lg:justify-center">
              
              {/* Icon with circular transparent background */}
              <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-white shrink-0 border border-white/5">
                {stat.icon}
              </div>
              
              {/* Text Container */}
              <div className="flex flex-col">
                <h3 className="text-white text-[17px] font-bold leading-tight">
                  {stat.count}
                </h3>
                <p className="text-white/70 text-[11px] font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}