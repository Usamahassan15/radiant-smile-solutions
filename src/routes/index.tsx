import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  Phone, Calendar, Star, Shield, Award, Clock, Sparkles, Heart, CheckCircle2,
  Stethoscope, Smile, Scissors, Wrench, Baby, Zap, ArrowRight, MapPin, Mail,
  MessageCircle, ChevronDown, Menu, X, Quote, Play, Users, Trophy,
} from "lucide-react";
import { toast } from "sonner";

import heroDentist from "@/assets/hero-dentist.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumière Dental — Premium Dental Care in the Heart of the City" },
      { name: "description", content: "Award-winning dental clinic. Cosmetic dentistry, implants, Invisalign, whitening & family care by world-class specialists. Book your smile consultation today." },
      { property: "og:title", content: "Lumière Dental — Creating Beautiful & Healthy Smiles" },
      { property: "og:description", content: "Book with 15+ years experienced specialists. 1000+ happy patients. Modern technology. Pain-free care." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Dentist",
        name: "Lumière Dental",
        image: "/og-image.jpg",
        priceRange: "$$",
        telephone: "+1-555-0100",
        address: { "@type": "PostalAddress", streetAddress: "1200 Park Avenue", addressLocality: "New York", addressRegion: "NY", postalCode: "10028", addressCountry: "US" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1247" },
        openingHours: "Mo-Sa 08:00-20:00",
      }),
    }],
  }),
  component: LandingPage,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function LandingPage() {
  return (
    <main className="relative overflow-x-hidden">
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <About />
      <Doctors />
      <Booking />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

/* ---------- HEADER ---------- */
function Header() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(255,255,255,0)", "rgba(255,255,255,0.85)"]);
  const shadow = useTransform(scrollY, [0, 80], ["0 0 0 rgba(0,0,0,0)", "0 8px 30px -12px rgba(15,23,42,0.12)"]);
  return (
    <motion.header
      style={{ background: bg, boxShadow: shadow, backdropFilter: "blur(16px)" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <div className="grid h-10 w-10 place-items-center rounded-xl gradient-hero text-white shadow-glow">
            <Smile className="h-5 w-5" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight">Lumière<span className="text-primary">.</span></span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary/8 hover:text-primary">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="tel:+15550100" className="hidden md:flex items-center gap-2 rounded-full border border-border/70 px-3.5 py-2 text-sm font-medium hover:border-primary/40">
            <Phone className="h-4 w-4 text-primary" /> <span>+1 (555) 0100</span>
          </a>
          <Button asChild size="lg" className="hidden sm:inline-flex rounded-full gradient-cta text-white shadow-glow hover:opacity-95">
            <a href="#booking"><Calendar className="mr-2 h-4 w-4" />Book Appointment</a>
          </Button>
          <button aria-label="Menu" onClick={() => setOpen((v) => !v)} className="grid h-11 w-11 place-items-center rounded-full border border-border/70 lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="lg:hidden border-t border-border/60 bg-white/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 grid gap-1">
            {NAV.map((n) => (
              <a key={n.href} onClick={() => setOpen(false)} href={n.href} className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-primary/8 hover:text-primary">
                {n.label}
              </a>
            ))}
            <Button asChild className="mt-2 rounded-full gradient-cta text-white">
              <a href="#booking" onClick={() => setOpen(false)}>Book Appointment</a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="home" ref={ref} className="relative pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Parallax blobs */}
      <motion.div style={{ y }} aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      </motion.div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Badge className="rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-primary hover:bg-primary/8">
            <Sparkles className="mr-1.5 h-3.5 w-3.5" /> #1 Rated Dental Clinic 2026
          </Badge>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Creating <span className="gradient-text">Beautiful</span> &amp;<br className="hidden sm:block" /> Healthy Smiles
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            World-class dental care combining cutting-edge technology with a warm, patient-first approach. From cosmetic transformations to family dentistry — your smile is our masterpiece.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full gradient-cta text-white shadow-glow px-7 h-12">
              <a href="#booking"><Calendar className="mr-2 h-5 w-5" />Book Appointment</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 border-primary/30 hover:bg-primary/5">
              <a href="tel:+15550100"><Phone className="mr-2 h-5 w-5 text-primary" />Call Now</a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: Star, label: "4.9 / 5", sub: "Google Rating", color: "text-warning" },
              { icon: Users, label: "1,000+", sub: "Happy Patients", color: "text-primary" },
              { icon: Award, label: "15+ Years", sub: "Experience", color: "text-accent" },
              { icon: Zap, label: "24/7", sub: "Emergency", color: "text-destructive" },
            ].map((t, i) => (
              <motion.div key={t.sub} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.08 }}
                className="rounded-2xl border border-border/60 bg-card/70 p-3 shadow-card backdrop-blur">
                <t.icon className={`h-5 w-5 ${t.color}`} />
                <div className="mt-1.5 text-lg font-bold leading-none">{t.label}</div>
                <div className="text-xs text-muted-foreground">{t.sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-glow">
            <div className="absolute inset-0 gradient-hero opacity-90" />
            <img src={heroDentist} alt="Lead dentist at Lumière Dental" className="relative h-full w-full object-cover mix-blend-luminosity opacity-95" />
            <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/20" />
          </div>

          {/* Floating cards */}
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity }}
            className="absolute -left-4 top-10 hidden sm:flex items-center gap-3 rounded-2xl bg-white p-3.5 pr-5 shadow-card">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-success/15 text-success"><CheckCircle2 className="h-5 w-5" /></div>
            <div>
              <div className="text-sm font-semibold">Certified Specialists</div>
              <div className="text-xs text-muted-foreground">ADA & BDA Accredited</div>
            </div>
          </motion.div>

          <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -right-2 bottom-10 hidden sm:flex items-center gap-3 rounded-2xl bg-white p-3.5 pr-5 shadow-card">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/12 text-primary"><Heart className="h-5 w-5" /></div>
            <div>
              <div className="text-sm font-semibold">Pain-Free Care</div>
              <div className="text-xs text-muted-foreground">Sedation available</div>
            </div>
          </motion.div>

          {/* Floating tooth */}
          <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 8, repeat: Infinity }}
            aria-hidden className="absolute -top-6 right-6 grid h-16 w-16 place-items-center rounded-2xl glass shadow-card">
            <Smile className="h-8 w-8 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- TRUST BAR ---------- */
function TrustBar() {
  const items = ["ADA Certified", "BDA Member", "ISO 9001", "5-Star Google", "Cigna Preferred", "Delta Dental"];
  return (
    <section aria-label="Trusted by" className="border-y border-border/60 bg-muted/40 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {items.map((i) => (
            <span key={i} className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{i}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
const SERVICES = [
  { icon: Stethoscope, name: "General Dentistry", desc: "Routine check-ups, cleanings, and preventive care." },
  { icon: Sparkles, name: "Cosmetic Dentistry", desc: "Smile design that highlights your natural beauty." },
  { icon: Wrench, name: "Dental Implants", desc: "Permanent, natural-feeling replacement teeth." },
  { icon: Smile, name: "Teeth Whitening", desc: "Professional whitening for a radiant smile." },
  { icon: Zap, name: "Root Canal", desc: "Pain-free endodontic therapy with modern tools." },
  { icon: Scissors, name: "Braces & Invisalign", desc: "Straighter teeth with clear or classic options." },
  { icon: Shield, name: "Dental Crowns", desc: "Durable, aesthetic restorations for damaged teeth." },
  { icon: Award, name: "Veneers", desc: "Hand-crafted porcelain veneers for a flawless finish." },
  { icon: Baby, name: "Pediatric Dentistry", desc: "Kid-friendly care in a warm, welcoming space." },
  { icon: Heart, name: "Emergency Care", desc: "Same-day emergency appointments, 24/7." },
  { icon: CheckCircle2, name: "Dental Cleaning", desc: "Deep cleaning to protect gums and enamel." },
  { icon: Trophy, name: "Smile Makeover", desc: "Full transformation tailored to your goals." },
];

function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Our Services"
          title="Comprehensive dental care, delivered with precision"
          sub="From routine hygiene to complete smile makeovers, our specialists cover every treatment under one roof."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-card transition-shadow hover:shadow-glow"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/8 blur-2xl transition-all group-hover:bg-primary/15" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-white shadow-soft">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <a href="#booking" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY CHOOSE US ---------- */
function WhyChooseUs() {
  const items = [
    { icon: Award, title: "Experienced Doctors", desc: "Board-certified with 15+ years average experience." },
    { icon: Zap, title: "Advanced Equipment", desc: "Latest 3D imaging, CEREC & laser dentistry." },
    { icon: Heart, title: "Pain-Free Treatment", desc: "Modern anesthetics & sedation options." },
    { icon: Shield, title: "Affordable Pricing", desc: "Transparent pricing with flexible plans." },
    { icon: Phone, title: "Emergency Support", desc: "24/7 dental emergency care available." },
    { icon: Sparkles, title: "Modern Technology", desc: "Same-day crowns, digital smile design." },
    { icon: CheckCircle2, title: "Certified Specialists", desc: "ADA, BDA and international accreditations." },
    { icon: Trophy, title: "Worldwide Standard", desc: "Trusted by patients across 40+ countries." },
  ];
  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 gradient-hero opacity-[0.04]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Why Choose Us" title="A different kind of dental experience" sub="Everything you'd expect from a world-class clinic — and more." />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div key={it.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
              className="rounded-2xl border border-border/60 bg-card p-6 text-center shadow-card">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
                <it.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-semibold">{it.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-glow">
              <img src={clinicInterior} alt="Lumière Dental clinic interior" width={1400} height={1000} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden sm:block rounded-2xl bg-white p-4 shadow-glow">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-white"><Trophy className="h-6 w-6" /></div>
                <div>
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-xs text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About Lumière</div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">A clinic built on trust, craft, and care.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Founded in 2010, Lumière Dental brings together the industry's most respected specialists, meticulously designed spaces, and technology that reshapes what modern dentistry can feel like.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { t: "Our Mission", d: "Deliver exceptional care that makes every patient feel confident, cared for, and heard." },
                { t: "Our Vision", d: "Redefine the dental experience as a warm, effortless, and transformative journey." },
              ].map((b) => (
                <div key={b.t} className="rounded-2xl border border-border/60 bg-card p-5">
                  <div className="font-semibold">{b.t}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{b.d}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {[{ n: "1,247", l: "Reviews" }, { n: "50k+", l: "Treatments" }, { n: "40+", l: "Countries" }].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-2xl font-bold gradient-text">{s.n}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- DOCTORS ---------- */
const DOCTORS = [
  { img: doctor2, name: "Dr. Sophia Martinez", role: "Cosmetic & Prosthodontics", exp: "18 yrs", langs: "EN · ES · FR" },
  { img: doctor1, name: "Dr. Ethan Bennett", role: "Implants & Oral Surgery", exp: "14 yrs", langs: "EN · DE" },
  { img: doctor3, name: "Dr. James Whitfield", role: "Orthodontics & Invisalign", exp: "12 yrs", langs: "EN · IT" },
];

function Doctors() {
  return (
    <section id="doctors" className="py-20 sm:py-28 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Meet the Team" title="World-class specialists, all under one roof" sub="Board-certified doctors who combine deep expertise with genuine warmth." />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DOCTORS.map((d, i) => (
            <motion.article key={d.name}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={d.img} alt={d.name} width={800} height={1000} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 text-white">
                  <div className="flex items-center gap-2 text-xs">
                    <Badge className="rounded-full bg-white/20 text-white hover:bg-white/20 backdrop-blur">{d.exp}</Badge>
                    <Badge className="rounded-full bg-white/20 text-white hover:bg-white/20 backdrop-blur">{d.langs}</Badge>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{d.name}</h3>
                <p className="text-sm text-muted-foreground">{d.role}</p>
                <div className="mt-4 flex items-center justify-between">
                  <a href="#booking" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Book <ArrowRight className="h-4 w-4" />
                  </a>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3.5 w-3.5 fill-warning text-warning" /> 4.9 · 320 reviews
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- BOOKING ---------- */
function Booking() {
  const [loading, setLoading] = useState(false);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Appointment request received!", { description: "We'll confirm within 30 minutes via email." });
      (e.target as HTMLFormElement).reset();
    }, 900);
  }

  return (
    <section id="booking" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 gradient-hero" />
      <div className="absolute inset-0 -z-10 bg-black/10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="text-white">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Book Online</div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">Reserve your smile consultation</h2>
            <p className="mt-4 max-w-md text-white/85">Choose your preferred doctor, treatment, and time. We'll confirm within 30 minutes.</p>
            <ul className="mt-8 space-y-3 text-sm">
              {["Free 20-min consultation", "Same-day emergency slots", "Insurance & payment plans", "Digital records & follow-up"].map((f) => (
                <li key={f} className="flex items-center gap-2.5"><CheckCircle2 className="h-5 w-5 text-white" /> {f}</li>
              ))}
            </ul>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl bg-white p-6 shadow-glow sm:p-8"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Full name"><Input required placeholder="Jane Doe" /></Field>
              <Field label="Phone"><Input required type="tel" placeholder="+1 555 000 0000" /></Field>
              <Field label="Email"><Input required type="email" placeholder="jane@example.com" /></Field>
              <Field label="Preferred date"><Input required type="date" /></Field>
              <Field label="Preferred time">
                <Select><SelectTrigger><SelectValue placeholder="Select time" /></SelectTrigger>
                <SelectContent>
                  {["09:00", "10:30", "13:00", "15:30", "17:00"].map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                </SelectContent></Select>
              </Field>
              <Field label="Doctor">
                <Select><SelectTrigger><SelectValue placeholder="Any available" /></SelectTrigger>
                <SelectContent>
                  {DOCTORS.map((d) => <SelectItem key={d.name} value={d.name}>{d.name}</SelectItem>)}
                </SelectContent></Select>
              </Field>
              <div className="sm:col-span-2">
                <Field label="Treatment">
                  <Select><SelectTrigger><SelectValue placeholder="Select treatment" /></SelectTrigger>
                  <SelectContent>
                    {SERVICES.map((s) => <SelectItem key={s.name} value={s.name}>{s.name}</SelectItem>)}
                  </SelectContent></Select>
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Message (optional)"><Textarea rows={3} placeholder="Tell us anything we should know…" /></Field>
              </div>
            </div>
            <Button type="submit" disabled={loading} size="lg" className="mt-5 w-full rounded-full gradient-cta text-white h-12 shadow-glow">
              {loading ? "Submitting…" : <><Calendar className="mr-2 h-5 w-5" />Request Appointment</>}
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">By submitting you agree to our privacy policy. We never share your data.</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}

/* ---------- TESTIMONIALS ---------- */
const REVIEWS = [
  { name: "Amelia R.", role: "Invisalign patient", text: "The team at Lumière is exceptional — from the moment I walked in I felt cared for. My smile has completely transformed.", rating: 5 },
  { name: "David K.", role: "Implants patient", text: "Painless, precise, and the office feels like a five-star hotel. Best dental experience of my life.", rating: 5 },
  { name: "Priya S.", role: "Whitening patient", text: "Booking was effortless, and Dr. Martinez explained every step. My teeth have never looked better.", rating: 5 },
  { name: "Marco L.", role: "Family patient", text: "My kids actually look forward to their check-ups now. That says everything.", rating: 5 },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Patient Stories" title="Real smiles. Real reviews." sub="Verified reviews from patients across the country." />
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((r, i) => (
            <motion.figure key={r.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-border/60 bg-card p-6 shadow-card">
              <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/15" />
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-warning text-warning" />)}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed">"{r.text}"</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full gradient-hero text-sm font-semibold text-white">{r.name[0]}</div>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role} · <span className="text-success font-medium">Verified</span></div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Video testimonial placeholder */}
        <div className="mt-14 grid grid-cols-1 items-center gap-8 rounded-3xl border border-border/60 bg-card p-6 shadow-card md:grid-cols-2 md:p-8">
          <div className="relative aspect-video overflow-hidden rounded-2xl gradient-hero">
            <button aria-label="Play video testimonial" className="absolute inset-0 grid place-items-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-white text-primary shadow-glow transition-transform hover:scale-110">
                <Play className="h-6 w-6 fill-current" />
              </span>
            </button>
          </div>
          <div>
            <h3 className="text-2xl font-bold">"They gave me a reason to smile again."</h3>
            <p className="mt-3 text-muted-foreground">Watch how we transformed Sarah's smile with a complete cosmetic makeover — from consultation to final result.</p>
            <div className="mt-5 flex items-center gap-2 text-sm">
              <div className="flex gap-0.5">{Array.from({length:5}).map((_,i) => <Star key={i} className="h-4 w-4 fill-warning text-warning"/>)}</div>
              <span className="font-medium">Sarah T. — Smile Makeover patient</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PRICING ---------- */
const PLANS = [
  { name: "Essentials", price: "$79", desc: "Perfect for routine care & prevention.", features: ["Comprehensive exam", "Professional cleaning", "Digital X-rays", "Oral cancer screening"], cta: "Book Essentials" },
  { name: "Smile Complete", price: "$249", popular: true, desc: "Our most-loved cosmetic package.", features: ["Everything in Essentials", "In-office whitening", "Smile design consult", "Fluoride & sealants", "Priority scheduling"], cta: "Book Smile Complete" },
  { name: "Total Restoration", price: "$1,299+", desc: "Full-mouth restoration & implants.", features: ["Custom treatment plan", "Implants or veneers", "3D imaging & modeling", "Sedation options", "Lifetime follow-up"], cta: "Book Consultation" },
];

function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Transparent Pricing" title="Simple plans. No surprises." sub="Insurance accepted. Flexible 0% payment plans available on all treatments." />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLANS.map((p, i) => (
            <motion.div key={p.name}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-3xl border p-7 shadow-card ${p.popular ? "border-primary/40 bg-card ring-2 ring-primary/20" : "border-border/60 bg-card"}`}>
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="rounded-full gradient-cta text-white hover:opacity-95"><Sparkles className="mr-1 h-3 w-3" /> Most Popular</Badge>
                </div>
              )}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{p.price}</span>
                <span className="text-sm text-muted-foreground">/ visit</span>
              </div>
              <ul className="mt-6 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-success shrink-0" />{f}</li>
                ))}
              </ul>
              <Button asChild className={`mt-7 w-full rounded-full h-11 ${p.popular ? "gradient-cta text-white" : ""}`} variant={p.popular ? "default" : "outline"}>
                <a href="#booking">{p.cta}</a>
              </Button>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          We accept Delta Dental, Cigna, Aetna, MetLife & more. Not insured? Ask about our in-house membership plan.
        </p>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const FAQS = [
  { q: "Do you accept my insurance?", a: "We accept most major PPO insurance providers including Delta Dental, Cigna, Aetna, and MetLife. Our team will verify your coverage and file claims on your behalf." },
  { q: "Is teeth whitening safe?", a: "Yes. Our in-office whitening uses professional-grade materials monitored by a specialist, making it safe and dramatically more effective than at-home kits." },
  { q: "How long do dental implants last?", a: "With proper care, dental implants can last a lifetime. We back every implant with a lifetime clinical follow-up program." },
  { q: "Do you offer emergency appointments?", a: "Yes — we reserve daily emergency slots and offer 24/7 phone support for urgent dental issues." },
  { q: "How much does Invisalign cost?", a: "Invisalign typically ranges from $3,500 to $7,500 depending on the complexity of your case. We offer 0% financing." },
  { q: "Are treatments painful?", a: "We use modern anesthetics, laser dentistry, and optional sedation to keep every visit comfortable and pain-free." },
];

function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="FAQ" title="Everything you want to know" sub="Quick answers to the questions we hear most. Can't find yours? Just ask." />
        <Accordion type="single" collapsible className="mt-10">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`i-${i}`} className="rounded-2xl border border-border/60 bg-card mb-3 px-5 shadow-card">
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Visit Us" title="We'd love to see you smile" sub="Drop in, call ahead, or message us on WhatsApp." />
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {[
            { icon: MapPin, title: "Address", value: "1200 Park Avenue, New York, NY 10028" },
            { icon: Phone, title: "Phone", value: "+1 (555) 0100", href: "tel:+15550100" },
            { icon: MessageCircle, title: "WhatsApp", value: "+1 (555) 0100", href: "https://wa.me/15550100" },
            { icon: Mail, title: "Email", value: "hello@lumiere-dental.com", href: "mailto:hello@lumiere-dental.com" },
            { icon: Clock, title: "Hours", value: "Mon–Sat · 8:00 – 20:00 · Sun closed" },
            { icon: Zap, title: "Emergency", value: "24/7 · +1 (555) 0111", href: "tel:+15550111" },
          ].map((c) => (
            <a key={c.title} href={c.href ?? undefined} className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-card transition hover:border-primary/40">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:gradient-hero group-hover:text-white">
                <c.icon className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.title}</div>
                <div className="mt-0.5 truncate font-medium">{c.value}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-border/60 shadow-card">
          <iframe
            title="Clinic map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-73.9700%2C40.7770%2C-73.9500%2C40.7870&layer=mapnik"
            className="h-[380px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground text-background">
      <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-xl gradient-hero text-white"><Smile className="h-5 w-5" /></div>
              <span className="font-display text-xl font-bold">Lumière<span className="text-primary">.</span></span>
            </div>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">Creating beautiful, healthy smiles with world-class dental care since 2010.</p>
            <div className="mt-5 flex items-center gap-2">
              <a href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20" aria-label="Instagram"><span className="text-xs">IG</span></a>
              <a href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20" aria-label="Facebook"><span className="text-xs">FB</span></a>
              <a href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20" aria-label="TikTok"><span className="text-xs">TT</span></a>
            </div>
          </div>
          <FooterCol title="Services" items={["General Dentistry", "Cosmetic Dentistry", "Implants", "Invisalign", "Emergency Care"]} />
          <FooterCol title="Company" items={["About Us", "Our Doctors", "Blog", "Careers", "Contact"]} />
          <div>
            <h4 className="font-display font-semibold">Stay in the loop</h4>
            <p className="mt-3 text-sm text-background/70">Smile tips, offers & news. No spam.</p>
            <form onSubmit={(e) => { e.preventDefault(); toast.success("Subscribed!"); }} className="mt-4 flex gap-2">
              <Input placeholder="you@email.com" className="bg-white/10 border-white/20 text-background placeholder:text-background/50" />
              <Button className="rounded-full gradient-cta text-white shrink-0">Join</Button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-background/60 md:flex-row">
          <div>© {new Date().getFullYear()} Lumière Dental. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-background">Privacy</a>
            <a href="#" className="hover:text-background">Terms</a>
            <a href="#" className="hover:text-background">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-display font-semibold">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm text-background/70">
        {items.map((i) => <li key={i}><a href="#" className="hover:text-background">{i}</a></li>)}
      </ul>
    </div>
  );
}

/* ---------- HELPERS ---------- */
function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{eyebrow}</div>
        <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">{sub}</p>
      </motion.div>
    </div>
  );
}

// Chevron used implicitly by Accordion; keep import optically referenced
void ChevronDown;
