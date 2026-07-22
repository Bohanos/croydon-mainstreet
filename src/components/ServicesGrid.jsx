export default function ServicesGrid({ onBookClick }) {
  const services = [
    { name: "Signature Cut", price: "$45" },
    { name: "Master's Beard Sculpt", price: "$30" },
    { name: "Hot Towel Shave", price: "$35" },
    { name: "Classic Fade", price: "$40" }
  ];

  return (
    <section id="services" className="bg-barber-black py-20 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <button 
            key={index} 
            onClick={onBookClick}
            className="w-full border border-barber-gold p-8 text-center hover:bg-barber-gold hover:text-barber-black transition-all group cursor-pointer"
          >
            <h3 className="font-heading text-barber-gold group-hover:text-barber-black text-xl mb-2">
              {service.name}
            </h3>
            <p className="text-white font-bold group-hover:text-barber-black text-lg">
              {service.price}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}