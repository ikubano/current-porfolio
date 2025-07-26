import { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import AnimatedSection from '@/components/AnimatedSection';
import { personalInfo } from '@/data/portfolio';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/functions/v1/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast({
          title: "Failed to send message",
          description: result.error || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      color: 'text-blue-500'
    },
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      color: 'text-green-500',
      link: `mailto:${personalInfo.email}`
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      color: 'text-purple-500',
      link: `tel:${personalInfo.phone}`
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I'd love to hear from you! Whether you have a project in mind, 
                want to collaborate, or just say hello.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <AnimatedSection>
              <div>
                <h2 className="text-3xl font-bold mb-8">Let's Start a Conversation</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, creative projects, 
                  or potential collaborations. Feel free to reach out through any of 
                  the channels below.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <AnimatedSection key={index} delay={index * 100}>
                      <div className="flex items-center group">
                        <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                          <info.icon size={20} className={info.color} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-lg font-medium hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-lg font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>

                <AnimatedSection delay={400}>
                  <div className="mt-12 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-4">Quick Response</h3>
                    <p className="text-muted-foreground mb-4">
                      I typically respond to emails within 24 hours. For urgent matters, 
                      feel free to call me directly.
                    </p>
                    <div className="flex items-center text-green-600">
                      <CheckCircle size={16} className="mr-2" />
                      <span className="text-sm">Available for new projects</span>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={200}>
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-1"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-1"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-1 min-h-[120px]"
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={100}>
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">What's your typical project timeline?</h3>
                  <p className="text-muted-foreground">
                    Most projects take 2-8 weeks depending on complexity. I'll provide 
                    a detailed timeline after our initial consultation.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Do you work with remote teams?</h3>
                  <p className="text-muted-foreground">
                    Absolutely! I'm experienced in remote collaboration and use modern 
                    tools to ensure smooth communication and project delivery.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">What technologies do you specialize in?</h3>
                  <p className="text-muted-foreground">
                    I specialize in React, TypeScript, Node.js, and modern web technologies. 
                    Check out my Skills page for a complete overview.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Do you provide ongoing support?</h3>
                  <p className="text-muted-foreground">
                    Yes! I offer maintenance packages and ongoing support to keep 
                    your applications running smoothly and up-to-date.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;