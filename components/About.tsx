import { Beer, Music, Users } from "lucide-react";

const features = [
  {
    icon: Beer,
    title: "Exceptional Cocktails",
    description:
      "Our bartenders craft every drink with precision. From signature creations to classic favourites, each cocktail is made fresh with premium spirits.",
  },
  {
    icon: Music,
    title: "Live Entertainment",
    description:
      "Nightly performances from talented DJs and live acts. The energy builds as the night goes on — expect singalongs, dance floors, and memories.",
  },
  {
    icon: Users,
    title: "Legendary Atmosphere",
    description:
      "Friendly staff, a welcoming crowd, and a terrace that feels like home. Whether you're here for one drink or until sunrise, you'll fit right in.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-loft-charcoal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-loft-terracotta uppercase tracking-[0.2em] text-sm mb-3">
            Since Day One
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-loft-cream mb-6">
            More Than Just a Bar
          </h2>
          <p className="text-loft-stone text-lg max-w-2xl mx-auto leading-relaxed">
            O&apos;Callaghan&apos;s Loft has been the heartbeat of Laganas nightlife for years.
            We&apos;re an Irish bar with a Greek soul — warm hospitality, great drinks,
            and nights you won&apos;t forget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-loft-dark/50 border border-loft-amber/10 rounded-2xl p-8 hover:border-loft-amber/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-loft-amber/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon size={24} className="text-loft-amber" />
              </div>
              <h3 className="font-display text-xl font-semibold text-loft-cream mb-3">
                {feature.title}
              </h3>
              <p className="text-loft-stone leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}