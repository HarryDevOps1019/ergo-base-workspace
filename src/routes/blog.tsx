import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Ergonomics Blog — Ergo Base Sri Lanka" },
      { name: "description", content: "Tips on posture, productivity, and workspace ergonomics from Ergo Base experts." },
      { property: "og:title", content: "Ergonomics Blog — Ergo Base" },
      { property: "og:description", content: "Expert advice on standing desks, posture, and workplace wellness." },
    ],
  }),
  component: BlogPage,
});

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const posts: BlogPost[] = [
  {
    id: "standing-desk-benefits",
    title: "7 Science-Backed Benefits of Using a Standing Desk",
    excerpt: "Research shows that alternating between sitting and standing throughout your workday can reduce back pain by 54%, boost energy levels, and improve focus. Here's what the latest studies reveal about height-adjustable desks.",
    category: "Health",
    date: "March 15, 2025",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: "perfect-desk-height",
    title: "How to Find Your Perfect Standing Desk Height",
    excerpt: "Your ideal desk height depends on your height, monitor setup, and the type of work you do. We break down the exact measurements and adjustments for optimal ergonomics.",
    category: "Setup Guide",
    date: "March 8, 2025",
    readTime: "4 min read",
  },
  {
    id: "home-office-setup",
    title: "The Ultimate Home Office Setup Guide for Sri Lankan Professionals",
    excerpt: "Working from home is the new normal. Learn how to create a productive, ergonomic workspace that keeps you healthy and focused throughout the day.",
    category: "Workspace",
    date: "February 28, 2025",
    readTime: "8 min read",
  },
  {
    id: "back-pain-solutions",
    title: "Fixing Back Pain: A Desk Worker's Complete Guide",
    excerpt: "80% of Sri Lankan office workers report back pain. Discover how alternating between sitting and standing, combined with proper posture habits, can eliminate chronic discomfort.",
    category: "Health",
    date: "February 20, 2025",
    readTime: "7 min read",
  },
  {
    id: "gaming-ergonomics",
    title: "Ergonomics for Gamers: Why Your Desk Matters More Than Your Chair",
    excerpt: "Long gaming sessions demand proper ergonomics. Learn why desk height adjustment is the #1 upgrade for competitive gamers and streamers.",
    category: "Gaming",
    date: "February 12, 2025",
    readTime: "5 min read",
  },
  {
    id: "corporate-wellness",
    title: "How Standing Desks Boost Corporate Productivity by 46%",
    excerpt: "Companies investing in ergonomic workstations see measurable ROI. We explore case studies from Sri Lankan businesses that made the switch to Ergo Base.",
    category: "Corporate",
    date: "January 30, 2025",
    readTime: "6 min read",
  },
  {
    id: "cable-management",
    title: "Clean Desk, Clear Mind: Cable Management Tips",
    excerpt: "A clutter-free workspace improves focus and reduces stress. Here are 10 practical cable management solutions for your standing desk setup.",
    category: "Setup Guide",
    date: "January 22, 2025",
    readTime: "4 min read",
  },
  {
    id: "sit-stand-routine",
    title: "The Ideal Sit-Stand Routine: How Often Should You Switch?",
    excerpt: "Experts recommend the 20-8-2 rule: 20 minutes sitting, 8 minutes standing, 2 minutes moving. Learn why this ratio maximizes health benefits.",
    category: "Health",
    date: "January 10, 2025",
    readTime: "5 min read",
  },
];

const categories = ["All", "Health", "Setup Guide", "Workspace", "Gaming", "Corporate"];

function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featured = posts.find((p) => p.featured);
  const filtered = posts.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch && !p.featured;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-card border-b border-border py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Ergonomics Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Expert tips on posture, productivity, and building the perfect workspace</p>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-10">
        {/* Featured Post */}
        {featured && (
          <div className="bg-card border border-border rounded-2xl overflow-hidden mb-12 hover:shadow-lg transition-shadow">
            <div className="p-8 md:p-10">
              <span className="text-xs font-semibold text-gold tracking-wider uppercase">{featured.category} — Featured</span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-foreground leading-tight">{featured.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">{featured.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar size={13} />{featured.date}</span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Clock size={13} />{featured.readTime}</span>
              </div>
              <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline">
                Read Article <ArrowRight size={14} />
              </button>
            </div>
          </div>
        )}

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-sm">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-full text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${selectedCategory === cat ? "bg-gold text-gold-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <article key={post.id} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow flex flex-col">
              <span className="text-[10px] font-semibold text-gold tracking-wider uppercase">{post.category}</span>
              <h3 className="mt-2 text-lg font-bold text-foreground leading-snug">{post.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
              <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar size={11} />{post.date}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                </div>
                <ArrowRight size={14} className="text-gold" />
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16"><p className="text-muted-foreground">No articles found.</p></div>
        )}
      </div>
    </div>
  );
}
