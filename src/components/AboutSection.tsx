import { Code, Palette, Zap, Award, Calendar, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const skills = [
  { name: 'React', level: 90, icon: '⚛️' },
  { name: 'Redux', level: 85, icon: '🧠' },
  { name: 'Node.js', level: 88, icon: '🟢' },
  { name: 'Express.js', level: 87, icon: '🚀' },
  { name: 'WebSocket', level: 80, icon: '🌐' },
  { name: 'MongoDB', level: 78, icon: '🍃' },
];

  const timeline = [
    {
    year: ' DEC-2023',
    title: 'MERN Stack Bootcamp ',
    company: 'Brototype',
    description: 'Completed a hands-on MERN stack bootcamp, built real-world projects'
  },
    {
    year: ' MAY-2024',
    title: 'E-Commerce Platform – LensLuxe',
    description: 'Launched a full-stack e-commerce platform with authentication, cart, and Razorpay integration'
  },
    {
      year: 'DEC-2024',
      title: 'Doctor Consultation Platform – CuraConnect  ',
      description: 'Launched a full-stack online-consultation platfrom with chat ,vedio-call,stripe integration'
    },

    {
      year: 'MAR-2025',
      title: 'Article Feed Web App – ArticleHub',
      description: 'Launched a full-stack  platfrom with like, dislike, block, CURD features'
    },

    {
      year: 'APR-2025',
      title: 'URL shortner – Shortify',
      description: 'Launched a full-stack  platfrom with like, dislike, block, CURD features'
    },
    
  ];

 return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-max space-y-20">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate Node.js developer with hands-on experience building real-time applications,
            scalable APIs, and full-stack web platforms using modern tools like React, Redux, and WebSocket.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Story */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My journey began with curiosity — a deep interest in how the web works. Starting from the
                  basics of HTML and JavaScript, I gradually moved into full-stack development.
                </p>
                <p>
                  Over the last few years, I’ve built multiple projects from scratch — including an online
                  consultation platform (CuraConnect) and a complete e-commerce app (LensLuxe). These gave
                  me real-world experience working with technologies like Node.js, WebSocket, MongoDB, and
                  Redux.
                </p>
                <p>
                  I enjoy problem-solving, building intuitive UI/UX, and optimizing backend performance.
                  I’m also a strong believer in clean code, scalable architecture, and continuous learning.
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <Card className="p-6 bg-card border-border/50 hover-lift">
              <h4 className="text-lg font-semibold mb-3 text-primary">My Philosophy</h4>
              <p className="text-muted-foreground leading-relaxed">
                "Code should solve real problems, feel intuitive to users, and scale with growth. It's not
                just about features — it's about meaningful impact."
              </p>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-card rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-primary">1+</div>
                <div className="text-sm text-muted-foreground">Years Building Full-Stack</div>
              </div>
            </div>
          </div>

          {/* Skills and Values */}
          <div className="space-y-8">
            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Skills & Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-smooth glow-orange"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="grid gap-4">
              {[
                { icon: Code, title: 'Scalable Code', desc: 'Writing clean and reusable logic' },
                { icon: Palette, title: 'User-Centered', desc: 'Prioritizing good UX in every decision' },
                { icon: Zap, title: 'Performance First', desc: 'Focusing on speed and efficiency' },
              ].map((value, index) => (
                <Card
                  key={index}
                  className="p-4 bg-card border-border/50 hover:border-primary/50 transition-smooth"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <value.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-center text-foreground">Professional Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-border" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="p-6 bg-card border-border/50 hover-lift">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-primary font-semibold">
                          <Calendar size={16} />
                          <span>{item.year}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-primary">{item.company}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </Card>
                  </div>

                  <div className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-background glow-orange" />
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;