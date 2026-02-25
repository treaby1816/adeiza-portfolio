import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Target,
  Mail,
  Phone,
  Award,
  ChevronRight,
  Menu,
  X,
  Building,
  CheckCircle2,
  Calendar,
  MessageCircle,
  ArrowUp
} from 'lucide-react';

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education & Leadership', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className={`text-2xl font-black tracking-tighter ${scrolled ? 'text-white' : 'text-blue-950'} flex items-center gap-2 group transition-colors`}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-blue-500 flex items-center justify-center text-white shadow-[0_0_20px_-5px_rgba(13,148,136,0.5)] group-hover:shadow-[0_0_25px_-5px_rgba(13,148,136,0.7)] transition-shadow">
            <span className="font-black text-xl">A</span>
          </div>
          Adeiza.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-colors ${scrolled ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-teal-700'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-[1.02] ${scrolled ? 'bg-white/10 text-white backdrop-blur-sm border border-white/10 hover:bg-white/20' : 'bg-teal-600 text-white shadow-md shadow-teal-600/20 hover:bg-teal-700'}`}
          >
            Let's Talk
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${scrolled ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-blue-950'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0F2236] border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-semibold text-slate-300 hover:text-teal-400"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 relative overflow-hidden">
      {/* Premium subtle background overall */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.06),transparent_50%)] -z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(30,58,138,0.04),transparent_50%)] -z-10 pointer-events-none" />

      <motion.div
        className="flex-1 flex flex-col gap-6"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-semibold tracking-wide w-max shadow-sm">
          <Award size={16} />
          <span>Pharmaceutical Executive</span>
        </motion.div>

        <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-black text-blue-950 leading-[1.1] tracking-tight">
          Pharm. Onimisi <br className="hidden md:block" />
          <span className="text-teal-600 drop-shadow-sm">Joseph Adeiza</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="text-xl md:text-2xl font-medium text-slate-600">
          <strong className="font-extrabold text-blue-950">Portfolio Sales Manager</strong> • <span className="text-teal-700">Public Health Expert</span> • MBA
        </motion.p>

        <motion.div variants={fadeUp} className="text-slate-600 max-w-lg leading-relaxed text-lg font-medium min-h-[60px]">
          <Typewriter
            words={['Driving strategic value, healthcare solutions, and team leadership in the pharmaceutical sector.']}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={40}
            delaySpeed={1000}
          />
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mt-2">
          <a
            href="#experience"
            className="px-6 py-3 rounded-xl bg-teal-600 text-white font-bold hover:bg-teal-700 hover:scale-[1.02] shadow-md shadow-teal-600/20 transition-all flex items-center gap-2"
          >
            View Experience
            <ChevronRight size={18} />
          </a>
          <a
            href="mailto:adeonimi@gmail.com"
            className="px-6 py-3 rounded-xl bg-white text-blue-950 font-bold hover:bg-teal-50 border-2 border-slate-200 transition-all flex items-center gap-2 hover:scale-[1.02] shadow-sm hover:border-teal-200 hover:text-teal-700 group"
          >
            <Mail size={18} className="text-teal-600 group-hover:scale-110 transition-transform" />
            Email Me
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex-1 w-full max-w-md md:max-w-none relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative aspect-[3/4] md:aspect-[4/5] w-full max-w-sm mx-auto md:max-w-none rounded-[2.5rem] overflow-hidden bg-[#05111B] border border-white/10 shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1A28]/80 via-transparent to-teal-900/30 mix-blend-multiply z-10 pointer-events-none transition-opacity group-hover:opacity-50" />
          <img
            src="/suit.jpg"
            alt="Pharm. Onimisi Joseph Adeiza"
            className="w-full h-full object-cover object-top filter brightness-[1.10] contrast-[1.2] saturate-[1.1] transition-all duration-700 group-hover:scale-105"
          />
          {/* Glassmorphic card overlaying image */}
          <div className="absolute bottom-6 left-6 right-6 p-5 rounded-3xl bg-[#0B1A28]/70 backdrop-blur-xl border border-white/10 shadow-2xl z-20 flex items-center gap-5 transition-transform duration-500 group-hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.3)]">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <Target size={26} />
            </div>
            <div>
              <p className="font-bold text-white text-base tracking-wide">Strategic Leadership</p>
              <p className="text-sm text-slate-300 font-medium mt-0.5">Delivering value in healthcare.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#05111B] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center"
        >
          {/* Native Image Column */}
          <motion.div variants={fadeUp} className="lg:col-span-4">
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:mx-0 rounded-[2rem] overflow-hidden bg-[#0B1A28] border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1A28]/60 via-transparent to-teal-900/40 mix-blend-multiply z-10 pointer-events-none transition-opacity group-hover:opacity-30" />
              <img
                src="/native.jpg"
                alt="Pharm. Onimisi Joseph Adeiza in Native Attire"
                className="w-full h-full object-cover object-top filter brightness-[1.15] contrast-[1.1] saturate-[1.2] transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          <div className="lg:col-span-5 space-y-8">
            <motion.div variants={fadeUp}>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">About Me</h2>
              <div className="w-24 h-1.5 rounded-full bg-teal-500 mb-8" />
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                An adaptable and responsible professional with excellent research and organization skills built through intense moral and professional discipline. I am a dedicated team player with transferable skills in the health sector, driven to bring immediate and strategic value to every organization I lead.
              </p>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.2)] hover:border-teal-500/50">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Quick Stats</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0 group-hover:bg-teal-500/20 transition-colors">
                    <MapPin size={22} />
                  </div>
                  <div className="pt-1">
                    <p className="text-xs text-slate-400 font-semibold tracking-wider uppercase mb-1">Based in</p>
                    <p className="font-bold text-slate-200">Abuja, Nigeria</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <Target size={22} />
                  </div>
                  <div className="pt-1">
                    <p className="text-xs text-slate-400 font-semibold tracking-wider uppercase mb-1">Focus</p>
                    <p className="font-bold text-slate-200 leading-tight">Pharmaceutical<br />Sales & Public Health</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Portfolio Sales Manager (National)",
      company: "Embassy Pharmaceutical and Chemical Limited",
      period: "2026 - Present",
      current: true
    },
    {
      title: "Regional Sales Manager (North)",
      company: "Embassy Pharmaceutical and Chemical Limited",
      period: "2023 - 2025",
      current: false
    },
    {
      title: "Area Sales Manager (North Central)",
      company: "Embassy Pharmaceutical and Chemical Limited",
      period: "2019 - 2022",
      current: false
    },
    {
      title: "Medical Sales Representative (Abuja)",
      company: "Embassy Pharmaceutical",
      period: "2016 - 2018",
      current: false
    },
    {
      title: "Locum Pharmacist",
      company: "Sterling Pharmacy, Abuja",
      period: "2013 - 2016",
      current: false
    },
    {
      title: "Internship Training",
      company: "National Assembly Clinic, Abuja",
      period: "2014 - 2015",
      current: false
    },
    {
      title: "SIWES Industrial Training",
      company: "Dr. Meyer's Farmex, Ogun State",
      period: "2010",
      current: false
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#0B1A28] relative overflow-hidden text-slate-200">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Professional Experience</h2>
          <div className="w-24 h-1.5 rounded-full bg-teal-500 mx-auto" />
        </motion.div>

        <div className="relative border-l border-white/10 pl-8 ml-4 md:ml-0 space-y-16 pb-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -left-[41px] w-5 h-5 rounded-full border-4 border-[#0B1A28] z-10 transition-all duration-300 bg-slate-600 group-hover:bg-teal-400 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(45,212,191,0.5)]" />

              <div className={`p-8 rounded-3xl transition-all duration-300 border glass-card cursor-pointer hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.2)] hover:border-teal-500/50 hover:bg-white/10 ${exp.current ? 'border-teal-500/40 bg-white/10 shadow-[0_0_30px_-5px_rgba(20,184,166,0.2)]' : 'border-white/10'}`}>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <span className={`inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl whitespace-nowrap w-fit ${exp.current ? 'bg-teal-500/10 text-teal-300 border border-teal-500/20' : 'bg-white/5 text-slate-300 border border-white/5'}`}>
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>
                <div className={`flex items-center gap-2 font-medium ${exp.current ? 'text-teal-400' : 'text-slate-400'}`}>
                  <Building size={18} />
                  <span>{exp.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  const educations = [
    {
      degree: "Honorary Doctorate",
      school: "Yahweh Hills University, South Africa",
      period: "Dec 2024",
      subtitle: "On Leadership and Health Management",
      icon: <Award size={24} className="text-amber-500" />
    },
    {
      degree: "Master in Public Health (MPH)",
      school: "Ahmadu Bello University, Zaria",
      period: "2023 - 2024",
      icon: <GraduationCap size={24} className="text-teal-600" />
    },
    {
      degree: "Master of Business Administration (MBA)",
      school: "Ahmadu Bello University, Zaria",
      period: "2022 - 2023",
      icon: <GraduationCap size={24} className="text-blue-600" />
    },
    {
      degree: "Bachelor of Pharmacy (B. Pharm)",
      school: "Ahmadu Bello University, Zaria",
      period: "2007 - 2014",
      icon: <GraduationCap size={24} className="text-purple-600" />
    }
  ];

  const certifications = [
    "Leadership & Management in Global Health",
    "Project Management in Global Health"
  ];

  const affiliations = [
    "Fellow, Institute of Management Consultants (IMC)",
    "President, Advocacy for Youth Development Foundation",
    "Head of Medicals, BATMEDICS",
    "Committee Chairman, Association of Medical Sales Reps Professionals of Nigeria",
    "Member, Pharmacists Council of Nigeria (PCN)",
    "Member, Pharmaceutical Society of Nigeria (PSN)"
  ];

  return (
    <section id="education" className="py-24 bg-[#05111B] relative border-t border-white/5 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Education & Leadership</h2>
          <div className="w-24 h-1.5 rounded-full bg-teal-500 mx-auto" />
        </motion.div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">

          {/* Education Block (Spans full width top or left wide col) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.2)] hover:border-teal-500/50 hover:bg-white/10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400">
                  <GraduationCap size={24} />
                </div>
                Higher Education
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {educations.map((edu, idx) => (
                  <div key={idx} className={`glass-card p-6 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.2)] hover:border-teal-500/50 hover:bg-white/10 cursor-pointer group ${idx === 2 ? 'md:col-span-2' : ''}`}>
                    <h4 className="font-bold text-white text-xl mb-2 leading-tight group-hover:text-teal-300 transition-colors">{edu.degree}</h4>
                    {edu.subtitle && <p className="text-teal-400 text-sm font-medium mb-2 italic">{edu.subtitle}</p>}
                    <p className="text-slate-300 font-medium mb-4">{edu.school}</p>
                    <span className="inline-flex items-center gap-1.5 bg-[#0B1A28]/50 border border-white/10 text-slate-300 text-xs font-semibold tracking-wider px-3 py-1.5 rounded-lg">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 bg-teal-900/20 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-teal-500/20 relative overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.2)] hover:border-teal-500/50 hover:bg-teal-900/40 cursor-pointer"
          >
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-300">
                  <Award size={24} />
                </div>
                Certifications
              </h3>
              <ul className="space-y-6 flex-1 justify-center flex flex-col">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <CheckCircle2 size={24} className="text-teal-400 shrink-0 mt-1" />
                    <div>
                      <span className="text-white font-semibold text-lg leading-tight block mb-1">{cert}</span>
                      <span className="text-sm text-slate-400 font-medium flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-teal-400" />
                        University of Washington
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Affiliations Badge Cloud (Spans full width bottom) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.2)] hover:border-teal-500/50 hover:bg-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <Briefcase size={24} />
              </div>
              Leadership & Professional Affiliations
            </h3>
            <div className="flex flex-wrap gap-4">
              {affiliations.map((affiliation, idx) => {
                const parts = affiliation.split(', ');
                const role = parts.length > 1 ? parts[0] : null;
                const org = parts.length > 1 ? parts[1] : affiliation;

                return (
                  <div key={idx} className="inline-flex flex-col glass-card px-6 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.2)] hover:border-teal-500/50 hover:bg-white/10 group lg:min-w-[280px] cursor-pointer">
                    {role && <span className="text-teal-400 font-bold text-xs uppercase tracking-widest mb-2">{role}</span>}
                    <span className="text-slate-300 font-semibold group-hover:text-white text-base leading-snug">{org}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#020A12] text-slate-300 py-24 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 lg:grid-cols-12">

        <div className="lg:col-span-8 flex flex-col justify-between">
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">Let's build strategic <br />solutions together.</h2>
            <p className="text-slate-400 text-xl font-light max-w-lg mb-10 leading-relaxed">
              Open to leadership roles, consulting opportunities, and strategic partnerships in the pharmaceutical sector.
            </p>
            <a
              href="mailto:adeonimi@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-teal-600 text-white font-bold hover:bg-teal-700 transition-all hover:scale-[1.02] shadow-md shadow-teal-600/20 cursor-pointer z-20 relative"
            >
              Get In Touch
              <ChevronRight size={20} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 self-center">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.2)] hover:border-teal-500/50 hover:bg-white/10">
            <h3 className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4">Contact Details</h3>
            <ul className="space-y-6">
              <li>
                <a href="mailto:adeonimi@gmail.com" className="flex items-center gap-4 hover:text-teal-400 transition-colors group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-teal-500/20 group-hover:border-teal-500/30 transition-all">
                    <Mail size={22} className="text-white group-hover:text-teal-400" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 uppercase tracking-widest mb-1 font-bold">Email</span>
                    <span className="text-base font-medium text-slate-200 group-hover:text-white transition-colors">adeonimi@gmail.com</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+2348062947363" className="flex items-center gap-4 hover:text-teal-400 transition-colors group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-teal-500/20 group-hover:border-teal-500/30 transition-all">
                    <Phone size={22} className="text-white group-hover:text-teal-400" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 uppercase tracking-widest mb-1 font-bold">Phone</span>
                    <span className="text-base font-medium text-slate-200 group-hover:text-white transition-colors">0806 294 7363</span>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center">
                  <MapPin size={22} className="text-white" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 uppercase tracking-widest mb-1 font-bold">Location</span>
                  <span className="text-base font-medium text-slate-200">Sam Njouma Estate, Galadimawa, Abuja.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500 gap-4 font-medium">
        <p>© {new Date().getFullYear()} Pharm. Onimisi Joseph Adeiza. All rights reserved.</p>
        <div className="flex items-center gap-8">
          <a href="https://www.linkedin.com/in/onimisi-adeiza-7132b9125" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://x.com/sonad360" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-teal-200 selection:text-teal-900 relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
      </main>
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Scroll to Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-slate-800 text-white flex items-center justify-center shadow-lg hover:bg-slate-700 transition-colors border border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              aria-label="Scroll to top"
            >
              <ArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/2348062947363?text=Hello%20Pharm.%20Onimisi!"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:bg-[#20bd5a] hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 group relative"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={30} />
          <span className="absolute right-16 px-3 py-1.5 bg-slate-800 text-white text-xs font-medium rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}

export default App;
