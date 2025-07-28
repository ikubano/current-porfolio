import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';
import { projects } from '@/data/portfolio';

// Import project images
import ecommerceImg from '/public/images/ecommerce.png';
import taskappImg from '/public/images/view-tasks2x.png';
import weatherImg from '@/assets/project-weather.jpg';
import portfolioImg from '@/assets/project-portfolio.jpg';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Map project images
  const projectImages = {
    '/public/images/ecommerce.png': ecommerceImg,
    '/public/images/view-tasks2x.png': taskappImg,
    '/src/assets/project-weather.jpg': weatherImg,
    '/src/assets/project-portfolio.jpg': portfolioImg,
  };

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'featured', label: 'Featured' },
    { value: 'web', label: 'Web Apps' },
    { value: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : selectedCategory === 'featured'
    ? projects.filter(p => p.featured)
    : projects;

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">"Real Projects. Real Impact."</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A showcase of the applications, systems, and integrations I’ve built — blending creativity, performance, and problem-solving.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background sticky top-16 z-40 border-b">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.value)}
                  className="transition-all duration-300"
                >
                  <Filter size={16} className="mr-2" />
                  {category.label}
                </Button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 100}>
                <Card className="group overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={projectImages[project.image as keyof typeof projectImages]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        {project.demoUrl && (
                          <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                            <ExternalLink size={16} className="mr-2" />
                            Live Demo
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-black">
                            <Github size={16} className="mr-2" />
                            Code
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-3">
                      {project.demoUrl && (
                        <Button variant="default" size="sm" className="flex-1">
                          <ExternalLink size={14} className="mr-2" />
                          Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" className="flex-1">
                          <Github size={14} className="mr-2" />
                          Code
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">Interested in Working Together?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on innovative projects.
            </p>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Start a Project
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Projects;