import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpen, Monitor, Wrench, AlertTriangle, ChevronDown, Download, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/manual")({
  head: () => ({
    meta: [
      { title: "User Manual — Ergo Base Pro Station" },
      { name: "description", content: "Setup instructions, usage guide, and troubleshooting for your Ergo Base Pro Station standing desk." },
      { property: "og:title", content: "User Manual — Ergo Base Pro Station" },
      { property: "og:description", content: "Complete guide to setting up and using your Ergo Base standing desk." },
    ],
  }),
  component: ManualPage,
});

interface ManualSection {
  id: string;
  icon: React.ReactNode;
  title: string;
  steps: { title: string; content: string }[];
}

const sections: ManualSection[] = [
  {
    id: "unboxing",
    icon: <BookOpen size={20} />,
    title: "Unboxing & Parts",
    steps: [
      { title: "Package Contents", content: "Your Pro Station box contains: 1× tabletop (pre-finished), 2× leg columns with motors, 1× crossbar with control unit, 1× digital control panel, 1× power cable (3m), 8× M6 bolts, 1× Allen key set, 1× cable management tray, and this manual." },
      { title: "Inspect All Parts", content: "Before assembly, lay out all components and check for any shipping damage. If any part is damaged or missing, contact us immediately via WhatsApp at +94 77 721 2199 with your order number." },
      { title: "Choose Your Location", content: "Place the desk near a power outlet on a flat, stable surface. Ensure at least 70cm clearance above the desk at maximum height for comfortable standing use." },
    ],
  },
  {
    id: "assembly",
    icon: <Wrench size={20} />,
    title: "Assembly Guide",
    steps: [
      { title: "Step 1: Attach Legs to Crossbar", content: "Connect both leg columns to the crossbar using the provided M6 bolts. Tighten firmly but do not over-torque. The motor cables should face inward toward the control unit." },
      { title: "Step 2: Mount the Tabletop", content: "Flip the tabletop upside down on a soft surface. Place the assembled frame on top, align the pre-drilled holes, and secure with the remaining bolts. Tighten in a cross pattern." },
      { title: "Step 3: Connect Cables", content: "Connect both motor cables to the control unit (labeled L and R). Attach the control panel cable. Route cables through the cable management tray." },
      { title: "Step 4: Flip & Power On", content: "Carefully flip the desk upright (two people recommended for 160cm models). Plug in the power cable and press any button on the control panel to initialize." },
      { title: "Step 5: Initial Calibration", content: "On first power-up, hold the DOWN button until the desk reaches its lowest point and stops automatically. This calibrates the height sensor. The display will flash '888' to confirm calibration is complete." },
    ],
  },
  {
    id: "controls",
    icon: <Monitor size={20} />,
    title: "Using the Controls",
    steps: [
      { title: "Height Adjustment", content: "Press and hold the UP or DOWN arrow to raise or lower the desk. The digital display shows the current height in centimeters. Release to stop at any position." },
      { title: "Setting Memory Presets", content: "Adjust to your desired height. Press the 'M' button — the display will flash. Within 5 seconds, press a preset number (1-4). The display confirms with a beep. Repeat for each preset." },
      { title: "Using Memory Presets", content: "Press the preset number (1-4) once. The desk automatically moves to your saved height. You can stop at any time by pressing any button." },
      { title: "Anti-Collision System", content: "The desk automatically detects obstructions and stops within 1 second, then reverses 20mm. If this triggers repeatedly, check for objects in the desk's path. To temporarily disable, hold UP+DOWN for 5 seconds (not recommended)." },
      { title: "Child Lock", content: "Hold the 'M' button for 5 seconds. The display shows 'LOC'. All buttons are disabled except unlocking (hold 'M' again for 5 seconds). Use this to prevent accidental adjustments." },
    ],
  },
  {
    id: "troubleshooting",
    icon: <AlertTriangle size={20} />,
    title: "Troubleshooting",
    steps: [
      { title: "Desk won't move", content: "Check that the power cable is firmly connected. Verify the child lock is not engaged (display shows 'LOC'). Ensure weight on the desk doesn't exceed 120kg. Try unplugging for 30 seconds, then recalibrate." },
      { title: "Display shows 'E01'", content: "Motor overload error. Remove excess weight and let the motors cool for 5 minutes. The desk has thermal protection and will resume normal operation after cooling." },
      { title: "Display shows 'E02'", content: "Communication error between motors. Check all cable connections at the control unit. Unplug and reconnect each motor cable. If the error persists, contact support." },
      { title: "Desk is uneven", content: "Reset by holding the DOWN button until fully lowered. If still uneven, disconnect both motor cables, reconnect, and recalibrate (hold DOWN until it stops and flashes '888')." },
      { title: "Unusual noise during movement", content: "A slight hum is normal. Grinding or clicking may indicate loose bolts — check and tighten all connections. If noise persists, contact support as the motor may need servicing." },
    ],
  },
];

function ManualPage() {
  const [activeSection, setActiveSection] = useState("unboxing");
  const [openStep, setOpenStep] = useState<number | null>(0);

  const currentSection = sections.find((s) => s.id === activeSection)!;

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-card border-b border-border py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">User Manual</h1>
          <p className="mt-4 text-lg text-muted-foreground">Pro Station Standing Desk — Setup & Usage Guide</p>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-4 py-10">
        {/* Section Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => { setActiveSection(s.id); setOpenStep(0); }}
              className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all cursor-pointer ${activeSection === s.id ? "bg-gold/10 border-gold text-foreground" : "bg-card border-border text-muted-foreground hover:border-gold/30"}`}
            >
              <span className={activeSection === s.id ? "text-gold" : "text-muted-foreground"}>{s.icon}</span>
              <span className="text-sm font-medium">{s.title}</span>
            </button>
          ))}
        </div>

        {/* Steps */}
        <div className="space-y-3">
          {currentSection.steps.map((step, idx) => (
            <div key={idx} className="bg-card border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenStep(openStep === idx ? null : idx)}
                className="w-full flex items-center gap-4 px-6 py-4 text-left cursor-pointer"
              >
                <span className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold shrink-0 ${openStep === idx ? "bg-gold text-gold-foreground" : "bg-muted text-muted-foreground"}`}>
                  {idx + 1}
                </span>
                <span className="text-sm font-medium text-foreground flex-1">{step.title}</span>
                <ChevronDown size={16} className={`text-muted-foreground shrink-0 transition-transform ${openStep === idx ? "rotate-180" : ""}`} />
              </button>
              {openStep === idx && (
                <div className="px-6 pb-5 pl-17">
                  <p className="text-sm text-muted-foreground leading-relaxed ml-11">{step.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Reference */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8">
          <h2 className="text-xl font-bold text-foreground mb-6">Quick Reference</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Height Range", value: "62cm — 127cm" },
              { label: "Speed", value: "38mm/sec" },
              { label: "Weight Capacity", value: "120kg" },
              { label: "Motor Type", value: "Dual DC Motor" },
              { label: "Noise Level", value: "< 50dB" },
              { label: "Memory Presets", value: "4 positions" },
              { label: "Power", value: "AC 100-240V, 50/60Hz" },
              { label: "Standby Power", value: "< 0.5W" },
            ].map((spec) => (
              <div key={spec.label} className="flex items-center gap-2">
                <CheckCircle size={14} className="text-gold shrink-0" />
                <span className="text-sm text-muted-foreground"><span className="text-foreground font-medium">{spec.label}:</span> {spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Support CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">Need help? Contact our support team via <a href="https://wa.me/94777212199" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">WhatsApp</a></p>
        </div>
      </div>
    </div>
  );
}
