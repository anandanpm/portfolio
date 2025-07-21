
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroPortrait from '@/assest/hero-protrait.jpg'; 

function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-radial opacity-50" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse-soft" />

      <div className="container-max section-padding relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-foreground">Hi, I'm</span>
                <br />
                <span className="text-gradient">Ananda Krishnan</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                MERN Stack Developer
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              I build digital solutions with clean code and meaningful user experiences. Let’s create something impactful together.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gradient-primary hover:scale-105 transition-spring glow-orange font-semibold"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:bg-primary hover:text-primary-foreground transition-smooth border-primary/50"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {[
                { icon: Github, href: 'https://github.com/anandanpm', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/anandanpm', label: 'LinkedIn' },
                { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=ananda1732001@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-smooth hover-glow"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 gradient-primary rounded-2xl blur-xl opacity-30 animate-pulse-soft" />
              <img
                src={heroPortrait}
                alt="Ananda Krishnan Portrait"
                className="relative w-full h-auto rounded-2xl shadow-elegant border border-border/50 hover-lift"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToNext}
            className="p-2 rounded-full border border-primary/50 hover:bg-primary/10 transition-smooth"
            aria-label="Scroll to next section"
          >
            <ArrowDown size={20} className="text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
