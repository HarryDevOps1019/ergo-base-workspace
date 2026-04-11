import { useState } from "react";

const tabs = [
  {
    id: "comfort",
    label: "Comfort",
    traditional: "Fixed-height desks cause fatigue, forcing your body to adapt to the desk instead of the other way around.",
    proStation: "Pro Station adapts to you — switch between sitting and standing throughout the day for all-day comfort.",
  },
  {
    id: "posture",
    label: "Posture",
    traditional: "Static desks promote slouching, leading to chronic back pain and poor spinal alignment over time.",
    proStation: "Pro Station promotes natural spine alignment with precise height adjustment to your exact ergonomic sweet spot.",
  },
  {
    id: "productivity",
    label: "Productivity",
    traditional: "Sitting all day reduces blood flow and focus, causing afternoon energy crashes and decreased output.",
    proStation: "Sit-stand cycles boost energy, improve circulation, and keep you focused throughout the entire workday.",
  },
];

export function ComparisonSection() {
  const [activeTab, setActiveTab] = useState("comfort");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xs tracking-[0.3em] text-gold font-semibold mb-4">THE DIFFERENCE</h2>
          <p className="text-3xl sm:text-4xl font-bold text-foreground">Traditional Desk vs. Pro Station</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wider transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-gold text-gold-foreground"
                  : "bg-surface text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface border border-border rounded-xl p-8">
            <div className="text-xs tracking-[0.2em] text-destructive font-semibold mb-4">TRADITIONAL DESK</div>
            <p className="text-muted-foreground leading-relaxed">{active.traditional}</p>
          </div>
          <div className="bg-surface border border-gold/20 rounded-xl p-8">
            <div className="text-xs tracking-[0.2em] text-gold font-semibold mb-4">PRO STATION</div>
            <p className="text-foreground leading-relaxed">{active.proStation}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
