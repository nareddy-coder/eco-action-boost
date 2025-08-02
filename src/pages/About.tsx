import { Calendar, Target, Users, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">About Reboot Earth</h1>
          <p className="text-xl text-muted-foreground">
            Transforming the world through environmental innovation and collective action
          </p>
        </div>
      </section>

      {/* About Description */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Reboot Earth was founded with a simple yet powerful vision: to create a sustainable 
              future where humanity and nature thrive together. We are a global initiative that 
              brings together scientists, environmentalists, technologists, and concerned citizens 
              to address the most pressing environmental challenges of our time.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our platform serves as a catalyst for change, connecting individuals and organizations 
              who are passionate about environmental conservation. Through innovative solutions, 
              educational resources, and community engagement, we empower people to take meaningful 
              action in their daily lives and communities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What sets us apart is our holistic approach to environmental challenges. We don't 
              just identify problems – we create actionable solutions and provide the tools and 
              resources needed to implement them at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Goals */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Our Vision & Goals
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Target className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where every person has the knowledge, tools, and motivation to 
                contribute to environmental restoration. We envision thriving ecosystems, 
                clean air and water, renewable energy adoption, and sustainable communities 
                across the globe.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Globe className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Our Goals</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Reduce global carbon emissions by 50% by 2030</li>
                <li>• Plant 1 billion trees worldwide</li>
                <li>• Eliminate single-use plastics in 1000 communities</li>
                <li>• Educate 10 million people about sustainability</li>
                <li>• Support 100,000 renewable energy projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Our Journey & Timeline
          </h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">2024 - Launch Phase</h3>
                <p className="text-muted-foreground mt-2">
                  Platform launch, initial community building, and establishment of 
                  key partnerships with environmental organizations worldwide.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">2025 - Community Expansion</h3>
                <p className="text-muted-foreground mt-2">
                  Reach 1 million active users, launch mobile applications, and 
                  establish regional hubs in 50 countries.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">2026-2030 - Scale Impact</h3>
                <p className="text-muted-foreground mt-2">
                  Achieve major environmental milestones, expand to developing nations, 
                  and establish Reboot Earth as a leading global environmental platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-8">
            Our Impact Community
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Reboot Earth is powered by a diverse global community of environmental scientists, 
            sustainability experts, technology innovators, and passionate advocates from all 
            walks of life.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Environmental Scientists</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2">1M+</div>
              <div className="text-muted-foreground">Active Community Members</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Partner Organizations</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;