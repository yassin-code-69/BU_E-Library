import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Anika Rahman",
      role: "CSE Student",
      text: "The E-Library has made finding research papers so much easier. The interface is clean and very user-friendly!",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anika"
    },
    {
      name: "Dr. Kamrul Hasan",
      role: "Faculty Member",
      text: "A great initiative by BU. Having all academic resources in one place is a huge advantage for both students and faculty.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kamrul"
    },
    {
      name: "Tanvir Ahmed",
      role: "BBA Student",
      text: "I love the 'Recommended for You' section. It helps me discover books I wouldn't have found otherwise.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tanvir"
    }
  ];

  return (
    <section className="py-16 relative z-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">What Our Users Say</h2>
        <div className="w-20 h-1 bg-[#6A1B29] dark:bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white dark:bg-card p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-border hover:shadow-md transition-shadow relative">
            <Quote className="absolute top-6 right-8 text-gray-100 dark:text-muted/30 h-12 w-12" />
            <div className="flex items-center gap-4 mb-6">
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full bg-gray-100 dark:bg-muted" />
              <div>
                <h4 className="font-bold text-foreground leading-none">{t.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{t.role}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              "{t.text}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}