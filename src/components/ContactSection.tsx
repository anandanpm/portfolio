import { Mail, Phone, MapPin, Github, Linkedin, Instagram, CheckCircle, AlertCircle, Icon, Facebook } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Label } from 'recharts';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ananda1732001@gmail.com',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=ananda1732001@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9061125616',
      href: 'tel:+919061125616'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kochi',
      href: 'https://www.google.com/maps/place/Brototype+Kochi/@9.9393366,76.3331753,15.07z/data=!4m6!3m5!1s0x3b0873e8b17e4e1f:0x631726fd9022096b!8m2!3d9.938035!4d76.3218113!16s%2Fg%2F11tnbhxjv2?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D'
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/anandanpm', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/anandanpm', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/', label: 'Instagram' },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 justify-center">
            {/* Contact Info & Additional Details */}
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Contact Information */}
              <Card className="p-6 bg-card border-border/50">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Get In Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted transition-smooth group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                        <info.icon size={20} className="text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-medium text-foreground break-all">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-6 bg-card border-border/50">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-smooth hover-glow"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </Card>

              {/* Availability */}
              <Card className="p-6 bg-card border-border/50">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Availability</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-green-500" />
                    <span className="text-foreground">Available for new projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-green-500" />
                    <span className="text-foreground">Typically responds within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <AlertCircle size={20} className="text-primary" />
                    <span className="text-foreground">Currently booking for Q2 2024</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;