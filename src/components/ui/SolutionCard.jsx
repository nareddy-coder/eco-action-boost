const SolutionCard = ({ title, description, image, alt }) => {
  return (
    <div className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-card-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        <div className="mt-4">
          <button className="text-primary font-medium hover:text-accent transition-colors">
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;