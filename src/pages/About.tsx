import { MapPin, Mail, Phone, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';
import { personalInfo } from '@/data/portfolio';
import MyImage from '@/assets/WhatsApp Image 2025-07-25 at 12.53.25.jpeg';


const About = () => {
  const experiences = [
    {
      company: "Gravity Solutions Limited",
      position: "Software Developer",
      period: "2023 - Present",
      description: "Designed and built responsive web applications using different frameworks like React. Participated in code reviews, testing, and continuous deployment pipelines."
    },
    {
      company: "Gravity Solutions Limited",
      position: "ERP Consultant",
      period: "2023 - Present",
      description: "Led end-to-end ERP implementations, customized modules to fit business needs, migrated legacy data, trained users, integrated third-party tools, and providing support to end-users. Specialized in Sage X3 and Odoo ERP systems."
    },
  ];

  const education = [
    {
      school: "Laikipia University",
      degree: "Bachelor of Science in Computer Science",
      period: "2020 - 2024",
      description: "Specialized in web technologies and software development. Studied core principles of computer science including software development, algorithms, data structures, databases, and systems architecture, with hands-on experience in real-world projects and teamwork."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">"The Mind Behind the Code."</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I'm a solution-driven tech enthusiast with a strong background in software development, ERP systems, AI, and full-stack development. 
                I love blending business logic with modern technologies to build impactful digital experiences.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Personal Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-4xl font-bold mb-6">Get to Know Me</h2>
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    Hello! I'm {personalInfo.name}, a full-stack developer based in {personalInfo.location}. 
                    My journey into programming started during my university years, and I've been 
                    passionate about creating digital experiences ever since.
                  </p>
                  <p>
                    I specialize in modern web technologies like React, TypeScript, and Node.js. 
                    I love the challenge of turning complex problems into simple, elegant solutions 
                    that users love to interact with.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing 
                    to open-source projects, or enjoying the beautiful outdoors of Nairobi.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin size={20} className="mr-3 text-primary" />
                    {personalInfo.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Mail size={20} className="mr-3 text-primary" />
                    {personalInfo.email}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Phone size={20} className="mr-3 text-primary" />
                    {personalInfo.phone}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar size={20} className="mr-3 text-primary" />
                    Available for new projects
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-accent p-1">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-6xl">
                      {/* Replace emoji with image */}
                     <img
                       src={MyImage}  // 👈 Replace with your actual image path
                       alt="Developer Icon"
                       className=""
                     />
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">Professional Experience</h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="mb-6 shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{exp.position}</h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <p className="text-primary font-semibold">{edu.school}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full mt-2 md:mt-0">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;