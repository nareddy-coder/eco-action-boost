import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionCard from '@/components/ui/SolutionCard';
import solarEnergy from '@/assets/solar-energy.jpg';
import treePlanting from '@/assets/tree-planting.jpg';
import zeroWaste from '@/assets/zero-waste.jpg';
import windEnergy from '@/assets/wind-energy.jpg';

const Solutions = () => {
  const solutions = [
    {
      title: "Solar Energy Adoption",
      description: "Transitioning to clean, renewable solar power to reduce carbon emissions and create sustainable energy systems for homes and businesses.",
      image: solarEnergy,
      alt: "Solar panels generating clean energy"
    },
    {
      title: "Reforestation Projects",
      description: "Planting trees and restoring forests to combat climate change, protect biodiversity, and create carbon sinks for a healthier planet.",
      image: treePlanting,
      alt: "People planting trees for reforestation"
    },
    {
      title: "Zero Waste Living",
      description: "Reducing single-use plastics and adopting sustainable consumption patterns to minimize environmental impact and waste generation.",
      image: zeroWaste,
      alt: "Eco-friendly reusable products and zero waste lifestyle"
    },
    {
      title: "Wind Energy Systems",
      description: "Harnessing wind power to generate clean electricity and reduce dependence on fossil fuels for a more sustainable energy future.",
      image: windEnergy,
      alt: "Wind turbines generating renewable energy"
    },
    {
      title: "Ocean Cleanup Initiatives",
      description: "Removing plastic pollution from oceans and preventing marine ecosystem damage through innovative cleanup technologies and prevention programs.",
      image: solarEnergy, // Placeholder - you could generate a specific ocean cleanup image
      alt: "Ocean cleanup technology removing plastic pollution"
    },
    {
      title: "Sustainable Agriculture",
      description: "Promoting organic farming practices, reducing pesticide use, and supporting local food systems to protect soil health and biodiversity.",
      image: treePlanting, // Placeholder - you could generate a specific agriculture image
      alt: "Sustainable farming practices and organic agriculture"
    },
    {
      title: "Green Transportation",
      description: "Encouraging electric vehicles, public transit, and cycling to reduce air pollution and carbon emissions from transportation.",
      image: windEnergy, // Placeholder - you could generate a specific transportation image
      alt: "Electric vehicles and sustainable transportation options"
    },
    {
      title: "Water Conservation",
      description: "Implementing water-saving technologies and practices to preserve freshwater resources and protect aquatic ecosystems.",
      image: zeroWaste, // Placeholder - you could generate a specific water conservation image
      alt: "Water conservation techniques and technologies"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">Environmental Solutions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover practical, scalable solutions that are making a real difference 
            in the fight against climate change and environmental degradation.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <SolutionCard
                key={index}
                title={solution.title}
                description={solution.description}
                image={solution.image}
                alt={solution.alt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Global Impact by the Numbers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">2.5M</div>
              <div className="text-muted-foreground">Trees Planted</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">850MW</div>
              <div className="text-muted-foreground">Solar Energy Generated</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">12K</div>
              <div className="text-muted-foreground">Tons of Plastic Removed</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">500K</div>
              <div className="text-muted-foreground">CO₂ Tons Offset</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Implement Solutions?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join our community and start making a difference today. Every solution 
            begins with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/get-involved"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Get Started
            </Link>
            <a 
              href="mailto:solutions@rebootearth.org"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;