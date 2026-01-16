
import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Instagram, 
  Linkedin, 
  MessageCircle,
  Stethoscope,
  Activity,
  Award,
  ArrowRight,
  Star,
  Loader2
} from 'lucide-react';

// --- Types ---
type View = 'home' | 'about' | 'services' | 'contact';

// --- Layout Components ---

const Navbar: React.FC<{ currentView: View, setView: (v: View) => void }> = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: View) => {
    setView(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { name: string, id: View }[] = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || currentView !== 'home' ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => handleNav('home')}>
            <div className="bg-purple-600 p-2 rounded-xl group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-purple-600/20">
              <Heart className="w-6 h-6 text-yellow-400" fill="currentColor" />
            </div>
            <span className="text-xl font-extrabold tracking-tighter">
              DR. JORDAN <span className="text-purple-500">MUGISHA</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:text-yellow-400 ${currentView === link.id ? 'text-yellow-400' : 'text-slate-400'}`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNav('contact')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2.5 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-600/25"
            >
              Book Now
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/98 fixed inset-0 z-40 flex flex-col items-center justify-center space-y-10 animate-in fade-in duration-300">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 p-2 text-white"><X size={32}/></button>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`text-3xl font-black uppercase tracking-tighter ${currentView === link.id ? 'text-yellow-400' : 'text-white'}`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className="bg-purple-600 text-white px-12 py-5 rounded-full font-black text-xl shadow-2xl shadow-purple-600/30"
          >
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

// --- Views ---

const HomeView: React.FC<{ setView: (v: View) => void }> = ({ setView }) => (
  <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background accents placed behind everything to avoid blurring main images */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 bg-purple-500/15 border border-purple-500/20 px-4 py-1.5 rounded-full mb-8">
            <Activity className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-[10px] font-black tracking-widest uppercase">Trusted Cardiac Excellence</span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-black leading-[0.9] mb-8 tracking-tighter">
            Dr. Jordan <br />
            <span className="text-gradient">Mugisha</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed font-medium">
            Expert Cardiologist in Tanzania providing professional heart care with 5+ years of specialized experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <button
              onClick={() => { setView('contact'); window.scrollTo(0, 0); }}
              className="flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-purple-600/20 group active:scale-95"
            >
              <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
              Book Your Appointment
            </button>
            <button
              onClick={() => { setView('about'); window.scrollTo(0, 0); }}
              className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-10 py-5 rounded-2xl font-black text-lg transition-all active:scale-95"
            >
              Learn More
            </button>
          </div>
        </div>
        
        <div className="order-1 md:order-2 relative px-4 sm:px-0">
          {/* Main Hero Image - Ensured high clarity with no overlapping blurs */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-purple-600 to-yellow-400 rounded-[3rem] opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
            <div className="relative rounded-[2.5rem] border border-white/10 bg-slate-900 overflow-hidden shadow-2xl aspect-[3/4]">
               <img 
                 src="https://ik.imagekit.io/Doctoragi123/Gemini_Generated_Image_ma2mlmma2mlmma2m_014846.png?updatedAt=1768561409292" 
                 alt="Dr. Jordan Mugisha" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 style={{ imageRendering: 'auto' }}
               />
            </div>
            {/* Stat Badges */}
            <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-white/10 p-5 rounded-3xl shadow-2xl animate-bounce-subtle">
              <p className="text-3xl font-black text-yellow-400">100+</p>
              <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Lives Impacted</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-32 bg-slate-950/50 border-y border-white/5 relative">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/5 via-transparent to-transparent"></div>
      <div className="max-w-4xl mx-auto px-4 text-center relative">
        <h2 className="text-yellow-400 font-black mb-10 uppercase tracking-[0.3em] text-xs">A Commitment to Excellence</h2>
        <p className="text-2xl md:text-4xl font-light text-white leading-snug italic tracking-tight">
          "With over 100 patients treated for various heart conditions, Dr. Jordan Mugisha is dedicated to keeping your heart healthy. Trusted by patients across Tanzania for <span className="text-purple-400 font-semibold italic">compassionate and professional care</span>."
        </p>
        <div className="mt-16 flex justify-center gap-16 md:gap-32">
            <div>
              <p className="text-5xl font-black text-purple-500 tracking-tighter">5+</p>
              <p className="text-slate-500 text-[10px] uppercase font-black tracking-[0.2em] mt-3">Years Practice</p>
            </div>
            <div>
              <p className="text-5xl font-black text-purple-500 tracking-tighter">100+</p>
              <p className="text-slate-500 text-[10px] uppercase font-black tracking-[0.2em] mt-3">Patients Helped</p>
            </div>
        </div>
      </div>
    </section>
  </div>
);

const AboutView: React.FC = () => (
  <div className="animate-in fade-in slide-in-from-bottom-2 duration-700 pt-40 pb-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="relative rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl bg-slate-900 group">
            <img 
              src="https://ik.imagekit.io/Doctoragi123/1768560359537.jpg?updatedAt=1768561407755" 
              alt="Dr. Mugisha Professional Consultation" 
              className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
              style={{ imageRendering: 'auto' }}
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-yellow-400 p-8 rounded-[2rem] shadow-2xl text-black">
            <div className="flex items-center gap-2 mb-1">
              <Star fill="black" size={16}/>
              <Star fill="black" size={16}/>
              <Star fill="black" size={16}/>
              <Star fill="black" size={16}/>
              <Star fill="black" size={16}/>
            </div>
            <p className="text-sm font-black uppercase tracking-widest">Trusted Care</p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-yellow-400 font-black tracking-[0.2em] uppercase text-[10px] mb-6 flex items-center gap-2">
            <Award className="w-4 h-4" /> Physician Profile
          </h2>
          <h3 className="text-4xl md:text-6xl font-black mb-10 leading-[1.1] tracking-tighter">
            Dedicated to <br />
            <span className="text-purple-500">Your Heart's</span> Vitality
          </h3>
          <div className="space-y-8 text-slate-400 leading-relaxed text-lg font-medium">
            <p>
              Dr. Jordan Mugisha is a cardiologist based in Tanzania with 5 years of experience in diagnosing and treating heart-related conditions. He has helped over 100 patients improve their heart health, providing compassionate and professional care.
            </p>
            <p>
              Dr. Mugisha specializes in various cardiac treatments, ensuring every patient receives personalized attention. He believes in treating every patient like family and is committed to improving heart health across the community.
            </p>
            <div className="grid sm:grid-cols-2 gap-5 mt-10">
               {[
                 "Cardiac Diagnostics",
                 "Patient-First Care",
                 "5 Years Expert Clinical Exp.",
                 "100+ Cardiac Treatments"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all">
                   <div className="bg-purple-600/20 p-2 rounded-lg"><CheckCircle className="w-4 h-4 text-purple-400" /></div>
                   <span className="text-sm font-bold text-white tracking-tight">{item}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900/40 rounded-[4rem] p-12 md:p-24 border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="text-center mb-20 relative">
          <h4 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Patient Testimonials</h4>
          <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-16 relative">
          {[
            {
              name: "Amani S.",
              text: "Dr. Jordan is the best. He took time to explain my condition in simple Swahili and English. My heart health has improved significantly under his care over the last year."
            },
            {
              name: "Esther K.",
              text: "Professional, kind, and extremely knowledgeable. He treated me like family and ensured I was comfortable throughout the entire process. I highly recommend him."
            }
          ].map((test, i) => (
            <div key={i} className="relative group">
              <div className="flex gap-1 mb-6 text-yellow-400">
                <Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} />
              </div>
              <p className="text-2xl text-white font-light italic mb-8 leading-relaxed">"{test.text}"</p>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-1 bg-purple-600 rounded-full"></div>
                 <p className="font-black text-lg text-purple-400 uppercase tracking-widest">{test.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ServicesView: React.FC = () => (
  <div className="animate-in fade-in slide-in-from-bottom-2 duration-700 pt-40 pb-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-24">
        <h2 className="text-purple-500 font-black uppercase tracking-[0.3em] text-[10px] mb-6">Comprehensive Care</h2>
        <h3 className="text-5xl md:text-7xl font-black tracking-tighter">Cardiac <span className="text-yellow-400">Expertise</span></h3>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {[
          { 
            title: "Diagnostic and Treatment", 
            icon: <Activity />, 
            desc: "Care for common heart problems including hypertension, heart failure, rheumatic and ischemic heart disease." 
          },
          { 
            title: "Basic Investigations", 
            icon: <Stethoscope />, 
            desc: "ECG, echocardiography and clinical heart assessment for accurate diagnosis." 
          },
          { 
            title: "Prevention & Education", 
            icon: <CheckCircle />, 
            desc: "Blood pressure control, lifestyle counselling and education to prevent heart disease." 
          },
        ].map((s, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] hover:border-purple-500/50 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 rounded-full blur-3xl group-hover:bg-purple-600/10 transition-colors"></div>
            <div className="bg-black border border-white/5 p-5 rounded-2xl w-fit mb-10 text-purple-500 group-hover:text-yellow-400 transition-all transform group-hover:-translate-y-1">
              {React.cloneElement(s.icon as React.ReactElement<any>, { size: 40 })}
            </div>
            <h4 className="text-2xl font-black mb-6 tracking-tight leading-tight">{s.title}</h4>
            <p className="text-slate-400 leading-relaxed font-medium">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    setTimeout(() => {
      const phoneNumber = "255712345678";
      const text = `Habari Dr. Mugisha,\n\nInquiry from: ${formData.name}\nContact: ${formData.contact}\n\nMessage: ${formData.message}`;
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
      
      window.open(whatsappUrl, '_blank');
      setStatus('success');
      setFormData({ name: '', contact: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-700 pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-white">Contact Us</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            Take the first step towards better heart health. Connect with Dr. Mugisha's team directly today.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10 text-left">
            <h3 className="text-purple-500 font-black tracking-[0.3em] uppercase text-[10px] border-b border-white/10 pb-6 mb-10">Clinic Details</h3>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <a href="https://wa.me/255712345678" className="flex flex-col gap-6 group bg-white/5 p-8 rounded-[2.5rem] border border-white/5 hover:border-purple-500/40 transition-all">
                <div className="bg-purple-600 p-4 rounded-2xl text-white w-fit shadow-lg shadow-purple-600/20"><Phone size={24}/></div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">WhatsApp</p>
                  <p className="text-xl font-black text-yellow-400 tracking-tight">+255 712 345 678</p>
                </div>
              </a>
              <div className="flex flex-col gap-6 bg-white/5 p-8 rounded-[2.5rem] border border-white/5">
                <div className="bg-slate-800 p-4 rounded-2xl text-slate-300 w-fit"><Mail size={24}/></div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Email</p>
                  <p className="text-xl font-black tracking-tight">jordan@cardiologist.tz</p>
                </div>
              </div>
              <div className="flex flex-col gap-6 bg-white/5 p-8 rounded-[2.5rem] border border-white/5">
                <div className="bg-slate-800 p-4 rounded-2xl text-slate-300 w-fit"><MapPin size={24}/></div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl font-black tracking-tight">Dar es Salaam, TZ</p>
                </div>
              </div>
              <div className="flex flex-col gap-6 bg-white/5 p-8 rounded-[2.5rem] border border-white/5">
                <div className="bg-slate-800 p-4 rounded-2xl text-slate-300 w-fit"><Clock size={24}/></div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Working Hours</p>
                  <p className="text-xl font-black tracking-tight text-white">Mon-Sat 8AM-5PM</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-600/10 p-10 rounded-[2.5rem] border border-purple-500/20 mt-10">
              <h4 className="font-black text-xl mb-4 flex items-center gap-3"><CheckCircle size={24} className="text-yellow-400" /> Patient Info</h4>
              <p className="text-slate-300 leading-relaxed font-medium">
                Direct WhatsApp integration ensures your inquiry is received instantly. Please include your preferred date for a follow-up consultation.
              </p>
            </div>
          </div>

          <div className="bg-white/5 p-12 rounded-[4rem] border border-white/10 shadow-2xl relative">
            <div className="absolute -top-4 right-12 bg-yellow-400 text-black px-8 py-2.5 rounded-full font-black text-xs uppercase tracking-widest shadow-xl">
              Quick Inquiry
            </div>
            {status === 'success' ? (
              <div className="py-24 text-center animate-in zoom-in duration-500">
                <div className="bg-green-500/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/10">
                  <CheckCircle className="text-green-500 w-12 h-12" />
                </div>
                <h3 className="text-3xl font-black mb-4 tracking-tighter">Ready to send!</h3>
                <p className="text-slate-400 text-lg font-medium">Redirecting you to WhatsApp...</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-12 text-purple-400 hover:text-purple-300 font-black underline underline-offset-8"
                >
                  New inquiry
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-3xl font-black mb-12 tracking-tight">Direct Inquiry</h3>
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="space-y-3">
                    <label className="text-[10px] text-slate-500 uppercase tracking-widest font-black ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-black/40 border border-white/10 p-5 rounded-2xl focus:border-purple-500 outline-none transition-all font-bold placeholder:text-slate-700" 
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] text-slate-500 uppercase tracking-widest font-black ml-1">Contact Info</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-black/40 border border-white/10 p-5 rounded-2xl focus:border-purple-500 outline-none transition-all font-bold placeholder:text-slate-700" 
                      placeholder="Email or Phone"
                      value={formData.contact}
                      onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] text-slate-500 uppercase tracking-widest font-black ml-1">Message</label>
                    <textarea 
                      required
                      className="w-full bg-black/40 border border-white/10 p-5 rounded-2xl focus:border-purple-500 outline-none h-44 transition-all resize-none font-bold placeholder:text-slate-700" 
                      placeholder="Briefly describe your concerns..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button 
                    disabled={status === 'submitting'}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black py-6 rounded-3xl transition-all text-lg shadow-2xl shadow-yellow-400/20 active:scale-95 flex items-center justify-center gap-4 disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <><Loader2 className="animate-spin" /> Preparing...</>
                    ) : (
                      'Inquire via WhatsApp'
                    )}
                  </button>
                  <p className="text-center text-[9px] text-slate-600 uppercase tracking-widest font-black mt-6">
                    Professional Privacy Assured
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-600/40 flex flex-col antialiased overflow-x-hidden">
      <Navbar currentView={view} setView={setView} />
      
      <main className="flex-grow">
        {view === 'home' && <HomeView setView={setView} />}
        {view === 'about' && <AboutView />}
        {view === 'services' && <ServicesView />}
        {view === 'contact' && <ContactView />}
      </main>

      <footer className="bg-black py-24 border-t border-white/5 mt-auto relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-yellow-400 to-purple-600"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => { setView('home'); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
              <div className="bg-purple-600 p-2 rounded-xl group-hover:scale-110 transition-transform">
                <Heart className="w-5 h-5 text-yellow-400" fill="currentColor" />
              </div>
              <span className="text-xl font-black tracking-tighter">DR. JORDAN MUGISHA</span>
            </div>
            <div className="flex gap-10 text-[10px] text-slate-500 font-black uppercase tracking-widest">
              <button onClick={() => { setView('home'); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-yellow-400 transition-colors">Home</button>
              <button onClick={() => { setView('about'); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-yellow-400 transition-colors">About</button>
              <button onClick={() => { setView('contact'); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-yellow-400 transition-colors">Contact</button>
            </div>
            <p className="text-[10px] text-slate-600 font-black uppercase tracking-widest">
              © {new Date().getFullYear()} Cardiac Health Tanzania.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Mobile Sticky Button */}
      <button 
        onClick={() => { setView('contact'); window.scrollTo({top: 0, behavior: 'smooth'}); }}
        className="fixed bottom-8 right-8 z-40 bg-purple-600 p-5 rounded-2xl shadow-2xl hover:scale-110 transition-transform md:hidden active:scale-90"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </button>
    </div>
  );
};

export default App;
