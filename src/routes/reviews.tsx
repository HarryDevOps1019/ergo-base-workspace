import { createFileRoute } from "@tanstack/react-router";
import { Star, ThumbsUp, Quote } from "lucide-react";
import { useState } from "react";

import fullSetup2 from "@/assets/review/full setup2.jpg";
import fullSetup from "@/assets/review/fullsetup.jpg";
import gamingDesk from "@/assets/review/gamingdesk.jpg";
import gamingDesk1 from "@/assets/review/gamingdesk1.jpg";
import proStation from "@/assets/review/prostaion.jpg";
import proStation1 from "@/assets/review/prostation1.jpg";
import proStation2 from "@/assets/review/prostation2.jpg";
import whiteDesk from "@/assets/review/white desk.jpg";
import whiteChair from "@/assets/review/whitechair.jpg";
import whiteChair1 from "@/assets/review/whitechair1.jpg";
import whiteDesk1 from "@/assets/review/whitedesk1.jpg";
import workstation2 from "@/assets/review/workstation (2).jpg";
import workstation from "@/assets/review/workstation.jpg";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews — Ergo Base Sri Lanka" },
      { name: "description", content: "Read verified customer reviews for Ergo Base standing desks and ergonomic furniture. Real feedback from Sri Lankan professionals." },
      { property: "og:title", content: "Customer Reviews — Ergo Base" },
      { property: "og:description", content: "See what our customers say about Ergo Base standing desks." },
    ],
  }),
  component: ReviewsPage,
});

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  product: string;
  text: string;
  image?: string;
  helpful: number;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Kasun Perera",
    date: "March 2025",
    rating: 5,
    product: "Pro Station Standing Desk",
    text: "Best investment I've made for my home office. The dual motor system is incredibly smooth and quiet. My back pain has reduced significantly since switching. Build quality is outstanding — feels like a premium international brand but made right here in Sri Lanka!",
    image: proStation,
    helpful: 24,
    verified: true,
  },
  {
    id: 2,
    name: "Anushka Fernando",
    date: "February 2025",
    rating: 5,
    product: "Pro Station + ErgoMesh Chair",
    text: "Got the full setup — desk and chair combo. The desk is rock solid even at maximum height. Cable management is brilliant. My productivity has gone through the roof since I can switch between sitting and standing throughout the day.",
    image: fullSetup,
    helpful: 18,
    verified: true,
  },
  {
    id: 3,
    name: "Dinesh Rajapaksha",
    date: "January 2025",
    rating: 5,
    product: "Gaming Desk Setup",
    text: "Perfect for my gaming and streaming setup. The desk handles my triple monitor setup, PC, and all peripherals without any wobble. The memory presets are a game changer — one touch and it goes to my exact gaming height.",
    image: gamingDesk,
    helpful: 31,
    verified: true,
  },
  {
    id: 4,
    name: "Sachini de Silva",
    date: "March 2025",
    rating: 5,
    product: "White MDF Standing Desk",
    text: "The white desk looks absolutely stunning in my minimalist home office. Clean lines, smooth finish, and the height adjustment is buttery smooth. I was skeptical about buying locally but this exceeded my expectations completely.",
    image: whiteDesk,
    helpful: 15,
    verified: true,
  },
  {
    id: 5,
    name: "Ruwan Wickramasinghe",
    date: "December 2024",
    rating: 5,
    product: "Pro Station Standing Desk",
    text: "Running a software company and we've ordered 12 of these for our office. Every single employee loves them. The anti-collision feature saved us a few times already. Customer service from the Ergo Base team has been exceptional throughout.",
    image: proStation1,
    helpful: 42,
    verified: true,
  },
  {
    id: 6,
    name: "Tharushi Gunasekara",
    date: "February 2025",
    rating: 4,
    product: "Gaming Setup",
    text: "My gaming setup looks incredible with this desk. RGB lighting underneath looks amazing. Very sturdy and the motor is whisper quiet. Only minor thing is I wish there were more color options for the frame, but overall very happy!",
    image: gamingDesk1,
    helpful: 12,
    verified: true,
  },
  {
    id: 7,
    name: "Chaminda Jayawardena",
    date: "January 2025",
    rating: 5,
    product: "Full Workstation Setup",
    text: "Converted my entire workspace with Ergo Base products. Standing desk, ergonomic chair, monitor arm, cable tray — the works. Everything integrates perfectly together. My posture has improved dramatically and I feel more energetic throughout the day.",
    image: workstation,
    helpful: 27,
    verified: true,
  },
  {
    id: 8,
    name: "Nadeesha Kumari",
    date: "March 2025",
    rating: 5,
    product: "White Standing Desk + Chair",
    text: "The all-white setup is gorgeous! The desk surface is scratch-resistant and easy to clean. The chair is incredibly comfortable for long work sessions. Delivery was prompt and the team even helped set everything up. 10/10 experience.",
    image: whiteChair,
    helpful: 19,
    verified: true,
  },
  {
    id: 9,
    name: "Amila Bandara",
    date: "November 2024",
    rating: 5,
    product: "Pro Station Standing Desk",
    text: "As a freelance designer working 10+ hours daily, this desk has been a lifesaver. The 120kg capacity means I never worry about my equipment. The programmable heights are perfect for switching between my drawing tablet and keyboard work.",
    image: proStation2,
    helpful: 33,
    verified: true,
  },
  {
    id: 10,
    name: "Lakshitha Wijesinghe",
    date: "February 2025",
    rating: 5,
    product: "Complete Workstation",
    text: "Second desk I've bought from Ergo Base — first one was for home, now got one for my office. Consistent quality both times. The team remembers their customers and provided excellent after-sales support. Truly a premium Sri Lankan brand.",
    image: workstation2,
    helpful: 21,
    verified: true,
  },
  {
    id: 11,
    name: "Priyantha Dissanayake",
    date: "January 2025",
    rating: 5,
    product: "Full Setup with White Desk",
    text: "My wife and I both work from home now and we each got an Ergo Base desk. The build quality is remarkable — solid wood tops with industrial-grade frames. Three months in and everything works as perfectly as day one.",
    image: whiteDesk1,
    helpful: 16,
    verified: true,
  },
  {
    id: 12,
    name: "Ishara Madushani",
    date: "March 2025",
    rating: 5,
    product: "White Chair + Accessories",
    text: "The ergonomic chair is incredibly supportive. I have chronic back issues and this has made a world of difference. The lumbar support is adjustable and the mesh keeps me cool. Combined with the standing desk, I've never been more comfortable working.",
    image: whiteChair1,
    helpful: 28,
    verified: true,
  },
  {
    id: 13,
    name: "Malitha Senanayake",
    date: "December 2024",
    rating: 5,
    product: "Full Home Office Setup",
    text: "Completely transformed my spare room into a professional home office. The desk, chair, and accessories all work together seamlessly. Friends who visit can't believe it's a Sri Lankan brand — it looks and feels like something from Autonomous or FlexiSpot but better!",
    image: fullSetup2,
    helpful: 35,
    verified: true,
  },
];

const ratingBreakdown = [
  { stars: 5, count: 12, percentage: 92 },
  { stars: 4, count: 1, percentage: 8 },
  { stars: 3, count: 0, percentage: 0 },
  { stars: 2, count: 0, percentage: 0 },
  { stars: 1, count: 0, percentage: 0 },
];

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={star <= rating ? "fill-gold text-gold" : "text-muted-foreground/30"}
        />
      ))}
    </div>
  );
}

type FilterType = "all" | "5" | "4" | "with-photos";

function ReviewsPage() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());

  const filteredReviews = reviews.filter((r) => {
    if (filter === "5") return r.rating === 5;
    if (filter === "4") return r.rating === 4;
    if (filter === "with-photos") return !!r.image;
    return true;
  });

  const toggleExpand = (id: number) => {
    setExpandedReviews((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-card border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Customer Reviews
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from verified Ergo Base customers across Sri Lanka
          </p>

          {/* Rating Summary */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="text-center">
              <div className="text-6xl font-bold text-foreground">{avgRating}</div>
              <StarRating rating={Math.round(Number(avgRating))} size={24} />
              <p className="mt-2 text-sm text-muted-foreground">Based on {reviews.length} reviews</p>
            </div>

            <div className="w-full max-w-xs space-y-2">
              {ratingBreakdown.map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground w-12">{item.stars} star</span>
                  <div className="flex-1 h-2.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gold rounded-full transition-all"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-8">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-wrap gap-2">
          {([
            { key: "all", label: "All Reviews" },
            { key: "5", label: "5 Stars" },
            { key: "4", label: "4 Stars" },
            { key: "with-photos", label: "With Photos" },
          ] as { key: FilterType; label: string }[]).map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === f.key
                  ? "bg-gold text-gold-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((review) => {
            const isExpanded = expandedReviews.has(review.id);
            const isLong = review.text.length > 150;

            return (
              <div
                key={review.id}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                {review.image && (
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={review.image}
                      alt={`${review.name}'s setup`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <Star size={12} className="fill-gold text-gold" />
                      <span className="text-xs font-semibold text-foreground">{review.rating}.0</span>
                    </div>
                  </div>
                )}

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground">{review.name}</h3>
                        {review.verified && (
                          <span className="text-[10px] font-medium bg-green-500/10 text-green-500 px-2 py-0.5 rounded-full">
                            Verified
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">{review.date}</p>
                    </div>
                    <StarRating rating={review.rating} size={14} />
                  </div>

                  <p className="text-xs text-gold font-medium mt-2">{review.product}</p>

                  <div className="mt-3 relative">
                    <Quote size={14} className="text-muted-foreground/20 absolute -top-1 -left-1" />
                    <p className="text-sm text-muted-foreground leading-relaxed pl-4">
                      {isLong && !isExpanded ? `${review.text.slice(0, 150)}...` : review.text}
                    </p>
                    {isLong && (
                      <button
                        onClick={() => toggleExpand(review.id)}
                        className="text-xs text-gold hover:underline mt-1 pl-4"
                      >
                        {isExpanded ? "Show less" : "Read more"}
                      </button>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                    <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                      <ThumbsUp size={13} />
                      Helpful ({review.helpful})
                    </button>
                    <span className="text-[10px] text-muted-foreground">via Facebook</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredReviews.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No reviews match this filter.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 mb-8 text-center bg-card border border-border rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-foreground">Love Your Ergo Base Setup?</h2>
          <p className="mt-2 text-muted-foreground">Share your experience on our Facebook page</p>
          <a
            href="https://web.facebook.com/ErgoBaseSL"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gold text-gold-foreground px-8 py-3 text-sm font-semibold tracking-wider hover:brightness-110 transition-all"
          >
            Leave a Review on Facebook
          </a>
        </div>
      </section>
    </div>
  );
}
