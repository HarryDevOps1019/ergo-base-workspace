import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import heroImage from "@/assets/hero-desk.jpg";
import landingBg from "@/assets/video/landingbg.mp4";

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {!isVideoPlaying ? (
        // Background image (default)
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Pro Station Standing Desk in a modern dark office"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>
      ) : (
        // Video when playing
        <video
          src={landingBg}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 border border-gold/30 rounded-full animate-fade-up">
          <span className="text-xs tracking-[0.2em] text-gold font-medium">
            SRI LANKA'S MOST SCIENTIFICALLY ENGINEERED STANDING DESK
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-foreground animate-fade-up animation-delay-200 leading-[0.9]">
          ELEVATE YOUR
          <br />
          <span className="text-gold">WORKSPACE</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-silver max-w-2xl mx-auto animate-fade-up animation-delay-400">
          Pain-free productivity starts at your desk.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-600">
          <Button variant="gold" size="xl" asChild>
            <Link to="/pro-station">SHOP NOW</Link>
          </Button>
          <Button 
            variant="outline" 
            size="xl"
            onClick={() => setIsVideoPlaying(true)}
          >
            WATCH THE VIDEO
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
}
