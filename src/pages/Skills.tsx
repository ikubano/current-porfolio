import { Code, Database, Settings, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import AnimatedSection from '@/components/AnimatedSection';
import { skills } from '@/data/portfolio';

const Skills = () => {
  const skillCategories = {
    frontend: { icon: Code, title: 'Frontend Development', color: 'text-blue-500' },
    backend: { icon: Database, title: 'Backend Development', color: 'text-green-500' },
    tools: { icon: Settings, title: 'Tools & Technologies', color: 'text-orange-500' },
    design: { icon: Palette, title: 'Design & UI/UX', color: 'text-purple-500' }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">My Skills</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Here's an overview of my technical skills and expertise across different 
                areas of web development and design.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {Object.entries(skillCategories).map(([category, config], index) => {
              const categorySkills = groupedSkills[category] || [];
              const avgLevel = categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length;
              
              return (
                <AnimatedSection key={category} delay={index * 100}>
                  <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <config.icon size={48} className={`mx-auto mb-4 ${config.color}`} />
                      <h3 className="text-lg font-semibold mb-2">{config.title}</h3>
                      <div className="text-3xl font-bold text-primary mb-2">{Math.round(avgLevel)}%</div>
                      <Progress value={avgLevel} className="h-2" />
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Detailed Skills */}
          <div className="space-y-12">
            {Object.entries(skillCategories).map(([category, config], categoryIndex) => {
              const categorySkills = groupedSkills[category] || [];
              
              return (
                <AnimatedSection key={category} delay={categoryIndex * 200}>
                  <Card className="shadow-elegant">
                    <CardHeader>
                      <CardTitle className="flex items-center text-2xl">
                        <config.icon size={28} className={`mr-3 ${config.color}`} />
                        {config.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {categorySkills.map((skill, skillIndex) => (
                          <AnimatedSection 
                            key={skill.name} 
                            delay={(categoryIndex * 200) + (skillIndex * 50)}
                          >
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="font-medium">{skill.name}</span>
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                              </div>
                              <Progress value={skill.level} className="h-2" />
                            </div>
                          </AnimatedSection>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications & Learning */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">Continuous Learning</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <AnimatedSection delay={100}>
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">React Certification</h3>
                  <p className="text-muted-foreground">Advanced React Patterns and Performance</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AWS Solutions Architect</h3>
                  <p className="text-muted-foreground">Cloud Architecture and DevOps</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palette size={24} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">UX Design Principles</h3>
                  <p className="text-muted-foreground">Human-Centered Design Approach</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;