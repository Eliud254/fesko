'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Top Social Bar */}
      <div className="bg-gray-900 text-white px-4 py-2">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <div className="text-xs">📍 Nairobi, Kenya • Open Mon-Sat 8AM-6PM</div>
          <div className="flex items-center gap-3">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-bold">
              FB
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-bold">
              TW
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-bold">
              IG
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-bold">
              LI
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg">
                F
              </div>
              <div>
                <span className="text-lg font-bold text-gray-900">FESKO</span>
                <div className="text-xs text-gray-600">DRIVING SCHOOL</div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {['HOME', 'ABOUT US', 'SERVICES', 'CONTACT', 'GALLERY'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              <div className="hidden lg:block text-sm text-gray-600">
                📞 +254 712 345 678
              </div>
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                BOOK NOW
              </Button>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 pt-3 border-t border-gray-200">
              <div className="text-sm text-gray-600 mb-3">📞 +254 712 345 678</div>
              {['HOME', 'ABOUT US', 'SERVICES', 'CONTACT', 'GALLERY'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-b from-blue-700 to-blue-600 text-white px-4 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-yellow-400 text-gray-900 px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
              ✓ NTSA APPROVED • 98% PASS RATE • 15+ LOCATIONS
            </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              Get Your Kenyan<br />Driving License <span className="text-yellow-300">Fast</span>
            </h1>
            <p className="text-xl lg:text-3xl mb-12 max-w-4xl mx-auto opacity-95 font-medium">
              NTSA-certified instructors • Modern training cars • Flexible schedules • Affordable prices
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 text-xl px-12 py-4 font-bold shadow-xl transform hover:scale-105 transition-all">
                Book First Lesson - KES 500
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 text-xl px-12 py-4 font-semibold transition-all">
                Call +254 712 345 678
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center border border-white/20">
                <div className="text-3xl font-black mb-2">21</div>
                <div className="text-sm font-medium">Days to License</div>
                <div className="text-xs opacity-80 mt-1">Average Duration</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center border border-white/20">
                <div className="text-3xl font-black mb-2">NTSA</div>
                <div className="text-sm font-medium">Certified</div>
                <div className="text-xs opacity-80 mt-1">All Instructors</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center border border-white/20">
                <div className="text-3xl font-black mb-2">98%</div>
                <div className="text-sm font-medium">Pass Rate</div>
                <div className="text-xs opacity-80 mt-1">First Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center border border-white/20">
                <div className="text-3xl font-black mb-2">5000+</div>
                <div className="text-sm font-medium">Students</div>
                <div className="text-xs opacity-80 mt-1">Successfully Trained</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Stripe */}
      <div className="h-4 bg-gradient-to-r from-primary via-accent to-primary" />

      {/* About Section */}
      <section id="about" className="px-4 py-16 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Fesko Driving School?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">NTSA-approved driving school with 10+ years experience in driver training across Kenya</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <div className="text-blue-600 font-bold text-lg">NTSA</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">NTSA Approved & Certified</h3>
                  <p className="text-gray-600">Fully licensed by the National Transport and Safety Authority. All our instructors are NTSA-certified with valid driving instructor licenses.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <div className="text-green-600 font-bold text-lg">5+</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Experienced NTSA Instructors</h3>
                  <p className="text-gray-600">Our instructors have 5+ years each and are certified by NTSA. They know exactly what you need to pass your driving test.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <div className="text-purple-600 font-bold text-lg">DC</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Training Fleet</h3>
                  <p className="text-gray-600">Dual-control training cars (Toyota Vitz, Nissan Note, Honda Fit) regularly inspected and insured for your safety.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <div className="text-yellow-600 font-bold text-lg">98%</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">98% First-Time Pass Rate</h3>
                  <p className="text-gray-600">Our students consistently pass their NTSA driving tests on the first attempt. We prepare you thoroughly!</p>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  View Our Success Stories
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Meet Our Instructors
                </Button>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <div className="bg-blue-600 text-white rounded-lg p-4 mb-6 inline-block">
                <div className="text-2xl font-bold">FESKO</div>
                <div className="text-sm">CARS</div>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Training Cars</h4>
              <p className="text-gray-600 mb-6">Modern, well-maintained vehicles perfect for learning</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-left">
                  <div className="text-lg font-bold text-gray-900 mb-2">Toyota Vitz</div>
                  <div className="text-sm text-gray-600">• Manual & Auto Available<br/>• Dual Controls<br/>• AC & Music System</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-left">
                  <div className="text-lg font-bold text-gray-900 mb-2">Nissan Note</div>
                  <div className="text-sm text-gray-600">• Easy to Drive<br/>• Perfect for Beginners<br/>• Fully Insured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* License Requirements Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Driving License Requirements</h2>
            <p className="text-lg text-gray-600">Everything you need to know about getting your Kenyan driving license</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-blue-100 text-blue-600 rounded-lg p-3 mb-4 text-center font-bold">
                DOCS
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Documents Required</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Original ID Card/Passport</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>2 Passport Photos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Copy of KRA PIN Certificate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Medical Certificate (Form M)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-green-100 text-green-600 rounded-lg p-3 mb-4 text-center font-bold">
                TEST
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">NTSA Test Process</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">1.</span>
                  <span>Theory Test (Road Signs & Rules)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">2.</span>
                  <span>Practical Driving Test</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">3.</span>
                  <span>Vision Test</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">4.</span>
                  <span>License Issuance (Same Day)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-purple-100 text-purple-600 rounded-lg p-3 mb-4 text-center font-bold">
                TIME
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Training Schedule</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Monday - Saturday: 6AM-6PM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Flexible Timing Available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>1 Hour per Lesson</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Weekend Classes Available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Stripe */}
      <div className="h-4 bg-gradient-to-r from-primary via-accent to-primary" />

      {/* App Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-yellow-700 to-yellow-600">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">GREAT DRIVING SCHOOL APP</h2>
              <p className="text-white/90 text-lg">
                Download our mobile app and manage your driving lessons on the go. Book classes, track progress, and communicate with instructors anytime, anywhere.
              </p>
              <div className="flex gap-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  📱 App Store
                </Button>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  🔽 Google Play
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">📱</div>
              <p className="text-muted-foreground font-semibold">Mobile App Interface</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Track Record</h2>
            <p className="text-lg text-gray-600">Numbers that show our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '5,000+', label: 'Students Trained', color: 'blue' },
              { number: '10+', label: 'Years Experience', color: 'green' },
              { number: '98%', label: 'Pass Rate', color: 'yellow' },
              { number: '15', label: 'Training Centers', color: 'purple' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-8 text-center shadow-md">
                <div className={`bg-${stat.color}-100 text-${stat.color}-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 font-bold text-xl`}>
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 py-16 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Driving License Courses</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">NTSA-approved courses to help you get your Kenyan driving license</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Class B - Manual License', 
                desc: 'Perfect for personal cars. Includes 30 practical lessons, theory classes, and NTSA test preparation.',
                badge: 'CLASS B',
                price: 'KES 15,000',
                duration: '4 weeks',
                includes: ['30 Practical Lessons', 'Theory Classes', 'NTSA Test Prep', 'Certificate'],
                license: 'Personal Cars'
              },
              { 
                title: 'Class B - Automatic License', 
                desc: 'Easier and faster to learn. Ideal for city driving in Nairobi. 25 lessons plus theory.',
                badge: 'CLASS B',
                price: 'KES 18,000',
                duration: '3 weeks',
                includes: ['25 Practical Lessons', 'Theory Classes', 'NTSA Test Prep', 'Certificate'],
                license: 'Personal Cars (Auto)'
              },
              { 
                title: 'Class A & CE - Professional Licenses', 
                desc: 'For commercial driving. Matatu, truck, and bus licenses with advanced training.',
                badge: 'PRO',
                price: 'KES 25,000',
                duration: '6 weeks',
                includes: ['40 Practical Lessons', 'Advanced Theory', 'NTSA Test Prep', 'Commercial License'],
                license: 'Commercial Vehicles'
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-600 h-32 flex items-center justify-center relative">
                  <div className="bg-yellow-400 text-gray-900 rounded-lg p-4">
                    <div className="text-2xl font-bold">{service.badge}</div>
                  </div>
                  <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    {service.license}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.desc}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                      <div className="text-sm text-gray-500">{service.duration}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-700 mb-2">What's included:</div>
                    <div className="space-y-1">
                      {service.includes.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="text-green-500">✓</span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    Enroll Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Services */}
          <div className="mt-12 bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'NTSA Test Booking', desc: 'We help you book your NTSA driving test', price: 'KES 500' },
                { title: 'License Renewal', desc: 'Quick license renewal assistance', price: 'KES 1,000' },
                { title: 'Defensive Driving', desc: 'Advanced safety techniques course', price: 'KES 8,000' },
                { title: 'Refresher Lessons', desc: 'For licensed drivers needing practice', price: 'KES 2,000/lesson' },
              ].map((extra, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">{extra.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{extra.desc}</p>
                  <div className="text-lg font-bold text-blue-600">{extra.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="px-4 py-20 bg-background">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">OUR PARTNERS</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {['🏢', '🚗', '📱', '🏆', '💼', '🌟'].map((partner, idx) => (
              <div key={idx} className="flex items-center justify-center h-20 bg-muted rounded-lg hover:bg-primary/10 transition">
                <span className="text-4xl">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">BECOME A MEMBER TODAY</h2>
              <p className="text-lg mb-8 opacity-90">
                Join our exclusive membership program and enjoy premium training benefits, priority booking, and special discounts.
              </p>
              <Button className="bg-accent text-primary hover:bg-accent/90 font-semibold">
                REGISTER HERE
              </Button>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg h-64 flex items-center justify-center">
              <span className="text-6xl">👥</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Ready to start driving? Contact us today to book your first lesson</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'Call Us', info: '+254 712 345 678', desc: 'Mon-Sat: 8AM-6PM', color: 'blue' },
              { title: 'Email', info: 'info@feskodrivingschool.com', desc: 'We reply within 24 hours', color: 'green' },
              { title: 'Visit Us', info: 'Nairobi, Kenya', desc: '15 training centers', color: 'purple' },
            ].map((contact, idx) => (
              <div key={idx} className="bg-white p-6 text-center shadow-md">
                <div className={`bg-${contact.color}-100 text-${contact.color}-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold`}>
                  {contact.title.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-blue-600 font-medium mb-1">{contact.info}</p>
                <p className="text-gray-600 text-sm">{contact.desc}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 lg:p-12 shadow-md max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Send us a Message</h3>
              <p className="text-gray-600">Fill out the form and we'll get back to you</p>
            </div>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                  <Input placeholder="Your name" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" className="h-12" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Subject</label>
                <Input placeholder="How can we help?" className="h-12" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                <textarea 
                  placeholder="Tell us about your driving goals..." 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none" 
                  rows={5}
                />
              </div>
              <div className="text-center">
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 px-8">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg">
                  F
                </div>
                <div>
                  <span className="text-lg font-bold">FESKO</span>
                  <div className="text-xs text-gray-400">DRIVING SCHOOL</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">Professional driving school since 2014. Training safe drivers across Kenya.</p>
              <div className="flex gap-3">
                <a href="#" className="bg-gray-700 hover:bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  FB
                </a>
                <a href="#" className="bg-gray-700 hover:bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  TW
                </a>
                <a href="#" className="bg-gray-700 hover:bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  IG
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#home" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="#about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="#services" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link href="#contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Our Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-gray-400 hover:text-white">Manual Driving</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Automatic Driving</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Defensive Driving</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">License Test</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="font-bold">P:</span>
                  <span>+254 712 345 678</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold">E:</span>
                  <span>info@feskodrivingschool.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold">L:</span>
                  <span>Nairobi, Kenya</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 Fesko Driving School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
