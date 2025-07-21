import { useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag, MessageCircle, Share2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const BlogSection = () => {
  const [selectedTag, setSelectedTag] = useState('all');

  const tags = [
    { id: 'all', label: 'All Posts' },
    { id: 'react', label: 'React' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'design', label: 'Design' },
    { id: 'career', label: 'Career' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn how to structure large React applications using TypeScript, best practices for type safety, and advanced patterns for maintainable code.',
      content: 'In this comprehensive guide, we\'ll explore the essential patterns and practices for building scalable React applications...',
      publishDate: '2024-01-15',
      readTime: 8,
      tags: ['react', 'typescript'],
      featured: true,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop',
      comments: 24,
      shares: 142
    },
    {
      id: 2,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the emerging trends and technologies that are shaping the future of web development, from AI integration to edge computing.',
      content: 'The web development landscape is constantly evolving. Here are the key trends that will define 2024...',
      publishDate: '2024-01-10',
      readTime: 6,
      tags: ['career', 'trends'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=300&fit=crop',
      comments: 18,
      shares: 89
    },
    {
      id: 3,
      title: 'Designing with Accessibility in Mind: A Developer\'s Guide',
      excerpt: 'Practical tips and techniques for creating inclusive web experiences that work for everyone, regardless of their abilities.',
      content: 'Accessibility should be at the forefront of every developer\'s mind. Here\'s how to implement it effectively...',
      publishDate: '2024-01-05',
      readTime: 10,
      tags: ['design', 'accessibility'],
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=300&fit=crop',
      comments: 31,
      shares: 156
    },
    {
      id: 4,
      title: 'Optimizing React Performance: Beyond the Basics',
      excerpt: 'Advanced techniques for optimizing React applications, including code splitting, lazy loading, and performance monitoring.',
      content: 'Performance optimization is crucial for user experience. Let\'s dive into advanced React optimization techniques...',
      publishDate: '2023-12-28',
      readTime: 12,
      tags: ['react', 'performance'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=300&fit=crop',
      comments: 42,
      shares: 198
    },
    {
      id: 5,
      title: 'From Junior to Senior: My Journey in Tech',
      excerpt: 'Reflections on my career progression in tech, lessons learned, and advice for developers starting their journey.',
      content: 'Career progression in tech isn\'t always linear. Here\'s what I\'ve learned along the way...',
      publishDate: '2023-12-20',
      readTime: 7,
      tags: ['career', 'personal'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop',
      comments: 67,
      shares: 234
    },
    {
      id: 6,
      title: 'Building a Design System from Scratch',
      excerpt: 'Step-by-step guide to creating a comprehensive design system that scales across teams and products.',
      content: 'Design systems are essential for maintaining consistency. Here\'s how to build one that actually works...',
      publishDate: '2023-12-15',
      readTime: 15,
      tags: ['design', 'systems'],
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=300&fit=crop',
      comments: 38,
      shares: 167
    },
  ];

  const filteredPosts = selectedTag === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(selectedTag));

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Blog & Insights</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sharing my thoughts on web development, design trends, and lessons learned 
              throughout my journey in tech.
            </p>
          </div>

          {/* Tag Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {tags.map((tag) => (
              <Button
                key={tag.id}
                variant={selectedTag === tag.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(tag.id)}
                className={`transition-smooth ${
                  selectedTag === tag.id 
                    ? 'gradient-primary glow-orange' 
                    : 'hover:border-primary hover:text-primary'
                }`}
              >
                {tag.label}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          {featuredPost && selectedTag === 'all' && (
            <Card className="overflow-hidden border-border/50 hover:border-primary/50 transition-smooth hover-lift">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                  <Badge className="absolute top-4 left-4 gradient-primary">
                    Featured
                  </Badge>
                </div>
                <div className="p-8 flex flex-col justify-center space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          <Tag size={12} className="mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground leading-tight">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar size={14} />
                        <span>{formatDate(featuredPost.publishDate)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={14} />
                        <span>{featuredPost.readTime} min read</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <MessageCircle size={14} />
                          <span>{featuredPost.comments}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Share2 size={14} />
                          <span>{featuredPost.shares}</span>
                        </div>
                      </div>
                      
                      <Button variant="ghost" className="group hover:text-primary">
                        Read More
                        <ArrowRight size={16} className="ml-2 transition-smooth group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="group overflow-hidden border-border/50 hover:border-primary/50 transition-smooth hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Post Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>

                {/* Post Content */}
                <div className="p-6 space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Title & Excerpt */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{formatDate(post.publishDate)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={12} />
                        <span>{post.readTime}m</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <MessageCircle size={12} />
                        <span>{post.comments}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Share2 size={12} />
                        <span>{post.shares}</span>
                      </div>
                    </div>
                  </div>

                  {/* Read More */}
                  <Button variant="ghost" size="sm" className="w-full justify-between group/btn hover:text-primary">
                    Read Article
                    <ArrowRight size={14} className="transition-smooth group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <Card className="p-8 text-center bg-card border-border/50">
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Stay Updated</h3>
                <p className="text-muted-foreground">
                  Get the latest articles and insights delivered directly to your inbox. 
                  No spam, unsubscribe at any time.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                />
                <Button className="gradient-primary glow-orange">
                  Subscribe
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground">
                Join 1,000+ developers who trust our newsletter
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;