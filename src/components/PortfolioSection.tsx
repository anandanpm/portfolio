import { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Code, Palette, Database, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
  ];

 const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform – LensLuxe',
    category: 'web',
    description:
      'Full-featured e-commerce platform with authentication, cart, Razorpay payments, and inventory management using EJS and Node.js.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: ['Node.js', 'Express.js', 'EJS', 'MongoDB', 'Razorpay','HTML','CSS'],
    github: 'https://github.com/anandanpm/project-ecommerce',
    live: 'https://lensluxe.onrender.com/',
    featured: true,
    metrics: {
      payments: 'Integrated',
      uptime: '99.9%',
    },
  },
  {
    id: 2,
    title: 'Doctor Consultation – CuraConnect',
    category: 'web',
    description:
      'Doctor consultation app with real-time video, chat, and appointment booking using Socket.io and ZegoCloud.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    technologies: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'Socket.io', 'ZegoCloud'],
    github: 'https://github.com/anandanpm',
    live: 'https://curaconnect-nine.vercel.app/',
    metrics: {
      calls: '100+',
      satisfaction: '4.9/5',
      realTime: 'Enabled',
    },
  },
  {
    id: 3,
    title: 'URL Shortener – Shortify',
    category: 'web',
    description:
      'Secure and scalable URL shortener using NanoID, JWT authentication, and MongoDB with TypeScript backend.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
    technologies: [
      'Node.js',
      'Express.js',
      'TypeScript',
      'MongoDB',
      'JWT',
      'NanoID',
      'React.js',
      'Redux',
    ],
    github: 'https://github.com/anandanpm',
    live: 'https://shortify-frontend-nu.vercel.app/',
    metrics: {
      security: 'JWT + bcrypt',
    },
  },
  {
    id: 4,
    title: 'Article Feeds App – Article Hub',
    category: 'web',
    description:
      'Article browsing and posting app with like/dislike, block, and full CRUD features. Uses Redux and JWT auth.',
    image: 'https://images.unsplash.com/photo-1609921141835-710b7fa6e438?w=600&h=400&fit=crop',
    technologies: [
      'React.js',
      'Redux',
      'SCSS',
      'MongoDB',
      'Node.js',
      'Express.js',
      'TypeScript',
      'JWT',
    ],
    github: 'https://github.com/anandanpm',
    live: 'https://article-hub-frontend.vercel.app/',
    metrics: {
  security: 'JWT + bcrypt',
    },
  },
];


  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // const testimonials = [
  //   {
  //     name: 'Sarah Johnson',
  //     role: 'CEO, TechStart',
  //     content: 'Alex delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and performance optimization was remarkable.',
  //     rating: 5
  //   },
  //   {
  //     name: 'Michael Chen',
  //     role: 'Product Manager, InnovateCorp',
  //     content: 'Working with Alex was a game-changer for our project. The mobile app they developed has become our flagship product.',
  //     rating: 5
  //   },
  //   {
  //     name: 'Emma Davis',
  //     role: 'CTO, StartupXYZ',
  //     content: 'Alex\'s expertise in both frontend and backend development made them the perfect choice for our complex requirements.',
  //     rating: 5
  //   },
  // ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-max">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work, highlighting the diverse range of technologies and 
              creative solutions I bring to every project.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`transition-smooth ${
                  selectedCategory === category.id 
                    ? 'gradient-primary glow-orange' 
                    : 'hover:border-primary hover:text-primary'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className={`group overflow-hidden border-border/50 hover:border-primary/50 transition-smooth hover-lift ${
                  project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                  
                  {/* Project Links */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-smooth">
                    <a
                      href={project.github}
                      className="p-2 bg-background/90 rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth"
                      aria-label="View source code"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 bg-background/90 rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  {project.featured && (
                    <Badge className="absolute top-4 left-4 gradient-primary">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm font-semibold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* View Details */}
                  {/* <Button variant="ghost" className="w-full justify-between group/btn hover:text-primary">
                    View Case Study
                    <ArrowRight size={16} className="transition-smooth group-hover/btn:translate-x-1" />
                  </Button> */}
                </div>
              </Card>
            ))}
          </div>

          {/* Client Testimonials */}
          {/* <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center text-foreground">Client Testimonials</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 bg-card border-border/50 hover-lift">
                  <div className="space-y-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-primary">★</span>
                      ))}
                    </div>
                    <p className="text-muted-foreground italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="space-y-1">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-primary">{testimonial.role}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div> */}

          {/* Technology Stack */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center text-foreground">Technology Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Code, name: 'Frontend', techs: ['React', 'HTML','Redux','TypeScript'] },
                { icon: Database, name: 'Backend', techs: ['Node.js','MongoDB','PostgreSQL'] },
                { icon: Palette, name: 'Design', techs: [,'CSS','SCSS', 'Tailwind'] },
                { icon: Zap, name: 'Tools', techs: [ 'AWS', 'Git','Vercel'] },
              ].map((category, index) => (
                <Card key={index} className="p-6 text-center bg-card border-border/50 hover:border-primary/50 transition-smooth">
                  <div className="space-y-4">
                    <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <category.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{category.name}</h4>
                      <div className="space-y-1 mt-2">
                        {category.techs.map((tech) => (
                          <div key={tech} className="text-sm text-muted-foreground">{tech}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;