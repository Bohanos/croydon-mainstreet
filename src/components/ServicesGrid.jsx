export default function ServicesGrid() {
  const services = ["Signature Cut", "Master's Beard Sculpt", "Hot Towel Shave", "Classic Fade"];
  
  return (
    <section id="services" className="bg-barber-black py-20 px-8">
      <div className="grid md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="border border-barber-gold p-8 text-center hover:bg-barber-charcoal transition">
            <h3 className="font-heading text-barber-gold text-xl">{service}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}