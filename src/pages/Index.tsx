import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Heart, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import earthHero from '@/assets/earth-hero.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${earthHero})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Reboot <span className="text-accent">Earth</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join the global movement to restore our planet through sustainable solutions, 
            climate action, and environmental innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/solutions"
              className="bg-primary hover:bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/get-involved"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Reboot Earth is dedicated to accelerating the transition to a sustainable future 
            through innovative environmental solutions, community engagement, and global 
            collaboration. We believe that together, we can restore our planet's natural 
            balance and create a thriving world for future generations.
          </p>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Our Focus Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Globe className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Climate Action</h3>
              <p className="text-muted-foreground">
                Leading initiatives to reduce carbon emissions and combat climate change 
                through renewable energy and sustainable practices.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Conservation</h3>
              <p className="text-muted-foreground">
                Protecting biodiversity and natural ecosystems through conservation 
                efforts and sustainable resource management.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Users className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Community</h3>
              <p className="text-muted-foreground">
                Building a global community of environmental advocates and empowering 
                individuals to make a positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Every action counts. Join thousands of others in creating positive 
            environmental change and building a sustainable future.
          </p>
          <Link 
            to="/get-involved"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
