'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Award, CheckCircle2, Star, Target, ShieldCheck, Car, Users, GraduationCap, Briefcase, Mail, MapPin, ChevronRight, PlayCircle, Clock, Zap, Smartphone } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', program: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false)

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', program: '', message: '' })
    }, 1500)
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setNewsletterSubscribed(true)
    setNewsletterEmail('')
  }

  return (
    <div className="min-h-screen mesh-gradient selection:bg-primary selection:text-white">
      {/* Dynamic Top Bar */}
      <div className="bg-gray-950/90 backdrop-blur-sm text-white/60 px-6 py-2.5 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase border-b border-white/5 relative z-[60]">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 group cursor-default">
              <MapPin className="h-3.5 w-3.5 text-primary group-hover:scale-110 transition-transform" />
              Nairobi, Kenya
            </span>
            <span className="hidden md:inline text-white/10">|</span>
            <span className="hidden md:flex items-center gap-2 group cursor-default">
              <Phone className="h-3.5 w-3.5 text-primary group-hover:scale-110 transition-transform" />
              +254 721 755 126
            </span>
          </div>
          <div className="flex items-center gap-5">
            {['In', 'Ig', 'Tw'].map(s => (
              <a key={s} href="#" className="hover:text-primary transition-colors hover:scale-110 transition-all">{s}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Elite Navigation */}
      <nav className="sticky top-0 z-50 px-4 sm:px-6 pt-4">
        <div className="mx-auto max-w-7xl">
          <div className="glass-card rounded-[2rem] px-6 sm:px-8 py-4 flex items-center justify-between border-white/40 shadow-2xl transition-all duration-500 hover:shadow-primary/5">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gray-900 text-white font-black text-lg transition-all duration-500 group-hover:rounded-3xl group-hover:rotate-[360deg] shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10">F</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black tracking-[-0.03em] text-gray-950 font-heading leading-tight uppercase">Fesko</span>
                <span className="text-[8px] uppercase tracking-[0.3em] font-black text-primary/60 leading-none">Elite Academy</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {['About', 'Curriculum', 'Mentors', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-500 hover:text-gray-950 font-black text-[11px] tracking-[0.15em] uppercase transition-all relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full group-hover:left-0" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Button size="sm" className="hidden sm:flex rounded-2xl h-10 px-7 bg-gray-900 text-white hover:bg-gray-800 transition-all font-black text-[10px] tracking-widest uppercase shadow-xl hover:translate-y-[-2px] active:translate-y-0">
                Enroll Now
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden rounded-2xl h-10 w-10 hover:bg-black/5"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu - Enhanced */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 glass-card rounded-[2.5rem] p-4 animate-in slide-in-from-top-4 duration-500 border-white/60">
              <div className="flex flex-col gap-1">
                {['Home', 'About Us', 'Programs', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="py-4 px-6 rounded-2xl hover:bg-black/5 text-gray-900 font-black text-xs tracking-widest uppercase transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <div className="h-px bg-black/5 my-2 mx-6" />
                <Button className="w-full h-14 rounded-2xl font-black text-[11px] tracking-widest uppercase bg-primary mb-2 shadow-2xl">
                  Quick Registration
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Cinematic Hero Section */}
      <section id="home" className="relative pt-20 pb-20 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            {/* Split Content - Main Text */}
            <div className="lg:col-span-7 relative z-10 space-y-10 lg:space-y-14">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white shadow-xl shadow-black/[0.02] border border-gray-100 animate-in fade-in slide-in-from-left-4 duration-1000">
                <div className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">NTSA Approved Excellence</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] tracking-[-0.05em] text-gray-950 font-heading">
                  THE FUTURE <br />
                  <span className="text-gradient">OF DRIVING.</span>
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed max-w-lg font-medium tracking-tight">
                  Experience elite driving education redefined for the modern age. Where safety meets sophistication through certified Kenyan mentorship.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Button size="lg" className="h-16 px-10 rounded-[2rem] bg-primary text-white hover:bg-primary/90 font-black text-[11px] tracking-[0.2em] uppercase shadow-2xl shadow-primary/40 hover:scale-105 transition-all active:scale-95">
                  Begin Journey <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <div className="group flex items-center gap-4 cursor-pointer">
                  <div className="h-16 w-16 glass-card rounded-full flex items-center justify-center border-white transition-all duration-500 group-hover:scale-110 shadow-xl group-active:scale-95">
                    <PlayCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Watch Story</span>
                    <span className="text-xs font-black text-gray-950 tracking-tight">Our 10Y Legacy</span>
                  </div>
                </div>
              </div>

              {/* Advanced Trust Indicators */}
              <div className="flex items-center gap-12 pt-10 border-t border-gray-950/5">
                {[
                  { val: '98%', lab: 'Success Rate' },
                  { val: '15K+', lab: 'Graduates' },
                  { val: '25+', lab: 'Top Mentors' }
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-2xl font-black text-gray-950 tracking-tighter leading-none">{stat.val}</div>
                    <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{stat.lab}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative w-full">
              <div className="relative w-full h-[500px] lg:h-[650px] rounded-[3.5rem] overflow-hidden shadow-2xl group border-[8px] border-red-500 bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200"
                  alt="Elite Driving Environment"
                  fill
                  unoptimized
                  className="object-cover transition-all duration-[2s] group-hover:scale-110 group-hover:rotate-2"
                  priority
                />

                {/* Float Card - Overlay */}
                <div className="absolute top-10 right-[-2rem] glass-card p-6 rounded-[2.5rem] border-white/20 shadow-3xl animate-bounce-slow z-20">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg">
                      <Star className="h-5 w-5" fill="currentColor" />
                    </div>
                    <div>
                      <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Top Ranking</div>
                      <div className="text-xs font-black text-gray-950">#1 Academy 2024</div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end z-10">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-300 overflow-hidden shadow-lg">
                          <Image src={`https://i.pravatar.cc/100?u=${i}`} alt="Avatar" width={32} height={32} unoptimized />
                        </div>
                      ))}
                    </div>
                    <div className="text-[10px] font-black text-white uppercase tracking-widest">
                      5,000+ Enrolled Students
                    </div>
                  </div>
                </div>
              </div>

              {/* Asymmetrical Decor Elements */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-primary/20 blur-[120px] rounded-full" />
              <div className="absolute -z-10 top-20 -left-10 w-48 h-48 bg-accent/30 blur-[100px] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Stripe */}
      <div className="h-4 bg-gradient-to-r from-primary via-accent to-primary" />

      {/* About Section - Professional Refinement */}
      <section id="about" className="px-4 py-24 lg:py-36 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
            <div className="relative w-full">
              <div className="relative w-full rounded-[3rem] overflow-hidden border-[8px] border-red-500 bg-gray-200">
                <div className="bg-gray-200 relative h-[500px] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1596484552979-3a139031ca92?w=1200"
                    alt="Elite Safety Training"
                    fill
                    unoptimized
                    className="object-cover transition-all duration-[2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent z-10" />
                </div>

                {/* Floating Achievement */}
                <div className="absolute top-8 left-8 glass-card px-6 py-4 rounded-[1.5rem] border-white/40 animate-float z-20">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-900">Industry Leader</span>
                  </div>
                </div>
              </div>
              {/* Asymmetrical Shadow Pattern */}
              <div className="absolute -bottom-10 -left-10 -z-10 w-full h-full border-2 border-primary/10 rounded-[4rem]" />
            </div>

            <div className="space-y-12 order-1 lg:order-2">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-primary font-black uppercase tracking-[0.3em] text-[10px]">
                  <div className="h-0.5 w-10 bg-primary/20" />
                  Our Legacy
                </div>
                <h2 className="text-4xl lg:text-6xl font-black text-gray-950 leading-[0.95] tracking-[-0.04em] font-heading">
                  CRAFTING <span className="text-primary italic">SAFE</span> <br />DRIVERS FOR LIFE.
                </h2>
                <p className="text-sm lg:text-base text-gray-500 leading-relaxed font-medium tracking-tight">
                  We transcend basic test preparation. Our mission is to cultivate safety as a second nature, combining technical mastery with defensive wisdom.
                </p>
              </div>

              <div className="grid gap-10">
                {[
                  { title: 'NTSA GOLD Standards', desc: 'Operating at the peak of Kenyan regulatory excellence.', icon: ShieldCheck },
                  { title: 'Dual-Control Mastery', desc: 'Our elite fleet ensures absolute safety during your transition.', icon: Car },
                  { title: 'Personalized Pace', desc: 'Learning architecture tailored to your unique rhythm.', icon: Target }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="h-14 w-14 shrink-0 glass-card rounded-2xl flex items-center justify-center border-white/50 text-primary shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-500 cursor-default">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-black text-gray-950 uppercase tracking-widest">{item.title}</h4>
                      <p className="text-xs text-gray-400 font-medium leading-relaxed max-w-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Instructors Section */}
      <section id="mentors" className="px-4 py-24 lg:py-40 bg-slate-50/50 relative overflow-hidden">
        <div className="absolute -z-10 top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.02)_0%,transparent_70%)]" />
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 lg:mb-24 space-y-6">
            <div className="text-primary font-black tracking-[0.4em] uppercase text-[10px] bg-primary/5 inline-block px-5 py-2 rounded-full">Elite Mentors</div>
            <h2 className="text-4xl lg:text-7xl font-black text-gray-950 font-heading tracking-[-0.04em] leading-none uppercase">Learn from the <br /><span className="text-gradient">Champions.</span></h2>
            <p className="text-sm text-gray-400 max-w-lg mx-auto font-medium tracking-tight">
              Our team consists of more than just teachers—they are dedicated safety advocates with decades of combined experience on Kenyan roads.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                name: 'John Kamau',
                role: 'Senior Lead Instructor',
                exp: '15+ Years',
                img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800'
              },
              {
                name: 'Sarah Wanjiru',
                role: 'Defensive Expert',
                exp: '10+ Years',
                img: 'https://images.unsplash.com/photo-1596484552979-3a139031ca92?w=800'
              },
              {
                name: 'Michael Ochieng',
                role: 'Commercial Specialist',
                exp: '12+ Years',
                img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800'
              },
            ].map((mentor, idx) => (
              <div key={idx} className="group relative w-full">
                <div className="relative w-full h-[450px] rounded-[3rem] overflow-hidden mb-8 border-[8px] border-red-500 bg-gray-200">
                  <Image
                    src={mentor.img}
                    alt={mentor.name}
                    fill
                    unoptimized
                    className="object-cover transition-all duration-[1.5s] group-hover:scale-105"
                  />
                  {/* Floating Metadata Card */}
                  <div className="absolute inset-x-4 bottom-4 glass-card p-6 rounded-[2rem] border-white/40 shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">{mentor.role}</div>
                        <div className="text-sm font-black text-gray-950 tracking-tight">{mentor.name}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Experience</div>
                        <div className="text-xs font-black text-gray-950">{mentor.exp}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Testimonials Section */}
      <section className="px-6 py-24 lg:py-40 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[150px] rounded-full scale-150 -translate-y-1/2" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="h-16 w-16 bg-primary rounded-[2rem] flex items-center justify-center text-white shadow-3xl shadow-primary/20">
                <Users className="h-8 w-8" />
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-white leading-[0.9] tracking-[-0.05em] font-heading">
                SUCCESS <br />WITHOUT <span className="text-primary italic">FRONTIERS.</span>
              </h2>
              <p className="text-sm lg:text-base text-white/40 font-medium leading-relaxed max-w-md tracking-tight">
                Over 5,000 students have transitioned from complete novices to confident, licensed drivers through Fesko's elite curriculum.
              </p>

              {/* Advanced Testimonial Card */}
              <div className="glass-card p-10 rounded-[3rem] border-white/10 shadow-3xl group bg-white/[0.03]">
                <div className="flex gap-1 mb-6 text-primary">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4 w-4" fill="currentColor" />)}
                </div>
                <p className="text-lg lg:text-xl font-medium leading-relaxed text-white/80 tracking-tight italic">
                  "The precision of training at Fesko is unmatched. I didn't just pass my test; I gained a lifetime of road confidence."
                </p>
                <div className="flex items-center gap-5 mt-10">
                  <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative">
                    <Image src="https://i.pravatar.cc/100?u=jon" alt="Alumni" fill unoptimized className="object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-white tracking-widest uppercase">Jonathan M.</div>
                    <div className="text-[10px] font-black text-primary uppercase tracking-widest">Class B Graduate</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 lg:gap-10">
              {[
                { label: 'Licensed Drivers', val: '5K+' },
                { label: 'Training Hours', val: '120K+' },
                { label: 'Safety Rating', val: '99%' },
                { label: 'Locations', val: '12+' }
              ].map((stat, i) => (
                <div key={i} className="glass-card p-8 lg:p-12 rounded-[2.5rem] border-white/5 text-center transition-all duration-700 hover:border-primary/20 hover:bg-white/[0.05]">
                  <div className="text-3xl lg:text-5xl font-black text-white tracking-tighter mb-2">{stat.val}</div>
                  <div className="text-[9px] lg:text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pro Programs Section */}
      <section id="curriculum" className="px-6 py-24 lg:py-40 bg-white relative">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 lg:mb-32 gap-10">
            <div className="space-y-6 max-w-2xl">
              <div className="text-primary font-black tracking-[0.4em] uppercase text-[10px] bg-primary/5 inline-block px-5 py-2 rounded-full">Pro Curriculum</div>
              <h2 className="text-4xl lg:text-7xl font-black text-gray-950 font-heading tracking-[-0.04em] leading-[0.9] uppercase">Professional <br /><span className="text-gradient">License Tracks.</span></h2>
              <p className="text-sm lg:text-base text-gray-400 font-medium tracking-tight">
                Engineered for safety and absolute compliance. Each program is a blueprint for career excellence or personal mobility.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="h-14 px-8 rounded-2xl font-black text-[10px] uppercase tracking-widest border-gray-100 shadow-xl">Full Catalog</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              { title: 'Class B - Manual', price: '14,500', time: '30 Working Days', icon: Car, level: 'Foundation', desc: 'Master the core mechanics of manual driving with expert precision.' },
              { title: 'Class B - Auto', price: '16,000', time: '21 Working Days', icon: Zap, level: 'Specialist', desc: 'Focus on road awareness and safe navigation with automatic ease.' },
              { title: 'Commercial CDL', price: '22,500', time: '45 Working Days', icon: Briefcase, level: 'Mastery', desc: 'Advance your career with commercial certifications for heavy vehicles.' },
            ].map((course, idx) => (
              <div key={idx} className="glass-card p-10 rounded-[3rem] border-gray-50 flex flex-col justify-between transition-all duration-700 hover:shadow-primary/5 hover:translate-y-[-12px] group relative overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-x-12 -translate-y-12 transition-transform duration-700 group-hover:scale-[3] group-hover:opacity-100 opacity-20" />
                <div className="relative z-10 space-y-10">
                  <div className="flex justify-between items-start">
                    <div className="h-16 w-16 glass-card rounded-2xl flex items-center justify-center bg-gray-950 text-white shadow-2xl transition-transform duration-500 group-hover:rotate-[360deg]">
                      <course.icon className="h-7 w-7" />
                    </div>
                    <div className="text-right">
                      <div className="text-[9px] font-black text-primary uppercase tracking-[0.2em] mb-1">{course.level}</div>
                      <div className="text-lg font-black text-gray-950 tracking-tighter">KES {course.price}</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-black text-gray-950 tracking-tight leading-none uppercase">{course.title}</h3>
                    <p className="text-xs text-gray-400 font-medium leading-relaxed">{course.desc}</p>
                    <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest py-2">
                      <Clock className="h-3.5 w-3.5 text-primary" /> {course.time}
                    </div>
                  </div>
                  <Button className="w-full h-14 rounded-[1.5rem] bg-gray-50 text-gray-950 hover:bg-primary hover:text-white font-black text-[10px] tracking-widest uppercase transition-all duration-500">
                    Enroll Today
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Metrics Section - Refined */}
      <section className="px-4 py-20 bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { number: '15,000+', label: 'Graduates', icon: GraduationCap },
              { number: '12+', label: 'Training Hubs', icon: MapPin },
              { number: '25+', label: 'Expert Mentors', icon: Users },
              { number: '10Y', label: 'Legacy', icon: Award },
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-4 lg:justify-center">
                <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary border border-slate-100">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xl font-black text-gray-900 font-heading tracking-tight leading-none mb-1">{stat.number}</div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section - Refined */}
      <section className="px-4 py-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-3">Our Network</div>
            <h2 className="text-2xl font-black text-gray-900 font-heading tracking-tight underline decoration-primary/20 decoration-4 underline-offset-8">INDUSTRY PARTNERS</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[ShieldCheck, Car, Smartphone, Award, Briefcase, Star].map((Icon, idx) => (
              <div key={idx} className="flex items-center justify-center h-24 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-xl hover:border-primary/10 transition-all group">
                <Icon className="h-8 w-8 text-gray-300 group-hover:text-primary transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platinum Membership Section */}
      <section className="px-6 py-24 lg:py-40 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="glass-card p-12 lg:p-24 rounded-[4rem] border-white/5 bg-white/[0.02] relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-10">
                <div className="inline-block px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
                  The Platinum Club
                </div>
                <h2 className="text-5xl lg:text-8xl font-black leading-[0.85] font-heading tracking-[-0.05em] uppercase">
                  UNLIMITED <br /><span className="text-gradient">ACCESS.</span>
                </h2>
                <p className="text-white/40 text-sm lg:text-base font-medium leading-relaxed max-w-lg tracking-tight">
                  Join our elite membership program for priority booking, defensive driving masterclasses, and lifelong refresher benefits.
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <Button className="h-16 px-12 rounded-[2.5rem] bg-primary text-white hover:bg-primary/90 font-black text-[11px] uppercase tracking-[0.2em] shadow-3xl shadow-primary/40 transition-all active:scale-95">
                    Become a Member
                  </Button>
                  <Button variant="outline" className="h-16 px-12 rounded-[2.5rem] bg-transparent border-white/10 text-white hover:bg-white/5 font-black text-[11px] uppercase tracking-[0.2em] transition-all">
                    View Benefits
                  </Button>
                </div>
              </div>
              <div className="relative group">
                <div className="aspect-square bg-white/[0.03] rounded-[3.5rem] border border-white/10 backdrop-blur-3xl flex items-center justify-center p-16 overflow-hidden relative shadow-3xl">
                  <Users className="h-40 w-40 text-primary/10 group-hover:scale-110 group-hover:text-primary/20 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                  {/* Floating Micro Card */}
                  <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-[2rem] border-white/10 animate-bounce-slow">
                    <Award className="h-10 w-10 text-primary mb-3" />
                    <div className="text-[10px] font-black text-white uppercase tracking-widest">Lifetime Validation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Elite Refinement */}
      <section id="contact" className="px-4 py-24 lg:py-36 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="text-primary font-bold tracking-[0.2em] uppercase text-[10px]">Contact Us</div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-[1.2] font-heading tracking-tight">
                  Ready to Start Your <span className="text-primary italic">Journey?</span>
                </h2>
                <p className="text-sm sm:text-base text-gray-400 font-medium leading-relaxed max-w-lg">
                  Have specific questions about our NTSA curriculum or class schedules? Our admissions team provides expert guidance for every student.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { title: 'Direct Line', info: '+254 721 755 126', icon: Phone },
                  { title: 'Admissions Email', info: 'hello@feskodriving.com', icon: Mail },
                  { title: 'Central Office', info: 'Nairobi, Kenya', icon: MapPin },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-center group">
                    <div className="h-12 w-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest leading-none mb-1.5">{item.title}</div>
                      <div className="text-lg font-black text-gray-900 font-heading tracking-tight">{item.info}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-8 sm:p-12 lg:p-16 rounded-[4rem] border border-slate-100 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in duration-500">
                  <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 font-heading">Message Sent!</h3>
                  <p className="text-gray-500 font-medium">Our admissions team will contact you shortly.</p>
                  <Button variant="outline" onClick={() => setSubmitted(false)} className="rounded-xl">Send Another</Button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="h-12 rounded-xl border-gray-200 focus:ring-primary bg-white text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="h-12 rounded-xl border-gray-200 focus:ring-primary bg-white text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Program of Interest</label>
                    <Input
                      required
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      placeholder="Class B - Manual"
                      className="h-12 rounded-xl border-gray-200 focus:ring-primary bg-white text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us how we can help you today..."
                      className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px] resize-none bg-white text-sm"
                    />
                  </div>
                  <Button disabled={isSubmitting} type="submit" className="w-full h-14 rounded-xl text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:translate-y-[-2px] transition-all">
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Elite Refinement */}
      <footer className="bg-gray-950 text-white pt-24 pb-12 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
            <div className="space-y-8">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-bold text-lg shadow-lg">
                  F
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-black tracking-tight text-white font-heading leading-tight">FESKO</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-primary leading-none">Driving School</span>
                </div>
              </Link>
              <p className="text-white/40 text-sm font-medium leading-relaxed">
                Pioneering road safety in Kenya since 2014. Professional, NTSA-approved training designed for the modern driver.
              </p>
              <div className="flex gap-4">
                {['FB', 'TW', 'IG', 'LI'].map((social) => (
                  <a key={social} href="#" className="h-9 w-9 rounded-full border border-white/5 flex items-center justify-center text-[10px] font-black hover:bg-white hover:text-black transition-all">
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-black font-heading mb-8 uppercase tracking-widest text-primary">Explore</h4>
              <ul className="space-y-4">
                {['Home', 'About Us', 'Our Courses', 'Instructors', 'Contact'].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-white/40 hover:text-white text-sm font-bold transition-colors flex items-center gap-2 group">
                      <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-black font-heading mb-8 uppercase tracking-widest text-primary">Programs</h4>
              <ul className="space-y-4">
                {['Manual Training', 'Automatic Training', 'Commercial C1/D', 'Defensive Skills', 'Refresher'].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-white/40 hover:text-white text-sm font-bold transition-colors flex items-center gap-2 group">
                      <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-black font-heading mb-8 uppercase tracking-widest text-primary">Newsletter</h4>
              <p className="text-white/40 text-sm font-medium mb-6">Stay informed with road safety tips and professional driving insights.</p>
              {newsletterSubscribed ? (
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center animate-in fade-in">
                  <CheckCircle2 className="h-5 w-5 text-primary mx-auto mb-2" />
                  <p className="text-xs font-bold text-white">Subscribed Successfully!</p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <Input
                    required
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Your email address"
                    className="bg-white/5 border-white/10 h-11 rounded-xl text-white text-xs placeholder:text-white/20"
                  />
                  <Button type="submit" className="w-full h-11 rounded-xl font-black text-[10px] uppercase tracking-widest">Subscribe</Button>
                </form>
              )}
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[11px] font-bold text-white/20 uppercase tracking-widest">© 2025 Fesko Driving School. Elite Standards.</p>
            <div className="flex gap-8">
              <a href="#" className="text-[11px] font-bold text-white/20 hover:text-white transition-colors uppercase tracking-widest">Privacy</a>
              <a href="#" className="text-[11px] font-bold text-white/20 hover:text-white transition-colors uppercase tracking-widest">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

